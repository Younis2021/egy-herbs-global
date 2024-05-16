// StarRating.js
import React from "react";
import { BiSolidStar } from "react-icons/bi";

export default function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<BiSolidStar style={{ color: "#9ba839" }} key={i} />);
  }
  return <span className="rating">{stars}</span>;
}
