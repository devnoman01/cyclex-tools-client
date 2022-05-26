import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import UserRow from "../../Components/UserRow";
import auth from "../../firebase.init";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // using react query to get all orders
  const { data, isLoading, refetch } = useQuery("user", () =>
    fetch("http://localhost:5000/admin", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl my-3">Manage User</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Email</th>
                <th>Name</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
