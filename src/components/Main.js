import React from 'react';
import News from './News';
import InfoBanner from './InfoBanner';
import Search from './Search';
import Banner from './Banner';
import Widgets from './Widgets';

/*
 * Основной компонент, объединяет отдельные части страницы:
 * - News (новостной блок),
 * - InfoBanner (блок с рекламой сервисов Яндекса),
 * - Search (блок поисковой строки),
 * - Banner (рекламный баннер компаний-партнёров),
 * - Widgets (блок с дополнительными виджетами).
 */

function Main() {
  return (
    <main>
      <News />
      <InfoBanner link="#0" img="http://placehold.it/150x150" />
      <Search logo="http://placehold.it/140x100" />
      <Banner link="#0" img="http://placehold.it/750x100" />
      <Widgets />
    </main>
  );
}

export default Main;
