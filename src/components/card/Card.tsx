import { useState } from "react";
import { ThankYouMsg } from "../thank-you-screen";
import { SelectRatingScreen } from "../select-rating-screen";
import "./Card.css";

export const Card = () => {
  const [hasRatingBeenSubmitted, setHasRatingBeenSubmitted] =
    useState<boolean>(false);
  const [selectedRatingNumber, setSelectedRatingNumber] = useState<
    string | null
  >(null);

  const getSelectedRating = (e: any) => {
    setSelectedRatingNumber(e.target.innerText);
  };

  const showThankYouScreen = () => {
    if (!selectedRatingNumber) {
      alert("Please select a rating");
      return;
    }

    setHasRatingBeenSubmitted(true);
  };

  return (
    <div className="card-container">
      {hasRatingBeenSubmitted ? (
        <div className="thank-you-container">
          <img
            className="thank-you-illustration"
            src="src/assets/illustration-thank-you.svg"
            alt="thank you illustration"
          />
          <p className="rating-msg">
            You selected {selectedRatingNumber} out of 5
          </p>
          <h2 className="thank-you-heading">Thank you!</h2>
          <p className="thank-you-paragraph">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
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
                  rating === Number(selectedRatingNumber)
                    ? "selected-rating"
                    : ""
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
