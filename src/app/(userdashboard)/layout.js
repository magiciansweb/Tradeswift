import Link from "next/link";



const layout = ({children}) => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row container mx-auto">
            
  <div className="flex flex-col max-w-34">
   
      
      <Link href={'/userdashboard/account'}>Account</Link>
    
    <a className="btn btn-ghost text-xl">Tradeswift dashboard</a>
 
  
  
    <Link href={'/'}>Home</Link>
    
  </div>
         
            <div className="flex-1 max-w-4xl px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;