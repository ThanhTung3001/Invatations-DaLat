import "./index.css";
import Countdown from "react-countdown";
import { DATE_START } from "../../constants/date.ts";
import CardTimer from "../../components/card/CardTimer.tsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.tsx";
import SessionFirstPage from "./SessionFirstPage.tsx";
import SessionSecondPage from "./SessionSecondPage.tsx";

export default function Index() {
  return (
    <div className="w-full h-[100vh]">
      <SessionFirstPage />
      <SessionSecondPage />
    </div>
  );
}
