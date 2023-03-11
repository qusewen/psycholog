import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Fb from "../../assets/svg/fb.svg";
import Inst from "../../assets/svg/inst.svg";
import Tg from "../../assets/svg/tg.svg";
import Viber from '../../assets/svg/viber.svg'
import "./ContsctSection.scss";

export default function ContsctSection() {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact__body'>
          <div className='contact__info'>
            <h2 className='contact__info_title'>Контакты:</h2>
            <ul className='pay__list '>
              <li className='pay__list_item contact__list_item'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='footer__contact-link '
                  href='tel:+375336148736'
                >
                  Телефон
                </a>
                : +375336148736
              </li>
              <li className='pay__list_item contact__list_item'>
                e-mail:{" "}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='footer__contact-link contact__link'
                  href='mailto:fiodorova.a@ya.ru'
                >
                  fiodorova.a@ya.ru
                </a>
              </li>
              <li className='pay__list_item contact__list_item'>
                <a
                className="contact__link"
                  target='_blank'
                  rel='noreferrer'
                  href='viber://chat?number=%2B375336148736'
                >
                  Вайбер
                  <img
                    src={Viber}
                    alt='Viber'
                    className='header__social-link--img contact__social-link--img'
                  />
                </a>
              </li>
              <li className='pay__list_item contact__list_item'>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/ptushka.fenix'
                  className='header__social-link contact__link'
                >
                    Инстаграм{" "}
                  {" "}
                  <img
                    src={Inst}
                    alt='Instagram'
                    className='header__social-link--img contact__social-link--img'
                  />
                </a>
              </li>
              <li className='pay__list_item contact__list_item'>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/anastasija.fiodorova.7'
                  className='header__social-link contact__link'
                >
                     Фейсбук{" "}
                  {" "}
                  <img
                    src={Fb}
                    alt='FaceBook'
                    className='header__social-link--img contact__social-link--img'
                  />
                </a>
              </li>
              <li className='pay__list_item contact__list_item'>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://t.me/ptushka_fenix_club'
                  className='header__social-link contact__link'
                >
                     Телеграм{" "}
                  {" "}
                  <img
                    src={Tg}
                    alt='Telegram'
                    className='header__social-link--img contact__social-link--img'
                  />
                </a>
              </li>
              <li className='pay__list_item contact__list_item'>
                Адрес: Витебск, ул. Зеньковой 1, каб. 1 (7 этаж) – это для
                местонахождения
              </li>
            </ul>
          </div>
          <div className='contact__map'>
            <YMaps>
              <Map
                width={300}
                defaultState={{
                  center: [55.191593, 30.189143],
                  zoom: 14,
                  controls: ["zoomControl"],
                }}
                modules={["control.ZoomControl"]}
              >
                <Placemark defaultGeometry={[55.191593, 30.189143]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
}
