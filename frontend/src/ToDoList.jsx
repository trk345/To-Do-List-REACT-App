import React, {useState} from "react"


function ToDoList(){
    const [tasks, setTasks] = useState([]);

    function handleAddTask(){
        const task = document.getElementById("inputtask").value /*get the value in the input box*/
        if (task!==""){
            document.getElementById("inputtask").value = ""
            setTasks([...tasks,task]) 
            /*... is spread operator, if only [tasks] is used,
            the previous list would be erased and the new list would just contain the value in task.
            [...tasks,task] is basically like appending in a list*/
        }
    }
    function handleDeleteTask(index){/*event param is provided by the onChange event handler, so need to 
        to pass as argument in onChange*/
        const newTasks = tasks.filter((_,i)=>i!==index)
                 
        setTasks(newTasks)
        /*The filter method takes uses a function as an argument, where
        an element of the list and the element's index are sent to
        the function. Here, for simplicity, arrow function has been
        used. The filter fucntion iterates through each element of the
        and if the element's index(here 'i') matches with the index
        to be removed, that element is omitted from the new list.
        Since the element argument has no use here, it is represeneted
        as '_' as a convention*/

    }

    function handleMoveUpTask(index){
        if (index>0){
            const updatedTasks = [...tasks];//copying tasks into updated tasks
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveDownTask(index){
        if(index<(tasks.length)-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
            <div>
                <h1>To-Do-List</h1>  
                <br></br>
                <div className="tasks-container">
                    <input id="inputtask" type="text" className="task-input" placeholder="Enter a task" />
                    <button className="add-button" onClick={handleAddTask}>➕</button>
                    <ul>
                        {tasks.map((task,index)=>
                        <li key={index}>
                            <span className="task-element">{task}</span>
                            <button className="delete-button" onClick={()=>handleDeleteTask(index)}>🗑️</button>
                            <button className="move-button" onClick={()=>handleMoveUpTask(index)}>👆</button>
                            <button className="move-button" onClick={()=>handleMoveDownTask(index)}>👇</button>
                        </li>)} 

                    </ul>
                </div>
                {/* <button onClick={handleDeleteTasks}>Delete</button> */}
                
            </div>
        </>
    );
}

export default ToDoList