export const flexBox = () => {
  return `display: flex;
    justify-content: center;
    align-items: center;`;
};

export const errorMessage = () => {
  return `font-size: 14px;
    font-style: italic;
    color: red;`;
};

export const bigButton = () => {
  return `padding: 10px 15px;
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

export const returnButton = () => {
  return `color: #000;
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
