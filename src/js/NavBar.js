import '../css/NavBar.css';

import React from 'react';

function NavBar() {
  return (
    <div class="nav-bar">
        <a href="./AboutMe.js" class="tab">About</a>
        <a href="./Portfolio.js" class="tab">Portfolio</a>
        <a href="./resume.js" class="tab">Resume</a>
        <a href="./contact.js" class="tab">Contact</a>
    </div>
  );
}

export default NavBar;