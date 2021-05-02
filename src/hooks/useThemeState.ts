import { useEffect, useState } from "react";

export default function useThemeState(key: string, initialState: any) {

    // Verificará se há algum tema salvo na local storage //
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key)

        if (storage) {
            return JSON.parse(storage)
        } else {
            return initialState
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}