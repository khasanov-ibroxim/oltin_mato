'use client'

import dynamic from 'next/dynamic'
import {
    ComponentPropsWithRef,
    ElementType,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react'
import {GlobeMethods, GlobeProps} from 'react-globe.gl'
import {landTopo} from './polygon'

type ExtractReferenceType<T extends ElementType> =
    ComponentPropsWithRef<T>['ref'] extends MutableRefObject<infer U> | undefined
        ? U
        : T

type WGlProperties<T> = {
    forwardedRef: MutableRefObject<T>
} & GlobeProps

// ✅ Canvas options: low power, no antialias — reduces GPU pressure & context loss risk
const CANVAS_ATTRIBUTES = {
    antialias: false,
    powerPreference: 'low-power' as const,
    preserveDrawingBuffer: false,
    alpha: true,
}

const WrappedGlDyn = dynamic(
    async () => {
        try {
            const {default: Gl_} = await import('react-globe.gl')

            const WrappedGl = ({
                                   forwardedRef,
                                   ...properties
                               }: WGlProperties<ExtractReferenceType<typeof Gl_>>) => (
                <Gl_ {...properties} ref={forwardedRef} />
            )

            return WrappedGl
        } catch (error) {
            console.error('Failed to load globe:', error)
            return () => <div className="text-white text-center p-8">Failed to load globe</div>
        }
    },
    {
        ssr: false,
    },
)

const wait = async (cond: () => boolean, function_: () => void) => {
    if (cond()) {
        function_()
    } else {
        await new Promise((resolve) => setTimeout(resolve, 100))
        wait(cond, function_)
    }
}

const color = {
    globe: '#000',
    main: '#2a2a2a',
    sub: '#1a1a1a',
    line: '#44C0E3',
    active: '#932c4d',
    text: '#fff',
    transparent: '#151515',
}

interface GlobeRegionProps {
    activeRegion: number;
    activeCountries: string[];
}

const regionCenters: { [key: number]: { lat: number; lng: number; altitude: number } } = {
    0: {lat: 41.3775, lng: 64.5853, altitude: 1.8},  // Uzbekistan
    1: {lat: 61.524, lng: 105.3188, altitude: 1.3},   // Russia
    2: {lat: 53.7098, lng: 27.9534, altitude: 2.2},   // Belarus
    3: {lat: 41.2044, lng: 74.7661, altitude: 2.2},   // Kyrgyzstan
    4: {lat: 48.0196, lng: 66.9237, altitude: 1.8},   // Kazakhstan
}

// ✅ WebGL support check
function isWebGLSupported(): boolean {
    if (typeof window === 'undefined') return false
    try {
        const canvas = document.createElement('canvas')
        const ctx =
            canvas.getContext('webgl2', CANVAS_ATTRIBUTES) ||
            canvas.getContext('webgl', CANVAS_ATTRIBUTES)
        return !!ctx
    } catch {
        return false
    }
}

// ✅ Fallback UI — shows when WebGL is not available or context is lost
const GlobeFallback = () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#151515] rounded-3xl">
        <div className="w-24 h-24 rounded-full border-4 border-[#162C43] flex items-center justify-center mb-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#162C43" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
        </div>
        <p className="font-manrope text-white/70 text-sm text-center px-4">
            Globe is not available in your browser.<br/>
            Please try a different browser or device.
        </p>
    </div>
)

