import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { Logo } from "../icons/Logo";
import { LogOutIcon } from "../icons/LogOutIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YTIcon } from "../icons/YTIcon";
import { Button } from "./Button";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="bg-white border-r w-72 fixed left-0 top-0 pl-6 flex flex-col space-between">
        <div className="">
            <div className="flex items-center text-2xl pt-6">
                <div className="pr-2 text-purple-600">
                    <Logo />
                </div>
                Second Brain
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="Youtube" icon={<YTIcon />} />
                <SidebarItem text="Document" icon={<DocumentIcon size="lg" />} />
                <SidebarItem text="Links" icon={<LinkIcon size="lg" />} />
                <SidebarItem text="Others" icon={<YTIcon />} />
            </div>
        </div>
        <div className="mt-72 flex flex-col items-center">
            <div className="w-full h-px bg-gray-400 opacity-75"></div>
            <div>
                <div>
                    <SidebarItem text="Settings" icon={<DocumentIcon size="lg" />} />
                </div>
                <div>
                    <Button variant="secondary" size="md" text="Log out" endIcon={<LogOutIcon size="md" />}  />
                </div>
            </div>
        </div>
    </div>
}