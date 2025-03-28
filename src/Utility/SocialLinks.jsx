import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaThreads } from "react-icons/fa6";

const SocialLinks = () => {
  const links = [
    {
      img: <TiSocialFacebook />,
      url: "https://web.facebook.com/?_rdc=1&_rdr#",
    },
    {
      img: <TiSocialInstagram />,
      url: "https://www.instagram.com/millys_cuisine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      img: <FaThreads />,
      url: "https://www.threads.net/@millys_cuisine",
    },
  ];
  return links;
};

export default SocialLinks;
