import Link from "next/link";



const layout = ({children}) => {
    return (
        <div className="flex flex-col my-10 gap-10 lg:flex-row container mx-auto">
            
  <div className="flex flex-col max-w-34 bg-base-300">
   
  <a className="btn btn-ghost text-xl">Tradeswift dashboard</a>
      <Link href={'/userdashboard/account'}><button className="btn btn-ghost text-xl">Account</button></Link>
    
   
 
  
  
    <Link href={'/'}><button className="btn btn-ghost text-xl">Home</button></Link>
    <button className="btn btn-ghost text-xl">Sign out</button>
    
  </div>
         
            <div className="flex-1 max-w-4xl px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;