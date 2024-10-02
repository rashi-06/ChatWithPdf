import { Pinecone } from '@pinecone-database/pinecone';
import { error } from 'console';

if(!process.env.PINECONE_KEY){
    throw new Error("Pinecone key is not present");
}

const PineconeClient = new Pinecone({
  apiKey: process.env.PINECONE_KEY, 
});

export default PineconeClient