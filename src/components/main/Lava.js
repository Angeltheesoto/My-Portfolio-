import "./main.css";
import Orbs from "../../images_icons/Orbs.png";

export default function Lava() {
  return (
    <div className="orbs-main-container">
      <div className="orbs-container">
        <img src={Orbs} alt="lava" className="Orbs" />
      </div>
    </div>
  );
}
