"use client";
import coursedata from "../data/music_courses.json";
import React from "react";
import Link from "next/link";
import { BackgroundGradient } from "@/components/UI/background-gradient";

interface CourseStructure {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

const FeaturedCourses: React.FC = function () {
    const featuredCourses = coursedata.courses.filter(
        (course: CourseStructure) => course.isFeatured
    );
    return (
        <div className="py-12 bg-slate-950">
            <div>
                <div className="text-center">
                    <h2 className="text-xl text-teal-500">FEATURED COURSES</h2>
                    <p className="text-4xl mt-2 leading-8 font-bold text-white">
                        Learn from the Best{" "}
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                    gap-8 justify-center"
                >
                    {featuredCourses.map((course: CourseStructure) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p><br />
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow ">{course.description}</p><br />
                                    <Link className="text-blue-800" href={`/courses/${course.slug}`}>
                                    Learn More...</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link
                    href={"/courses"}
                    className="bg-blue-950 text-white text-lg  py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-slate-800 hover:shadow-xl"
                >
                    View All Courses
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCourses;
