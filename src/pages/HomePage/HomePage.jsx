import { Header } from "../../components/Header/Header";
import { PresentationPage } from "../../pages/PresentationPage/PresentationPage";
import { WhoWeArePage } from "../WhoWeArePage/WhoWeArePage";

export const HomePage = () => {
  return (
    <>
      <Header />
      <PresentationPage />
      <WhoWeArePage />
    </>
  );
};
