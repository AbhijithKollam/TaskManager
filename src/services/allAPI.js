
import { commonAPI } from "./commonAPI";


const serverURL ='http://localhost:5000'
export const uploadTask = async (reqBody) => {
   return await commonAPI ('POST',`${serverURL}/tasklist`, reqBody)
}


export const getAllTask = async() =>{
   return await commonAPI('GET',`${serverURL}/tasklist`,"")
}


export const deleteTask = async(id)=>{
   return await commonAPI(`DELETE`,`${serverURL}/tasklist/${id}`,{})
}

// 4.to get details of a specific task by its id
export const getTaskDetailsById = async (id)=>{
    return await commonAPI('GET',`${serverURL}/tasklist/${id}`,"")
} 

export const updateTaskByID = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/tasklist/${id}`,body)

}