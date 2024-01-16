import "../css/NewPosts.css";

const NewPosts = () => {
  return (
    <div className="new-container">
      <h2>New</h2>
      <div className="new-container__posts">
        <div className="new-container__posts--post">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="new-container__posts--post">
          <h3>The Downsides of AI</h3>
          <p>
            Artistry What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="new-container__posts--post">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
