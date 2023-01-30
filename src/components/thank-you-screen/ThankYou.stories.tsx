import { ThankYouMsg } from "./ThankYou";
import "./ThankYou.css";

export default {
  title: "Thank you message screen",
  component: ThankYouMsg,
};

export const ThankYouScreen = () => <ThankYouMsg selectedRating={"2"} />;
