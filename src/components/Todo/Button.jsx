import styles from '../../assets/sass/Button.module.sass';
import PropTypes from 'prop-types';
import { memo } from 'react'

const Button = memo(({text, onClick}) => {
  return <div className={styles.button} onClick={onClick}>{text}</div>
})

Button.displayName = 'Button';

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