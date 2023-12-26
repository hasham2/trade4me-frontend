import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TradesIcon } from "../../../../../assets/icons";
import "./tradesMenu.scss";

interface TradesMenuProps {}

const RenderFixedTime = () => {
  return (
    <div className="tradesMenuWrapper">
      <p className="tradeHeading">Active Trades</p>
      <div className="tradeIconWrapper">
        <div className="tradeIconContainer">
          <TradesIcon />
        </div>
      </div>
      <p className="noTrade">You have no open trades on this account</p>
    </div>
  );
};

const RenderForexTab = () => {
  return (
    <div className="tradesMenuWrapper">
      <p className="tradeHeading">Forex Trades</p>
      <div className="tradeIconWrapper">
        <div className="tradeIconContainer">
          <TradesIcon />
        </div>
      </div>
      <p className="noTrade">You have no open forex trades on this account</p>
    </div>
  );
};

const RenderStocksTab = () => {
  return (
    <div className="tradesMenuWrapper">
      <p className="tradeHeading">Stock Trades</p>
      <div className="tradeIconWrapper">
        <div className="tradeIconContainer">
          <TradesIcon />
        </div>
      </div>
      <p className="noTrade">You have no open stock trades on this account</p>
    </div>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Fixed Time",
    children: <RenderFixedTime />,
  },
  {
    key: "2",
    label: "Forex",
    children: <RenderForexTab />,
  },
  {
    key: "3",
    label: "Stocks",
    children: <RenderStocksTab />,
  },
];

const TradesMenu: React.FunctionComponent<TradesMenuProps> = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default TradesMenu;
