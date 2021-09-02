import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';

/*
 * Компонент отвечает за отображение отдельного виджета.
 * В качестве props принимает:
 * - link (ссылка на страницу с подробной информацией);
 * - title (заголовок виджета).
 */

function Widget({ link, title, children }) {
  const item = {
    link, title,
  };

  return (
    <div className="Widget">
      <Title item={item} />
      {children}
    </div>
  );
}

Widget.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Widget;
