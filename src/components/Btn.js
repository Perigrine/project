import { store } from "../Store";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Btn = ({ id, icon1, icon2, text, link, islogout, logout }) => {
  const [header, setHeader] = store.useState("Header");

  return (
    <>
      {header == text ||
      (header == "Choose Product Type" && text == "My Store") ? (
        <div>
          <input
            name="tab"
            id={id}
            type="radio"
            checked
            className="btn flex"
          ></input>
          <label for={id} className="flex flex-row">
            <img src={icon1} className="mr-[20px]"></img>
            {text}
          </label>
        </div>
      ) : islogout == "false" ? (
        <NavLink to={link}>
          <input name="tab" id={id} type="radio" className="btn flex"></input>
          <label for={id} className="flex flex-row">
            <img src={icon2} className="mr-[20px]"></img>
            {text}
          </label>
        </NavLink>
      ) : (
        <NavLink
          to={link}
          onClick={() => {
            logout();
          }}
        >
          <input name="tab" id={id} type="radio" className="btn flex"></input>
          <label for={id} className="flex flex-row">
            <img src={icon2} className="mr-[20px]"></img>
            {text}
          </label>
        </NavLink>
      )}
    </>
  );
};

Btn.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default connect(null, { logout })(Btn);
