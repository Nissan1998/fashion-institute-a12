import { useContext } from "react";
import Banner from "./Banner";
import PopularClassSection from "./PopularClassSection";
import PopularInstructorSection from "./PopularInstructorSection";
import ExtraSection from "./ExtraSection";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import ProgressBar from "../Components/ProgressBar";

const Home = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <PopularClassSection></PopularClassSection>
      <PopularInstructorSection></PopularInstructorSection>
      <ProgressBar />
      <div
        className={`${darkMode ? "bg-slate-800" : "bg-base-200"} p-10 md:p-20`}
      >
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
