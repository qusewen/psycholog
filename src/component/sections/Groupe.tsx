import React from "react";
import Calendar from "../../assets/svg/calendar.svg";
import Location from "../../assets/svg/location.svg";
import People from "../../assets/svg/people.svg";
import FormOnlineRecord from "../forms/Form-online-record";
export default function Groupe() {
  return (
    <section className='groupe'>
      <div className='container groupe-container'>
        <div className='groupe__body'>
          <p className='groupe__subtitle'>Онлайн запись на групповой тренинг</p>
          <h2 className='groupe__title'>Онлайн группа для людей с РПП</h2>
          <div className='groupe__info'>
            <p className='groupe__subtitle-info'>
              <img src={Calendar} alt='calendar' className='groupe__img' />
              Еженедельно, старт в АПРЕЛЕ
            </p>
            <p className='groupe__subtitle-info'>
              <img src={Location} alt='location' className='groupe__img' />
              Онлайн
            </p>
          </div>
          <p className='groupe__subtitle-info people'>
            <img src={People} alt='location' className='groupe__img' />
            Колличество участников ограничено
          </p>
          <p className="groupe__subtitle">
            Расстройство пищевого поведения - это заболевания, которые
            представлены в международном классификаторе болезней.
          </p>
          <p className="groupe__subtitle">
            Групповой формат работы в данной теме позволяет клиентам то, что
            невозможно в личной терапии, познакомиться с людьми с такой же
            проблемой, получить возможность говорить о своей проблеме и
            понимать, что не одинок в своих переживаниях, и нет твоей вины в
            том, что с тобой происходит, совершенствовать навыки общения с
            Другими.
          </p>

        </div>
        <FormOnlineRecord/>
      </div>
    </section>
  );
}
