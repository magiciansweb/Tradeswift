import Link from 'next/link';
import React from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FaMoneyBillTransfer, FaPaypal } from 'react-icons/fa6';

const layout = ({children}) => {
    return (
        <div>
             <div className=" w-full  bg-[#353A4D]">
                <ul className="menu p-4 flex flex-row">
                  
                    <li><Link href={'/userdashboard/deposite'}><FaPaypal></FaPaypal> Transection</Link></li>
                      <li ><Link href={'/userdashboard'} ><BiMoneyWithdraw></BiMoneyWithdraw> Withdraw</Link></li>
                      <li><Link href={'/userdashboard/transection'}><FaMoneyBillTransfer></FaMoneyBillTransfer> Transection</Link></li>
                    
                    
                    
                  
                </ul>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default layout;