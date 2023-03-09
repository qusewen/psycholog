import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import './Form.scss'
export default function FormOnlineRecord() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      service: "Онлайн группа РПП"
    },
  });


  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form className="onlineRecord" onSubmit={onSubmit}>
        <h2 className="onlineRecord__title">Заполнить данные для записи</h2>
      <input
        {...register("name")}
        className='input'
        type='text'
        placeholder='Ваше имя'
        name='name'
      />
            <input
        {...register("phone")}
        className='input input__phone'
        type='text'
        placeholder='Номер телефона для связи'
        name='phone'
      />
      <Button type="submit" nameBtn='Записаться' onClick={onSubmit}/>
    </form>
  );
}
