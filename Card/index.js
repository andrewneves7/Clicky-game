import "./style.css";

function Card(props) {
  // const test = (props.image)
  // console.log(test)
  return (
    <div className="card">
      <div onClick={(props.Clicked)} className="img-container">
      <img alt={props.name} src={require("./images/"+props.image)}/></div>
    </div>
  );
}

export default Card;
