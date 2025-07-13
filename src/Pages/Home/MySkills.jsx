import React from "react";
import data from "../../data/index.json";
import * as Icons1 from "react-icons/fa";
import * as Icons2 from "react-icons/si";
import * as Icons3 from "react-icons/io5";

const DynamicIcon = (props) => {
  const IconComponent = Icons3[props.iconName] || Icons1[props.iconName] || Icons2[props.iconName]; // Access the component by its string name

  if (!IconComponent) {
    return null; // Or render a default icon/placeholder
  }

  return <IconComponent size={48}/>;
};

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <DynamicIcon iconName={item.icon}/>
              {/* <img src={item.src} alt="Product Chain" /> */}
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br /></span>
            ))}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
