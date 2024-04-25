"use server"
export const sendData = async (formData:FormData)=> {
    const data = formData.get("query")
    console.log(`Do you want to shorten this link, right? ${data}`)
}