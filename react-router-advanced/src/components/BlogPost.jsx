import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // الحصول على ID من الرابط

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is a dynamic blog post page for post #{id}.</p>
    </div>
  );
}

export default BlogPost;
