import TwoFactorCard from "./TwoFactorCard";
import { Row, Col } from "antd";
import "./twoFactorMenu.scss";

interface TwoFactorMenuProps {}

const TwoFactorMenu: React.FunctionComponent<TwoFactorMenuProps> = () => {
  const auths = [
    {
      name: "Facebook Messenger",
      image: "/app-icons/messenger.png",
    },
    {
      name: "Trading Conditions",
      image: "/app-icons/trading-conditions.png",
    },
  ];

  return (
    <div className="twoFactorMenu">
      <p className="twoFactorHead">
        Use one-time passwords generated by an external app to log in. This will
        help protect your account from hackers.
      </p>
      <Row gutter={[16, 16]} justify="center">
        {auths.map((item, index) => (
          <Col key={item.name + index} span={12}>
            <TwoFactorCard name={item.name} image={item.image} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TwoFactorMenu;