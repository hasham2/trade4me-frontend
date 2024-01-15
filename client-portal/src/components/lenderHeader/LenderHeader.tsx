import "./lenderHeader.scss";

interface LenderHeaderProps {}

const LenderHeader: React.FunctionComponent<LenderHeaderProps> = () => {
  return (
    <div>
      <div className="leftHead">
        <div className="logo"></div>
        <p>Movement</p>
        <p>Bills</p>
      </div>
      <div className="rightHead">
        <p>Support</p>
      </div>
    </div>
  );
};

export default LenderHeader;
