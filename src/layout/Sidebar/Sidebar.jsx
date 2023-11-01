import "./Sidebar.css";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="People" />
        </div>
        <div className="name-description">
          <p className="intro-name">Bem vindo,</p>
          <p className="info-name">Lohani L.</p>
        </div>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a href="https://github.com/llindsiepe" className="nav-link-new">
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
