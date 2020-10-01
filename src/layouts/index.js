import React from "react";

export default function Layout({ children, location }) {
  console.log("layout");
  return (
    <>
      <span>layout</span>
      {children}
    </>
  );
}
