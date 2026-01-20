import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";


const Widget = () => {
  return (
    <div className="widget">
      <h4>The Community Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
          Promoting bio-security, animal health and welfare for the benefit of the livestock industry and human wellbeing.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Knowledge sharing and Question answering.</p>
        </div>
      </div>
      <h4>Features</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Sign up and Log in to if you have questions to ask.</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Get your questions answered by the DVTS community.
          </p>
        </div>
       
      </div>
      <h4>Hot Posts</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
          <p>--</p>
          <p>
            No hot posts
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Widget;
