import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};
const SidebarPage = ({children, title}: Props) => {
return (
    <div className="flex flex-row w-full">
       <div className="w-60 bg-blue-800 flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/Profile">Profile</Link>
       </div>
       <div className="w-full bg-gray-300 p-4">
        <h1 className="text-3xl font-bold text-center">
            {title}</h1>
            {children}
       </div>
    </div>
)
}
export default SidebarPage