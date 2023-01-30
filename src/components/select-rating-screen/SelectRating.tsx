import "./SelectRating.css";

type SelectRatingScreenProps = {
  getSelectedRating: (e: any) => void;
  selectedRating: string | null;
  showThankYouScreen: () => void;
};

export const SelectRatingScreen = ({
  getSelectedRating,
  selectedRating,
  showThankYouScreen,
}: SelectRatingScreenProps) => {
  return (
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
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
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
  );
};
