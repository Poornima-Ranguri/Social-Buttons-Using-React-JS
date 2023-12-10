const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="home">
    <div className="content">
      <h1 className="heading">Social Buttons</h1>
    </div>

    <div className="buttons">
      <Button buttonText="Like" className="Like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
