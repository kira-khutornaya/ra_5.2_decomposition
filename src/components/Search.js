import React from 'react';
import PropTypes from 'prop-types';
import ServiceList from './Search/ServiceList';
import Form from './Form';

/*
 * Компонент отвечает за отображение блока поисковой строки.
 * В качестве props принимает ссылку на логотип.
 */

function Search({ logo }) {
  return (
    <div className="Search">
      <div className="Search__logo">
        <img src={logo} alt="logo" />
      </div>

      <ServiceList />
      <Form />

      <div className="Search__example">
        <span className="Search-example__text">
          Найдётся всё. Например,
          <a href="#0">фаза луны сегодня</a>
        </span>
      </div>
    </div>
  );
}

Search.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Search;
