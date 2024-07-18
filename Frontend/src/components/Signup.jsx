import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../../public/style.css"; // Ensure this path is correct
import Login from "./Login";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    toast.promise(
      axios.post("http://localhost:4001/user/signup", userInfo),
      {
        loading: "Signing up...",
        success: (res) => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          return "SignUp Successful!";
        },
        error: (err) => err.response?.data.message || "SignUp Failed!",
      },
      {
        className: "custom-toast",
      }
    );
  };

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     fullname: data.fullname,
  //     email: data.email,
  //     password: data.password,
  //   };
  //   console.log(userInfo);
  //   await axios
  //     .post("http://localhost:4001/user/signup", userInfo)
  //     .then((res) => {
  //       if (res.data) {
  //         // alert(res.data.message);
  //         toast.success("SignUp Successful!");
  //         console.log(res.data);
  //       }
  //       localStorage.setItem("Users", JSON.stringify(res.data.user));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       if (err.response) {
  //         console.log(err.response.data.message);
  //         // alert(err.response.data.message);
  //         toast.error(err.response.data.message);
  //       }
  //     });
  // };
  //it work properly but above is adding the waiting functionality

  return (
    <>
      <dialog
        className="flex h-screen items-center justify-center"
        style={{ zIndex: 1500 }}
      >
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4">
                <label htmlFor="name" className="cursor-pointer">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Full name!"
                  id="name"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="SignEmail" className="cursor-pointer">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Email!"
                  id="SignEmail"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="SignPassword" className="cursor-pointer">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Password"
                  id="SignPassword"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="py-0 px-3 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-200"
                >
                  SignUp
                </button>
                <div className="text-xl mt-4">
                  <Link to={"/login"}>
                    Have an Account?{" "}
                    <span
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <Toaster />
    </>
  );
};

export default SignUp;
