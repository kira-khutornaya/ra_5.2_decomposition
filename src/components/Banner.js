import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение горизонтального рекламного баннера.
 * В качестве props принимает:
 * - img (ссылка на изображение),
 * - link (ссылка на сайт компании-рекламодателя).
 */

function Banner({ img, link }) {
  return (
    <div className="Banner">
      <a
        className="Banner__link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="Banner__img"
          src={img}
          alt=""
        />
      </a>
    </div>
  );
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Banner;
