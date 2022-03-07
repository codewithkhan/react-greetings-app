import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var greetings = "";
var name = prompt("Please Enter your Name").toUpperCase();
var cssStyle = {};
var currentTime = new Date().getHours();
var text = " This May Look Like a Simple Website But it's Purely React!!!";
if (currentTime >= 1 && currentTime <= 11) {
  greetings = "Good Morning!";
  cssStyle.color = "green";
} else if (currentTime >= 19 && currentTime <= 23) {
  greetings = "Good Night!";
  cssStyle.color = "aqua";
} else if (currentTime >= 12 && currentTime <= 18) {
  greetings = "Good AfterNoon!";
  cssStyle.color = "yellow";
}

ReactDOM.render(
  <>
    <div className="container">
      <a href="./index.html" target="_khan">
        <img
          style={{ padding: "50px", marginTop: "25px" }}
          src="https://picsum.photos/500/500?grayscale"
          alt="Error"
        />
      </a>
      <p>
        {`Hello ${name}`} <span style={cssStyle}>{greetings}</span>
      </p>
    </div>
    <br />
    <p style={{ paddingLeft: "380px" }}>{text}</p>
  </>,
  document.getElementById("root")
);
