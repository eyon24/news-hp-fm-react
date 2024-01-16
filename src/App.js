import "./App.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CoverPost from "./components/CoverPost";
import { useState } from "react";
import NewPosts from "./components/NewPosts";
import TopThree from "./components/TopThree";

function App() {
  const [menu, setMenu] = useState(false);

  const handleOnClick = () => {
    setMenu(!menu);
  };

  return (
    <main>
      <div className="container">
        <Navbar HandleOnClick={handleOnClick} />
        <Modal Menu={menu} />
        <CoverPost />
        <NewPosts />
        <TopThree />
      </div>
    </main>
  );
}

export default App;
