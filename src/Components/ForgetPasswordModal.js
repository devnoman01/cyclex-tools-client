import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../firebase.init";
import Loading from "./Loading";

const ForgetPasswordModal = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  let resetPasswordError;
  let loading;

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    await reset();
    Swal.fire({
      title: "Reset Password Requested",
      html: `Please check your email to change password`,
      icon: "success",
      showConfirmButton: false,
    });
  };

  if (sending) {
    loading = <Loading />;
  }

  if (error) {
    resetPasswordError = <p className="text-red-600">{error?.message}</p>;
  }

  return (
    <div>
      <input
        type="checkbox"
        id="forget-password-model"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="forget-password-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-lg">Recover Password</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="form-control w-full mb-6">
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
            {resetPasswordError}
            <input
              value="Send Password Reset Request"
              type="submit"
              className="input input-bordered w-full bg-primary text-white uppercase font-medium"
            />
          </form>
          {loading}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
