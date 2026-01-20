import React from "react";
import { Link } from 'react-router-dom'

const WidgetTags = () => {
  const tags = [
    "poultry",
    "aquatic",
    "virology",
    "histopathology",
    "bacteriology",
    "parasitology",
    "wildlife",
    "epidemiology",
  ];

  return (
    <div className="widget-tags">
      <h4>Tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <Link key = {tag} style={{ textDecoration: 'none'}} to={'/Tags'}>
            <p>{tag}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
