import './style.css';

const Button = ({ children, color = "primary", cbClick }) => {
    return (
        <button
            className={`cb-button cb-button--${color}`}
            onClick={cbClick}
        >
          {children}
        </button>
    );
};

Button.propTypes = {
    children: () => {},
    color: () => {},
    cbClick: () => {},
};

export default Button;