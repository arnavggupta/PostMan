import React from 'react'
import axios from 'axios'

import { headerandparam } from '../components/utils'
export   const ApiHandling=async(formData,param,header,bodyData)=> {
const apiheader= headerandparam(header);
const apiparam= headerandparam(param);
    try {
    return await axios ({
        method:formData.type.toLowerCase(),
        url:formData.url,
        data:bodyData,
headers:apiheader,
params:apiparam
    })

} catch (error) {
    console.log("Error While Calling API",error);
    return error;

} 


}
