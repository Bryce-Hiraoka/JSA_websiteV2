import React from "react";
import NavbarComponent from "./Navbar";

function Layout({ children }) {
  return (
    <>
       <NavbarComponent />
      <main>{children}</main>
    </>
  );
}

export default Layout;
