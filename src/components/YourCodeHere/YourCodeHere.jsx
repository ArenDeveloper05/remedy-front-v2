import React from 'react';
import { Link } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import './YourCodeHere.scss';
//Icons
import modalCloseIcon from "../../assets/images/icon-close.svg"
import OP_LOGO from "../../assets/images/img-op.svg"
import { UIDropdown } from '../UI/UIDropdown.jsx';



export function YourCodeHere(){

  return (
    <UserContainer>

      <div className='Report__Background Global__app-content-max-width'>
        <div className='Report__Modal'>


          <div className='Report__Modal-container'>
            <div className='Report__Modal-container__Header'>
                <p>Report submission</p>
                <div className='Report__Modal-container__Header-content'>

                    <div className='Report__Modal-container__Header-content__Description'>
                        <div className='Logo'>
                          <img src={OP_LOGO} alt="logo" />
                        </div>

                        <div className='Info'>
                          <h4>Optimism</h4>
                          <p>An open stack builders can create social</p>
                          <p><span>Type</span> Smart Contract</p>
                        </div>
                    </div>

                    <div className='Report__Modal-container__Header-content__Buttons'>
                      <button className="UIButton UIButton--green-outline">Save as draft</button>
                      <button className="UIButton UIButton--green">Submit Report</button>
                    </div>

                </div>
            </div>


            <div className='Report__Modal-container__Main'>
                <div className='Report__Modal-container__Main-fields'>

                    <div className='Report__Modal-container__Main-fields-field'>
                        <p>Asset</p>
                        <UIDropdown className="my-custom-class" title="Select assets in scope" items={[ {title: "Item 1"}, {title: "Item 2"} ]}></UIDropdown>
                    </div>

                    <div className='Report__Modal-container__Main-fields-field Field__error'>
                        <p>Severity</p>
                        <UIDropdown className="my-custom-class" title="Select Severity" items={[ {title: "Item 1"}, {title: "Item 2"} ]}></UIDropdown>
                        <p>Please select a sevrity of the potential vulnerability</p>
                    </div>

                    <div className='Report__Modal-container__Main-fields-field Report__title__input Field__error'>
                        <p><span>Report Title</span> <span>12</span></p>
                        <input className="UIInput" type="text" placeholder="Placeholder..."/>
                        <p>Please enter your report title</p>
                    </div>

                </div>
            </div>

          </div>


          <div className='Report__Modal-close'>
            <div className='Report__Modal-close-img'>
              <img src={modalCloseIcon} alt="modalCloseIcon" />
            </div>
          </div>

        </div>
      </div>



      {/* ПИШИТЕ ВАШ КОД ЗДЕСЬ */}





      <div className="Test">
        <h1 className="mb-5">Ваш код будет тут</h1>
        <hr className="my-5"/>

        <div className="mb-5">
          <h3>1. См. готовые UI элементы <Link target="_blank" to="/ui">тут</Link> (кнопки, инпут, дропдаун)</h3>
        </div>

        <div className="col-12 col-lg-8 col-xxl-6 bg-success mb-5">
          <h3>2. Пример классов Bootstrap (типа col-lg-6) с нашими кастомными брекпойнтами</h3>
          <code><pre className="bg-light mx-3 rounded-1 p-2">{'<div class="col-12 col-lg-8 col-xxl-6">...</div>'}</pre></code>
          У этого блока:
          <ul>
            <li>На маленьких экранах (до 992) — ширина блока = 12 (col-12)</li>
            <li>На экранах от lg до xxl (992-1400) — ширина блока = 8 (col-lg-8)</li>
            <li>На экранах xxl и выше (1400+) — ширина блока = 6 (col-xxl-6)</li>
          </ul>
        </div>

        <div className="Test__mixins mb-5">
          <h3>3. Пример использования миксина remedy-media-query</h3>
          <ul>
            <li className="mb-3">Зеленый — на экранах <b>lg и ниже (0-992px)</b></li>
            <li className="mb-3">
              Красный — от <b>lg до xl (992-1200px)</b>
              <pre>
                {'@include remedy-media-query(lg, Infinity) { background: red; }'}
              </pre>
            </li>
            <li className="mb-3">
              Синий — на <b>xl и выше (1200px+)</b>
              <pre>
                {'@include remedy-media-query(xl, Infinity) { background: blue; }'}
              </pre>
            </li>
          </ul>
        </div>

        <div className="Test__fonts mb-5">
          <h3>4. Пример размеров шрифтов</h3>
          <ul className="mt-4">
            <li className="Test__fonts-item Test__fonts-item--size10">Размер 1rem = 10px на 1440</li>
            <li className="Test__fonts-item Test__fonts-item--size16">Размер 1.6rem = 16px на 1440</li>
            <li className="Test__fonts-item Test__fonts-item--size20">Размер 2rem = 20px на 1440</li>
          </ul>
        </div>

        <div className="Test__variables mb-5">
          <h3>5. Переменные</h3>
          <ul className="mt-4">
            <li className="Test__variables-font Test__variables-font--montreal">
              Шрифт PP Neue Montreal — var(--remedy-Global--font-text)
            </li>
            <li className="Test__variables-font Test__variables-font--telegraf">
              Шрифт PP Telegraf — var(--remedy-Global--font-header)
            </li>
            <li>
              Sass-цвета:
              <span className="Test__variables-color Test__variables-color--white" title="$remedy-Global--color-white"/>
              <span className="Test__variables-color Test__variables-color--gray" title="$remedy-Global--color-gray"/>
              <span className="Test__variables-color Test__variables-color--dark-1" title="$remedy-Global--color-dark-1"/>
              <span className="Test__variables-color Test__variables-color--dark-2" title="$remedy-Global--color-dark-2"/>
              <span className="Test__variables-color Test__variables-color--dark-3" title="$remedy-Global--color-dark-3"/>
              <span className="Test__variables-color Test__variables-color--green" title="$remedy-Global--color-green"/>
            </li>
          </ul>
        </div>

        <div className="Test__variables mb-5">
          <h3>6. Максимальная ширина контента</h3>
          <div className="bg-info my-3">
            Этот блок растягивается в ширину бесконечно
          </div>
          <div className="bg-danger Global__app-content-max-width">
            А этот растягивается только до 1400px (так как имеет class="Global__app-content-max-width").<br/>
            <i>Используйте Global__app-content-max-width везде, кроме редких случаев, когда, например, надо сделать градиент во всю ширину</i>
          </div>
        </div>
      </div>



    </UserContainer>
  );
}
