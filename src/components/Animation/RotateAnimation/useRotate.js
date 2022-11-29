import { useState } from "react"

import { easeExpOut, easeQuadIn } from "d3-ease";

const useRotate = (variant) => {
    const getAnimateAngel = () => {
        if (variant === undefined) return { angel: 0 }

        if (variant.includes("left")) {
            return { angel: -parseInt(variant.substring(4, variant.length)) }
        }
        else if (variant.includes("right")) {
            return { angel: parseInt(variant.substring(5, variant.length)) }
        }
        else {
            return { angel: 0 }
        } 
    }

    const anchorAngel = {angel: 0}
    const animateAngel = getAnimateAngel()

    const [control, setControl] = useState({angel: animateAngel, ease: easeExpOut})

    return {
        control: control, 
        go: () => setControl({angel: anchorAngel, ease: easeExpOut}), 
        back: () => setControl({angel: animateAngel, ease: easeQuadIn})
    }
}

export default useRotate