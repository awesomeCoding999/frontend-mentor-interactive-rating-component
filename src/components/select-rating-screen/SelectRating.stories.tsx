import { SelectRatingScreen } from "./SelectRating";
import "./SelectRating.css";

export default {
  title: "Select rating component",
  component: SelectRatingScreen,
};

export const SelectScreen = () => (
  <SelectRatingScreen
    getSelectedRating={function (e: any): void {
      throw new Error("Function not implemented.");
    }}
    selectedRating={null}
    showThankYouScreen={function (): void {
      throw new Error("Function not implemented.");
    }}
  />
);
