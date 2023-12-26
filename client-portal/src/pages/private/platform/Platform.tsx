import { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import TradeForm from "../../../components/tradeForm/TradeForm";
import "./platform.scss";
import { Drawer } from "antd";
import { CloseIcon } from "../../../assets/icons";
import TradesMenu from "./platformMenus/trades/TradesMenu";
import MarketMenu from "./platformMenus/market/MarketMenu";
import EventsMenu from "./platformMenus/events/EventsMenu";

interface PlatformProps {}

const Platform: React.FunctionComponent<PlatformProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);
  const [rightDrawerContent, setIsRightDrawerContent] = useState<string | null>(
    null
  );
  const [currentDrawer, setCurrentDrawer] = useState<
    "trades" | "market" | "events" | "help" | "convert" | null
  >(null);

  const RenderHelpDrawerContent = () => {
    return <p>Some contents...</p>;
  };

  const RenderConversionDrawerContent = () => {
    return <p>conv contents...</p>;
  };

  const RenderAccountDrawerContent = () => {
    return <p>account contents...</p>;
  };

  const RenderPaymentsDrawerContent = () => {
    return <p>payment contents...</p>;
  };

  const RenderProfileDrawerContent = () => {
    return <p>profile contents...</p>;
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
              : currentDrawer === "convert"
              ? "Assests"
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
              <TradesMenu />
            ) : currentDrawer === "market" ? (
              <MarketMenu />
            ) : currentDrawer === "events" ? (
              <EventsMenu />
            ) : currentDrawer === "help" ? (
              <RenderHelpDrawerContent />
            ) : currentDrawer === "convert" ? (
              <RenderConversionDrawerContent />
            ) : (
              <></>
            )}
          </div>
        </Drawer>
      )}
      <div className={isDrawerOpen ? "trade-section ml-378" : "trade-section"}>
        {isRightDrawerOpen && (
          <Drawer
            title={
              rightDrawerContent === "account"
                ? "Accounts"
                : rightDrawerContent === "payments"
                ? "Payments"
                : rightDrawerContent === "profile"
                ? "Profile"
                : ""
            }
            placement="right"
            onClose={() => setIsRightDrawerOpen(false)}
            open={isRightDrawerOpen}
            closeIcon={<CloseIcon />}
            className="rightDrawer"
          >
            {rightDrawerContent === "payments" ? (
              <RenderPaymentsDrawerContent />
            ) : rightDrawerContent === "profile" ? (
              <RenderProfileDrawerContent />
            ) : rightDrawerContent === "account" ? (
              <RenderAccountDrawerContent />
            ) : (
              <></>
            )}
          </Drawer>
        )}
        <Topbar
          setIsRightDrawerOpen={setIsRightDrawerOpen}
          setIsRightDrawerContent={setIsRightDrawerContent}
          setIsDrawerOpen={setIsDrawerOpen}
          setCurrentDrawer={setCurrentDrawer}
          currentDrawer={currentDrawer}
        />
        <div className="trade-content">
          <div className="trade-graph">ppwwd</div>
          <TradeForm />
        </div>
      </div>
    </div>
  );
};

export default Platform;
