import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleClick = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Succussfuly  !");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      toast.error("Error : " + err.message);
    }
  };
  return (
    <>
      <button
        type="submit"
        className="py-1 px-3 rounded-md bg-red-500 text-white hover:bg-red-700 duration-200"
        onClick={handleClick}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;

// import React from "react";
// import { useAuth } from "../context/AuthProvider";
// import toast from "react-hot-toast";

// function Logout() {
//   const [authUser, setAuthUser] = useAuth();
//   const handleLogout = () => {
//     try {
//       setAuthUser({
//         ...authUser,
//         user: null,
//       });
//       localStorage.removeItem("Users");
//       toast.success("Logout successfully");

//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       toast.error("Error: " + error);
//       setTimeout(() => {}, 2000);
//     }
//   };
//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Logout;
