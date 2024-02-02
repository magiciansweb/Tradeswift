


const layout = ({children}) => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto">
            
         <h2>userdashboard</h2>
            <div className="px-3 py-3">{children}</div>
        </div>
    );
};

export default layout;