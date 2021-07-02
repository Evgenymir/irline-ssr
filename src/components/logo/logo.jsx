import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  const { Icon } = props;

  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        {Icon && Icon}
      </Link>
    </div>
  );
};

Logo.defaultProps = {
  Icon: null,
};

Logo.propTypes = {
  Icon: PropTypes.node,
};

export default Logo;
