import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import "./Popap.scss";
export default function Popap() {
  const [status, setStatus] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
      service: "Заявка на консультацию",
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className={status?'popap active__popap' : ' popap' }>
      <div className='popap__body'>
        <div className='exit' onClick={()=> setStatus(false)}>X</div>
        <form className='onlineRecord onlineRecord__popap' onSubmit={onSubmit}>
          <h2 className='onlineRecord__title'>
            Введите данные для связи с вами
          </h2>
          <input
            {...register("name")}
            className='input'
            type='text'
            placeholder='Ваше имя'
            name='name'
          />
          <input
            {...register("phone")}
            className='input'
            type='text'
            placeholder='Номер телефона для связи'
            name='phone'
          />{" "}
          <input
            {...register("comment")}
            className='input input__phone'
            type='text'
            placeholder='Ваш комментарий'
            name='comment'
          />
          <Button type='submit' nameBtn='Записаться' onClick={onSubmit} />
        </form>
      </div>
    </div>
  );
}
