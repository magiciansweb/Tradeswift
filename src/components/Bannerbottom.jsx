import { FaRegCheckCircle } from "react-icons/fa";

const Bannerbottom = () => {
    return (
        <div className="  pt-2 pb-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10  ">
                <div className="pr-10">
                    <FaRegCheckCircle className="text-xl bg-green-600 rounded-full"></FaRegCheckCircle>
                    <h2 className="font-bold mb-2 mt-4">$10 000 demo account</h2>
                    <p>Test your investing approach with a free demo account</p>
                </div>
                <div className="pr-10">
                    <FaRegCheckCircle className="text-xl bg-green-600 rounded-full"></FaRegCheckCircle>
                    <h2 className="font-bold mb-2 mt-4">$10 minimum deposit</h2>
                    <p>No fees when you make a deposit or withdraw funds.</p>
                </div>
                <div className="pr-10">
                    <FaRegCheckCircle className="text-xl bg-green-600 rounded-full"></FaRegCheckCircle>
                    <h2 className="font-bold mb-2 mt-4">$1 minimum investment</h2>
                    <p>You may start with small amounts of money</p>
                </div>
            </div>
        </div>
    );
};

export default Bannerbottom;