import React from "react";
import "./Publications.css";
import content from "../../lib/content";
import { motion } from "framer-motion";
import Paper from "../../images/work/research.png";

function Publications() {
  const { kicker, heading, journal, authors, link } = content.researchPaper;
  console.log(
    authors.slice(0, authors.length - 1).map((item, idx) => `${item} `) +
      `,${authors[authors.length - 1]}`
  );
  return (
    <div className="publications">
      <div className="publications-header">
        <div className="publication-welcome">
          <h1>Publications</h1>
        </div>
      </div>

      <div
        className="publications-container"
        onClick={() => window.open(`${link}`)}
      >
        <div className="publications-left">
          <h2>{kicker}</h2>
          <h1>{heading}</h1>
          <p className="journal">{journal}</p>
          <p className="authors">
            <span>AUTHORS:</span> {authors.join(", ")}
          </p>
        </div>
        <div className="publications-right">
          <img alt="research paper" src={Paper} />
        </div>
      </div>
    </div>
  );
}

export default Publications;
