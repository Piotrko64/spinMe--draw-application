import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import classes from "./choicesList.module.css";

export function ChoicesList() {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    return (
        <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {listSlices.map((item, index) => (
                            <Draggable key={item.color} draggableId={item.color} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {item.color}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
