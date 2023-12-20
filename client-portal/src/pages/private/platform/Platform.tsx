import { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { CloseIcon } from "../../../assets/icons";

interface PlatformProps {}

const Platform: React.FunctionComponent<PlatformProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [currentDrawer, setCurrentDrawer] = useState<
    "trades" | "market" | "events" | "help" | null
  >(null);

  const RenderTradesDrawerContent = () => {
    return <p>Trades contents...</p>;
  };

  const RenderMarketDrawerContent = () => {
    return <p>Market contents...</p>;
  };

  const RenderEventsDrawerContent = () => {
    return <p>Events contents...</p>;
  };

  const RenderHelpDrawerContent = () => {
    return <p>Some contents...</p>;
  };

  return (
    <div className="platformWrapper">
      <Sidebar
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        currentDrawer={currentDrawer}
        setCurrentDrawer={setCurrentDrawer}
      />
      {isDrawerOpen && (
        <Drawer
          title={
            currentDrawer === "trades"
              ? "Trades"
              : currentDrawer === "events"
              ? "Events"
              : currentDrawer === "market"
              ? "Market"
              : currentDrawer === "help"
              ? "Help"
              : ""
          }
          placement="left"
          onClose={() => {
            setIsDrawerOpen(false);
            setCurrentDrawer(null);
          }}
          open={isDrawerOpen}
          className="ml-106"
          closeIcon={<CloseIcon />}
          mask={false}
        >
          <div>
            {currentDrawer === "trades" ? (
              <RenderTradesDrawerContent />
            ) : currentDrawer === "market" ? (
              <RenderMarketDrawerContent />
            ) : currentDrawer === "events" ? (
              <RenderEventsDrawerContent />
            ) : currentDrawer === "help" ? (
              <RenderHelpDrawerContent />
            ) : (
              <></>
            )}
          </div>
        </Drawer>
      )}
      <div className="trade-section">
        <Topbar />
        <div className="trade-content">
          <div className="trade-graph"></div>
          <TradeForm />
        </div>
      </div>
    </div>
  );
};

export default Platform;
