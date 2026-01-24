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

const WrappedGlDyn = dynamic(
    async () => {
        try {
            const {default: Gl_} = await import('react-globe.gl')
            const {MeshBasicMaterial} = await import('three')

            const WrappedGl = ({
                                   forwardedRef,
                                   ...properties
                               }: WGlProperties<ExtractReferenceType<typeof Gl_>>) => (
                <Gl_ {...properties} ref={forwardedRef}/>
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
    line: '#c89501',
    active: '#CBA655',
    text: '#fff',
    transparent: '#151515',
}

interface GlobeRegionProps {
    activeRegion: number;
    activeCountries: string[];
}

// ✅ Region center coordinates for camera view (adjusted to center active regions)
const regionCenters: { [key: number]: { lat: number; lng: number; altitude: number } } = {
    0: { lat: 50, lng: 60, altitude: 1.5 },      // CIS Countries (show Russia/Kazakhstan centered)
    1: { lat: 50, lng: 10, altitude: 1.5 },      // Europe (show Europe centered)
    2: { lat: -15, lng: -60, altitude: 1.5 },    // South America (show South America centered)
    3: { lat: 30, lng: 45, altitude: 1.5 },      // Middle East (show Middle East centered)
    4: { lat: 30, lng: 100, altitude: 1.5 },     // Asia (show Asia centered)
    5: { lat: 20, lng: 0, altitude: 2.0 },       // International (global view)
}

const GlobeRegion = ({ activeRegion, activeCountries }: GlobeRegionProps) => {
    const reference = useRef<GlobeMethods>()
    const [activeCountriesSet, setActiveCountriesSet] = useState(new Set(activeCountries))
    const [globeMaterial, setGlobeMaterial] = useState<any>(null)

    // ✅ Load Three.js material dynamically
    useEffect(() => {
        const loadMaterial = async () => {
            try {
                const {MeshBasicMaterial} = await import('three')
                setGlobeMaterial(new MeshBasicMaterial({ color: color.globe }))
            } catch (error) {
                console.error('Failed to load Three.js:', error)
            }
        }
        loadMaterial()
    }, [])

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

                // Initial position - centered
                if (regionCenters[activeRegion]) {
                    reference.current.pointOfView(regionCenters[activeRegion])
                }
            },
        )
    }, [reference, activeRegion])

    return (
        <div className="w-full h-full flex items-center justify-center">
            {globeMaterial ? (
                <WrappedGlDyn
                    // @ts-ignore
                    height="100%"
                    width="100%"
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
                    polygonAltitude={(d) => {
                        //@ts-ignore
                        const countryCode = d.properties.ISO_A2
                        return activeCountriesSet.has(countryCode) ? 0.01 : 0.01
                    }}
                />
            ) : (
                <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-[#CBA655] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-manrope text-sm">Loading Globe...</p>
                </div>
            )}
        </div>
    )
}

export default GlobeRegion