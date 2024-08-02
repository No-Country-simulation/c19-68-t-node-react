'use client'
import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const [response, setResponse] = useState<any>()

    const getAll = (url:string) => {
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    } 

    const update = (url: string, data: any) => {
        axios.patch(url, data)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    return [response, getAll, update]

}

export default useFetch