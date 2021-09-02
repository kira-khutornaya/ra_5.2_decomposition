import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение элементов списка
 * раздела "Посещаемое".
 * В качестве props принимает объект со следующими свойствами:
 * - title (заголовок статьи),
 * - description (короткое описание статьи),
 * - link (ссылка на статью).
 */

function PopularItem({ item }) {
  const { title, description, link } = item;

  return (
    <>
      <a
        href={link}
        className="PopularItem__link"
        target="_blank"
        rel="noreferrer"
      >
        <span className="PopularItem__title">
          {title}
        </span>
      </a>
      <span className="PopularItem__description">{description}</span>
    </>
  );
}

PopularItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default PopularItem;
