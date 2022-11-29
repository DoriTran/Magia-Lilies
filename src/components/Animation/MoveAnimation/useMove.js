import useScreenSize from "../useScreenSize"

import { useState } from "react"

import { easeExpOut, easeQuadIn } from "d3-ease";

const useMove = (variant) => {
    const screen = useScreenSize()

    const getAnimatePosition = () => {
        let tempPosition = {x: 0, y: 0}

        if (variant === undefined) return {x: 0, y: 0}

        if (variant.includes("left")) {
            tempPosition.x = -screen.width;
        }
        else if (variant.includes("right")) {
            tempPosition.x = screen.width * 2;
        }
        else {
            tempPosition.x = 0
        }

        if (variant.includes("top")) {
            tempPosition.y = -screen.height;
        }
        else if (variant.includes("bottom")) {
            tempPosition.y = screen.height * 2;
        }
        else {
            tempPosition.y = 0
        }
        
        return tempPosition
    }

    const anchorPosition = {x: 0, y: 0}
    const animatePosition = getAnimatePosition()

    const [control, setControl] = useState({position: animatePosition, ease: easeExpOut})

    return {
        control: control, 
        go: () => setControl({position: anchorPosition, ease: easeExpOut}), 
        back: () => setControl({position: animatePosition, ease: easeQuadIn})
    }
}

export default useMove