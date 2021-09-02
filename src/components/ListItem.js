import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за вывод элемента списка.
 * В качестве props принимает наименование класса <li>.
 */

function ListItem({ className, children }) {
  return (
    <li className={className}>
      {children}
    </li>
  );
}

ListItem.defaultProps = {
  className: '',
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ListItem;
