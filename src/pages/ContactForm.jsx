import { useState } from "react"
import { Mail, PhoneCall, MapPinned } from 'lucide-react'

const ContactForm = (e) => {

    // const [FormData, setFormData] = useState();
    // e.preventDefault();


    return (
        <div className="flex justify-center gap-16 m-4">
            <div className="">
                <div>
                    <h1>Contact</h1>
                </div>
                <h1 className="text-4xl">
                    get in touch
                </h1>
                <section className="m-12 flex-col ">
                    <h1 className="border "><Mail size={18} />Email</h1>
                    <h1 className="border "><PhoneCall size={18} />call me</h1>
                    <h1 className="border "><MapPinned size={18} /> location</h1>
                </section>
            </div>
            <div>
                <form className="flex flex-col gap-3 border p-3 rounded-2xl" >
                    <input type="Name" placeholder="Enter your name" className="border bg-transparent p-2 rounded-2xl  " />
                    <input type="Email" placeholder="Enter your email" className="border bg-transparent p-2 rounded-2xl " />
                    <input type="text" placeholder="message" className="border bg-transparent p-2 rounded-2xl " />
                    <button className="border rounded-2xl" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;