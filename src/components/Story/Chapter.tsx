import React, { Fragment } from "react";

type ChapterProps = {
    children: any;
    duration: number;
};

const Chapter = ({ duration, children }: ChapterProps) => {
    return <Fragment>{children}</Fragment>;
};

export default Chapter;
