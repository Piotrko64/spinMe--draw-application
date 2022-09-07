import { CircleSettings } from "../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { OneChoice } from "./OneChoice";
import classes from "./choicesList.module.css";

export function ChoicesList() {
    const { slices, updateAllSlices } = useCircleSettings((state: CircleSettings) => state);

    function updateCorrectArrayToStore(result: DropResult) {
        if (!result.destination) return;
        const cloneArray = Array.from(slices);
        const [chooseElement] = cloneArray.splice(result.source.index, 1);
        cloneArray.splice(result.destination.index, 0, chooseElement);

        updateAllSlices(cloneArray);
    }

    return (
        <div className={classes.list}>
            <DragDropContext onDragEnd={updateCorrectArrayToStore}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {slices.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={classes.drag}
                                        >
                                            <OneChoice id={item.id} color={item.color} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <>{provided.placeholder}</>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
