import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { send } from 'emailjs-com';
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
  const [toSend, setToSend] = useState({
    name: '',
    phone: '',
    comment: '',
    service: 'Заявка на консультацию',
  });
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
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
      service: "Заявка на консультацию",
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(
      'service_06f55b9',
      'template_ky6046b',
      toSend,
      'G1_Vie_WUUG0AetTx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
            value={toSend.name}
            onChange={handleChange}
          />
          <input
            {...register("phone")}
            className='input popap_input'
            type='text'
            placeholder='Номер телефона для связи'
            name='phone'
            value={toSend.phone}
            onChange={handleChange}
          />{" "}
          <input
            {...register("comment")}
            className='input input__phone popap_input'
            type='text'
            placeholder='Ваш комментарий'
            name='comment'
            value={toSend.comment}
            onChange={handleChange}
          />
          <button className='button' type='submit'>
      Записаться
    </button>
        </form>
      </div>
    </div>
  );
}
