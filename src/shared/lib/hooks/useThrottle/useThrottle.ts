import { useCallback, useRef } from "react";

export function useThrottle (callback: (...arg: any[]) => void, delay: number) {
    const throttleRef = useRef(false)

    return useCallback((...arg: any[]) => {
        if (!throttleRef.current) {
            // eslint-disable-next-line n/no-callback-literal
            callback(...arg)
            throttleRef.current = true
            setTimeout(() => {
                throttleRef.current = false
            }, delay)
        }
    }, [callback, delay])
}