import styles from '../../assets/sass/Button.module.sass';
import PropTypes from 'prop-types';

function Button({text, onClick}) {
  return <div className={styles.button} onClick={onClick}>{text}</div>
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: '',
  onClick: () => {
  },
}

export default Button;