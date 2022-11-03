import "./main.css";
import Orbs from "../../images_icons/Orbs.png";

export default function Lava() {
  return (
    <div className="orbs-main-container">
      <div className="orbs-container">
        <img src={Orbs} alt="lava" className="Orbs" />
      </div>
      <div className="info-container ">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          <br />
          <br /> sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed.
        </p>
      </div>
      <div className="orbs-container orbs-c-2">
        <img src={Orbs} alt="lava" className="Orbs" />
      </div>
    </div>
  );
}
