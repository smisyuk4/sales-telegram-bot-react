export const flexBox = () => {
  return `display: flex;
    justify-content: center;
    align-items: center;`;
};

export const container = () => {
  return `padding: 15px 15px 0 15px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    header,
    main {
      margin-bottom: 10px;
    }

    form {
      left: 50%;
      position: relative;
      transform: translateX(-50%);
    }
  `;
};

export const pageTitle = () => {
  return `font-size: 18px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 480px) {
      font-size: 2em;
    }
  `;
};

export const returnButton = () => {
  return `color: var(--tg-second-text-color, #000);
    border: none;
    background-color: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #0057b8;
    }

    &.return {
      padding-right: 15px;
    }
  `;
};

// form components
export const formWrp = () => {
  return `display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 20px;
  `;
};

export const label = () => {
  return `position: relative;
    
    h2 {
      margin-bottom: 5px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.2;
    }

    p {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, 7px);

      font-size: 14px;
      font-style: italic;
      color: #0057B8;
    }
  `;
};

export const input = () => {
  return `padding: 10px 15px;
    width: 100%;

    font-size: 18px;
    line-height: 1.2;

    color: var(--tg-main-text-color, #000);
    background-color: var(--tg-second-bg-color);

    border-radius: 12px;
    border: 1px solid var(--tg-second-bg-color, #000);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &::placeholder {
      font-size: 18px;
      line-height: 1.2;
      font-style: italic;
      color: var(--tg-second-text-color, #61616170);
    }

    &:focus {
      border-color: #61616170;
      outline: none;
    }
  `;
};

export const textArea = () => {
  return `padding: 10px 15px;
    width: 100%;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;
    color: var(--tg-main-text-color, #000);

    border-radius: 12px;
    border: 1px solid var(--tg-second-bg-color, #000);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: var(--tg-second-bg-color);

    &::placeholder {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      font-size: 18px;
      line-height: 1.2;
      font-style: italic;
      color: var(--tg-second-text-color, #61616170);
    }

    &:focus {
      border-color: #61616170;
      outline: none;
    }
  `;
};

export const errorMessage = () => {
  return `font-size: 14px;
    font-style: italic;
    color: red;
    white-space: pre-wrap;
    `;
};

export const bigButton = () => {
  return `display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 15px;
    width: 100%;

    font-size: 18px;
    line-height: 1.2;
    color: black;

    border-radius: 12px;
    border: 1px solid black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;

    &:active {
      background-color: black;
      color: white;
    }
  `;
};

export const sendButton = () => {
  return `font-weight: 600;
    background-color: #b9b9b9;

    &[disabled] {
      color: #dddddd;
      background-color: #efefef4d;
      border-color: #efefef4d;

      &:active {
        color: #dddddd;
        background-color: #efefef4d;
      }
    }
  `;
};
