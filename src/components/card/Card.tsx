import { useState } from "react";
import { ThankYouMsg } from "../thank-you-page";
import { CircleStyles } from "../circle-styles";
import "./Card.css";

export const Card = () => {
  const [hasRatingBeenSubmitted, setHasRatingBeenSubmitted] =
    useState<boolean>(false);
  return (
    <div className="card-container">
      {hasRatingBeenSubmitted ? (
        <ThankYouMsg />
      ) : (
        <>
          <CircleStyles>
            <img
              className="star-icon"
              src="src/assets/icon-star.svg"
              alt="star icon"
            />
          </CircleStyles>

          <h1 className="title">How did we do?</h1>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="ratings-container">
            {[...Array(5).keys()].map((rating) => (
              <CircleStyles key={`rating${rating}`}>{rating + 1}</CircleStyles>
            ))}
          </div>
          <button className="submit-btn">submit</button>
        </>
      )}
    </div>
  );
};
