import React from 'react';
import shortid from 'shortid';
import popular from '../../data/popular';
import List from '../List';
import ListItem from '../ListItem';
import PopularItem from './PopularItem';

/*
 * Компонент отвечает за вывод виджета "Посещаемое".
 */

function Popular() {
  return (
    <List items={popular} className="PopularList">
      { (items) => items.map((item) => (
        <ListItem className="PopularItem" key={shortid.generate()}>
          <PopularItem item={item} />
        </ListItem>
      )) }
    </List>
  );
}

export default Popular;
