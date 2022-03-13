import React from "react";

type ChapterProps = {
    children: any;
    duration: number;
};

const Chapter = ({ children }: ChapterProps) => {
    return <>{children}</>;
};

export default Chapter;
