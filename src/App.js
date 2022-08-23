import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Asanda-Majola" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                html={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/html-1.svg"
                }
                css={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/css-3.svg"
                }
                bootstrap={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/bootstrap-5-1.svg"
                }
                JavaScript={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/logo-javascript.svg"
                }
                react={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/react-2.svg"
                }
                nodejs={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/nodejs-1.svg"
                }
                sql={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/SQL.svg"
                }
                git={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/git-logo.svg"
                }
                vscode={
                  "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/visual-studio-code-1.svg"
                }
              />
            }
          />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
