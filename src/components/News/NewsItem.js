import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отображает новость.
 * В качестве props принимает объект со следующими свойствами:
 * - icon (иконка новостного агентства),
 * - title (заголовок новости),
 * - link (ссылка на сайт новостного агенства).
 */

function NewsItem({ item }) {
  const { icon, title, link } = item;

  return (
    <div className="NewsItem__container">
      <div
        className="NewsItem__icon"
        style={{ backgroundImage: `url(${icon})`, width: '14px', height: '14px' }}
      />
      <a className="NewsItem__link" href={link}>
        <span className="NewsItem__title">{title}</span>
      </a>
    </div>
  );
}

NewsItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default NewsItem;
