import { useState } from "react";
import Form from "../Form/Form";
import Ul from "../Ul/Ul";

export default function Main() {


    const [taskList, setTaskList] = useState([])

    function addTask(task) {

        setTaskList([...taskList, task]);
    }

    function deleteTask(index) {

        console.log("delete....", index)


        const newList = [...taskList];
        newList.splice(index, 1);
        setTaskList(newList);

        //setTaskList(taskList.splice(index, 1))
    }

    return (
        <>

            <Form AddTask={addTask} />
            <Ul taskList={taskList} deleteTask={deleteTask} />

        </>
    )
}