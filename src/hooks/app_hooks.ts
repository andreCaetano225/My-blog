/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from "react"

export interface HooksExit{
    theme: boolean;
    clickTheme: () => void;
}

export const useHooksApp = (): HooksExit => {

    const [theme, setTheme] = useState(false);


    const clickTheme = useCallback(() => {
        if(theme == false){
            setTheme(true);
        }else{
            setTheme(false);
        }
    }, [theme])

    return{clickTheme,theme}
}