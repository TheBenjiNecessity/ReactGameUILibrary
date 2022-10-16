import React, { useMemo, HTMLAttributes } from "react";

type ArrayViewProps = {
    index: number;
};

/**
 * A component that accepts an array of child views and displays the one at the given index
 * @param param0
 * @returns
 */
const ArrayView = ({
    index,
    children,
}: ArrayViewProps & HTMLAttributes<HTMLDivElement>) => {
    const childrenArray = useMemo(
        () => React.Children.toArray(children),
        [children]
    );

    const currentChild = useMemo(() => {
        if (index < 0 || index >= childrenArray.length) {
            return null;
        }

        return childrenArray[index];
    }, [childrenArray, index]);

    return <>{currentChild}</>;
};

export default ArrayView;
