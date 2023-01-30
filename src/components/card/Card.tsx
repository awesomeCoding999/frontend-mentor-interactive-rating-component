import { useState } from "react";
import { ThankYouMsg } from "../thank-you-screen";
import { SelectRatingScreen } from "../select-rating-screen";
import FadeIn from "react-fade-in";
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
    <main className="card-container">
      {hasRatingBeenSubmitted ? (
        <FadeIn delay={200}>
          <ThankYouMsg selectedRating={selectedRating} />
        </FadeIn>
      ) : (
        <SelectRatingScreen
          selectedRating={selectedRating}
          showThankYouScreen={showThankYouScreen}
          getSelectedRating={getSelectedRating}
        />
      )}
    </main>
  );
};
