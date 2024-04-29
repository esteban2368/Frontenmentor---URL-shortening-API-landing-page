"use server"

import { ZodIssue } from "zod"
import { validatorForm } from "./validation"
import { stringify } from "querystring"

export const sendData = async (prevState: any, formData:FormData)=> {
    const dataUrl = formData.get("url") as string
    const validateForm = validatorForm(dataUrl)

    if(!validateForm.success){
        return{
            error: validateForm.error.flatten().fieldErrors
        } 
    }
    
    const responseShorten = await fetch(`${process.env.URL_API_SHORTEN}`,{
        method: 'POST',
        body: formData
    })
    
    const urlShorten = await responseShorten.json()
    
    return{
        data: {
            urlShorten,
            dataUrl
            
        }
    }
}