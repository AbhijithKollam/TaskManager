import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteTask, getAllTask, getTaskDetailsById, updateTaskByID } from '../services/allAPI';

function Listtask({uploadTaskStatus}) {

  const [eachTaskValue, setEachTaskValue] = useState({
    taskName: "",
    taskDescription: ""
  })


  const [allTask, setAllTask] = useState([])
  const getAllTaskItem = async () => {
    const response = await getAllTask();
    const { data } = response;
    setAllTask(data);
  }
  useEffect(() => {
    getAllTaskItem()
  }, [uploadTaskStatus])
  console.log("All Task items");
  console.log(allTask);
  const removeTask = async (id) => {
    const response = await deleteTask(id);
    alert("Successfully deleted the Task item");
    getAllTaskItem();

  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTaskDetails = async (id) => {
    handleShow();
    const res = await getTaskDetailsById(id)
    const { data } = res;
    // console.log("=each task details");
    // console.log(data);
    setEachTaskValue(data)
  }

  const updateTask = async () => {
    handleClose();
    await updateTaskByID(eachTaskValue.id, eachTaskValue)
    alert("Task updated successfully")
    getAllTaskItem();


  }
  return (
    <>

      <div className='mt-5 table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          {
            allTask?.length > 0 ?
              allTask.map((item, index) => (




                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.taskName} </td>
                    <td>{item.taskDescription}</td>
                    <td >
                      <Button className='btn-sm-icon' onClick={() => getTaskDetails(item.id)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Button>
                      <Button className='ms-3 btn-sm-icon' onClick={() => removeTask(item.id)}>
                        <i class="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>

              )) :
              <p>No Tasks to Display</p>
          }
        </table>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='mt-3'>
            <input type="text" className='form-control border-primary' value={eachTaskValue.taskName}
              onChange={(e) => setEachTaskValue({ ...eachTaskValue, taskName: e.target.value })} />
          </div>
          <div className='mt-3'>
            <textarea className='form-control border-primary' id="w3review" name="w3review" rows="3" cols="30" value={eachTaskValue.taskDescription}
              onChange={(e) => setEachTaskValue({ ...eachTaskValue, taskDescription: e.target.value })} >
            </textarea>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Listtask