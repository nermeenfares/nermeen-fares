import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/nermeenmorgan"
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/yourusername"
  },
  {
    icon: <FaLinkedin />,
    path: "LinkedIn: https://www.linkedin.com/in/nermeen-fares-5aa137204/"
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} passHref>
            <div className={iconStyles} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
