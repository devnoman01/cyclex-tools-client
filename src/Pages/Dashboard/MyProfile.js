import React, { useState } from "react";
import { faEnvelope, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [editable, setEditable] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const { data, isLoading, refetch } = useQuery(["user", user], () =>
    fetch(`http://localhost:5000/user?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data[0]);
      })
  );

  let name = null;

  if (loading) {
    return <Loading />;
  }

  if (isLoading) {
    return <Loading />;
  }
  const email = currentUser.email;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setEditable(!editable);
    // refetch();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl my-3">My Profile</h2>
        <button
          onClick={() => setEditable(!editable)}
          className="btn btn-sm md:btn-md btn-primary gap-2"
        >
          <FontAwesomeIcon icon={faEdit} />
          Edit Profile
        </button>
      </div>
      <div className="w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full h-full bg-slate-50 rounded-xl shadow-md px-4 py-10 lg:py-12 border text-center">
            <div className="avatar mb-6">
              <div className="w-32 lg:w-24 mx-auto rounded-full ring ring-primary ring-offset-2">
                <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg" />
                {/* <img src="https://api.lorem.space/image/face?hash=3178" /> */}
              </div>
            </div>

            <h3 className="text-lg mb-4">{user.displayName}</h3>

            <p className="mb-3 flex justify-center items-center gap-3">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                className=""
                icon={faEnvelope}
              />{" "}
              {email}
            </p>

            <p className="mb-3">My Company</p>

            <p className="text-sm">Shop-11, Road-1, New Market, Dhaka</p>

            <div className="flex-row mt-6">
              <a target="_blank" href="https://www.facebook.com/">
                <FontAwesomeIcon
                  className="footer-icon text-3xl text-primary mx-2"
                  icon={faFacebook}
                />
              </a>
              <a target="_blank" href="https://instagram.com/">
                <FontAwesomeIcon
                  className="footer-icon text-3xl text-primary mx-2"
                  icon={faLinkedin}
                />
              </a>
              <a target="_blank" href="https://twitter.com/">
                <FontAwesomeIcon
                  className="footer-icon text-3xl text-primary mx-2"
                  icon={faTwitter}
                />
              </a>
              <a target="_blank" href="https://github.com/">
                <FontAwesomeIcon
                  className="footer-icon text-3xl text-primary mx-2"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
          <div className="col md:col-span-2">
            <div className="w-full bg-slate-50 rounded-xl shadow-md border px-4 pb-10 pt-5">
              <form onSubmit={handleUpdateProfile} className="bg-transparent">
                <h3 className="text-3xl text-center">Edit Profile</h3>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    readOnly
                    disabled={!editable}
                    type="email"
                    placeholder=""
                    defaultValue={email}
                    className="input input-sm lg:input-md input-bordered w-full"
                  />
                </div>
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
                  className="btn w-full mt-6 rounded-lg btn-primary text-white"
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
