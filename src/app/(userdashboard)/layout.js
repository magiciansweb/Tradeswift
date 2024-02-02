// import Sidebar from "@/components/Sidebar/Sidebar";


const layout = ({children}) => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto">
            <div>dashboard</div>
            {/* <div><Sidebar/></div> */}
            <div className="px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;