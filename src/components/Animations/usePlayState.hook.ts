import { useMemo } from "react";

const usePlayState = (play: boolean) => {
    return useMemo(() => {
        if (play) {
            return "running";
        } else {
            return "paused";
        }
    }, [play]);
};

export default usePlayState;
