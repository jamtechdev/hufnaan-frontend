import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../../components/Theme';

const logos = {
    'white': require('./../../../images/logos/named-logo.png'),
    'primary': require('./../../../images/logos/named-logo.png'),
    'success': require('./../../../images/logos/named-logo.png'),
    'warning': require('./../../../images/logos/named-logo.png'),
    'danger': require('./../../../images/logos/named-logo.png'),
    'info': require('./../../../images/logos/named-logo.png'),
    'indigo': require('./../../../images/logos/named-logo.png'),
    'purple': require('./../../../images/logos/named-logo.png'),
    'pink': require('./../../../images/logos/named-logo.png'),
    'yellow': require('./../../../images/logos/named-logo.png')
}

const getLogoUrl = (style, color) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style, color) => {
    if (style === 'color') {
        return logos['white'];
    } else {
        return getLogoUrl(style, color);
    }
}

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={
                    checkBackground ?
                        getLogoUrlBackground(style, color) :
                        getLogoUrl(style, color)
                }
                className={ classNames('d-block', className) }
                alt="Airframe Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);
LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed };
