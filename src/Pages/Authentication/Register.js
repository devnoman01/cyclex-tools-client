import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-600">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container flex justify-center mx-auto px-4">
        <div className="card mx-auto mt-16 md:mt-24 w-full md:max-w-sm bg-base-100 border border-gray-200 shadow-lg">
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-medium mb-4">Sign Up</h2>
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
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline gap-2 w-full"
            >
              <img
                className="w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
