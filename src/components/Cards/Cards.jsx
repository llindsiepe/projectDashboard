import "./Cards.css";
import { iconsImgs } from "../../utils/images";

export default function Cards() {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">R$22.000</div>
        <div className="card-wrapper">
          <span className="card-pin-hidden">**** **** ****</span>
          <span>1668</span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 expiry-text">Expires</p>
            <p className="text text-sm text-white">12/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}