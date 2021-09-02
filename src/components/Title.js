import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение заголовков со ссылками.
 * В качестве props принимает объект со следующими свойствами:
 * - selected (выбран/ не выбран заголовок),
 * - link (ссылка на страницу с дополнительной информацией),
 * - title (текст заголовка).
 */

function Title({ item }) {
  const { selected, link, title } = item;

  return (
    <h3 className={selected ? 'Title title_selected' : 'Title'}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </h3>
  );
}

Title.propTypes = {
  item: PropTypes.exact({
    title: PropTypes.string,
    link: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
};

export default Title;
