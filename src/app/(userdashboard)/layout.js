import Link from "next/link";



const layout = ({children}) => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto">
            <div><div className=" bg-base-100">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <Link href={'/userdashboard/account'}>Account</Link>
    </div>
    <a className="btn btn-ghost text-xl">Tradeswift dashboard</a>
  </div>
  
  <div className="">
    <Link href={'/'}>Home</Link>
    
  </div>
</div></div>
         
            <div className=" px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;