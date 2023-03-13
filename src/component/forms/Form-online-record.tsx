import { send } from "emailjs-com";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send("service_06f55b9", "template_vwqox86", toSend, "G1_Vie_WUUG0AetTx")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
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
      />
      <input
        {...register("phone")}
        className='input input__phone'
        type='text'
        placeholder='Номер телефона для связи'
        name='phone'
        value={toSend.phone}
        onChange={handleChange}
      />
      <button className='button' type='submit'>
        Записаться
      </button>
    </form>
  );
}
