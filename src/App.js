import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [maj, setMaj] = useState(false);

  const rows1 = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "<X|"];
  const rows2 = ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"];
  const rows3 = ["MAJ", "w", "x", "SPACE", "c", "v", "b", "n"];

  return (
    <div className="App">
      <button
        className="button"
        onClick={() => {
          setText("");
        }}
      >
        Restart
      </button>
      <header className="header">{text}</header>
      <div className="line">
        {rows1.map(letter => {
          return (
            <span
              className="letter"
              onClick={() => {
                {
                  if (letter === "<X|") {
                    letter = "";
                    setText(text.slice(0, -1));
                  } else {
                    if (maj) {
                      setText(text + letter.toUpperCase());
                    } else {
                      setText(text + letter);
                    }
                  }
                }
              }}
            >
              {" "}
              {!maj ? letter : letter.toUpperCase()}{" "}
            </span>
          );
        })}
      </div>
      <div className="line">
        {rows2.map(letter => {
          return (
            <span
              className="letter"
              onClick={() => {
                {
                  if (maj) {
                    setText(text + letter.toUpperCase());
                  } else {
                    setText(text + letter);
                  }
                }
              }}
            >
              {" "}
              {!maj ? letter : letter.toUpperCase()}{" "}
            </span>
          );
        })}
      </div>
      <div className="line">
        {rows3.map(letter => {
          return (
            <span
              className="letter"
              onClick={() => {
                if (letter === "MAJ") {
                  setMaj(!maj);
                  letter = "";
                }
                if (letter === "SPACE") {
                  letter = " ";
                }
                if (maj) {
                  setText(text + letter.toUpperCase());
                } else {
                  setText(text + letter);
                }
              }}
            >
              {!maj ? letter : letter.toUpperCase()}{" "}
            </span>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default App;
