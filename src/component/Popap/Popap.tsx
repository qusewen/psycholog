import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { send } from "emailjs-com";
import "./Popap.scss";
import Loader from "../Loader/Loader";
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
    name: "",
    phone: "",
    comment: "",
    service: "Заявка на консультацию",
  });
  const [resStatus, setResStatus] = useState<number>();
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [comentValue, setComentValue] = useState("");
  function modalStateClose() {
    dispatch({ type: "closeModal" });
  }
  useEffect(() => {
    if (valueStateModal.modalSet) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [valueStateModal]);
  const { register } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
      service: "Заявка на консультацию",
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    send("service_06f55b9", "template_ky6046b", toSend, "G1_Vie_WUUG0AetTx")
      .then((response) => {
        setResStatus(response.status);
        setLoading(false);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setErrorStatus(true);
        setLoading(false);
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={status ? "popap active__popap" : "popap"}>
      <div className='popap__body'>
        <div className='exit' onClick={() => modalStateClose()}>
          X
        </div>
        {loading ? <Loader clas='loader' /> : ""}
        {resStatus === 200 ? (
          <div className='success'>
            Сообщение отправлено, скоро с вами свяжутся!
          </div>
        ) : errorStatus ? (
          <div className='error'>
            Произошла ошибка, обновите страницу и попробуйте заново
          </div>
        ) : (
          <form
            className='onlineRecord onlineRecord__popap'
            onSubmit={onSubmit}
          >
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
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNameValue(e.target.value)
              }
            />
            <input
              {...register("phone")}
              className='input popap_input'
              type='text'
              placeholder='Номер телефона для связи'
              name='phone'
              value={toSend.phone}
              onChange={handleChange}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhoneValue(e.target.value)
              }
            />{" "}
            <input
              {...register("comment")}
              className='input input__phone popap_input'
              type='text'
              placeholder='Ваш комментарий'
              name='comment'
              value={toSend.comment}
              onChange={handleChange}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setComentValue(e.target.value)
              }
            />
            <button
              disabled={
                nameValue === "" || phoneValue === "" || comentValue === ""
                  ? true
                  : false
              }
              className='button'
              type='submit'
            >
              Записаться
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
