import "../css/Modal.css";

const Modal = ({ Menu }) => {
  return (
    <>
      <div className={Menu ? "nav-menu --opened" : "nav-menu"}>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      <div
        className={
          Menu ? "nav-menu__background --gray" : "nav-menu__background"
        }
      ></div>
    </>
  );
};

export default Modal;
