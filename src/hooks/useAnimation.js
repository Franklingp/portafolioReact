import { useEffect, useState, useCallback } from 'react'

const useAnimation = (initialState) => {

    const [animation, setAnimation] = useState(`${initialState} animation-none`);

    //Handle animation
    const handleAnimation = useCallback(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setAnimation(`${initialState} animation-show`);
        }, 1);
    }, [initialState]);

    useEffect(() => {
        handleAnimation();
    }, [handleAnimation])

    return [animation]
}

export default useAnimation
