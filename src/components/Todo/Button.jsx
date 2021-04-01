import styles from '../../assets/css/Button.module.css';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
    return <div className={styles.button} onClick={onClick}>{text}</div>
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    text: '',
    onClick: ()=> {},
}

export default Button;