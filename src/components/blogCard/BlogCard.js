import React from "react";
import "./BlogCard.css";
//import { useHistory } from "react-router-dom";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url) {
    console.log('The link was clicked.' + url);
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div class={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          //class={ isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card" }
          // removed shadw 
          class={isDark ? "dark-mode blog-card" : "blog-card"}
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p class={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
