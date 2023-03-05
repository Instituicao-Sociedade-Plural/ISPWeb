import { Header } from "../../components/Header/Header";
import { PresentationPage } from "../../pages/PresentationPage/PresentationPage";
import { WhoWeArePage } from "../WhoWeArePage/WhoWeArePage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";
import { GalleryPage } from "../../pages/GalleryPage/GalleryPage";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <PresentationPage />
      <WhoWeArePage />
      <ProjectsPage />
      <GalleryPage />
      <Footer />
    </>
  );
};
