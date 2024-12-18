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
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-gray-800">
     <div className="bg-white flex justify-center items-center rounded-md drop-shadow-xl h-[100%]"> 
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl capitalize">Chat With PDF</p>

        </div>
        <Button asChild className="mt-10">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
     </div>
    </main>
  );
}
