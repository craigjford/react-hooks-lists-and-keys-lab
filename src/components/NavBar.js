import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchorLinks = links.map((link) => {
    return <a key={link} href="#{link}">{link}</a>
  })


  return <nav>{/* display an <a> tag for each link here */}
            {anchorLinks}
         </nav>;
}

export default NavBar;
