import React from 'react';
import shortid from 'shortid';
import broadcast from '../../data/broadcast';
import List from '../List';
import ListItem from '../ListItem';
import TvItem from './TvItem';

/*
 * Компонент отвечает за отображение виджета "Эфир".
 */

function LiveList() {
  return (
    <List items={broadcast} className="LiveList">
      { (items) => items.map((item) => (
        <ListItem className="LiveItem" key={shortid.generate()}>
          <TvItem item={item}>
            <div className="LiveItem__icon" />
          </TvItem>
        </ListItem>
      )) }
    </List>
  );
}

export default LiveList;
