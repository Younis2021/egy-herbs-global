import React from "react";
import "./Tenth-Sec.css";
import { Link } from "react-router-dom";
import cardIcon1 from "../../../img/Plant-Powered_200x200_636e8e8d-2bc4-4b8b-b141-93261da0f38a_100x2.png";
import cardIcon2 from "../../../img/Potent_200x200_ad8fbab8-d58c-48a0-a1a1-b1d2d742fde9_100x2.png";
import cardIcon3 from "../../../img/Pure_200x200_d28e4a8d-f3ee-4849-b2f7-8e97aff720ba_100x2.png";
import cardIcon4 from "../../../img/Transparent_200x200_50b320a8-5626-43da-8ce3-43eb97747cbf_100x2.png";

export default function TenthSec() {
  return (
    <div className="tenth-sec">
      <div className="container">
        <div className="lower-div">
          <div className="card-div">
            <div className="card-top">
              <div className="card-icon">
                <img src={cardIcon1} alt="" />
              </div>
              <span className="card-title">Plant-Powered</span>
              <span className="card-paragraph">
                Harnessing traditional wisdom, delivering Nature’s vitality
              </span>
            </div>
          </div>

          <div className="card-div">
            <div className="card-top">
              <div className="card-icon">
                <img src={cardIcon2} alt="" />
              </div>
              <span className="card-title">Potent</span>
              <span className="card-paragraph">
                Full spectrum formulas for an herb’s full array of beneficial
                compounds
              </span>
            </div>
          </div>

          <div className="card-div">
            <div className="card-top">
              <div className="card-icon">
                <img src={cardIcon3} alt="" />
              </div>
              <div className="card-title">Purity-Tested</div>
              <div className="card-paragraph">
                All products are screened for pesticides, microbes & heavy
                metals
              </div>
            </div>
          </div>

          <div className="card-div">
            <div className="card-top">
              <div className="card-icon">
                <img src={cardIcon4} alt="" />
              </div>
              <div className="card-title">Transparent</div>
              <div className="card-paragraph">
                Know what’s in your supplement— <Link className="link">Meet Your Herbs</Link> to
                learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
