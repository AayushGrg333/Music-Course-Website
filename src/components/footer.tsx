import React from "react";

export const Footer:React.FC = function(){
    return (
        <div>
        <div className="h-auto p-12 bg-black flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">

            <div className=" flex flex-col h-auto  space-y-4  items-center">
                <h2 className="text-lg md:text-xl">About Us</h2>
                <p className="text-slate-400 text-sm md:text-md"> Music School is a premier institution dedicated to teaching the art
                and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.</p>
            </div>

            <div className=" space-y-4  flex flex-col items-center">
                <h2 className="text-lg md:text-xl">Quick Links</h2>
                <ul className="text-slate-400 text-sm md:text-md">
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="  space-y-4 flex flex-col items-center">
                <h2 className="text-lg md:text-xl">Follow Us</h2>
                <ul className="text-slate-400 text-sm md:text-md" >
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>

            <div className=" space-y-4  flex flex-col items-center">
                <h2 className="text-lg md:text-xl">Contact Us</h2>
                <ul className="text-slate-400 text-sm md:text-md">
                    <li>Kathmandu, Nepal</li>
                    <li>Kathmandu 44000</li>
                    <li>Email: aayushgrg@gmail.com</li>
                    <li>phone: (977) 456-7890 </li>
                </ul>
            </div>
            </div>
        </div>

        <div>
            <p className="text-center p-10">&#169;2024 Music School. All right reserved</p>
        </div>

        </div>
    )
}
