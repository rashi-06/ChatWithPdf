"use client"

import {useCallback, useEffect} from "react"
import useUpload , { StatusText } from "@/hooks/useUpload"
import { useDropzone } from "react-dropzone"
import { RocketIcon,CircleArrowDown ,CheckCircleIcon,HammerIcon,SaveIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const FileUploader = () => {

    // customhook
    
   const {progress , status, fileId, handleUpload} = useUpload(); 
   const router = useRouter();


   useEffect(()=>{
      if(fileId){
        router.push(`/dashboard/files/${fileId}`);
      }    
   },[fileId])

   const onDrop = useCallback(async (acceptedFiles: File[]) => {
         // Do something with the files 
         const files = acceptedFiles[0];
         if(files){
            await handleUpload(files)
         }
         else{
          // do nothing
          // toast
         }
         console.log(acceptedFiles);

   }, [])
   const {getRootProps, getInputProps, isDragActive , isFocused} = 
   useDropzone({
      onDrop,
      accept : {
        "application/pdf" : [".pdf"],
      },
  });

    const statusIcons: {
    [key in StatusText]: JSX.Element;
  } = {
    [StatusText.UPLOADING]: (
      <RocketIcon className="h-20 w-20 text-indigo-400" />
    ),
    [StatusText.UPLOADED]: (
      <CheckCircleIcon className="h-20 w-20 text-indigo-400" />
    ),
    [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-indigo-400" />,
    [StatusText.GENERATING]: (
      <HammerIcon className="h-20 w-20 text-indigo-400 animate-bounce" />
    ),
  };

  const uploadInProgress = progress!= null && progress >= 0 && progress <= 100;

   
   return (
    <div className="flex flex-col gap-2 items-center">
        {uploadInProgress &&
          <div className="mt-10 flex flex-col justify-center items-center gap-5">
            <div className={`radial-progress bg-indigo-200 text-white border-indigo-400 border-4 ${progress === 100 && "hidden"}`}
              role="progressbar"
              style={{
                // @ts-ignore 
                "--value" : progress,
                "--size" : "12rem",
                "--thickness" : "1.3rem",
              }}
            >
              {progress}
            </div>
            {/* <span className="loading loading-dots loading-xs"></span> */}
            {/* Render Status Icon */}
            {
              // @ts-ignore
              statusIcons[status!]
            }

            {/* @ts-ignore */}
            <p className="text-indigo-600 animate-pulse">{status}</p>
          </div>

        }

        {!uploadInProgress && (<div {...getRootProps()}
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
    </div>)}
    </div>
  )
}

export default FileUploader