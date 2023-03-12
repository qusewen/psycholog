import React from 'react'
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import photo from "../../assets/jpg/photo.jpg";
import Button from "../../component/Button/Button";
export default function About() {
  const dispatch = useDispatch();
  function modalStateOpen() {
    dispatch({ type: "openModal" });
  }
  return (
    <section className='about'>
    <div className='container'>
      <div className='about__body'>
        <div className='about__photo'>
          <img src={photo} alt='my_photo' className='about__photo-img' />
        </div>
        <div className='about__information'>
          <h1 className='about__information_title'>Здравствуйте </h1>
          <h2 className='about__information_title'>я Анастасия Фёдорова</h2>
          <p className='about__information_subtitle'>
            {" "}
            психолог, нейропсихолог, гештальт-терапевт.
          </p>
          <p className='about__information_subtitle'>
            Живу и работаю в Витебске, а так же online со всем
            русскоговорящим миром.
          </p>
          <p className='about__information_subtitle'>
            По первому образованию я - магистр кафедры микро-, опто-, и
            наноэлектроники, по второму, высшему, я - психолог,
            преподаватель психологии. Прошла переподготовку на
            нейропсихолога, сертифицировалась как гештальт-терапевт.
            Завершила специализации по семейной терапии, по работе с травмой
            и в кризисных ситуациях, работаю в том числе в
            телесно-ориентированном подходе.
          </p>
          <p className='about__information_subtitle'>
            Много учусь, продолжаю с удовольствием это делать и сейчас,
            забочусь о качестве своей работы, поэтому еженедельно посещаю
            личного психолога, еженедельно работаю индивидуально с
            супервизором, в супервизорской или интервизорской группе.
          </p>
          <p className='about__information_subtitle'>
            Мне нравится моя работа, мне нравится сопровождать каждого
            человека в его личном поиске ответов, решений, смыслов, в поиске
            себя, мне нравится наблюдать как качественно меняется жизнь
            благодаря изменениям: внутренней наполненности, душевному покою,
            уравновешенности, внутренней силе и уверенности. Я расту с
            каждым своим клиентом.
          </p>
          <Button type='button' onClick={()=> modalStateOpen()} nameBtn = 'Связаться'/>
        </div>
      </div>
    </div>
  </section>
  )
}
