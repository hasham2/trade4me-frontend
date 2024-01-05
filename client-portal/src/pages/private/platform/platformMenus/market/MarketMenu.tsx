import { useNavigate } from "react-router-dom";
import "./marketMenu.scss";
import { RightArrowIcon } from "../../../../../assets/icons";

interface MarketMenuProps {}

const MarketLink = ({ text, link }: { text: string; link?: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className="market-link"
      role="button"
      onClick={() => navigate(link || "")}
    >
      <p>{text}</p>
      <RightArrowIcon />
    </div>
  );
};

const MarketMenu: React.FunctionComponent<MarketMenuProps> = () => {
  return (
    <div className="market-menu">
      <MarketLink text="My Purchases & Rewards" />
      <MarketLink text="My Published Strategies" />
      <div className="carousel-wrapper">
        <div className="flexItems">
          <div className="text">
            <p className="giftHead">Forex</p>
            <p className="prof">
              Professional tools to help predict market trends{" "}
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703602367/bag-dynamic-color_hrvnwe.png"
            alt="gift-bag"
          />
        </div>
      </div>
      <div className="trade-conditions">
        <div className="imgWrap">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703603004/coin_g0cie0.png"
            alt="coin"
          />
        </div>
        <div className="texts">
          <p className="tr-head">Trading Conditions</p>
          <p className="tr-txt">
            Features that provide more benefitial trading conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketMenu;
