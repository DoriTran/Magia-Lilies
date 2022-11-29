import { useState } from "react"

import { easeExpOut, easeQuadIn } from "d3-ease";

const useZoom = (initScale) => {
    const anchorScale = {scale: 1}
    const animateScale = {scale: initScale === undefined ? 1 : initScale}

    const [control, setControl] = useState({scale: animateScale, ease: easeExpOut})

    return {
        control: control, 
        go: () => setControl({scale: anchorScale, ease: easeExpOut}), 
        back: () => setControl({scale: animateScale, ease: easeQuadIn})
    }
}

export default useZoom