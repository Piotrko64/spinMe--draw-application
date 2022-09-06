import { useChangeTextValueSlice } from "../../../hooks/slices/useChangeTextValueSlice";
import { useFindSlice } from "../../../hooks/slices/useFindSlice";

export function TextInputChoice({ id, title }: { id: string; title: string }) {
    const findSlice = useFindSlice(id);
    const updateText = useChangeTextValueSlice(id);

    function handleChangeTitleValue(e: any) {
        console.log(e.target.value);
        updateText(e.target.value);
    }

    return (
        <>
            <input value={findSlice!.title} onChange={handleChangeTitleValue} />
        </>
    );
}
