"use client"

import Link from "next/link";

const SideBar = () => {
    return (
        <div>
           <Link>Acount</Link> 
           <Link>Profile</Link>
           <Link>Sign out</Link>
        </div>
    );
};

export default SideBar;