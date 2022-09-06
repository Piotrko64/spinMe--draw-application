import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { OneChoice } from "./OneChoice";
import classes from "./choicesList.module.css";

export function ChoicesList() {
    const listSlices = useCircleSettings((state: CircleSettings) => state.slices);
    const updateSlices = useCircleSettings((state: CircleSettings) => state.updateAllSlices);

    function updateCorrectArrayToStore(result: DropResult) {
        if (!result.destination) return;
        const cloneArray = Array.from(listSlices);
        const [chooseElement] = cloneArray.splice(result.source.index, 1);
        cloneArray.splice(result.destination.index, 0, chooseElement);

        updateSlices(cloneArray);
    }

    return (
        <div className={classes.list}>
            <DragDropContext onDragEnd={updateCorrectArrayToStore}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {listSlices.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={classes.drag}
                                        >
                                            <OneChoice title={item.title} id={item.id} color={item.color} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
