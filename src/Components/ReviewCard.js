import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = ({ review }) => {
  const { userName, reviewText, rating } = review;
  return (
    <div className="w-full border rounded-lg shadow-md px-4 py-6">
      <div className="flex items-center gap-3 mb-5">
        {/* User image */}
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
        {/* User name */}
        <h4 className="text-lg font-medium">{userName}</h4>
      </div>
      <div>
        {/* Review text */}
        <p className="text-justify mb-4">{reviewText}</p>

        {/* Rating stat icon */}
        <span className="font-medium">
          Rating:
          <Rating
            className="ml-2"
            initialRating={rating}
            emptySymbol={
              <FontAwesomeIcon
                style={{ color: "rgb(147 197 253)" }}
                icon={faStar}
              />
            }
            fullSymbol={
              <FontAwesomeIcon
                style={{ color: "rgb(37 99 235)" }}
                icon={faStar}
              />
            }
            readonly
          ></Rating>{" "}
          ({rating}/5)
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
