import React from "react";

export default function Work() {
  return (
    <section className='work'>
      <div className='container'>
        <div className='work__body'>
          <h2 className='work__title'>С чем я работаю</h2>
          <ul className='work__list'>
            <li className='work__list_item'>
              Отношения (семейные, с партнером, детско-родительские, с
              коллегами, друзьями и т.д.)
            </li>
            <li className='work__list_item'>Депрессивные состояния</li>
            <li className='work__list_item'>
              Кризисные состояния (расставание, развод, потеря близкого, работы,
              рождение ребенка, брак, переезд и т.д.)
            </li>
            <li className='work__list_item'>Работа с травмой</li>
            <li className='work__list_item'>Непринятие себя</li>
            <li className='work__list_item'>
              Поиск себя, своего предназначения и смыслов жизни.
            </li>
          </ul>
          <h2 className='work__title work__title-second'>
            Я с ко-терапевтами веду различные тематические терапевтические
            группы:
          </h2>
          <ul className='work__list'>
            <li className='work__list_item'>
              коммуникативные для детей-подростков
            </li>
            <li className='work__list_item'>для девушек и молодых людей</li>
            <li className='work__list_item'>для женщин</li>
            <li className='work__list_item'>
              для людей с расстройством пищевого поведения
            </li>
            <li className='work__list_item'>для созависимых женщин и мужчин</li>
          </ul>
          <h2 className='work__title work__title-second--text'>
            Веду одну бесплатную группу эмоциональной помощи в кризисный период.
          </h2>
          <h2 className='work__title work__title-second--text'>
            Работаю с парами.
          </h2>
          <h2 className='work__title work__title-second--text'>
            Работаю офлайн и онлайн.
          </h2>
          <h2 className='work__title work__title-second--text work__title-second--nan'>
            Не работаю с алкогольной и наркотической зависимостями.
          </h2>
        </div>
      </div>
    </section>
  );
}
