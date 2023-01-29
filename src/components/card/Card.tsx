import { useState } from "react";
import { ThankYouMsg } from "../thank-you-page";
import "./Card.css";

export const Card = () => {
  const [hasRatingBeenSubmitted, setHasRatingBeenSubmitted] =
    useState<boolean>(false);
  return (
    <div className="card-container">
      {hasRatingBeenSubmitted ? <ThankYouMsg /> : <></>}
    </div>
  );
};
