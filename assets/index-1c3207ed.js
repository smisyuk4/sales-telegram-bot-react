import{N as n,j as e,r as a,O as i}from"./index-64705430.js";import{n as r,f as s}from"./mixins-b0484e1b.js";const l=r.div`
  padding: 0 15px;
  margin: 0 auto;
`,c=r.h1`
  text-align: center;
  text-transform: uppercase;
`,d=r.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
`,o=r.li`
  width: calc(100% / 3);
`,t=r(n)`
  ${s}
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
  }

  &:hover {
    color: #0057b8;
    background-color: #ffd700;
  }
`,x=r.div`
  ${s}

  gap: 5px;
  margin-bottom: 10px;
  font-size: 12px;

  a {
    text-decoration: underline;
    color: #0057b8;
  }

  &:hover {
    background-color: #ffd700;
  }
`,f=()=>e.jsxs(l,{children:[e.jsxs("header",{children:[e.jsx(c,{children:"Оголошення"}),e.jsxs(d,{children:[e.jsx(o,{children:e.jsx(t,{to:"/buy","aria-label":"buy",children:"Хочу купити"})}),e.jsx(o,{children:e.jsx(t,{to:"/sale","aria-label":"sale",children:"Хочу продати"})}),e.jsx(o,{children:e.jsx(t,{to:"/ruls","aria-label":"ruls",children:"Правила"})})]})]}),e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Зараз будуть сприятливі умови для торгівлі..."}),children:e.jsx("main",{children:e.jsx(i,{})})}),e.jsx("footer",{children:e.jsxs(x,{children:[e.jsx("p",{children:"Розроблено"}),e.jsx("a",{href:"mailto:smisyuk@gmail.com",children:"smisyuk@gmail.com"})]})})]});export{f as default};
