import "../Button/Button.css";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className="button_default text_small">
      <span className="button_icon">{props.startIcon}</span>
      {props.text}
      <span className="button_icon">{props.endIcon}</span>
    </button>
  );
}

//tipo das props
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
