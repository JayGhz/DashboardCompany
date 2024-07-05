import { dataSupportSidebar, dataToolsSidebar, SidebarRoutesData } from "./SidebarRoutes.data";

export function SidebarRoutes() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p>GENERAL</p>
                    {SidebarRoutesData.map((item) => (
                        <p key={item.label}>{item.label}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}