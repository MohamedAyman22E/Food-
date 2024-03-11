import React from "react";
import "./Blog.css";
import { blog } from "../../data/Data";
const Blog = () => {
  return (
    <div className="container blog">
      <div className="heading">
        <span>Recent Article</span>
        <h2>LATEST NEWS & BLOG</h2>
      </div>
      <div className="allBlogBox">
        {blog.map(e => {
          return (
            <div className="box" key={e.id}>
              <div className="info">
                <h3>{e.date}</h3>
                <h2>{e.name}</h2>
              </div>
              <div className="img">
                <img src={e.cover} alt="" />
              </div>
              <div className="info span">
                <span className="icn">{e.icon}</span>
                <span>{e.read}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
