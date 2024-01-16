import "../css/TopThree.css";
import One from "../images/image-retro-pcs.jpg";
import Two from "../images/image-top-laptops.jpg";
import Three from "../images/image-gaming-growth.jpg";

const TopThree = () => {
  return (
    <div className="three-container">
      <div className="three-container__post">
        <img
          className="three-container__post--img"
          src={One}
          alt="image one"
        ></img>
        <div className="three-container__post--text-container">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="three-container__post">
        <img
          className="three-container__post--img"
          src={Two}
          alt="image two"
        ></img>
        <div className="three-container__post--text-container">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="three-container__post">
        <img
          className="three-container__post--img"
          src={Three}
          alt="image one"
        ></img>
        <div className="three-container__post--text-container">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default TopThree;
