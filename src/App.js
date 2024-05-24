import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import BlogsPage from "./components/blog/BlogsPage";
import AuthorsPage from "./components/author/AuthorsPage";
import ScrollToTop from "./utils/ScrolToTop";
//import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blogs" element={<BlogsPage/>} />
        <Route path="/blogs/:slug" element={<BlogPage/>} />
        <Route path="/authors" element={<AuthorsPage/>} />
        <Route path="/authors/:sug" element={<AuthorPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
