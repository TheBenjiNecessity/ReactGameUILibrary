import React, { ReactNode, useEffect } from "react";

const useChildrenOfTypeError = (
    children: ReactNode,
    type: string,
    parentType: string
) => {
    useEffect(() => {
        React.Children.forEach(children, (child: any) => {
            if (child?.type.name !== type) {
                throw new Error(
                    `Children of '${parentType}' should be of type '${type}'.`
                );
            }
        });
    }, [children, parentType, type]);
};

export default useChildrenOfTypeError;
