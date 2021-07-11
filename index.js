function Box(props) {
  // Write your code here.
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <p>{text}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div class="container">
    <h1 class="heading">Boxes</h1>
    <div class="box-container">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="Medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
