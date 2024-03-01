import { TfiCup } from "react-icons/tfi";
import { RiEqualizerFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsChatRightText } from "react-icons/bs";
const Whyinvest = () => {
    return (
        <div className=" bg-gray-900 text-white">
            <div className="container text-white mx-auto">
            <h2 className="text-3xl text-center font-bold py-10">Why invest with TradeSwift?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className=" text-start p-4">
                    <TfiCup className=" text-green-500 text-4xl"></TfiCup>
                    <h2 className="font-bold text-2xl my-3">Award-winning platform</h2>
                    <p>Award-winning software recognized and praised by the most respected experts of the industry.</p>
                </div>
                <div className=" text-start p-4">
                    <RiEqualizerFill className="text-green-500 text-4xl"></RiEqualizerFill>
                    
                    <h2 className="font-bold text-2xl my-3">Customizable interface</h2>
                    <p>Customize the platform to make it fit better to your needs — from chart type to color theme.</p>
                </div>
                <div className=" text-start p-4">
                    <BiMoneyWithdraw className="text-green-500 text-4xl"></BiMoneyWithdraw>
                    <h2 className="font-bold text-2xl my-3">Convenient withdrawals</h2>
                    <p>Withdraw your money in an instant using a wide range of available payment systems.</p>
                </div>
                <div className=" text-start p-4">
                    <BsChatRightText className="text-green-500 text-4xl"></BsChatRightText>
                    <h2 className="font-bold text-2xl my-3">Support 24/7</h2>
                    <p>A team of professionals always here to support you.</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Whyinvest;