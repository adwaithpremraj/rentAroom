import axios from "axios"


export const commonApi = async (httpRequest,url,reqBody,reqHeader) => {
    const reqConfig={
        method:httpRequest,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
        //upload content
        // multipart/formdata
        // no upload content
        // application/json
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch(error =>{
        return error
    })}