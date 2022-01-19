import React, { useState } from 'react';


const ToDo = props => {
    //create state variable to keep track of information submitted in form
    let [toDoName, setToDoName] = useState("");
    let [listOfToDos, setListOfToDos] = useState([])
    let [isDone, setIsDone] = useState(false)


    //will be used by and event listener 
    const createToDo = (e) => {
        //prevents reloading on form submission
        e.preventDefault();
        console.log("Form successfully submitted!")
        console.log(toDoName)
        let toDoObj = { toDoName, isDone }
        console.log(toDoObj)
        setListOfToDos([...listOfToDos, toDoObj])
    }

    //toggle checkllist item
    const toggleDone = (i)=>{
        console.log("toggle test for list number", i)
        //toggle completed and update the state 
        // create copy
        let [...copyOfListOfToDos] = listOfToDos;
        copyOfListOfToDos[i].isDone = !copyOfListOfToDos[i].isDone
        //set list to copy
        setListOfToDos(copyOfListOfToDos)
        console.log(listOfToDos)
    }

    const deleteTask = (iDelete) =>{
        //deletes task on the index number(i) passed from the onClick event
        const keepList = listOfToDos.filter((todo, i) => {
        return i !== iDelete;
        });
        setListOfToDos(keepList);
    };

    return (
        <div className='container'>
            <form onSubmit={createToDo}>
                <div className="form-group">
                    <label htmlFor="">Add new to do list item:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => setToDoName(e.target.value)} />
                    <br />
                    <input type="submit" value="Create to do list item" className='btn btn-primary' />
                </div>
            </form>
            <br />
            <div>
                <h2>To Do list:</h2>
                {

                    //iterates through list of todos
                    //runs on click event to strile line through when checked
                    listOfToDos.map((task, i) => {
                        return (
                            <div key={i} style={{textDecoration: task.isDone ? 'line-through' :'none'  }}>
                                <p><input type="checkbox" name="" id="" onClick={(e)=>toggleDone(i)}/>{task.toDoName}</p>
                                <button className="btn btn-danger btn-sm" onClick={(e)=>deleteTask(i)} >Delete</button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}
export default ToDo;