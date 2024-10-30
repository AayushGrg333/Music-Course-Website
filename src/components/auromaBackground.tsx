"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/UI/aurora-background";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4  px-4"
            >
                <div className="text-white py-12 pt-36  h-auto w-[600px] flex flex-col justify-center items-center">
                    <h1 className="text-center text-md md:text-4xl font-sans font-semibold mb-8">
                        Contact Us
                    </h1>

                    <p className="text-center mb-6 px-6">
                        We're here to help with any questions about our courses,
                        programs, or events. Reach out and let us know how we
                        can assist you in your musical journey.
                    </p>

                    <form className="w-full flex flex-col items-center space-y-4">
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-4/5 md:w-3/4 p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        {/* Message Input */}
                        <textarea
                            placeholder="Your Message"
                            className="w-4/5 md:w-3/4 h-32 p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
