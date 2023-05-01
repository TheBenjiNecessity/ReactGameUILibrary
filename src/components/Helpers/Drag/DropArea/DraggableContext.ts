import { createContext } from "react";
import Rect from "../../../../lib/Geometry/Rect";
import Point from "../../../../lib/Geometry/Point";

export interface IDraggableContext {
    onDropItem: (droppableId: string, dropTargetId: string) => void;
    hits: (point: Point) => any[] | undefined;
    setDropTarget: (key: string, bounds: Rect) => void;
}

const DraggableContext = createContext<IDraggableContext | null>(null);

export default DraggableContext;
