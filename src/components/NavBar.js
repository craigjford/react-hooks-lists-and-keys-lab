import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const concatLinks = links.map((link) => "#" + link)

  const linkList = concatLinks.map((link) => {
      return <a key={link} href={link}>{link}</a>
  })

  return (
    <nav>
      {linkList}
    </nav>
  )  
}

export default NavBar;