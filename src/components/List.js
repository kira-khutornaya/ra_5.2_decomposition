import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение списка.
 * В качестве props принимает:
 * - items (массив с исходными данными),
 * - className (наименование класса <ul>).
 */

function List({ items, className, children }) {
  return (
    <ul className={className}>
      {children(items)}
    </ul>
  );
}

List.defaultProps = {
  className: '',
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
};

export default List;
