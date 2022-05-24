import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";

const AddReview = () => {
  const [user, loading, error] = useUser();
  const [rating, setRating] = useState(0);

  const getRating = (e) => {
    const ratingValue = parseInt(e.target.value);
    setRating(ratingValue);
  };

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

      console.log(review);
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
          className="border-2 bg-slate-50 rounded-lg p-3 w-full mt-8"
        >
          <h4 className="text-lg font-medium text-center">Review Form</h4>
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
                Review Texts (max 250 character)
              </span>
            </label>
            <textarea
              required
              type="text"
              name="review"
              maxLength="250"
              placeholder="Type review here"
              className="textarea textarea-bordered h-32 w-full"
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
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                value={2}
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                value={3}
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                value={4}
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                value={5}
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
            </div>
            <p className={`${rating ? "hidden" : "text-red-500 text-sm"}`}>
              Please select rating
            </p>
            <input
              className="btn rounded-lg bg-gradient-to-r from-[#4485FA] to-[#53DAFF] text-white mt-6"
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
