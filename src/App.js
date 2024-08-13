import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Headlines from "./components/Headlines";

function App() {
  return (
    <>
      <TopNav />
      <Navbar/>
      <Trending/>
      <Headlines/>
    </>
  );
}

export default App;
