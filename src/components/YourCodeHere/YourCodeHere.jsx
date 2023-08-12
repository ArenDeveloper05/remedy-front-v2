import React from "react";
import { Link } from "react-router-dom";
import { UserContainer } from "../User/UserContainer.jsx";
import { UIDropdown } from "../UI/UIDropdown.jsx";
//Icons
import Modal_Close_Icon from "../../assets/images/icon-modal-close.svg";
import Op_Logo from "../../assets/images/img-op.svg";
import Add_Url_Icon from "../../assets/images/icon-add-url.svg";
import Choose_File_Icon from "../../assets/images/icon-choose-file.svg";
import Icon__File from "../../assets/images/icon-file.svg";
import File_Close_Icon from "../../assets/images/icon-close.svg"
import File_Close_Icon_Hovered from "../../assets/images/icon-close-hovered.svg"
//SCSS
import "./YourCodeHere.scss";

export function YourCodeHere() {
  return (
    <UserContainer>
      <div className="ReportCreation">
        <div className="ReportCreation__modal">
          <div className="ReportCreation__modal__container">
            <div className="ReportCreation__modal__container__header">
              <p className="ReportCreation__modal__container__header__heading">
                Report submission
              </p>
              <div className="ReportCreation__modal__container__header__content">
                <div className="ReportCreation__modal__container__header__content__description">
                  <div className="ReportCreation__modal__container__header__content__description__logo">
                    <img src={Op_Logo} alt="logo" />
                  </div>

                  <div className="ReportCreation__modal__container__header__content__description__info">
                    <h4 className="ReportCreation__modal__container__header__content__description__info--title">
                      Optimism Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Doloribus molestiae distinctio quibusdam
                      minus ducimus excepturi voluptatum fugiat quae. Ad,
                      commodi totam distinctio fugit nulla sit vero nam saepe
                      minus facere.
                    </h4>
                    {/* На случай, если текст слишком большой */}
                    <div className="ReportCreation__modal__container__header__content__description__info--desc">
                      <p className="ReportCreation__modal__container__header__content__description__info--desc--text">
                        An open stack builders can create social
                      </p>
                    </div>
                    {/* На случай, если текст слишком большой */}
                    <p className="ReportCreation__modal__container__header__content__description__info--type">
                      <span className="ReportCreation__modal__container__header__content__description__info--type--small">
                        Type
                      </span>
                      Smart Contract
                    </p>
                  </div>
                </div>

                <div className="ReportCreation__modal__container__header__content__buttons">
                  <button className="UIButton UIButton--green-outline ReportCreation__modal__container__header__content__buttons__button">
                    Save as draft
                  </button>
                  <button className="UIButton UIButton--green ReportCreation__modal__container__header__content__buttons__button ReportCreation__modal__container__header__content__buttons__button--submit">
                    Submit Report
                  </button>
                </div>
              </div>
            </div>

            <div className="ReportCreation__modal__container__main">
              <div className="ReportCreation__modal__container__main__fields">
                <div className="ReportCreation__modal__container__main__fields__field">
                  <p className="ReportCreation__modal__container__main__fields__field--title">Asset</p>
                  <UIDropdown
                    className="ReportCreation__modal__container__main__fields__field--subject"
                    title="Select assets in scope"
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}
                  ></UIDropdown>
                </div>

                <div className="ReportCreation__modal__container__main__fields__field ReportCreation__modal__container__main__fields__field--error">
                  <p className="ReportCreation__modal__container__main__fields__field--title">Severity</p>
                  <UIDropdown
                    className="ReportCreation__modal__container__main__fields__field--subject"
                    title="Select Severity"
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}
                  ></UIDropdown>
                  <p className="ReportCreation__modal__container__main__fields__field--error--message">Please select a sevrity of the potential vulnerability</p>
                </div>

                <div className="ReportCreation__modal__container__main__fields__field  ReportCreation__modal__container__main__fields__field--error">
                  <p className="ReportCreation__modal__container__main__fields__field--title">
                    <span className="ReportCreation__modal__container__main__fields__field--title--small">
                      Report Title
                    </span>
                    <span className="ReportCreation__modal__container__main__fields__field--title--small--count">
                      12
                    </span>
                  </p>
                  <input
                    className="UIInput ReportCreation__modal__container__main__fields__field--subject"
                    type="text"
                    placeholder="Placeholder..."
                  />
                  <p className="ReportCreation__modal__container__main__fields__field--error--message">Please enter your report title</p>
                </div>

                <div className="ReportCreation__modal__container__main__fields__field ReportCreation__modal__container__main__fields__field--markdown ReportCreation__modal__container__main__fields__field--error">
                  <p className="ReportCreation__modal__container__main__fields__field--title">
                    <span className="ReportCreation__modal__container__main__fields__field--title--small">
                      Report Content
                    </span>
                    <span className="ReportCreation__modal__container__main__fields__field--title--small--count">15,000</span>
                  </p>
                  <div className="ReportCreation__modal__container__main__fields__field--markdown__area ReportCreation__modal__container__main__fields__field--subject">
                    <div className="ReportCreation__modal__container__main__fields__field--markdown__area__header">
                      <div className="ReportCreation__modal__container__main__fields__field--markdown__area__header__modes">
                        <div className="ReportCreation__modal__container__main__fields__field--markdown__area__header__modes__mode ReportCreation__modal__container__main__fields__field--markdown__area__header__modes__mode--active">
                          <span className="ReportCreation__modal__container__main__fields__field--markdown__area__header__modes__mode--text">Write</span>
                        </div>
                        <div className="ReportCreation__modal__container__main__fields__field--markdown__area__header__modes__mode ">
                          <span className="ReportCreation__modal__container__main__fields__field--markdown__area__header__modes__mode--text">Preview</span>
                        </div>
                      </div>

                      <div className="ReportCreation__modal__container__main__fields__field--markdown__area__header__info">
                        <span>How to use markdown</span>
                      </div>
                    </div>
                    <div className="ReportCreation__modal__container__main__fields__field--markdown__area__content"></div>
                  </div>
                  <p className="ReportCreation__modal__container__main__fields__field--error--message">You have reached the character limit</p>
                </div>

                <div className="ReportCreation__modal__container__main__fields__field ReportCreation__modal__container__main__fields__field--links ">
                  <div className="ReportCreation__modal__container__main__fields__field--links__title">
                    <p className="ReportCreation__modal__container__main__fields__field--links__title--text">
                      Additional links <span className="ReportCreation__modal__container__main__fields__field--links__title--text--small">(optional)</span>
                    </p>
                  </div>

                  <div className="ReportCreation__modal__container__main__fields__field--links__box">
                    <div className="ReportCreation__modal__container__main__fields__field--links__box__item">
                      <input
                        className="UIInput ReportCreation__modal__container__main__fields__field--links__box__item--input"
                        type="text"
                        placeholder="http://         Enter an additional link"
                      />
                    </div>
                    <div className="ReportCreation__modal__container__main__fields__field--links__box__item    ReportCreation__modal__container__main__fields__field--links__box__item--error">
                      <input
                        className="UIInput ReportCreation__modal__container__main__fields__field--links__box__item--input"
                        type="text"
                        placeholder="http://         Enter an additional link"
                      />
                      <p className="ReportCreation__modal__container__main__fields__field--links__box__item--error--message">
                        Please enter a valid URL
                      </p>
                    </div>
                    <div className="ReportCreation__modal__container__main__fields__field--links__box__item">
                      <input
                        className="UIInput ReportCreation__modal__container__main__fields__field--links__box__item--input"
                        type="text"
                        placeholder="http://         Enter an additional link"
                      />
                    </div>
                    <div className="ReportCreation__modal__container__main__fields__field--links__box__item">
                      <input
                        className="UIInput ReportCreation__modal__container__main__fields__field--links__box__item--input"
                        type="text"
                        placeholder="http://         Enter an additional link"
                      />
                    </div>
                  </div>

                  <div className="ReportCreation__modal__container__main__fields__field--links__addurl">
                    <img src={Add_Url_Icon} alt="add-url-icon" />
                    <span className="ReportCreation__modal__container__main__fields__field--links__addurl--text">Add another URL</span>
                  </div>
                </div>
                <div className="ReportCreation__modal__container__main__fields__field ReportCreation__modal__container__main__fields__field--attachments">
                  <div className="ReportCreation__modal__container__main__fields__field--attachments__title">
                    <p className="ReportCreation__modal__container__main__fields__field--attachments__title--text">
                      Attachments <span className="ReportCreation__modal__container__main__fields__field--attachments__title--text--small">(optional)</span>
                    </p>
                  </div>

                  <div className="ReportCreation__modal__container__main__fields__field--attachments__choosefile">
                    <div className="ReportCreation__modal__container__main__fields__field--attachments__choosefile--icon">
                      <img src={Choose_File_Icon} alt="choose-file-icon" className="ReportCreation__modal__container__main__fields__field--attachments__choosefile--icon--img"/>
                    </div>
                    <p className="ReportCreation__modal__container__main__fields__field--attachments__choosefile--text">Drag and drop files here or click to browse</p>
                  </div>

                  <div className="ReportCreation__modal__container__main__fields__field--attachments__files">
                    <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file">
                      <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name">
                        <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name--icon">
                          <img
                            src={Icon__File}
                            alt="attachment-file-name-icon"
                          />
                        </div>
                        <p className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name--text">F1 screenshot.png</p>
                        {/* На случай, если текст слишком большой */}
                      </div>

                      <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close">
                        <img src={File_Close_Icon} alt="file-close-icon" className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close--icon" />
                        <img src={File_Close_Icon_Hovered} alt="file-close-icon-hovered" className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close--hovered" />
                      </div>
                    </div>

                    <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file">
                      <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name">
                        <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name--icon">
                          <img
                            src={Icon__File}
                            alt="attachment-file-name-icon"
                          />
                        </div>
                        <p className="ReportCreation__modal__container__main__fields__field--attachments__files__file__name--text">F2 screenshot.png</p>
                        {/* На случай, если текст слишком большой */}
                      </div>

                      <div className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close">
                        <img src={File_Close_Icon} alt="file-close-icon" className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close--icon" />
                        <img src={File_Close_Icon_Hovered} alt="file-close-icon-hovered" className="ReportCreation__modal__container__main__fields__field--attachments__files__file__close--hovered" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ReportCreation__modal__container__main__buttons">
                <button className="UIButton UIButton--green-outline ReportCreation__modal__container__main__buttons__button">
                  Save as draft
                </button>
                <button className="UIButton UIButton--green ReportCreation__modal__container__main__buttons__button--submit">
                  Submit Report
                </button>
              </div>
            </div>
          </div>

          <div className="ReportCreation__modal__close">
            <div className="ReportCreation__modal__close--icon">
              <img src={Modal_Close_Icon} alt="Modal_Close_Icon"/>
            </div>
          </div>
        </div>
      </div>

      {/* ПИШИТЕ ВАШ КОД ЗДЕСЬ */}

      <div className="Test">
        <h1 className="mb-5">Ваш код будет тут</h1>
        <hr className="my-5" />

        <div className="mb-5">
          <h3>
            1. См. готовые UI элементы
            <Link target="_blank" to="/ui">
              тут
            </Link>
            (кнопки, инпут, дропдаун)
          </h3>
        </div>

        <div className="col-12 col-lg-8 col-xxl-6 bg-success mb-5">
          <h3>
            2. Пример классов Bootstrap (типа col-lg-6) с нашими кастомными
            брекпойнтами
          </h3>
          <code>
            <pre className="bg-light mx-3 rounded-1 p-2">
              {'<div class="col-12 col-lg-8 col-xxl-6">...</div>'}
            </pre>
          </code>
          У этого блока:
          <ul>
            <li>На маленьких экранах (до 992) — ширина блока = 12 (col-12)</li>
            <li>
              На экранах от lg до xxl (992-1400) — ширина блока = 8 (col-lg-8)
            </li>
            <li>
              На экранах xxl и выше (1400+) — ширина блока = 6 (col-xxl-6)
            </li>
          </ul>
        </div>

        <div className="Test__mixins mb-5">
          <h3>3. Пример использования миксина remedy-media-query</h3>
          <ul>
            <li className="mb-3">
              Зеленый — на экранах <b>lg и ниже (0-992px)</b>
            </li>
            <li className="mb-3">
              Красный — от <b>lg до xl (992-1200px)</b>
              <pre>
                {
                  "@include remedy-media-query(lg, Infinity) { background: red; }"
                }
              </pre>
            </li>
            <li className="mb-3">
              Синий — на <b>xl и выше (1200px+)</b>
              <pre>
                {
                  "@include remedy-media-query(xl, Infinity) { background: blue; }"
                }
              </pre>
            </li>
          </ul>
        </div>

        <div className="Test__fonts mb-5">
          <h3>4. Пример размеров шрифтов</h3>
          <ul className="mt-4">
            <li className="Test__fonts-item Test__fonts-item--size10">
              Размер 1rem = 10px на 1440
            </li>
            <li className="Test__fonts-item Test__fonts-item--size16">
              Размер 1.6rem = 16px на 1440
            </li>
            <li className="Test__fonts-item Test__fonts-item--size20">
              Размер 2rem = 20px на 1440
            </li>
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
              <span
                className="Test__variables-color Test__variables-color--white"
                title="$remedy-Global--color-white"
              />
              <span
                className="Test__variables-color Test__variables-color--gray"
                title="$remedy-Global--color-gray"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-1"
                title="$remedy-Global--color-dark-1"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-2"
                title="$remedy-Global--color-dark-2"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-3"
                title="$remedy-Global--color-dark-3"
              />
              <span
                className="Test__variables-color Test__variables-color--green"
                title="$remedy-Global--color-green"
              />
            </li>
          </ul>
        </div>

        <div className="Test__variables mb-5">
          <h3>6. Максимальная ширина контента</h3>
          <div className="bg-info my-3">
            Этот блок растягивается в ширину бесконечно
          </div>
          <div className="bg-danger Global__app-content-max-width">
            А этот растягивается только до 1400px (так как имеет
            class="Global__app-content-max-width").
            <br />
            <i>
              Используйте Global__app-content-max-width везде, кроме редких
              случаев, когда, например, надо сделать градиент во всю ширину
            </i>
          </div>
        </div>
      </div>
    </UserContainer>
  );
}
