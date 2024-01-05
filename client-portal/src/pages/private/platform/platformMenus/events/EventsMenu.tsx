import { ArrowRightIcon, OnlineIcon } from "../../../../../assets/icons";
import "./eventsMenu.scss";

interface EventsMenuProps {}

const EventsMenu: React.FunctionComponent<EventsMenuProps> = () => {
  return (
    <div className="eventsContainer">
      <div className="flexEvents">
        <div className="event">
          <div className="flexImgsEv">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703610642/trophy-dynamic-color_ron49o.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703610642/medal-dynamic-color_t796xy.png"
              alt=""
            />
          </div>
          <div className="eveTxt">
            <p className="evehead">Leagues</p>
            <p className="subEve">Join Now</p>
          </div>
        </div>
        <div className="event">
          <div className="endImg">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703610642/fire-dynamic-color_swytr1.png"
              alt=""
            />
          </div>
          <div className="eveTxt">
            <p className="evehead">Battles</p>
            <p className="subEve">
              <span>
                <OnlineIcon />
              </span>
              <span>64</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mainEvent">
        <div className="flexHapps">
          <p className="happen">Happening Now</p>
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703614139/gift-dynamic-color_vhtvsw.png"
            alt=""
          />
        </div>
        <p className="newyr">New Year Vibes</p>
        <div className="flexEnds">
          <p className="end">Ends January</p>
          <div className="rightIcon">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsMenu;
