/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React from "react";

// компонент для перехода на следующую страницу для оформления КП
// Через пропсы в компонент передаётся объект hull_types, который хранит в себе данные о кузове
// на 14.09.2021 в объекте хранятся только самые базовые характеристики кузова
// потенциально можно в него можно включить базовые и доп. опции для оснащения

export default function Configurator_btn(props) {
  return (
    // фукционала пока нет, при нажатии выводит данные по текщему кузову в консоль
    <button
      className="configurator_btn"
      onClick={() => console.log(props.hull_types)}
    >
      <p>Конфигуратор</p>
    </button>
  );
}
