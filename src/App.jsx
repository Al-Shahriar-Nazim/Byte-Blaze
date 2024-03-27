import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import BookMarks from "./pages/Bookmarks/BookMarks";
import Home from "./pages/Home/Home";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Home></Home>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
