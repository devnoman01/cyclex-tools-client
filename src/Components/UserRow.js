import React from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { _id, email, role } = user;

  let img;
  if (user.img) {
    img = user.img;
  } else {
    img =
      "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
  }

  const handleMakeAdmin = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Update Role?",
      text: "Are you sure to assign as admin?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#C82333",
      confirmButtonText: "Yes, Update!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: "PUT",
          // headers: {
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Added As Admin",
                html: `${email} is now an admin`,
                icon: "success",
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  return (
    <tr className="">
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.name}</td>
      <td>
        {role === "admin" ? (
          <span className="text-green-500 font-semibold">Admin</span>
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="btn btn-sm btn-accent text-white"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
