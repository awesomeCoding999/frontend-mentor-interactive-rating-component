import "./ThankYou.css";

type ThankYouMsgProps = {
  selectedRating: string | null;
};

export const ThankYouMsg = ({ selectedRating }: ThankYouMsgProps) => {
  return (
    <div className="thank-you-container">
      <img
        className="thank-you-illustration"
        src="src/assets/illustration-thank-you.svg"
        alt="thank you illustration"
      />
      <p className="rating-msg">You selected {selectedRating} out of 5</p>
      <h2 className="thank-you-heading">Thank you!</h2>
      <p className="thank-you-paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};
