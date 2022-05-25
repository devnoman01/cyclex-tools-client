import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading";
import Footer from "../../Components/Footer";
import Swal from "sweetalert2";
import useAuthUser from "../../Hooks/useAuthUser";
import SocialLogin from "./SocialLogin";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    // const user = {
    //   displayName: data.name,
    //   email: data.email,
    //   phoneNumber: null,
    //   photoURL:
    //     "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
    //   education: "",
    //   linkedin: "",
    //   address: "",
    // };

    // fetch("http://localhost:5000/user", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((inserted) => {
    //     if (inserted.insertedId) {
    //       console.log(inserted);
    //       Swal.fire({
    //         title: "User Registered",
    //         html: "Account registration successful",
    //         icon: "success",
    //         showCancelButton: true,
    //         confirmButtonColor: "#218838",
    //         cancelButtonColor: "#C82333",
    //         confirmButtonText: "Update Profile!",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           reset();
    //           navigate("/dashboard/myProfile");
    //         }
    //       });
    //     }
    //   });
  };

  const [token] = useToken(user);

  useEffect(() => {
    if (user) {
    }
  });

  if (token) {
    navigate("/");
    reset();
    Swal.fire({
      title: "User Registered",
      html: "Account registration successful",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#C82333",
      confirmButtonText: "Update Profile!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard/myProfile");
      }
    });
  }

  let signInError;

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    signInError = (
      <p className="text-red-600">{error?.message || updateError?.message}</p>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto w-full">
        <div className="container mx-auto px-4">
          <div className="mt-16 md:mt-24 ">
            <div className="p-8 border w-full max-w-sm border-gray-200 shadow-lg rounded-2xl mx-auto">
              <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-md">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name Required",
                      },
                    })}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-sm text-left text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-md">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email Required",
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Provide Valid Email",
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-sm text-left text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-sm text-left text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form-control w-full  mb-5">
                  <label className="label">
                    <span className="text-md">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 character",
                      },
                    })}
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-sm text-left text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-sm text-left text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {signInError}
                <input
                  value="Sign Up"
                  type="submit"
                  className="input input-bordered w-full bg-accent text-white uppercase font-medium"
                />
              </form>
              <p className="text-sm text-center mt-1">
                Already Registered?{" "}
                <Link to="/login" className="text-secondary font-medium">
                  Login Here
                </Link>
              </p>
              <div className="divider">OR</div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
