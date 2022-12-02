import logo from "../../assets/logo/logo.svg";
import './Header.scss';

const Header = () => {
    return (
        <div className="header container">
            <img data-testid="logo" src={logo} className={"logo"} alt="Website logo"/>
        </div>
    );
  };
  export default Header;