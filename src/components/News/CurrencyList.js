import React from 'react';
import shortid from 'shortid';
import currency from '../../data/currency';
import List from '../List';
import ListItem from '../ListItem';
import CurrencyItem from './CurrencyItem';

/*
 * Компонент отвечает за вывод курсов валют,
 * для отображения каждого отдельного курса использует CurrencyItem.
 */

function CurrencyList() {
  return (
    <List items={currency} className="CurrencyList">
      { (items) => items.map((item) => (
        <ListItem className="NewsItem" key={shortid.generate()}>
          <CurrencyItem item={item} />
        </ListItem>
      )) }
    </List>
  );
}

export default CurrencyList;
