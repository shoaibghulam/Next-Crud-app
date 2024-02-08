import { httpAxios } from "@/helper/httpHelper"

export const addTaskData = async(task)=>{
    const result= await httpAxios.post("/api/tasks",task).then((res)=> res.data);
    return result;
}

