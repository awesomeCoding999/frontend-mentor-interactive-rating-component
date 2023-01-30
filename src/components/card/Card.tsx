import { useState } from "react";
import { ThankYouMsg } from "../thank-you-screen";
import { SelectRatingScreen } from "../select-rating-screen";
import "./Card.css";

export const Card = () => {
  const [hasRatingBeenSubmitted, setHasRatingBeenSubmitted] =
    useState<boolean>(false);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const getSelectedRating = (e: any) => {
    setSelectedRating(e.target.innerText);
  };

  const showThankYouScreen = () => {
    if (!selectedRating) {
      alert("Please select a rating");
      return;
    }

    setHasRatingBeenSubmitted(true);
  };

  return (
    <div className="card-container">
      {hasRatingBeenSubmitted ? (
        <ThankYouMsg selectedRating={selectedRating} />
      ) : (
        <>
          <div className="circle-styles">
            <img
              className="star-icon"
              src="src/assets/icon-star.svg"
              alt="star icon"
            />
          </div>

          <h1 className="title">How did we do?</h1>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="ratings-container">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                onClick={(e) => getSelectedRating(e)}
                className={`circle-styles ${
                  rating === Number(selectedRating) ? "selected-rating" : ""
                }`}
                key={`rating${rating}`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button onClick={showThankYouScreen} className="submit-btn">
            submit
          </button>
        </>
      )}
    </div>
  );
};
