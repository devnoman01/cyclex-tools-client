import React, { useState, useEffect } from "react";
import Loading from "../../Components/Loading";
import ReviewCard from "../../Components/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [reviews]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto py-14 px-4">
        <h1 className="text-center text-4xl md:text-5xl font-medium mb-16 text-secondary">
          Users Reviews
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
