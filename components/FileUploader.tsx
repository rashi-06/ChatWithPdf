"use client"

import {useCallback} from "react"
import { useDropzone } from "react-dropzone"
import { RocketIcon,CircleArrowDown ,CheckCircleIcon,HammerIcon,SaveIcon } from "lucide-react"

const FileUploader = () => {

   const onDrop = useCallback((acceptedFiles: File[]) => {
         // Do something with the files
         console.log(acceptedFiles);
   }, [])
   const {getRootProps, getInputProps, isDragActive , isFocused} = useDropzone({onDrop})
   
   return (
    <div className="flex flex-col gap-2 items-center">
        <div {...getRootProps()}
            className={` p-10 border-2 border-indigo-400 text-indigo-400 border-dashed mt-10 w-[90%] h-96  rounded-lg flex items-center justify-center ${isFocused || isDragActive ? "bg-indigo-300": "bg-indigo-100"}`}
            >
    
          <input {...getInputProps()} 
            className="flex flex-col justify-center"
          />

          <div className="flex flex-col justify-center items-center">
          {
            isDragActive ?(
                <>
                    <RocketIcon className="h-20 w-20 animate-ping"/>
                    <p>Drop the files here ...</p> 
                </>
              ):(
                <>
                    <CircleArrowDown className="h-20 w-20 animate-bounce"/>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </>
              )
          }
          </div>
    </div>
    </div>
  )
}

export default FileUploader