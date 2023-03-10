import React from "react";
import Fb from "../../assets/svg/fb.svg";
import Inst from "../../assets/svg/inst.svg";
import Logo from "../../assets/jpg/logocard.jpg";
import Tg from "../../assets/svg/tg.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__body'>
          <div className='footer__organization'>
            <p className='footer__organization_title'>
              ЧАСТНОЕ ПРЕДПРИЯТИЕ "ПРОСТРАНСТВО ПТИЦА ФЕНИКС"
            </p>
            <p className='footer__organization_title'>УНП: 391861353</p>
            <p className='footer__organization_title'>
              Адрес:Республика Беларусь, г. Витебск, ул. Зеньковой, 1, помещение
              1-6н
            </p>
            <p className='footer__organization_title'>Свидетельство о гос.регистрации №  0180529 от 29 сентября 2022 года</p>
            <p className='footer__organization_title'>Время работы: с 8.00 до 22.00 без выходных</p>
          </div>
          <div className='footer__contact'>
            <a className="footer__contact-link" href='tel:+375336148736'>+375336148736</a>
            <a className="footer__contact-link" href='mailto:fiodorova.a@ya.ru'>fiodorova.a@ya.ru</a>
            <div className='header__social footer__social'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/ptushka.fenix'
                className='header__social-link'
              >
                {" "}
                <img
                  src={Fb}
                  alt='Instagram'
                  className='header__social-link--img'
                />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/anastasija.fiodorova.7'
                className='header__social-link'
              >
                {" "}
                <img
                  src={Inst}
                  alt='FaceBook'
                  className='header__social-link--img'
                />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://t.me/ptushka_fenix_club'
                className='header__social-link'
              >
                {" "}
                <img
                  src={Tg}
                  alt='Telegram'
                  className='header__social-link--img'
                />
              </a>
            </div>
          </div>

          <div className='footer__logotype'>
            <img src={Logo} alt='logo_card' className='footer__logotype_img' />
          </div>
          <p> © 2023</p>
        </div>
      </div>
    </footer>
  );
}
