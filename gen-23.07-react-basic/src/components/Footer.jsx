function Footer() {
  return (
    <div className="flex bg-emerald-950 w-full mb-0">
      <div className="p-11">
        {/* Social Media */}
        <ul className="list-none flex justify-center mb-4 sm:justify-start">
          <li className="mr-4">
            <img src="/gen-23.07-javascript-basic/img/twitter.png" alt="" />
          </li>
          <li className="mr-4">
            <img src="/gen-23.07-javascript-basic/img/facebook.png" alt="" />
          </li>
          <li className="mr-4">
            <img src="/gen-23.07-javascript-basic/img/linked-in.png" alt="" />
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
