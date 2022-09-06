import { CircleSettings } from "../../../@types/CircleSettings";
import { useCircleSettings } from "../../store/useCircleSettings";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { OneChoice } from "./OneChoice";

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
        <DragDropContext onDragEnd={updateCorrectArrayToStore}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {listSlices.map((item, index) => (
                            <Draggable key={item.color} draggableId={item.color} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <OneChoice title={item.title} id={item.id} />
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
