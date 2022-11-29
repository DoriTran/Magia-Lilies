import toPX from 'to-px'

const useScreenSize = () => {
    return {width: toPX("100vw"), height: toPX("100vh")}
}

export default useScreenSize