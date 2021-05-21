import React from "react";
import { Link } from "react-router-dom";

const BlogContent = (props) => {
  const { id, title, description, canonical_url, cover_image } = props.blog;
  return (
    <div>
      <Link to={{ pathname: canonical_url }} target="_blank">
        <div class="card" style={{ width: "15rem" }}>
          <img class="card-img-top" src={cover_image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogContent;
