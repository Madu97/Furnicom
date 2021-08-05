import React, { Component, useState, useEffect } from 'react'



const StarRating = () => {
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button style={{ border: 'none',outline: 'none',cursor: 'pointer',backgroundColor: 'transparent'}}
              type="button"
              key={index}
              className={index <= (hover || rating) ? "bon" : "boff"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span style={{fontSize: '45px'}} className="star fs-30">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating;