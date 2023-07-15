import{N as s,j as e,r as a,O as n}from"./index-d117b3bd.js";import{n as r}from"./emotion-styled.browser.esm-cc51e17f.js";import{f as i}from"./mixins-1e7646ac.js";const l=r.div`
  padding: 0 15px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  header,
  main {
    margin-bottom: 10px;
  }
`,c=r.h1`
  text-align: center;
  text-transform: uppercase;
`,d=r.ul`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  border-bottom: 2px solid black;
`,t=r.li`
  width: calc(100% / 3);
`,o=r(s)`
  ${i}
  height: 100%;
  padding: 3px;

  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: black;
  cursor: pointer;

  &.active {
    color: #ffd700;
    background-color: #0057b8;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  &:hover {
    color: #0057b8;
    background-color: #ffd700;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`,x=r.div`
  ${i}

  gap: 5px;
  margin-bottom: 10px;
  font-size: 12px;

  a {
    text-decoration: underline;
    color: #0057b8;
    
    &:hover {
      background-color: #ffd700;
    }
  }
`,m=()=>e.jsxs(l,{children:[e.jsxs("div",{children:[e.jsxs("header",{children:[e.jsx(c,{children:"Оголошення"}),e.jsxs(d,{children:[e.jsx(t,{children:e.jsx(o,{to:"/buy","aria-label":"buy",children:"Хочу купити"})}),e.jsx(t,{children:e.jsx(o,{to:"/sale","aria-label":"sale",children:"Хочу продати"})}),e.jsx(t,{children:e.jsx(o,{to:"/ruls","aria-label":"ruls",children:"Правила"})})]})]}),e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Зараз будуть сприятливі умови для торгівлі..."}),children:e.jsx("main",{children:e.jsx(n,{})})})]}),e.jsx("footer",{children:e.jsxs(x,{children:[e.jsx("p",{children:"Розроблено"}),e.jsx("a",{href:"mailto:smisyuk@gmail.com",children:"smisyuk@gmail.com"})]})})]});export{m as default};
