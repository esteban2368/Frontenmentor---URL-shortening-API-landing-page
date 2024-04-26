import { ZodIssue, z } from "zod"

const shemaUrl = z.object({
    url: z.string()
    .trim()
      .min(1,{
        message:"Please add a link"
    }) 
    .url({
        message: "Invalid url"
    })
})

const validatorForm = (urlToValid:string | null)=> {
    const data = urlToValid
    const validUrl = shemaUrl.safeParse({
        url: data,
    })
    return validUrl
}
export {validatorForm}