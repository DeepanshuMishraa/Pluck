import { ThreeDCardDemo } from "./card"
import { Hcard } from "./Hcard"
import {Scard} from './Scard'
import Link from "next/link"
import { Suspense } from 'react'



const About = () => {
  return (
    <div className="font-extralight text-center">
        
        <h1 className="text-4xl mt-8 p-2 underline ">About</h1>
        <div className="py-4 text-xl space-y-4 px-2">
            <p>Welcome to Pluck - Your Ultimate Marketplace for Convenience and Quality!</p>

            <p>We understand the value of time and convenience in today's fast-paced world, which is why we've curated a platform where you can access groceries, foods from top restaurants, medicines from any medical shop, and fresh fruits from renowned vendors like Aangan Dhaba and Golden Dhaba Banaras Prasad, all delivered straight to your doorstep, anytime you need.</p>

            <h1 className="font-light text-2xl relative py-10">Join the Pluck community today and experience a new era of convenience and quality. Pluck it, and we'll deliver it - because your time is precious, and you deserve the best.</h1>
            <div>
                <Link href="https://forms.gle/8i2VEdygKbFHJsre6" className="bg-inherit border border-white  duration-200 hover:bg-gray-200 hover:text-gray-700 rounded-lg p-2">Feedback</Link>
            </div>
        </div>
        <div className=" text-4xl underline">
            <h1 className="font-mono mt-10">Meet The Team</h1>
            <div className="grid sm:grid-cols-2">
                <ThreeDCardDemo />
                <Hcard/>
                <Scard/>

            </div>
        </div>
        
    </div>
  )
}

export default About
