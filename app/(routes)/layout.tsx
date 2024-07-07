import { Navbar } from "@/components/NavBar/Navbar";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

export default function LayoutDashboard({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex w-full h-full">
            <div className="hidden xl:block w-80 h-full xl:fixed">
                <Sidebar />
            </div>
            <div className="w-full xl:ml-80">
                <Navbar />
                <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
                    {children}
                </div>
            </div>
        </div>
    )
}