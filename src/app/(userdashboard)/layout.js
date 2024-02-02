import Link from "next/link";



const layout = ({children}) => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto">
            
  <div className=" flex-1 flex-col">
   
      
      <Link href={'/userdashboard/account'}>Account</Link>
    
    <a className="btn btn-ghost text-xl">Tradeswift dashboard</a>
 
  
  
    <Link href={'/'}>Home</Link>
    
  </div>
         
            <div className=" px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;