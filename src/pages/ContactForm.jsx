import { useState } from "react"
import { Mail, PhoneCall, MapPinned, CircleUser } from 'lucide-react'

const ContactForm = (e) => {

    // const [FormData, setFormData] = useState();
    // e.preventDefault();


    return (
        <div className="flex justify-center  text-white gap-16 m-4">
            <div className="">
                <div className="flex border rounded-2xl items-center px-5 gap-3 text-white">
                    <div className="rounded-full items-center justify-center flex border-2 ">
                        <CircleUser size={8} />
                    </div>
                    <div>
                        <h1>Contact</h1>
                    </div>
                </div>
                <h1 className="text-4xl">
                    get in touch
                </h1>




      { /*section */}
                <section className="m-12  flex-col ">
                    <div className="flex border mb-4 border-black">
                        <div className="border">
                            <Mail size={18} />
                        </div>
                        <div>
                            <h1 className=" ">Email</h1>
                            <p>armanpanjla@gmail.com</p>
                        </div>
                    </div>


                    <div className="flex border border-black mb-4">
                        <div className="border">
                            <PhoneCall size={18} />
                        </div>
                        <div>
                            <h1 className=" ">call me</h1>
                            <p>+91 70187-54773</p>

                        </div>
                    </div>

                    <div className="flex border border-black mb-4">
                        <div className="border">
                            <MapPinned size={18} />
                        </div>
                        <div>
                            <h1 className="] ">location</h1>
                            <p>Amritsar,punjab</p>

                        </div>
                    </div>

                </section>
            </div>


            <div>
                <form className="flex flex-col gap-3 border p-3 rounded-2xl " >
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