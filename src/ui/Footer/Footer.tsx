import logo from "../../assets/logo/logo.svg";
import appStore from "../../assets/button/app store.svg";
import googlePlay from "../../assets/button/google play.svg";

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer container" data-testid="footerContainer">
            <img src={logo} className={"logoFooter"} alt="Website logo" data-testid="logoFooter"/><br/>
            <div className="stores">
               <span className="inline">
                <img src={appStore} className={"store"} alt="App Store logo" data-testid="appStoreLogo"/><br/>
                <img src={googlePlay} className={"store"} alt="Google Play logo" data-testid="googleStoreLogo"/><br/>
                </span>
            </div>
            <div className="copyright" data-testid="copyright">
                © 2022 - Alexandros Emmanouelides
            </div>
        </div>
    );
  };
  export default Footer;