import React from "react";
import Headline from "./Headline";
import Createboxmd from "./Createboxmd";
export default function Blog(props) {
  return (
    <div style={{width:"350px"}}>
      <div className="featured-post">
        <Createboxmd image={props.image} />
        <div
          style={{
            width: "fit-content",
            paddingBottom: "0.5px",
            borderBottom: "1px solid #2953f5",
          }}
        >
          {props.caption}
        </div>
        <Headline heading={props.headline} />
        <div>
          <p style={{ fontWeight: "400" }}>
            {props.blogBody}
          </p>
          <div style={{ paddingLeft: "1.1rem", marginTop: "2rem" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                textAlign: "center",
                border: "1px solid",
                display: "inline-block",
                borderRadius: "100%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <span style={{ marginLeft: "1.1rem" }}>Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
