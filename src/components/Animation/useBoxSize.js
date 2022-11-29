import toPX from 'to-px'

const useBoxSize = (size) => {
    const boxSize = {width: toPX(size.width), height: toPX(size.height)}

    const from = (where, offset) => {
        switch (where) {
            case 'top': 
                return toPX(offset)
            case 'bot': 
                return boxSize.height - toPX(offset)
            case 'left': 
                return toPX(offset)
            case 'right':
                return boxSize.width - toPX(offset)
            default:
                return 0
        }
    }

    return [boxSize, from]
}

export default useBoxSize