import { send } from "emailjs-com";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";
import "./Form.scss";
export default function FormOnlineRecord() {
  const { register } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      service: "Онлайн группа РПП",
    },
  });

  const [toSend, setToSend] = useState({
    name: "",
    phone: "",
    service: "Онлайн группа РПП",
  });
  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] =useState('')
  const [resStatus, setResStatus] = useState<number>();
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    send("service_06f55b9", "template_vwqox86", toSend, "G1_Vie_WUUG0AetTx")
      .then((response) => {
        setLoading(false);
        setErrorStatus(false);
        setResStatus(response.status);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setLoading(false);
        setErrorStatus(true);
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='onlineRecord'>
      {resStatus === 200 ? (
        <div className='success_rec'>
          Сообщение отправлено, скоро с вами свяжутся!
        </div>
      ) : errorStatus ? (
        <div className='error_rec'>
          Произошла ошибка, обновите страницу и попробуйте заново
        </div>
      ) : (
        <form className='onlineRecord' onSubmit={onSubmit}>
          <h2 className='onlineRecord__title'>Заполнить данные для записи</h2>

          <input
            {...register("name")}
            className='input'
            type='text'
            placeholder='Ваше имя'
            name='name'
            value={toSend.name}
            onChange={handleChange}
            onInput={(e:React.ChangeEvent<HTMLInputElement>)=> setNameValue(e.target.value)}
          />
          <input
            {...register("phone")}
            className='input input__phone'
            type='text'
            placeholder='Номер телефона для связи'
            name='phone'
            value={toSend.phone}
            onChange={handleChange}
            onInput={(e:React.ChangeEvent<HTMLInputElement>) => setPhoneValue(e.target.value)}
          />
          <button disabled={nameValue === '' || phoneValue === ''? true : false} className='button' type='submit'>
            Записаться
          </button>
          {loading ? <Loader clas='loader-rec' /> : ""}
        </form>
      )}
    </div>
  );
}
