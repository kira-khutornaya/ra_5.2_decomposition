import React from 'react';
import NewsTabs from './News/NewsTabs';
import NewsList from './News/NewsList';
import CurrencyList from './News/CurrencyList';

/*
 * Компонент отображает блок с новостями.
 * Выводит категории новостей с помощью компонента NewsTabs,
 *         список новостей с помощью NewsList,
 *         курсы валют через СurrencyList.
 */

function News() {
  return (
    <section className="News">
      <NewsTabs />
      <NewsList />
      <CurrencyList />
    </section>
  );
}

export default News;
