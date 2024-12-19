import React from 'react';

const Home = () => {
  return (
    <div className='container home'>
      <div className='hero'>
        <h1 className='hero-title'>Добро пожаловать в Зоомагазин!</h1>
        <p className='hero-text'>Здесь вы найдёте всё необходимое для ваших питомцев.</p>
      </div>
      <div className='features'>
        <div className='feature'>
          <h2>Большой ассортимент</h2>
          <p>У нас есть товары для собак, кошек, птиц, грызунов и даже рыбок!</p>
        </div>
        <div className='feature'>
          <h2>Доступные цены</h2>
          <p>Качественные товары по выгодным ценам.</p>
        </div>
        <div className='feature'>
          <h2>Быстрая доставка</h2>
          <p>Доставим заказ прямо к вашему порогу в кратчайшие сроки.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
