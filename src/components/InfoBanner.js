import React from 'react';
import PropTypes from 'prop-types';
import Widget from './Widgets/Widget';

/*
 * Компонент отвечает за отображение рекламного блока сервисов Яндекса.
 * В качестве props принимает:
 * - img (ссылка на изображение),
 * - link (ссылка на сайт).
 */

function InfoBanner({ img, link }) {
  return (
    <div className="InfoBanner">
      <img src={img} alt="" />
      <Widget title="Работа над ошибками" link={link}>
        <span>Смотрите на Яндексе и запоминайте</span>
      </Widget>
    </div>
  );
}

InfoBanner.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoBanner;
