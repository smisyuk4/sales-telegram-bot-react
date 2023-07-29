const e=()=>`display: flex;
    justify-content: center;
    align-items: center;`,t=()=>`padding: 15px 15px 0 15px;
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
  `,o=()=>`font-size: 18px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 480px) {
      font-size: 2em;
    }
  `,r=()=>`color: #000;
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
  `,n=()=>`display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 20px;
  `,i=()=>`position: relative;
    
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
      color: blue;
    }
  `,a=()=>`padding: 10px 15px;
    width: 100%;

    font-size: 18px;
    line-height: 1.2;

    border-radius: 12px;
    border: 1px solid;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &::placeholder {
      font-size: 18px;
      line-height: 1.2;
      font-style: italic;
    }

    &:focus {
      border-color: #61616170;
      outline: none;
    }
  `,s=()=>`padding: 10px 15px;
    width: 100%;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;

    border-radius: 12px;
    border: 1px solid;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &::placeholder {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      font-size: 18px;
      line-height: 1.2;
      font-style: italic;
    }

    &:focus {
      border-color: #61616170;
      outline: none;
    }
  `,p=()=>`font-size: 14px;
    font-style: italic;
    color: red;
    `,l=()=>`display: flex;
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
  `,x=()=>`font-weight: 600;
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
  `;export{n as a,l as b,t as c,p as e,e as f,a as i,i as l,o as p,r,x as s,s as t};
