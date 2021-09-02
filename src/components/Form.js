import React from 'react';
import PropTypes from 'prop-types';

/*
 * Компонент отвечает за отображение form.
 */

function Form({ text }) {
  return (
    <form className="Search__control">
      <input className="Search-control__input" type="text" />
      <button className="Search-control__btn" type="submit">{text}</button>
    </form>
  );
}

Form.defaultProps = {
  text: 'Найти',
};

Form.propTypes = {
  text: PropTypes.string,
};

export default Form;
