import React from 'react';
import PropTypes from 'prop-types';

/* Компонент отвечает за отображение прогноза погоды.
 * В качестве props принимает:
 * - icon (иконка текущей погоды),
 * - temp (объект с утренней, дневной и вечерней температурой воздуха).
 */

function Weather({ icon, temp }) {
  return (
    <div className="Weather">
      <div
        className="Weather__icon"
        style={{ backgroundImage: `url(${icon})`, width: '48px', height: '48px' }}
      />
      <div className="Weather__temp">{temp.morning}</div>

      <div className="Weather__forecast">
        <span>
          Днём
          {temp.afternoon}
          ,
        </span>
        <span>
          вечером
          {temp.evening}
        </span>
      </div>
    </div>
  );
}

Weather.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.exact({
    morning: PropTypes.number,
    afternoon: PropTypes.number,
    evening: PropTypes.number,
  }).isRequired,
};

export default Weather;
