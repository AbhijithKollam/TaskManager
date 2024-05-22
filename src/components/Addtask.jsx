import React, { useState } from 'react'
import { uploadTask } from '../services/allAPI';

function Addtask({setUploadTaskStatus}) {

  const [taskValue, setTaskValue] = useState({
    taskName: "",
    taskDescription: ""
  })
  console.log("=1=");
  console.log(taskValue);
  const handleAdd = async () => {
    const { taskName, taskDescription } = taskValue;
    if (!taskName || !taskDescription) {
      alert("Please fill the form completely")

    }
    else {
      console.log("task value ==", taskValue);
      const response = await uploadTask(taskValue);
      // console.log("response ====",response);
      alert("Successfully added the Task")
      setUploadTaskStatus(response.data)
      setTaskValue({
        taskName: "",
        taskDescription: ""
      })

    }
  }
  return (
    <>
      <div>
        <h3 className='text-center text-primary mt-5 mb-3'>Task Manager</h3>
        <div className='mt-3'>
          <input type="text" className='form-control border border-primary' placeholder='Enter Your Task' value={taskValue.taskName}
            onChange={(e) => setTaskValue({ ...taskValue, taskName: e.target.value })} />
        </div>
        <div className='mt-3'>
          <textarea className='form-control border-primary' id="w3review" placeholder='Description' name="w3review" rows="3" cols="30" value={taskValue.taskDescription}
            onChange={(e) => setTaskValue({ ...taskValue, taskDescription: e.target.value })} >
          </textarea>
        </div>
        <button className='mt-3 btn w-100 btn-primary' onClick={handleAdd}>Add Task</button>
      </div>

    </>
  )
}

export default Addtask