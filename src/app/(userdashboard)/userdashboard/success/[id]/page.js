import UseAdmin from "@/components/Hooks/UseAdmin";
import Swal from "sweetalert2";









const paymentSuccess = () => {
    const [userInfo]=UseAdmin();
//    console.log(params);
Swal.fire({
    position: "top-end",
    icon: "success",
    title: `${userInfo.name}'s payment successfull!`,
    showConfirmButton: false,
    timer: 1500
  });
    return (
      <div className="flex flex-col gap-8 lg:flex-row">
       <h2>success is comming</h2>
      
        </div>
    );
};

export default paymentSuccess;