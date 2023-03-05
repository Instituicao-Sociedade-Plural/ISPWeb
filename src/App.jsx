import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Providers } from "./providers";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
