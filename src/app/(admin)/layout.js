// import Sidebar from "@/components/Sidebar/Sidebar";

import Link from "next/link";


const layout = ({children}) => {
    return (
        <div className="flex flex-col my-10  lg:flex-row container mx-auto">
           <div className=" w-36 block">
           <a className="btn btn-ghost text-xl">Tradeswift dashboard</a>
      
   <Link href={'/userdashboard/account'}>Account</Link>
 
 



 <Link href={'/'}>Home</Link>
 
</div>
            
            <div className="px-3 py-3 max-w-4xl flex-1">{children}</div>
        </div>
    );
};

export default layout;