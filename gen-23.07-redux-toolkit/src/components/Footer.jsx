import TwitterLogo from '../img/twitter.png';
import FacebookLogo from '../img/facebook.png';
import LinkedInLogo from '../img/linked-in.png';

function Footer() {
  return (
    <div className="flex bg-emerald-950 w-full mb-0">
      <div className="p-11">
        {/* Social Media */}
        <ul className="list-none flex justify-center mb-4 sm:justify-start">
          <li className="mr-4">
            <img src={TwitterLogo} alt="" />
          </li>
          <li className="mr-4">
            <img src={FacebookLogo} alt="" />
          </li>
          <li className="mr-4">
            <img src={LinkedInLogo} alt="" />
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-white flex justify-center sm:justify-start">
          &copy; 2023 Sauce Labs. All Rights Reserved. Terms of Service |
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
