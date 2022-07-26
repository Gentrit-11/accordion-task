import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import "./style.css";
import { useState } from "react";
function App() {
  const [active, setActive] = useState(null);
  const toggle = (index) => {
    if (active == index) {
      return setActive(null);
    }
    setActive(index);
  };
  return (
    <>
      <h1>React Accordion</h1>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, index) => (
            <>
              <div className="item1">
                <div className="title" onClick={() => toggle(index)}>
                  <h2>{item.title}</h2>
                  <span>
                    {active == index ? <BsChevronDown /> : <BsChevronUp />}
                  </span>
                </div>
              </div>

              <div className={active == index ? "content show" : "content"}>
                <div className="item2">
                  {item.content}
                  <div className="item3">
                    <div
                      className={
                        active == index ? "content show" : "content show"
                      }
                    >
                      <span onClick={() => toggle(index)}>
                        {active == index ? <BsChevronUp /> : <BsChevronDown />}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
const data = [
  {
    title: "What is react js used for?",
    content:
      "React.js is an open-source JavaScript library that is used for building user interfaces specificallyfor single-page applications,It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
  },
  {
    title: "Is react js difficult to learn?",
    content:
      "Both HTML and CSS are integral to any web development project. If you have these skills already, then learning React should be a relatively straightforward process. It has its own unique set of challenges, but it is an excellent tool to have in order to start or further your career as a web developer.",
  },
  {
    title: "Is React JS frontend or backend??",
    content:
      "ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook.",
  },
];

export default App;
