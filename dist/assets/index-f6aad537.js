import{u as l,j as r,N as c,r as d,O as x}from"./index-72685862.js";import{u,R as p,a as h,F as b}from"./Footer-b52c795d.js";import{a as j}from"./firebase.config-a847182b.js";import{n as e}from"./emotion-styled.browser.esm-e07269da.js";import{c as f,f as n,p as m}from"./mixins-0b8905f2.js";const a=e.button`
  position: absolute;
  right: 0;
  transform: translateX(-15px);

  color: #000;
  border: none;
  background-color: inherit;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #0057b8;
  }
`,g=()=>{const[s,N,C]=u(j),i=l();if(s)return r.jsx(r.Fragment,{children:r.jsx(a,{onClick:()=>i("/admin"),type:"button","aria-label":"Contact",children:r.jsx(p,{size:"2em"})})});if(!s)return r.jsx(r.Fragment,{children:r.jsx(a,{onClick:()=>i("/login",{replace:!0}),type:"button","aria-label":"Contact",children:r.jsx(h,{size:"2em"})})})},v=e.div`
  ${f}
`,k=e.div`
  ${n}
`,y=e.h1`
  ${m}
`,F=e.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`,t=e.li`
  width: calc(100% / 3);
`,o=e(c)`
  ${n}
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
`,$=()=>r.jsxs(v,{children:[r.jsxs("div",{children:[r.jsxs("header",{children:[r.jsxs(k,{children:[r.jsx(y,{children:"Оголошення"}),r.jsx(g,{})]}),r.jsxs(F,{children:[r.jsx(t,{children:r.jsx(o,{to:"/buy","aria-label":"buy",children:"Хочу купити"})}),r.jsx(t,{children:r.jsx(o,{to:"/sale","aria-label":"sale",children:"Хочу продати"})}),r.jsx(t,{children:r.jsx(o,{to:"/ruls","aria-label":"ruls",children:"Правила"})})]})]}),r.jsx(d.Suspense,{fallback:r.jsx("div",{children:"Зараз будуть сприятливі умови для торгівлі..."}),children:r.jsx("main",{children:r.jsx(x,{})})})]}),r.jsx(b,{})]});export{$ as default};
