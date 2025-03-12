import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YTIcon } from "../icons/YTIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex items-center text-2xl pt-6">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Second Brain
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YTIcon />} />
        </div>
    </div>
}