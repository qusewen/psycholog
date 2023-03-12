import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Fb from "../../assets/svg/fb.svg";
import Inst from "../../assets/svg/inst.svg";
import Tg from "../../assets/svg/tg.svg";
import Viber from "../../assets/svg/viber.svg";
import Button from "../Button/Button";
import "./ContsctSection.scss";

export default function ContsctSection() {
  const dispatch = useDispatch();
  function modalStateOpen() {
    dispatch({ type: "openModal" });
  }

  return (
      <section className='contact'>
        <div className='container'>
          <div className='contact__body'>
            <div className='contact__info'>
              <h2 className='contact__info_title'>Контакты:</h2>
              <ul className='pay__list contact__list'>
                <li className='pay__list_item contact__list_item'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__contact-link '
                    href='tel:+375336148736'
                  >
                    Телефон: +375336148736
                  </a>

                </li>
                <li className='pay__list_item contact__list_item'>
                  e-mail:{" "}
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__contact-link'
                    href='mailto:fiodarava.by@gmail.com'
                  >
                    fiodarava.by@gmail.com
                  </a>
                </li>
                <li className='pay__list_item contact__list_item'>
                  <a
                    className='contact__link'
                    target='_blank'
                    rel='noreferrer'
                    href='viber://chat?number=%2B375336148736'
                  >
                    Viber
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
                    Instagram{" "}
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
                    Facebook{" "}
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
                    Telegram{" "}
                    <img
                      src={Tg}
                      alt='Telegram'
                      className='header__social-link--img contact__social-link--img'
                    />
                  </a>
                </li>
                <li className='pay__list_item contact__list_item'>
                  Адрес: Витебск, ул. Зеньковой 1, каб. 1 и каб. 10 (7 этаж)
                </li>
              </ul>
              <Button
                nameBtn='Связаться'
                onClick={() => modalStateOpen()}
                type='button'
              />
            </div>
            <div className='contact__map'>
              <YMaps>
                <Map
                  width={`100%`}
                  height={`327px`}
                  defaultState={{
                    center: [55.191593, 30.189143],
                    zoom: 14,
                    controls: ["zoomControl"],
                  }}
                  modules={[
                    "geoObject.addon.balloon",
                    "geoObject.addon.hint",
                    "control.ZoomControl",
                  ]}
                >
                  <Placemark
                    defaultGeometry={[55.191593, 30.189143]}
                    properties={{
                      hintContent: "<b>Нажмите, чтобы узнать подробнее</b>",
                      balloonContent:
                        '<div id="driver-2" class="driver-card"><p>ЧАСТНОЕ ПРЕДПРИЯТИЕ "ПРОСТРАНСТВО ПТИЦА ФЕНИКС"</p><p>Витебск, ул. Зеньковой 1, каб. 1 и каб. 10 (7 этаж)</p> <p>Время работы: 8.00 - 22.00</p></div>',
                    }}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </section>

  );
}
