import React, { useState } from "react";
import { faEnvelope, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../../Hooks/useUser";

const MyProfile = () => {
  const [user] = useUser();
  const [editable, setEditable] = useState(false);

  const name = user.displayName;
  const email = user.email;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl my-3">My Profile</h2>
        <button
          onClick={() => setEditable(!editable)}
          className="btn btn-sm btn-primary gap-2"
        >
          <FontAwesomeIcon icon={faEdit} />
          Edit Profile
        </button>
      </div>
      <div className="w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full h-full bg-slate-50 rounded-xl shadow-md px-4 py-10 lg:py-12 border text-center">
            <div className="avatar mb-6">
              <div className="w-3/5 mx-auto rounded-full ring ring-blue-300 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3178" />
              </div>
            </div>

            <h3 className="text-2xl mb-5">{name}</h3>

            <p className="mb-4 flex justify-center items-center gap-3">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                className=""
                icon={faEnvelope}
              />{" "}
              {email}
            </p>

            <p className="mb-3">My Company</p>

            <p className="text-sm">Shop-11, Road-1, New Market, Dhaka</p>

            <p></p>
          </div>
          <div className="col md:col-span-2">
            <div className="w-full bg-slate-50 rounded-xl shadow-md border px-4 py-10 lg:py-12">
              <form onSubmit={handleUpdateProfile} className="bg-transparent">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="text"
                    placeholder=""
                    defaultValue={name}
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="email"
                    placeholder=""
                    defaultValue={email}
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="number"
                    placeholder=""
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Education</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="text"
                    placeholder=""
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">LinkedIn Profile Link</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="text"
                    placeholder=""
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Profile Image Link</span>
                  </label>
                  <input
                    required
                    disabled={!editable}
                    type="text"
                    placeholder=""
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    required
                    disabled={!editable}
                    type="text"
                    placeholder=""
                    className="textarea textarea-bordered w-full"
                  />
                </div>
                <input
                  disabled={!editable}
                  className="btn w-full mt-6 rounded-lg bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white"
                  type="submit"
                  value="Update Profile"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
