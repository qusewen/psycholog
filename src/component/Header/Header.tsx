import React, {  useState } from "react";
import Fb from "../../assets/svg/fb.svg";
import Tg from '../../assets/svg/tg.svg'
import Inst from "../../assets/svg/inst.svg";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [burger, setBurger] = useState(false);
  const handleBurgerOpen = () => {
    if (burger) {
      setBurger(false);
    } else {
      setBurger(true);
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__body'>
          <div className='header__logo'>
            <p className='logo'>АНАСТАСИЯ ФЁДОРОВА</p>
            <p className='logo_bottom'>Психолог, нейропсихолог, гештальт-терапевт</p>
          </div>
          <div className='header__burger' onClick={handleBurgerOpen}>
            <span
              className={
                burger
                  ? "header__burger-item-active header__burger-item"
                  : "header__burger-item"
              }
            ></span>
            <span
              className={
                burger
                  ? "header__burger-item-active header__burger-item"
                  : "header__burger-item"
              }
            ></span>
            <span
              className={
                burger
                  ? "header__burger-item-active header__burger-item"
                  : "header__burger-item"
              }
            ></span>
          </div>
          <nav className={burger ? "header__nav-burger" : "header__nav"}>
            <ul
              className={
                burger
                  ? "header__nav_list-burger header__nav_list"
                  : "header__nav_list"
              }
            >
              <li
                className={
                  burger
                    ? "header__nav_list-item-burger"
                    : "header__nav_list-item"
                }
              >
                <NavLink
                  onClick={() => (burger ? handleBurgerOpen() : "")}
                  to='/'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active_link active_border"
                      : ""
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li
                className={
                  burger
                    ? "header__nav_list-item-burger"
                    : "header__nav_list-item"
                }
              >
                <NavLink
                  onClick={() => (burger ? handleBurgerOpen() : "")}
                  to='/pay'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active_link active_border"
                      : ""
                  }
                >
                  Оплата
                </NavLink>
              </li>
              <li
                className={
                  burger
                    ? "header__nav_list-item-burger"
                    : "header__nav_list-item"
                }
              >
                <NavLink
                  onClick={() => (burger ? handleBurgerOpen() : "")}
                  to='/contact'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active_link active_border"
                      : ""
                  }
                >
                  Контакты
                </NavLink>
              </li>
              <li
                className={
                  burger
                    ? "header__nav_list-item-burger"
                    : "header__nav_list-item"
                }
              >
                <NavLink
                  onClick={() => (burger ? handleBurgerOpen() : "")}
                  to='/treaty'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active_link active_border"
                      : ""
                  }
                >
                  Договор оферты
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='header__social'>
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
      </div>
    </header>
  );
}
