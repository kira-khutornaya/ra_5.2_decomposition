import React from 'react';
import shortid from 'shortid';
import newsTabs from '../../data/newsTabs';
import List from '../List';
import ListItem from '../ListItem';
import Title from '../Title';

/*
 * Компонент отображает список категорий новостей,
 * для отображения элементов списка использует компонент Title.
 */

function NewsTabs() {
  return (
    <div className="NewsTabs">
      <List items={newsTabs} className="NewsTabs__list">
        { (items) => items.map((item) => (
          <ListItem className="NewsTabs__item" key={shortid.generate()}>
            <Title item={item} />
          </ListItem>
        )) }
      </List>

      <div className="NewsTabs__time">31 июля, среда 15:00</div>
    </div>
  );
}

export default NewsTabs;
