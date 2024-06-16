import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');


    function handleCHange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        } else {
            onAdd(enteredTask);
            setEnteredTask('');
        }

    }


    return <div className="flex items-center gap-4">
        <input onChange={handleCHange}
            type="text"
            value={enteredTask}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add task</button>
    </div>
}