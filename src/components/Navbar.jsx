import logo from '../assets/logo.webp';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/514/635/small/letter-l-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg"
            alt="Logo"
            className="mx-2"
            width={50}
            height={33}
          />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/lily-lee-803228228/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-stone-300" />
        </a>
        <a
          href="https://github.com/lilyhyojeonglee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-stone-300" />
        </a>
        <a
          href="https://www.instagram.com/lilyvnilli/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Notion"
        >
          <SiNotion className="text-stone-300" />
        </a>
        <a
          href="https://www.instagram.com/lilyvnilli/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <FaInstagram className="text-stone-300" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
