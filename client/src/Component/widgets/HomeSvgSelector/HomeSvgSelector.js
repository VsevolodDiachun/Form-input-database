import SmileYellowUp from "../../svg/smile-yellow-up.svg";
import SmileYellowMiddle from "../../svg/smile-yellow-middle.svg";
import SmilePinkMiddle from "../../svg/smile-pink-middle.svg";
import Clouds from "../../svg/clouds.svg";
import Sun from "../../svg/sun.svg";
import BarBottom from "../../svg/bar-bottom.svg";
import SmilePinlBottom from "../../svg/smile-pink-bottom.svg";
import Map from "../../svg/Resorts-V.png";
import GreenSmile from "../../svg/green-smile.svg";
import SmileYellowBottom from "../../svg/smile-yellow-bottom.svg";
import NetWorking from "../../svg/networking.svg";

import './HomeSvgSelector.css'

const HomeSvgSelector = () => {
    return (
        <div>
            <img src={SmileYellowUp} alt="Smile" className="smile-yellow-up"></img>
            
            <img src={Clouds} alt="Clouds" className="clouds"></img>
            <img src={Sun} alt="Sun" className="sun"></img>
            <img src={BarBottom} alt="Bar" className="bar-bottom"></img>
            <img src={SmilePinlBottom} alt="Smile" className="smile-pinl-bottom"></img>
            <img src={GreenSmile} alt="Smile" className="green-smile"></img>
            <img src={SmileYellowBottom} alt="Smile" className="smile-yellow-bottom"></img>
            <img src={NetWorking} alt="networking" className="networking"></img>
            <div className="map-photo">
                <img src={Map} alt="Map" class="map-img" ></img>
                <div className="children-smiles">
                    <img src={SmileYellowMiddle} alt="Smile" className="smile-yellow-middle"></img>
                    <img src={SmilePinkMiddle} alt="Smile" className="smile-pink-middle"></img>
                </div>
            </div>
            
        </div>
    )
}

export default HomeSvgSelector;