import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved.
		<a
			href="http:/www./hufnaan.com"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			hufnaan.com
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2021",
    name: "Hufnaan",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
