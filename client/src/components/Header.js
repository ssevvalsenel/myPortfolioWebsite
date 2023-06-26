import React from "react";
//icons
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          {/* <a href="#">
            <img src={Logo} alt="" />
          </a> */}
          <div>
            {/* <h3  className="mb-6 text-[36px] lg:text-[30px] font-primary uppercase leading-[1] ">
              Şevval Şenel
            </h3> */}
          </div>
          {/* button */}
          {/* <button className="btn btn-sm" >Work with me</button> */}
          <div className="flex space-x-2">
            <a
              href="https://github.com/ssevvalsenel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiGithubLogo className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sevvalsenel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiLinkedinLogo className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
