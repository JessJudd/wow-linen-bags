import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          &copy; 2024 - developed by{" "}
          <a
            className="link"
            href="https://github.com/JessJudd"
            target="_blank"
          >
            JessJudd
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://atlasforge.gg/wow-classic/armory/us/living-flame/saraneth"
            target="_blank"
          >
            Saraneth on Living Flame (US)
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://forms.gle/qS4NpCqDsnGE8FxC6"
            target="_blank"
          >
            Send a message or report a bug
          </a>
        </li>
      </ul>
    </footer>
  );
};
