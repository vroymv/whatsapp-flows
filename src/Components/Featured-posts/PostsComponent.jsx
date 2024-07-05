import React from "react";
import Createboxsmall from "./Box/Createboxsmall";
import { width } from "@mui/system";

export default function Posts(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <div>
          <div
            style={{
              width: "fit-content",
              paddingBottom: "0.5px",
              borderBottom: "1px solid #2953f5",
              marginTop: "1.5rem"
              
            }}
          >
            {props.postHead}
          </div>
          <h5 style={{ color: "#103928", fontSize: "24px", width: "100%", paddingRight:"3px", fontWeight:"700"}} >{props.postBody}</h5>
        </div>
        <div>
          <Createboxsmall image={props.image} />
        </div>
      </div>
      <hr></hr>
    </>
  );
}
