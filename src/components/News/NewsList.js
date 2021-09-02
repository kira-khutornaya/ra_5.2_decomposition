import React from 'react';
import news from '../../data/news';
import List from '../List';
import ListItem from '../ListItem';
import NewsItem from './NewsItem';

/*
 * Компонент выводит список новостей выбранной категории,
 * для отображения каждой отдельной новости использует NewsItem.
 */

function NewsList() {
  return (
    <div className="NewsList__container">
      <List items={news} className="NewsList">
        { (items) => items.map((item) => (
          <ListItem className="NewsItem" key={item.id}>
            <NewsItem item={item} />
          </ListItem>
        )) }
      </List>
    </div>
  );
}

export default NewsList;
