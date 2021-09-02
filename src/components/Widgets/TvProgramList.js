import React from 'react';
import shortid from 'shortid';
import tvProgram from '../../data/tvProgram';
import List from '../List';
import ListItem from '../ListItem';
import TvItem from './TvItem';

/*
 * Компонент отвечает за отображение виджета "Телепрограмма".
 */

function TvProgramList() {
  return (
    <List items={tvProgram} className="TvProgramList">
      { (items) => items.map((item) => (
        <ListItem className="TvProgramItem" key={shortid.generate()}>
          <TvItem item={item}>
            <span className="TvItem__time">{item.time}</span>
          </TvItem>
        </ListItem>
      )) }
    </List>
  );
}

export default TvProgramList;
