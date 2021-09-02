import React from 'react';
import shortid from 'shortid';
import services from '../../data/services';
import Title from '../Title';

/*
 * Компонент отображает перечень доступных сервисов.
 * Для отображения каждого отдельного элемента списка использует Title.
 */

function ServiceList() {
  return services.map(({ title, link }) => {
    const item = {
      title, link,
    };

    return (
      <Title
        item={item}
        key={shortid.generate()}
      />
    );
  });
}

export default ServiceList;
