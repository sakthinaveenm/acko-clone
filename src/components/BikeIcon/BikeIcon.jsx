import React from "react";

export default function BikeIcon(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="5"
        stroke="black"
        stroke-width="3"
        fill="white"
      />
      <path
        d="M7.52476 23.9519C9.47143 23.9519 11.0495 22.3738 11.0495 20.4271C11.0495 18.4804 9.47143 16.9023 7.52476 16.9023C5.57809 16.9023 4 18.4804 4 20.4271C4 22.3738 5.57809 23.9519 7.52476 23.9519Z"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
      <path
        d="M24.4752 23.9519C26.4219 23.9519 28 22.3738 28 20.4271C28 18.4804 26.4219 16.9023 24.4752 16.9023C22.5285 16.9023 20.9504 18.4804 20.9504 20.4271C20.9504 22.3738 22.5285 23.9519 24.4752 23.9519Z"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
      <path
        d="M7.17969 13.0514C9.58378 13.0182 11.9155 13.8734 13.7281 15.453C16.0155 13.9087 18.6651 12.9858 21.4169 12.7749"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
      <path
        d="M16.25 9.33514H18.0815C18.4716 9.32737 18.8563 9.42627 19.1943 9.62114C19.5323 9.81602 19.8107 10.0994 19.9994 10.4409L23.5414 16.9203"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
      <path
        d="M11.1016 21.1703H14.3844C14.8878 21.1799 15.3839 21.0492 15.8172 20.7929C16.2505 20.5365 16.6039 20.1646 16.8379 19.7189C17.4022 18.5844 18.1884 17.5747 19.15 16.7497C20.1116 15.9246 21.229 15.3009 22.4361 14.9155"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
      <path
        d="M24.4753 11.0117V13.9663"
        stroke={props.bikeHexcode}
        stroke-width="1.5"
        stroke-miterlimit="10"
      ></path>
    </svg>
  );
}
