import React from 'react';
import { Link } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import { UIDropdown } from '../UI/UIDropdown.jsx';
//Icons
import modalCloseIcon from "../../assets/images/icon-close.svg"
import OP_LOGO from "../../assets/images/img-op.svg"
import Add_Url_Icon from "../../assets/images/icon-add-url.svg"
import Choose_File_Icon from "../../assets/images/icon-choose-file.svg"
import Icon__File from "../../assets/images/icon-file.svg"
//SCSS
import './YourCodeHere.scss';



export function YourCodeHere(){

  return (
    <UserContainer>

      <div className='Report__background '>
        <div className='Report__modal'>


          <div className='Report__modal__container'>
            <div className='Report__modal__container__header'>
                <p>Report submission</p>
                <div className='Report__modal__container__header__content'>

                    <div className='Report__modal__container__header__content__description'>
                        <div className='Report__modal__container__header__content__description__logo'>
                          <img src={OP_LOGO} alt="logo" />
                        </div>

                        <div className='Report__modal__container__header__content__description__info'>
                          <h4>Optimism Lorem ipsum dolor sit 
                            amet consectetur adipisicing elit.
                            Doloribus molestiae distinctio quibusdam minus ducimus excepturi
                            voluptatum fugiat quae. Ad, commodi totam distinctio fugit nulla 
                            sit vero nam saepe minus facere.</h4> {/* На случай, если текст слишком большой */}
                          <div className='Report__modal__container__header__content__description__info__desc'><p>An open stack builders can create social</p></div>  {/* На случай, если текст слишком большой */}
                          <p>
                            <span>Type</span>
                             Smart Contract
                          </p>
                        </div>
                    </div>

                    <div className='Report__modal__container__header__content__buttons'>
                      <button className="UIButton UIButton--green-outline">Save as draft</button>
                      <button className="UIButton UIButton--green">Submit Report</button>
                    </div>

                </div>
            </div>


            <div className='Report__modal__container__main'>
                <div className='Report__modal__container__main__fields'>

                    <div className='Report__modal__container__main__fields__field'>
                        <p>Asset</p>
                        <UIDropdown className="my-custom-class" title="Select assets in scope" items={[ {title: "Item 1"}, {title: "Item 2"} ]}></UIDropdown>
                    </div>

                    <div className='Report__modal__container__main__fields__field     Field__error'>
                        <p>Severity</p>
                        <UIDropdown className="my-custom-class" title="Select Severity" items={[ {title: "Item 1"}, {title: "Item 2"} ]}></UIDropdown>
                        <p>Please select a sevrity of the potential vulnerability</p>
                    </div>

                    <div className='Report__modal__container__main__fields__field    Report__title__input     Field__error'>
                        <p><span>Report Title</span> <span>12</span></p>
                        <input className="UIInput" type="text" placeholder="Placeholder..."/>
                        <p>Please enter your report title</p>
                    </div>

                    <div className='Report__modal__container__main__fields__field     Report__content__field      Field__error '>
                        <p><span>Report Content</span> <span>15,000</span></p>
                        <div className='Report__content__area'>

                          <div className='Report__content__area__header'>

                              <div className='Report__content__area__header__modes'>
                                <div className='Report__content__area__header__modes__mode    Active--Markdown--Mode'>
                                  <span>Write</span>
                                </div>
                                <div className='Report__content__area__header__modes__mode '>
                                  <span>Preview</span>
                                </div>
                              </div>

                              
                              <div className='Report__content__area__header__info'>
                                <span>How to use markdown</span>
                              </div>

                          </div>
                          <div className='Report__content__area__content'>

                          </div>


                        </div>
                        <p>You have reached the character limit</p>
                    </div>

                    <div className='Report__modal__container__main__fields__field AdditionalLinks '>
                      <div className='AdditionalLinks__title'>
                          <p>
                            Additional links
                            <span>(optional)</span>
                          </p>
                      </div>

                      <div className='AdditionalLinks__box'>
                          <div className='AdditionalLinks__box__item'>
                              <input className="UIInput" type="text" placeholder="http://         Enter an additional link" />
                          </div>
                          <div className='AdditionalLinks__box__item    Additional--Link--Error'>
                              <input className="UIInput" type="text" placeholder="http://         Enter an additional link"/>
                              <p className='Additional--Link--Error--message'>Please enter a valid URL</p>
                          </div>
                          <div className='AdditionalLinks__box__item'>
                              <input className="UIInput" type="text" placeholder="http://         Enter an additional link"/>
                          </div>
                          <div className='AdditionalLinks__box__item'>
                              <input className="UIInput" type="text" placeholder="http://         Enter an additional link"/>
                              
                          </div>

                      </div>

                      <div className='AdditionalLinks__addUrl'>
                        <img src={Add_Url_Icon} alt="add-url-icon" />
                        <span>Add another URL</span>
                      </div>

                    </div> 
                    <div className='Report__modal__container__main__fields__field Attachments '>

                      <div className='Attachments__title'>
                        <p>Attachments  <span>(optional)</span></p>
                      </div>

                      <div className='Attachments__chooseFile'>
                        <div className='Attachments__chooseFile__icon'>
                          <img src={Choose_File_Icon} alt="choose-file-icon" />
                        </div>
                        <p>Drag and drop files here or click to browse</p>
                      </div>
                      
                      <div className='Attachments__files'>

                          <div className='Attachments__files__file'>

                            <div className='Attachments__files__file__name'>
                                <div className='Attachments__files__file__name__icon'>
                                    <img src={Icon__File} alt="attachment-file-name-icon" />
                                </div>
                                <p>F1 screenshot.png</p>  {/* На случай, если текст слишком большой */}
                            </div>

                            <div className='Attachments__files__file__close'>

                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9998 6.94376L17.056 6L11.9996 11.0562L6.94397 6.00071L6.00016 6.94447L11.0558 11.9999L6 17.0555L6.94381 17.9993L11.9996 12.9437L17.0562 18L18 17.0562L12.9435 11.9999L17.9998 6.94376Z" fill="#F5F5F5"/>
                              </svg>
                            </div>

                          </div>

                          <div className='Attachments__files__file'>

                            <div className='Attachments__files__file__name'>
                                <div className='Attachments__files__file__name__icon'>
                                    <img src={Icon__File} alt="attachment-file-name-icon" />
                                </div>
                                <p>F1 screenshot.png</p>
                            </div>


                            <div className='Attachments__files__file__close'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9998 6.94376L17.056 6L11.9996 11.0562L6.94397 6.00071L6.00016 6.94447L11.0558 11.9999L6 17.0555L6.94381 17.9993L11.9996 12.9437L17.0562 18L18 17.0562L12.9435 11.9999L17.9998 6.94376Z" fill="#F5F5F5"/>
                              </svg>
                            </div>
                            
                          </div>

                      </div>  

                    </div>

                </div>
                <div className='Report__modal__container__main-buttons'>
                    <button className="UIButton UIButton--green-outline">Save as draft</button>
                    <button className="UIButton UIButton--green">Submit Report</button>
                </div>

            </div>

          </div>


          <div className='Report__modal-close'>
            <div className='Report__modal-close-img'>
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
