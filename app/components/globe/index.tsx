'use client'

import dynamic from 'next/dynamic'
import {
    ComponentPropsWithRef,
    ComponentType,
    ElementType,
    MutableRefObject,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from 'react'
import {GlobeMethods, GlobeProps} from 'react-globe.gl'
import {MeshBasicMaterial} from 'three'
import {countryCoordinates} from './coordinates'
import {landTopo} from './polygon'
import {useTranslation} from "react-i18next";

type ExtractReferenceType<T extends ElementType> =
    ComponentPropsWithRef<T>['ref'] extends MutableRefObject<infer U> | undefined
        ? U
        : T

type WGlProperties<T> = {
    forwardedRef: MutableRefObject<T>
} & GlobeProps

const WrappedGlDyn = dynamic(
    async () => {
        const {default: Gl_} = await import('react-globe.gl')

        const WrappedGl = ({
                               forwardedRef,
                               ...properties
                           }: WGlProperties<ExtractReferenceType<typeof Gl_>>) => (
            <Gl_ {...properties} ref={forwardedRef}/>
        )

        return WrappedGl
    },
    {
        ssr: false,
    },
)

const countries = new Set([
    'UZ',
    'DE',
    'KZ',
    'LV',
    'US',
    'EE',
    'ID',
    'GB',
    'JP',
    'BE',
    'FI',
    'FR',
    'ZA',
    'HR',
    'SI',
    'IT',
    'RU',
    'PK',
    'LT',
    'AE',
])

const countriesWithAlt = countryCoordinates.map((it) => ({
    alpha2: it.alpha2,
    lat: it.lat,
    lng: it.lng,
    altitude: 2.5,
}))

interface Properties {
}


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
    main: '#151515',
    sub: '#151515',
    line: '#c89501',
    active: '#ffbc00',
    text: '#000',
    transparent: '#151515',
}

const Globe: ComponentType<PropsWithChildren<Properties>> = () => {
    const reference = useRef<GlobeMethods>()
    const langStorage = window.localStorage.getItem('i18nextLng');
    const {t} = useTranslation()
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        let interval: 3000

        wait(
            () => !!reference.current,
            () => {
                if (!reference.current) return

                reference.current.controls().enableZoom = false
                reference.current.controls().enableRotate = false
                reference.current.pointOfView(countriesWithAlt[0])
                let index = 0

                setInterval(() => {
                    index = (index + 1) % countriesWithAlt.length
                    reference.current?.pointOfView(countriesWithAlt[index], 1000)
                    setSelected(index)
                }, 5000)
            },
        )

        const setS = () => setSize(wrapperReference.current!.clientWidth)

        setS()

        window.addEventListener('resize', setS)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', setS)
        }
    }, [reference])

    const [size, setSize] = useState(0)
    const wrapperReference = useRef<HTMLDivElement>(null)

    return (
        <div
            className={"glob_container"}
            ref={wrapperReference}
        >
            <div className="glob_text">
                <h1>{t("about.globe")}</h1>
            </div>
            <WrappedGlDyn
                // @ts-ignore
                htmlElement={(properties: { text: string; active: boolean }) => {
                    const element = document.createElement('div')
                    element.innerHTML = properties.text
                    element.style.color = color.text
                    element.className = (properties.active ? "glob_element" : "opacity-0")
                    return element
                }}
                htmlElementsData={countryCoordinates.map(
                    ({lat, lng, text}, index) => ({
                        lat: lat - 5,
                        lng: lng + 15,
                        text: langStorage === "ru" || langStorage === "ru-RU" ? text.ru : text.en,
                        active: selected === index,
                    }),
                )}
                labelSize={3}
                labelAltitude={0.05}
                labelIncludeDot={false}
                labelColor={(d) =>
                    //@ts-ignore
                    d.alpha2 === countryCoordinates[selected].alpha2
                        ? color.text
                        : color.transparent
                }
                labelResolution={2}
                height={"100%"}
                width={"100%"}
                forwardedRef={reference}
                animateIn={false}

                atmosphereColor="#bbb"
                backgroundColor={color.transparent}
                globeMaterial={
                    new MeshBasicMaterial({
                        color: color.globe,
                    })
                }
                polygonsData={landTopo.features}
                polygonCapColor={(d) =>
                    //@ts-ignore
                    d.properties.ISO_A2 === countryCoordinates[selected]?.alpha2
                        ? color.active
                        : //@ts-ignore
                        countries.has(d.properties.ISO_A2)
                            ? color.main
                            : color.sub
                }
                polygonSideColor={(d) =>
                    //@ts-ignore
                    d.properties.ISO_A2 === countryCoordinates[selected]?.alpha2
                        ? color.active
                        : //@ts-ignore
                        countries.has(d.properties.ISO_A2)
                            ? color.main
                            : color.sub
                }
                polygonStrokeColor={(d) =>
                    //@ts-ignore
                    countries.has(d.properties.ISO_A2) ? color.sub : color.line
                }
                polygonAltitude={(d) =>
                    //@ts-ignore
                    d.properties.ISO_A2 === countryCoordinates[selected]?.alpha2
                        ? 0.04
                        : //@ts-ignore
                        countries.has(d.properties.ISO_A2)
                            ? 0.02
                            : 0.01
                }
            />
        </div>
    )
}

export default Globe