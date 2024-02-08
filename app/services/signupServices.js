const { httpAxios } = require("@/helper/httpHelper")

export const addUser = async(user)=>{
    const result = await httpAxios.post('/api/users',user).then((res)=> res.data);
    return result;
}