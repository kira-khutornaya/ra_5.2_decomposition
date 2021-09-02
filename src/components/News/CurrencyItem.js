import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент обеспечивает вывод элемента списка курсов валют.
 * В качестве props принимает объект со следующими свойствами:
 * - name (название валюты),
 * - link (ссылка на страницу с графиком изменения курсов валют),
 * - rate (текущий курс валюты),
 * - variation (изменение курса относительно предыдущего значения).
 */

function CurrencyItem({ item }) {
  const {
    name, link, rate, variation,
  } = item;

  return (
    <div className="CurrencyItem__container">
      <a className="CurrencyItem__link" href={link}>{name}</a>
      <span className="CurrencyItem__rate">{rate.toFixed(2)}</span>
      <span className="CurrencyItem__variation">{variation.toFixed(2)}</span>
    </div>
  );
}

CurrencyItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    rate: PropTypes.number,
    variation: PropTypes.number,
  }).isRequired,
};

export default CurrencyItem;
