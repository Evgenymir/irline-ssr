import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const { menu } = props;

  return menu && (
    <nav className="menu">
      <ul className="menu__list">
        {menu.map((item) => (
          <li className="menu__item" key={item?.id}>
            <NavLink
              to={item?.link}
              className="menu__link"
              activeClassName="menu__link_active"
            >
              {item?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.defaultProps = {
  menu: null,
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default Menu;
