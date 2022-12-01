import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './button.styles';

function Button({ children, variant, style, onClick }) {
    return (
        <ButtonElement
            onClick={onClick}
            style={{
                background: variant === "primary" ? ' linear-gradient(to top right, var(--primary), var(--primary-tint-5))' : 'transparent',
                color: variant === "primary" ? 'var(--white)' : 'inherit',
                ...style
            }}
        >
            {children}
        </ButtonElement>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

export default Button;
