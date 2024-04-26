"use server"

import { ZodIssue } from "zod"
import { validatorForm } from "./validation"
export const sendData = async (prevState: any, formData:FormData)=> {
    const data = formData.get("query") as string
    const validateForm = validatorForm(data)
    if(!validateForm.success){
        return{
            error: validateForm.error.flatten().fieldErrors
        } 
    }
    if(validateForm.success){
        return{
            data: validateForm.data
        }
    }

}