const GlobeRegion = ({activeRegion, activeCountries}: GlobeRegionProps) => {
    const reference = useRef<GlobeMethods>(null!)
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeCountriesSet, setActiveCountriesSet] = useState(new Set(activeCountries))
    const [globeMaterial, setGlobeMaterial] = useState<any>(null)
    const [dimensions, setDimensions] = useState({width: 800, height: 600})

    // ✅ WebGL availability state
    const [webglSupported, setWebglSupported] = useState<boolean | null>(null) // null = checking
    // ✅ Context lost state
    const [contextLost, setContextLost] = useState(false)

    // ✅ Check WebGL on mount (client-only)
    useEffect(() => {
        setWebglSupported(isWebGLSupported())
    }, [])

    // ✅ Listen for webglcontextlost / webglcontextrestored on the canvas
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const canvas = container.querySelector('canvas')
        if (!canvas) return

        const onLost = (e: Event) => {
            e.preventDefault() // prevent default destroy behaviour
            console.warn('WebGL context lost — showing fallback')
            setContextLost(true)
        }

        const onRestored = () => {
            console.info('WebGL context restored')
            setContextLost(false)
        }

        canvas.addEventListener('webglcontextlost', onLost)
        canvas.addEventListener('webglcontextrestored', onRestored)

        return () => {
            canvas.removeEventListener('webglcontextlost', onLost)
            canvas.removeEventListener('webglcontextrestored', onRestored)
        }
    }) // run every render so it catches the canvas after dynamic import resolves

    // ✅ Get container dimensions
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                })
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    // ✅ Load Three.js material dynamically
    useEffect(() => {
        if (webglSupported === false) return // skip if no WebGL

        const loadMaterial = async () => {
            try {
                const {MeshBasicMaterial} = await import('three')
                setGlobeMaterial(new MeshBasicMaterial({color: color.globe}))
            } catch (error) {
                console.error('Failed to load Three.js:', error)
            }
        }
        loadMaterial()
    }, [webglSupported])

    // ✅ Update active countries when props change
    useEffect(() => {
        setActiveCountriesSet(new Set(activeCountries))
    }, [activeCountries])

    // ✅ Move camera to region when activeRegion changes
    useEffect(() => {
        if (reference.current && regionCenters[activeRegion]) {
            reference.current.pointOfView(regionCenters[activeRegion], 1000)
        }
    }, [activeRegion])

    useEffect(() => {
        wait(
            () => !!reference.current,
            () => {
                if (!reference.current) return

                reference.current.controls().enableZoom = true
                reference.current.controls().enableRotate = true
                reference.current.controls().autoRotate = false
                reference.current.controls().minDistance = 150
                reference.current.controls().maxDistance = 500

                if (regionCenters[activeRegion]) {
                    reference.current.pointOfView(regionCenters[activeRegion])
                }
            },
        )
    }, [reference, activeRegion])

    // ─── RENDER GUARDS ──────────────────────────────────────────────

    // Still checking WebGL
    if (webglSupported === null) {
        return (
            <div ref={containerRef} className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-[#162C43] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-manrope text-sm">Loading Globe...</p>
                </div>
            </div>
        )
    }

    // WebGL not supported at all
    if (webglSupported === false) {
        return (
            <div ref={containerRef} className="w-full h-full">
                <GlobeFallback/>
            </div>
        )
    }

    // WebGL context was lost at runtime
    if (contextLost) {
        return (
            <div ref={containerRef} className="w-full h-full">
                <GlobeFallback/>
            </div>
        )
    }

    // ─── MAIN RENDER ────────────────────────────────────────────────
    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center">
            {globeMaterial ? (
                <WrappedGlDyn
                    height={dimensions.height}
                    width={dimensions.width}
                    forwardedRef={reference}
                    animateIn={false}
                    atmosphereColor="#444"
                    backgroundColor={color.transparent}
                    globeMaterial={globeMaterial}
                    polygonsData={landTopo.features}
                    polygonCapColor={(d) => {
                        //@ts-ignore
                        const countryCode = d.properties.ISO_A2
                        return activeCountriesSet.has(countryCode)
                            ? color.active
                            : color.main
                    }}
                    polygonSideColor={(d) => {
                        //@ts-ignore
                        const countryCode = d.properties.ISO_A2
                        return activeCountriesSet.has(countryCode)
                            ? color.active
                            : color.main
                    }}
                    polygonStrokeColor={() => color.line}
                    polygonAltitude={() => 0.01}
                />
            ) : (
                <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-[#162C43] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-manrope text-sm">Loading Globe...</p>
                </div>
            )}
        </div>
    )
}

export default GlobeRegion