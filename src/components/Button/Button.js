import "../Button/Button.css";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className={props.variant}>
      <span className="button_icon">{props.startIcon}</span>
      <span className="text_small">{props.text}</span>
      <span className="button_icon">{props.endIcon}</span>
    </button>
  );
}

//tipo das props
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
