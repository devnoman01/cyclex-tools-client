import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const [rating, setRating] = useState(0);

  const getRating = (e) => {
    const ratingValue = parseInt(e.target.value);
    setRating(ratingValue);
  };

  if (loading) {
    return <Loading />;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    //   const userName = user.displayName;
    const reviewText = e.target.review.value;
    if (rating > 0) {
      const review = {
        userName: user.displayName,
        reviewText: reviewText,
        rating: rating,
      };

      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Review Submitted",
              html: "Thanks for your review",
              timer: 4000,
              // timerProgressBar: false,
              icon: "success",
              showConfirmButton: false,
            });
            e.target.review.value = "";
          } else {
            Swal.fire({
              title: "Something Wrong",
              html: "Please try again.",
              icon: "error",
              showConfirmButton: false,
            });
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-2xl my-3">Add A Review</h3>
      <div>
        <form
          onSubmit={handleReviewSubmit}
          className="border-2 bg-slate-50 rounded-lg px-3 py-6 w-full mt-8 shadow-md"
        >
          <h4 className="text-3xl mb-3 font-medium text-center">Review Form</h4>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">User's Name</span>
            </label>
            <input
              readOnly
              type="text"
              value={user.displayName}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Review Texts (max 200 character)
              </span>
            </label>
            <textarea
              required
              type="text"
              name="review"
              maxLength="200"
              placeholder="Type review here"
              className="textarea textarea-bordered h-28 w-full"
            />
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text">
                Rating Point - select from 1 to 5 (5=best 1=bad)
              </span>
            </label>
            <div
              aria-required
              onChange={getRating}
              className="rating mt-2 mb-5 gap-4"
            >
              <input
                type="radio"
                value={1}
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                value={2}
                name="rating-2"
                className="mask mask-star-2 bg-primary"
                defaultChecked
              />
              <input
                type="radio"
                value={3}
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                value={4}
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                value={5}
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
            </div>
            <p className={`${rating ? "hidden" : "text-red-500 text-sm"}`}>
              Please select rating
            </p>
            <input
              className="btn rounded-lg btn-primary text-white mt-6"
              type="submit"
              value="Submit Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
