import { CraetDownIcon, ProfileIcon } from "../../assets/icons";
import "./topbar.scss";

interface TopbarProps {
  setIsRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRightDrawerContent: React.Dispatch<React.SetStateAction<string | null>>;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDrawer: React.Dispatch<
    React.SetStateAction<
      "trades" | "market" | "events" | "help" | "convert" | null
    >
  >;
  currentDrawer: "trades" | "market" | "events" | "help" | "convert" | null;
}

const Topbar: React.FunctionComponent<TopbarProps> = ({
  setIsRightDrawerOpen,
  setIsRightDrawerContent,
  setIsDrawerOpen,
  setCurrentDrawer,
  currentDrawer,
}) => {
  return (
    <div className="topbarContainer">
      <div
        className="conversionTab"
        onClick={() => {
          setIsDrawerOpen(currentDrawer === "convert" ? false : true);
          setCurrentDrawer("convert");
          currentDrawer === "convert" && setCurrentDrawer(null);
        }}
      >
        <div className="convImg">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703146258/conv_e2znxe.png"
            alt="conv"
          />
        </div>
        <div className="convDetails">
          <div className="topConv">
            <span className="currency">EUR/USD</span>
            <span>•</span>
            <span className="percent">82%</span>
            <span className="caretDown">
              <CraetDownIcon />
            </span>
          </div>
          <div className="bottomConv">Fixed Time mode</div>
        </div>
      </div>
      <div className="payProfileTab">
        <div
          className="demo"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("account");
          }}
        >
          <p className="value">Đ9.996.90</p>
          <div className="flexDemo">
            <span className="dem">Demo Account</span>
            <span className="caretDown">
              <CraetDownIcon />
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("payments");
          }}
          className="payments"
        >
          Payments
        </button>
        <button
          className="profile"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("profile");
          }}
        >
          <ProfileIcon />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
