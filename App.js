import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "SharedLayout";
import Projects from "Projects";
import Blog from "Blog";
import Contact from "Contact";
import NoPage from "NoPage";
import Home from "Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://AsandahDevs.github.io/Asanda-Majola"
          element={<SharedLayout />}
        >
          <Route
            index
            element={
              <Home
                html={"Assets/Images/html-1.svg"}
                css={"Assets/Images/css-3.svg"}
                bootstrap={"Assets/Images/bootstrap-5-1.svg"}
                JavaScript={"Assets/Images/logo-javascript.svg"}
                react={"Assets/Images/react-2.svg"}
                nodejs={"Assets/Images/nodejs-1.svg"}
                git={"Assets/Images/git-logo.svg"}
                vscode={"Assets/Images/visual-studio-code-1.svg"}
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
