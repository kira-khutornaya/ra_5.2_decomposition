import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение элементов списка
 * телепрограммы и эфира.
 * В качестве props принимает объект со следующими свойствами:
 * - link (ссылка на телеканал),
 * - title (название телепередачи),
 * - tvChannel (наименование телеканала).
 */

function TvItem({ item, children }) {
  const {
    link, title, tvChannel,
  } = item;

  return (
    <div className="TvItem__container">
      {children}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <span className="TvItem__title">{title}</span>
      </a>
      <span className="TvItem__channel">{tvChannel}</span>
    </div>
  );
}

TvItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    tvChannel: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default TvItem;
