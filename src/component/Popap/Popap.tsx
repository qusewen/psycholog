import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Button from "../Button/Button";
import "./Popap.scss";
interface States {
  modal: {
    modalSet: boolean;
  };
}
export default function Popap() {
  const valueStateModal = useSelector((state: States) => state.modal);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  function modalStateClose() {
    dispatch({ type: "closeModal" });
  }
useEffect(()=>{
  if(valueStateModal.modalSet){
    setStatus(true)
  }else{
    setStatus(false)
  }
},  [valueStateModal])
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

    <div className={status? 'popap active__popap': 'popap'}>
      <div className='popap__body'>
        <div className='exit' onClick={() => modalStateClose()}>
          X
        </div>
        <form className='onlineRecord onlineRecord__popap' onSubmit={onSubmit}>
          <h2 className='onlineRecord__title onlineRecord__title-popap'>
            Введите данные для связи с вами
          </h2>
          <input
            {...register("name")}
            className='input popap_input'
            type='text'
            placeholder='Ваше имя'
            name='name'
          />
          <input
            {...register("phone")}
            className='input popap_input'
            type='text'
            placeholder='Номер телефона для связи'
            name='phone'
          />{" "}
          <input
            {...register("comment")}
            className='input input__phone popap_input'
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
