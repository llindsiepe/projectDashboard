import "./ContentTop.css";
import { iconsImgs } from "../../utils/images";

export default function ContentTop() {
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <img src={iconsImgs.icon} alt="" />
        <h3 className="content-top-title">
          Olá, <b>llindsiepe.</b> <br />
          Bem vindo novamente, confira seus projetos
        </h3>
      </div>
    </div>
  );
}
