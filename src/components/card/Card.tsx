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
        <SelectRatingScreen
          selectedRating={selectedRating}
          showThankYouScreen={showThankYouScreen}
          getSelectedRating={getSelectedRating}
        />
      )}
    </div>
  );
};
