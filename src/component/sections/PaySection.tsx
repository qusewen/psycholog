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
            Оплата услуг осуществляется с помощью системы{" "}
            <a
              rel="noreferrer"
              className='pay_link'
              target='_blank'
              href='https://www.webpay.by'
            >
              WEBPAY
            </a>
            , которая поддерживает технологии защиты – 3D Secure и Микроплатеж.
            Система WEBPAYсоответствует международному стандарту безопасности
            при работе с банковскими платёжными карточками Payment Card Industry
            Data Security Standard (PCI DSS). Транзакции защищены технологиями
            Verified by VISA, MasterCard SecureCode, БЕЛКАРТ-ИнтернетПароль и
            MirAccept.
          </p>
          <p className='pay__subtitle_info'>
            После прочтения и согласия с договором оферты, а также после
            согласования даты и времени сессии Вам будет направлена ссылка на
            оплату.Оплата услуг осуществляется с помощью системы WEBPAY, которая
            поддерживает технологии защиты – 3D Secure и Микроплатеж. Кликнув на
            ссылку, вы перейдете на специальную защищенную платежную страницу
            процессинговой системы WebPay. Для оплаты вам необходимо ввести свои
            карточные данные и подтвердить платеж, нажав кнопку «Оплатить».
          </p>
          <p className='pay__subtitle_info'>
            При оплате банковской платежной картой возврат денежных средств
            осуществляется на карточку, с которой была произведена оплата.{" "}
          </p>

          <p className='pay__subtitle'>2.Банковский перевод</p>
          <ul className='pay__list'>
            <li className='pay__list_item pay__list_item-first'>Банковские реквизиты:</li>
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
