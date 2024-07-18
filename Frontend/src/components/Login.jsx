import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../../public/style.css"; // Import your custom styles

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };
    toast.promise(
      axios.post("http://localhost:4001/user/login", userInfo),
      {
        loading: "Logging in...",
        success: (res) => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          navigate("/");
          return "Welcome Back. Logged In Successfully!";
        },
        error: (err) => err.response?.data.message || "Login Failed!",
      },
      {
        className: "custom-toast",
      }
    );
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valid = await trigger(); // Triggers validation and returns true if valid
      if (valid) {
        handleSubmit(onSubmit)(); // If valid, submit the form
      }
    }
  };

  return (
    <>
      <dialog
        id="my_modal_3"
        className="my_modal_3 flex h-screen items-center justify-center"
        style={{ zIndex: 1500 }}
      >
        <div className="w-[600px]">
          <div className="modal-box">
            <form
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
              onKeyDown={handleKeyDown}
            >
              <Link to={"/"}>
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Email!"
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    validate: (value) =>
                      value.includes("@") || "Email must include '@'",
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Password"
                  id="password"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="py-1 px-3 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <Link to={"/signUp"}>
                  Not registered?{" "}
                  <span
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    Sign up
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <Toaster />
    </>
  );
};

export default Login;
