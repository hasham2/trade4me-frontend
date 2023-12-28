import {
  TransactionIcon,
  WalletIcon,
  WithdrawIcon,
} from "../../../../../assets/icons";
import "./paymentsMenu.scss";

interface PaymentsMenuProps {}

const PaymentsMenu: React.FunctionComponent<PaymentsMenuProps> = () => {
  return (
    <div className="paymentsMenu">
      <button className="deposit">
        <span>
          <WalletIcon />
        </span>
        <span>Deposit</span>
      </button>
      <button>
        <span>
          <WithdrawIcon />
        </span>
        <span>Withdrawal</span>
      </button>
      <button>
        <span>
          <TransactionIcon />
        </span>
        <span>Transactions</span>
      </button>
    </div>
  );
};

export default PaymentsMenu;
