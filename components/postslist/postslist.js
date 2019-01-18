import React from 'react';
import style from './postslist.css';

export class PostList extends React.Component {
  render() {
    return (
      <div className={style.postsListContainer}>

        <div className={style.post}>
          <div className={style.header}>
            <h1>Команда XETEQ запустила курс «Digital Rockstar», где маркетологов обучат программированию</h1>
          </div>
          <div className={style.informationContainer}>
            <div className={style.author}>
              <div className={style.avatar}>
                <img src='../../static/images/rodin.jpg' alt='author'/>
              </div>
              <div className={style.name}>Дмитрий Родин</div>
            </div>
            <div className={style.date}>8 Июня 2018</div>
          </div>
          <div className={style.content}>
            <b>
              Современный digital-специалист должен быть джедаем, который практически силой мысли оперирует 
              огромными массивами данных. Эксперты из MarTech компании XETEQ решили помочь маркетологам справиться
              с этой задачей и запустили курс по программированию «Digital Rockstar».</b>

            <span> 
              Авторами курса стали генеральный директор XETEQ Дмитрий Родин и CPO XETEQ Александр Швец,
              за плечами которых более 20 лет опыта работы в MarTech. До этого Дмитрий и Александр создавали
              продукты, с которыми digital-специалисты могли общаться только через интерфейс, а любой стандартный
              интерфейс ­­­— это всегда ограничения.
            </span>

          </div>
          <div className={style.openPost}>
            <a href={'https://github.com/rockstat'} target={'__blank'}>
              Читать далее
              <svg viewBox="0 0 160 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="159" height="48" rx="24" stroke="url(#paint0_linear__postlist)"/>
                <defs>
                  <linearGradient id="paint0_linear__postlist" x1="47.0588" y1="7.99998" x2="143.757" y2="19.7317" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D900FF"/>
                    <stop offset="1" stopColor="#00F0FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div className={style.tagsContainer}>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
          </div>
        </div>

        <div className={style.postLine} />

        <div className={style.post}>
          <div className={style.header}>
            <h1>Команда XETEQ запустила курс «Digital Rockstar», где маркетологов обучат программированию</h1>
          </div>
          <div className={style.informationContainer}>
            <div className={style.author}>
              <div className={style.avatar}>
                <img src='../../static/images/rodin.jpg' alt='author'/>
              </div>
              <div className={style.name}>Дмитрий Родин</div>
            </div>
            <div className={style.date}>8 Июня 2018</div>
          </div>
          <div className={style.content}>
            <b>
              Современный digital-специалист должен быть джедаем, который практически силой мысли оперирует 
              огромными массивами данных. Эксперты из MarTech компании XETEQ решили помочь маркетологам справиться
              с этой задачей и запустили курс по программированию «Digital Rockstar».</b>

            <p> 
              Авторами курса стали генеральный директор XETEQ Дмитрий Родин и CPO XETEQ Александр Швец,
              за плечами которых более 20 лет опыта работы в MarTech. До этого Дмитрий и Александр создавали
              продукты, с которыми digital-специалисты могли общаться только через интерфейс, а любой стандартный
              интерфейс ­­­— это всегда ограничения.
            </p>

          </div>
          <div className={style.openPost}>
            <a href={'https://github.com/rockstat'} target={'__blank'}>
              Читать далее
              <svg viewBox="0 0 160 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="159" height="48" rx="24" stroke="url(#paint0_linear__postlist)"/>
                <defs>
                  <linearGradient id="paint0_linear__postlist" x1="47.0588" y1="7.99998" x2="143.757" y2="19.7317" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D900FF"/>
                    <stop offset="1" stopColor="#00F0FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div className={style.tagsContainer}>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
          </div>
        </div>

        <div className={style.postLine} />

        <div className={style.post}>
          <div className={style.header}>
            <h1>Деньги & Дизайн. Как зарабатывать больше 200.000 ₽₽₽руб. если ты работаешь один</h1>
          </div>
          <div className={style.informationContainer}>
            <div className={style.author}>
              <div className={style.avatar}>
                <img src='../../static/images/rodin.jpg' alt='author'/>
              </div>
              <div className={style.name}>Дмитрий Родин</div>
            </div>
            <div className={style.date}>8 Июня 2018</div>
          </div>
          <div className={style.content}>
            <b>
              Умение зарабатывать  —  это навык, а не показатель исключительности. 
              А любой навык тренируется. Например, некоторые панически боятся выступать, и им приходится перебарывать себя,
              если того требуют профессиональные обязанности. Но работа не требует от вас зарабатывать больше, и многие,
              достигнув комфортного уровня, останавливаются. И делают они это не по личным убеждениям, а потому что система говорит,
              что это нормально.
            </b>

          </div>
          <div className={style.openPost}>
            <a href={'https://github.com/rockstat'} target={'__blank'}>
              Читать далее
              <svg viewBox="0 0 160 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="159" height="48" rx="24" stroke="url(#paint0_linear__postlist)"/>
                <defs>
                  <linearGradient id="paint0_linear__postlist" x1="47.0588" y1="7.99998" x2="143.757" y2="19.7317" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D900FF"/>
                    <stop offset="1" stopColor="#00F0FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div className={style.tagsContainer}>
            <div className={style.tag}>#digitalgod</div>
            <div className={style.tag}>#tikaysgorodu</div>
            <div className={style.tag}>#analytic</div>
          </div>
        </div>

      </div>
    )
  }
}
