import  React,{ useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#gpt3">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
)
const Navbar = () => {
  const [togleNavMenu, setTogleNavMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-link_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {togleNavMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setTogleNavMenu(false)}
          />
        : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setTogleNavMenu(true)}
          />
        }
        {togleNavMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
