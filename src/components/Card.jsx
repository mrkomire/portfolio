import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a
      href={link}
      target="_blank"                // Opens the link in a new tab
      rel="noopener noreferrer"      // Security feature to prevent the new page from accessing window.opener
      className="m-4 block max-w-sm overflow-hidden rounded-lg"
    >
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
