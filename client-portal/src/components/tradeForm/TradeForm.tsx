import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  SubtractIcon,
} from "../../assets/icons";
import "./tradeform.scss";

interface TradeFormProps {}

const TradeForm: React.FunctionComponent<TradeFormProps> = () => {
  return (
    <div className="trade-form">
      <div className="amount">
        <label htmlFor="amount">Amount, Đ</label>
        <input type="number" name="amount" id="amounts" />
      </div>
      <div className="mathButtons">
        <button>
          <SubtractIcon />
        </button>
        <button>
          <PlusIcon />
        </button>
      </div>
      <div className="amount">
        <label htmlFor="amount">Duration</label>
        <input type="number" name="amount" id="amount" />
      </div>
      <div className="mathButtons">
        <button>
          <SubtractIcon />
        </button>
        <button>
          <PlusIcon />
        </button>
      </div>
      <div className="upNdown">
        <button className="up">
          <span>Up</span>
          <span>
            <ArrowUpIcon />
          </span>
        </button>
        <button className="down">
          <span>Down</span>
          <span>
            <ArrowDownIcon />
          </span>
        </button>
      </div>
      <p className="profit">Profit: + Đ0.82</p>
    </div>
  );
};

export default TradeForm;
