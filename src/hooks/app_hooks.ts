/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react"

export interface HooksExit{
    themes: boolean;
    clickTheme: () => void;
}

export const useHooksApp = (): HooksExit => {

    const { theme, setTheme } = useTheme()
    const [themes, setThemes] = useState(false);


    useEffect(() => {
        if(theme == 'dark'){
            setThemes(true);
        }else{
            setThemes(false);

        }
    }, [themes, theme])

    const clickTheme = useCallback(() => {
        if(themes == false){
            setThemes(true);
            setTheme('dark');
        }else{
            setThemes(false);
            setTheme('light');
        }
    }, [themes, theme])

    return{clickTheme,themes}
}