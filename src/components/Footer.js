import React from "react";
const year = new Date;
const currentYear = year.getFullYear();


function Footer() {
    return <footer>
        <p>Copyright&copy; {currentYear}All Rights Reserved</p>
    </footer>
}

export default Footer;