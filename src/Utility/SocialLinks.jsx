import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const links = [
    {
      img: <TiSocialFacebook />,
      url: "https://www.facebook.com",
    },
    {
      img: <TiSocialInstagram />,
      url: "https://www.x.com",
    },
    {
      img: <FaXTwitter />,
      url: "https://www.instagram.com",
    },
  ];
  return links;
};

export default SocialLinks;
