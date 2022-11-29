import useScreenSize from "../useScreenSize"

import { useState } from "react"

import { easeExpOut, easeQuadIn } from "d3-ease";

const useSkew = (variant) => {
    const getAnimateSkew = () => {
        if (variant === undefined) return { xAngel: 0, yAngel: 0}

        if (variant.includes("vertical")) {
            console.log(parseInt(variant.substring(8, variant.length)))
            return { xAngel: 0, yAngel: parseInt(variant.substring(8, variant.length)) }
        }
        else if (variant.includes("horizontal")) {
            console.log(parseInt(variant.substring(10, variant.length)))
            return { xAngel: parseInt(variant.substring(10, variant.length)), yAngel: 0 }
        }
        else {
            return { xAngel: 0, yAngel: 0}
        }
    }

    const anchorSkew = {xAngel: 0, yAngel: 0}
    const animateSkew = getAnimateSkew()

    const [control, setControl] = useState({skew: animateSkew, ease: easeExpOut})

    return {
        control: control, 
        go: () => setControl({skew: anchorSkew, ease: easeExpOut}), 
        back: () => setControl({skew: animateSkew, ease: easeQuadIn})
    }
}

export default useSkew