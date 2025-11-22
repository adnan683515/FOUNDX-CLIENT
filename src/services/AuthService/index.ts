
"use server"

import { TLogin } from "@/src/app/(withCommonLayout)/(auth)/login/page"
import { axiosInstance } from "@/src/lib/AxiosInstance"
import { TSignUP } from "@/src/TypeScript/Auth"


export const loginUser = async (data : TLogin )=>{
    try{
        const res = await axiosInstance.post('/auth/login')
        console.log(res)
        // return res
    }catch(err : any){
        console.log(err)
        throw new Error(err)
    }
}


export const RegisterService = async (data:TSignUP) =>{
    try{

        const res = await axiosInstance.post('/auth/register',data)


        return res?.data
    }
    catch(err : any){
        console.log(err)
        throw new Error(err)
    }
}