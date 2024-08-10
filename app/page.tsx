import { Button } from "@/components/ui/button"
import { GlobeIcon,BrainCogIcon,EyeIcon,MonitorSmartphoneIcon, ServerCogIcon,ZapIcon } from "lucide-react";
import Link from "next/link"
import Image from "next/image"
import img from "../app/assets/image.png"

export default function Home() {


  const features = [
    {
      name : "Store you pdf documents",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : GlobeIcon
    },
    {
      name : "Blazing fast response",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : ZapIcon
    },    {
      name : "Chat memorization",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : BrainCogIcon
    },    {
      name : "Interactive pdf view",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : EyeIcon
    },    {
      name : "Cloud backup",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : ServerCogIcon
    },    {
      name : "Responsive accross devices",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa sunt atque.",
      icon : MonitorSmartphoneIcon
    },
  ]

  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-400">
     <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl"> 
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="text-indigo-400 capitalize">Your Interactive pdf viewer</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl capitalize">Transform your pdf in Interactive discussions</p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing{" "}
            <span className="font-bold text-indigo-400">Chat With PDF</span>
            <br/><br/>Upload your document and our chatbot will answer questions , summerize content and answer all your questions. Ideal for everyone{" "}
            <span className="font-bold text-indigo-400">Chat With PDF</span>{" "}
            turns static document into{" "}
            <span className="font-bold">Dynamic Conversations</span>,
            enhancing productivity 10x fold effortlessly
          </p>
        </div>
        <Button asChild className="mt-10">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
      
      <div className="relative overflow-hidden pt-16 flex justify-center">
        <div>
          <Image 
            alt="application screenshot"
            src={img}
            width={1000}
            height={1442}
            className="mb-3 rounded-2xl shadow-2xl ring-1 ring-gray-500 "
          />
        </div>
      </div>
     
      <div className="flex justify-center items-center mt-10">
        <dl className="mx-auto grid max-w-2xl grid-col-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-col-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((item)=>(
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <item.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-400"
                />
                {item.name}
              </dt>
              <dd>
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
     </div>
    </main>
  );
}
