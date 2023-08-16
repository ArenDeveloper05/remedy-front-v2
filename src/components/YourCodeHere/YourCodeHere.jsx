import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContainer } from "../User/UserContainer.jsx";
import { UIDropdown } from "../UI/UIDropdown.jsx";
//SCSS
import "./YourCodeHere.scss";

export function YourCodeHere() {
  const [writeMode, setWriteMode] = useState(true); //For changing write and preview mode

  return (
    <UserContainer>
      <div className="background">
        <div className="ReportCreation">
          <div className="ReportCreation__head">
            <p className="ReportCreation__head__heading">Report submission</p>
            <div className="d-flex justify-content-between align-items-start">
              <div className="ReportCreation__head__logo">
                <div className="ReportCreation__head__logo__icon"></div>
                <div className="ReportCreation__head__logo__info">
                  <h4 className="ReportCreation__head__logo__info--title">
                    Optimism Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Doloribus molestiae distinctio quibusdam minus ducimus
                    excepturi voluptatum fugiat quae. Ad, commodi totam
                    distinctio fugit nulla sit vero nam saepe minus facere.
                  </h4>
                  {/* На случай, если текст слишком большой */}
                  <div className="ReportCreation__head__logo__info--desc">
                    An open stack builders can create social
                  </div>
                  {/* На случай, если текст слишком большой */}
                  <p className="ReportCreation__head__logo__info--type">
                    <span className="ReportCreation__head__logo__info--type--small">
                      Type
                    </span>
                    Smart Contract
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="UIButton UIButton--green-outline ReportCreation__draft">
                  Save as draft
                </button>
                <button className="UIButton UIButton--green ReportCreation__submit">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
          <div className="ReportCreation__main">
            <div className="ReportCreation__main__selects">
              <div className="ReportCreation__main__selects__group">
                <div className="ReportCreation__main__selects__group--label">
                  Asset
                </div>
                <UIDropdown
                  className="ReportCreation__main__selects__group--field ReportCreation__asset--field"
                  title="Select assets in scope"
                  items={[{ title: "Item 1" }, { title: "Item 2" }]}
                ></UIDropdown>
                {/* Dropdown for Asset */}
                <div className="ReportCreation__asset__dropdown">
                  <div className="ReportCreation__asset__dropdown__search">
                    <div className="ReportCreation__asset__dropdown__search--icon"></div>
                    <input
                      id="ReportCreation__asset__dropdown__search--input"
                      type="text"
                      placeholder="Search by asset link..."
                    />
                  </div>
                  <div className="ReportCreation__asset__dropdown__body">
                    <div className="ReportCreation__asset__dropdown__body__websites">
                      <p className="ReportCreation__asset__dropdown__body__websites--label">
                        Websites and Applications
                      </p>
                      <div className="ReportCreation__asset__dropdown__body__websites--container">
                        <div className="ReportCreation__asset__dropdown__body__websites--container__item">
                          <label className="ReportCreation__asset__checkbox--main">
                            <input
                              type="checkbox"
                              className="ReportCreation__asset__checkbox--input"
                            />
                            <span className="ReportCreation__asset__checkbox--custom"></span>
                          </label>
                          <div>
                            <p className="ReportCreation__asset__dropdown__body__websites--container__item--heading">
                              Proxy and implementation
                            </p>
                            <p className="ReportCreation__asset__dropdown__body__websites--container__item--url">
                              https://immunefi.com/ Lorem ipsum dolor sit amet
                              consectetur, adipisicing elit. Omnis excepturi
                              sequi animi in est, dolor, placeat mollitia beatae
                              quibusdam iusto voluptatem eius doloremque? Libero
                              amet minus ducimus, omnis laudantium
                              exercitationem!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ReportCreation__asset__dropdown__body__contracts">
                      <div className="ReportCreation__asset__dropdown__body__contracts--label">
                        Smart Contracts
                      </div>
                      <div className="ReportCreation__asset__dropdown__body__contracts--container">
                        <div className="ReportCreation__asset__dropdown__body__contracts--container__item">
                          <label className="ReportCreation__asset__checkbox--main">
                            <input
                              type="checkbox"
                              className="ReportCreation__asset__checkbox--input"
                            />
                            <span className="ReportCreation__asset__checkbox--custom"></span>
                          </label>
                          <div>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--heading">
                              AaveDebtPositionParserType
                            </p>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--url">
                              https://etherscan.io/address/0xf6d47bdee7760067557b047ce4adcba819d7d5a8
                            </p>
                          </div>
                        </div>
                        <div className="ReportCreation__asset__dropdown__body__contracts--container__item">
                          <label className="ReportCreation__asset__checkbox--main">
                            <input
                              type="checkbox"
                              className="ReportCreation__asset__checkbox--input"
                            />
                            <span className="ReportCreation__asset__checkbox--custom"></span>
                          </label>
                          <div>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--heading">
                              AaveDebtPositionParserType
                            </p>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--url">
                              https://etherscan.io/address/0xf6d47bdee7760067557b047ce4adcba819d7d5a8
                            </p>
                          </div>
                        </div>
                        <div className="ReportCreation__asset__dropdown__body__contracts--container__item">
                          <label className="ReportCreation__asset__checkbox--main">
                            <input
                              type="checkbox"
                              className="ReportCreation__asset__checkbox--input"
                            />
                            <span className="ReportCreation__asset__checkbox--custom"></span>
                          </label>
                          <div>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--heading">
                              AaveDebtPositionParserType
                            </p>
                            <p className="ReportCreation__asset__dropdown__body__contracts--container__item--url">
                              https://etherscan.io/address/0xf6d47bdee7760067557b047ce4adcba819d7d5a8
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ReportCreation__asset__dropdown__footer">
                    <div className="ReportCreation__asset__dropdown__footer--title">
                      Not related to listed assets
                    </div>
                    <div className="ReportCreation__asset__dropdown__footer--description">
                      Choose if the vulnerability was found in a custom asset
                    </div>
                  </div>
                </div>
                {/* Dropdown for Asset */}
              </div>
              <div className="ReportCreation__main__selects__group Error">
                <div className="ReportCreation__main__selects__group--label Error-label">
                  Severity
                </div>
                <UIDropdown
                  className="ReportCreation__main__selects__group--field Error-field"
                  title="Select Severity"
                  items={[{ title: "Item 1" }, { title: "Item 2" }]}
                ></UIDropdown>
                <p className="Error-message">
                  Please select a sevrity of the potential vulnerability
                </p>
                {/* Dropdown for Severity */}
                <div className="ReportCreation__severity__dropdown">
                  <div className="ReportCreation__severity__dropdown__item">
                    <span className="ReportCreation__severity__dropdown__item--title">
                      Critical
                    </span>
                  </div>
                  <div className="ReportCreation__severity__dropdown__item">
                    <span className="ReportCreation__severity__dropdown__item--title">
                      High
                    </span>
                  </div>
                  <div className="ReportCreation__severity__dropdown__item">
                    <span className="ReportCreation__severity__dropdown__item--title">
                      Medium
                    </span>
                  </div>
                  <div className="ReportCreation__severity__dropdown__item">
                    <span className="ReportCreation__severity__dropdown__item--title">
                      Low
                    </span>
                  </div>
                  <div className="ReportCreation__severity__dropdown__item">
                    <span className="ReportCreation__severity__dropdown__item--title">
                      Informational
                    </span>
                  </div>
                </div>
                {/* Dropdown for Severity */}
              </div>
              <div className="ReportCreation__main__selects__group Error">
                <div className="ReportCreation__main__selects__group--label Error-label">
                  Report Title
                  <span className="ReportCreation__main__selects__group--label--count">
                    12
                  </span>
                </div>
                <input
                  className="UIInput ReportCreation__main__selects__group--field Error-field"
                  type="text"
                  placeholder="Enter your report title..."
                />
                <p className="Error-message">Please enter your report title</p>
              </div>
            </div>
            <div className="ReportCreation__main__markdown Error">
              <div className="ReportCreation__main__markdown--label Error-label">
                Report Content
                <span className="ReportCreation__main__markdown--label--count">
                  15,000
                </span>
              </div>
              <div className="ReportCreation__main__markdown__box Error-field">
                <div className="ReportCreation__main__markdown__box__head">
                  <div className="d-flex align-items-center">
                    <div className="ReportCreation__main__markdown__box__head--write Active">
                      Write
                    </div>
                    <div className="ReportCreation__main__markdown__box__head--preview">
                      Preview
                    </div>
                  </div>
                  <div className="ReportCreation__main__markdown__box__head__info">
                    How to use markdown
                  </div>
                </div>
                <div className="ReportCreation__main__markdown__box__body">
                  {writeMode ? (
                    <div className="ReportCreation__main__markdown__box__body--write">
                      <div className="ReportCreation__main__markdown__box__body--write__lines">
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          1
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          2
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          3
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          4
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          5
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          6
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          7
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          8
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          9
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          10
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          11
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          12
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          13
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          14
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--write__lines__number">
                          15
                        </div>
                      </div>
                      <textarea className="ReportCreation__main__markdown__box__body--write__textarea">
                        ## Bug Description&#13;A clear and concise description
                        of the bug.&#13;&#13;## Impact&#13;&#13;## Risk
                        Breakdown&#13;Difficulty to Exploit:
                        Easy&#13;Weakness:&#13;CVSS2 Score:&#13;&#13;##
                        Recommendation&#13;&#13;## References&#13;&#13;## Proof
                        Of Concept
                      </textarea>
                    </div>
                  ) : (
                    <div className="ReportCreation__main__markdown__box__body--preview">
                      <div className="ReportCreation__main__markdown__box__body--preview__title">
                        Bug Description
                      </div>
                      <div className="ReportCreation__main__markdown__box__body--preview__description">
                        A clear and concise description of the bug.
                      </div>
                      <div className="ReportCreation__main__markdown__box__body--preview__impact">
                        Impact
                      </div>
                      <div className="ReportCreation__main__markdown__box__body--preview__container">
                        <div className="ReportCreation__main__markdown__box__body--preview__container__head">
                          <div className="ReportCreation__main__markdown__box__body--preview__container__head--title">
                            Code
                            <div className="ReportCreation__main__markdown__box__body--preview__container__head--title--bytes">
                              31 Bytes
                            </div>
                          </div>
                          <div className="ReportCreation__main__markdown__box__body--preview__container__head--icons">
                            <div className="ReportCreation__main__markdown__box__body--preview__container__head--icons--copy"></div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__head--icons--share"></div>
                          </div>
                        </div>
                        <div className="ReportCreation__main__markdown__box__body--preview__container__main">
                          <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines">
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              1
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              2
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              3
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              4
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              5
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              6
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__lines__number">
                              7
                            </div>
                          </div>
                          <div className="ReportCreation__main__markdown__box__body--preview__container__main__code">
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              border-box
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              Layout
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              display:{" "}
                              <span className="ReportCreation__main__markdown__box__body--preview__container__main__code--text--value">
                                flex;
                              </span>
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              padding:{" "}
                              <span className="ReportCreation__main__markdown__box__body--preview__container__main__code--text--value">
                                8px 16px;
                              </span>
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              align-items:{" "}
                              <span className="ReportCreation__main__markdown__box__body--preview__container__main__code--text--value">
                                center;
                              </span>
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              gap:{" "}
                              <span className="ReportCreation__main__markdown__box__body--preview__container__main__code--text--value">
                                8px;
                              </span>
                            </div>
                            <div className="ReportCreation__main__markdown__box__body--preview__container__main__code--text">
                              align-self:{" "}
                              <span className="ReportCreation__main__markdown__box__body--preview__container__main__code--text--value">
                                stretch;
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="Error-message">
                You have reached the character limit
              </div>
            </div>
            <div className="ReportCreation__main__links">
              <div className="ReportCreation__main__links__label">
                Additional links{" "}
                <span className="ReportCreation__main__links__label--small">
                  (optional)
                </span>
              </div>
              <div className="ReportCreation__main__links__box">
                <div className="ReportCreation__main__links__box__item">
                  <input
                    className="UIInput ReportCreation__main__links__box__item--field"
                    type="text"
                    placeholder="http://         Enter an additional link"
                  />
                </div>
                <div className="ReportCreation__main__links__box__item Error">
                  <input
                    className="UIInput ReportCreation__main__links__box__item--field Error-field"
                    type="text"
                    placeholder="http://         Enter an additional link"
                  />
                  <p className="Error-message">Please enter a valid URL</p>
                </div>
                <div className="ReportCreation__main__links__box__item">
                  <input
                    className="UIInput ReportCreation__main__links__box__item--field"
                    type="text"
                    placeholder="http://         Enter an additional link"
                  />
                </div>
                <div className="ReportCreation__main__links__box__item">
                  <input
                    className="UIInput ReportCreation__main__links__box__item--field"
                    type="text"
                    placeholder="http://         Enter an additional link"
                  />
                </div>
              </div>
              <div className="ReportCreation__main__links__add">
                <div className="ReportCreation__main__links__add--icon"></div>
                <span className="ReportCreation__main__links__add--description">
                  Add another URL
                </span>
              </div>
            </div>
            <div className="ReportCreation__main__attachments">
              <div className="ReportCreation__main__attachments__label">
                Attachments{" "}
                <span className="ReportCreation__main__attachments__label--small">
                  (optional)
                </span>
              </div>
              <div className="ReportCreation__main__attachments__choosefile">
                <div className="ReportCreation__main__attachments__choosefile--img">
                  <div className="ReportCreation__main__attachments__choosefile--img--icon"></div>
                </div>
                <div className="ReportCreation__main__attachments__choosefile--description">
                  Drag and drop files here or click to browse
                </div>
              </div>
              <div className="ReportCreation__main__attachments__files">
                <div className="ReportCreation__main__attachments__files__file">
                  <div className="d-flex align-items-baseline">
                    <div className="ReportCreation__main__attachments__files__file--icon"></div>
                    <div className="ReportCreation__main__attachments__files__file--text">
                      F1 screenshot.png
                    </div>
                    {/* На случай, если текст слишком большой */}
                  </div>
                  <div className="ReportCreation__main__attachments__files__file__close">
                    <div className="ReportCreation__main__attachments__files__file__close--icon"></div>
                    <div className="ReportCreation__main__attachments__files__file__close--hovered"></div>
                  </div>
                </div>
                <div className="ReportCreation__main__attachments__files__file">
                  <div className="d-flex align-items-baseline">
                    <div className="ReportCreation__main__attachments__files__file--icon"></div>
                    <div className="ReportCreation__main__attachments__files__file--text">
                      F1 screenshot.png
                    </div>
                    {/* На случай, если текст слишком большой */}
                  </div>
                  <div className="ReportCreation__main__attachments__files__file__close">
                    <div className="ReportCreation__main__attachments__files__file__close--icon"></div>
                    <div className="ReportCreation__main__attachments__files__file__close--hovered"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="UIButton UIButton--green-outline ReportCreation__draft">
                Save as draft
              </button>
              <button className="UIButton UIButton--green ReportCreation__submit">
                Submit Report
              </button>
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
