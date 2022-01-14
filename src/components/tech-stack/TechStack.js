import React from "react";
import "./TechStack.css";
import content from '../../lib/content';
import { motion } from "framer-motion";


const Circle = (props) => (
  <motion.div whileHover={{ scale: 1.1 }} key={props.idx}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }} className="circle-parent"
    >
      <div
        style={{
          backgroundImage: `url(${props.item.image})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="circle"
      ></div>
      <h2 style={{ margin: "10px 0px" }}>{props.item.name}</h2>
    </div>
  </motion.div>
);

function TechStack() {
  return (
    <div className="techstack-me">
      <div className="techstack-me-desc">
        <div className="techstack-welcome">
          <h1>Tech Stack</h1>
        </div>
        <div className="techstack-list">
          {content.techstack.map((item, index) => {
            return <Circle item={item} idx={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
