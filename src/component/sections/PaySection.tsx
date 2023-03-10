import React from "react";
import "./Pay.scss";
export default function PaySection() {
  return (
    <section className='pay'>
      <div className='container'>
        <div className='pay__body'>
          <h2 className='pay__title'>Методы оплаты</h2>
          <p className='pay__subtitle'>1.Картой через интернет</p>
          <p className='pay__subtitle_info'>
            Сюда вставим информацию по оплате через интернет и логотип карт сюда
            тоже запихнем, но он вроде тут не нужен
          </p>
          <p className='pay__subtitle'>2.Банковский перевод</p>
          <ul className='pay__list'>
            <li className='pay__list_item'>Банковские реквизиты:</li>
            <li className='pay__list_item'>
              Получатель: ЧАСТНОЕ ПРЕДПРИЯТИЕ "ПРОСТРАНСТВО ПТИЦА ФЕНИКС"
            </li>
            <li className='pay__list_item'>УНП: 391861353</li>
            <li className='pay__list_item'>Номер счета получателя: </li>
            <li className='pay__list_item'>
              № BY54PJCB30122044081000000933 в BYN{" "}
            </li>
            <li className='pay__list_item'>
              № BY85PJCB30122044081010000978 в EUR
            </li>

            <li className='pay__list_item'>Банк: Приорбанк ОАО </li>
            <li className='pay__list_item'>БИК: PJCBBY2X</li>
            <li className='pay__list_item'>
              После оплаты предоставте информацию о платеже. Перевод выполняется
              через интернет-банкинг на сайте вашего банка (а также через
              банкоматы, платежные терминалы, инфокиоски банков Республики
              Беларусь).
            </li>
          </ul>
          <h2 className='pay__title pay__title-second'>Условия</h2>
          <ul className='pay__list'>
            <li className='pay__list_item'>
              Клиент приходит к психологу на добровольной основе.
            </li>
            <li className='pay__list_item'>
              Клиент обязан предупредить психолога о наличии психических
              диагнозов, о консультациях у специалистов других профилей
              (психиатр, невролог), о приеме веществ, влияющих на
              психоэмоциональное состояние.
            </li>
            <li className='pay__list_item'>
              Информация о клиенте является конфиденциальной, за исключением
              пунктов, предусмотренных Законом.
            </li>
            <li className='pay__list_item'>
              Ответственность за сеттинг и результат работы несут и клиент, и
              психолог.
            </li>
            <li className='pay__list_item'>
              Сессии проводятся в установленные день и время, оплата
              производится за сутки до встречи по безналичному расчету.{" "}
            </li>
            <li className='pay__list_item'>
              Переносы и отмены встреч осуществляются клиентом за сутки до
              встречи, в противном случае сессия оплачивается.
            </li>
            <li className='pay__list_item'>
              Клиент имеет право прервать терапию в любое время, взяв тем самым
              на себя ответственность за свое дальнейшее состояние.
            </li>
            <li className='pay__list_item'>
              Об уходе в отпуск клиент и психолог предупреждают друг друга не
              менее, чем за 2 недели.
            </li>
            <li className='pay__list_item'>
              В случае решения о завершении терапии необходимо провести одну
              завершающую встречу.
            </li>
            <li className='pay__list_item'>
              В случае, если клиент не выходит на связь, психолог имеет право
              позвонить доверенному лицу клиента
            </li>
            <li className='pay__list_item'>
              Пересмотр цен на оказываемые услуги происходит 2 раза в год: март
              и сентябрь.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
