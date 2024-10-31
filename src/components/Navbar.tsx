"use client";
import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
} from "@/components/UI/navbar-menu";
import { cn } from "@/Utils/cn";
import Link from "next/link";

const Navbar: React.FC = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        > 
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Home"
                    ></MenuItem>
                </Link>

                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Our Courses"
                    >
                        <div className="flex flex-col space-y-3 text-sm">
                            <HoveredLink href="/courses">
                                Basic Music Theory
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                Advanced Composition
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                Song Writing
                            </HoveredLink>
                            <HoveredLink href="/courses">
                                Music Production
                            </HoveredLink>
                        </div>
                    </MenuItem>

                <Link href={"/contactus"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="About Us"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;
