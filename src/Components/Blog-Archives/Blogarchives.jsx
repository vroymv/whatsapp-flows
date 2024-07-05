import React from "react";
import Headline from "../Featured-posts/Headline";
import DropDownButton from "./Dropdownmenubutton";
import Blog from "./Blog";
import { Link } from "react-router-dom";


// import PaginationLink from "./Pagination/Pagination";

export default function Blogarchives(props) {
  return (
    <>
      <Headline heading="Blog Archives" />
      <DropDownButton />
      <p>Viewing 65 out of 65</p>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.Blog.map((blog, index) => {
          return (
            <Blog
              key={index}
              image={blog.image}
              caption={blog.caption}
              headline={blog.headline}
              blogBody={blog.blogBody}
            />
          );
        })}
      </div>
      <hr style={{ marginTop: "4rem" }}></hr>
      <div>
        {/* <PaginationLink/> */}
        
      </div>
    </>
  );
}
