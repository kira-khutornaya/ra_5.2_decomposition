import React from 'react';
import Weather from './Widgets/Weather';
import Widget from './Widgets/Widget';
import Popular from './Widgets/Popular';
import TvProgramList from './Widgets/TvProgramList';
import LiveList from './Widgets/LiveList';
import forecast from '../data/forecast';

/*
 * Компонент отвечает за вывод блока с дополнительными виджетами.
 */

function Widgets() {
  return (
    <section>
      <Widget title="Погода" link="#0">
        <Weather icon={forecast.icon} temp={forecast.temp} />
      </Widget>
      <Widget title="Посещаемое" link="#0">
        <Popular />
      </Widget>
      <Widget title="Карта Германии" link="#0">
        <div>Расписания</div>
      </Widget>
      <Widget title="Телепрограмма" link="#0">
        <TvProgramList />
      </Widget>
      <Widget title="Эфир" link="#0">
        <LiveList />
      </Widget>
    </section>
  );
}

export default Widgets;
