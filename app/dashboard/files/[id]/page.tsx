import React from 'react'
import { adminDb } from '@/firebaseAdmin';
import {auth} from "@clerk/nextjs/server"
import PdfView from '@/components/PdfView';

const ChatToFilePage = async({params : {id}}:{
    params :{
        id : string;
    };
}) => {

  auth().protect();
  const {userId} = await auth();
  
  const ref = await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .get();

  const url = ref.data()?.downloadUrl;

  return (
    <div className='grid lg:grid-cols-5 h-full overflow-hidden'>
      // right side chat section
      <div className='cols-span-5 lg:col-span-2 overflow-auto'>
        <Chat id= {id} />
      </div> 
      // left side pdf viewer
      <PdfView url= {url} />
      <div className='col-span-5 lg:col-span-3 overflow-auto bg-gray-100 border-r-2 lg:border-indigo-300 lg:order-1'>

      </div>
    </div>  
  )
}

export default ChatToFilePage