import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoStarOutline, IoStar } from "react-icons/io5";

function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);  // Set the clicked rating
  };

  const handleMouseEnter = (index) => {
    setHover(index);  // Set the hover index
  };

  const handleMouseLeave = () => {
    setHover(0);  // Reset hover to zero
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800">Rate this Product</h1>
      <div className="flex space-x-2">
        {[...Array(noOfStars)].map((_, index) => {
          const currentIndex = index + 1;

          return (
            <span
              key={currentIndex}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => handleClick(currentIndex)}
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onMouseLeave={handleMouseLeave}
            >
              {currentIndex <= (hover || rating) ? (
                <IoStar className="text-yellow-400" size={40} />
              ) : (
                <IoStarOutline className="text-gray-400" size={40} />
              )}
            </span>
          );
        })}
      </div>
      {rating > 0 && (
        <p className="text-gray-600 font-medium">You rated this {rating} out of {noOfStars} stars!</p>
      )}
    </div>
  );
}

// PropTypes validation
StarRating.propTypes = {
  noOfStars: PropTypes.number,
};

// Default props
StarRating.defaultProps = {
  noOfStars: 5,
};

export default StarRating;
