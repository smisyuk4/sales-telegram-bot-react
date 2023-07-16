import{j as e,r as n}from"./index-bf6b4850.js";import{P as c,s as D,u as Q,a as W,L as Y,A as Z,F as ee,M as te,C as se,b as A,I as q,E,T as oe,c as re,B as ne,o as ae,d as ie,S as ce}from"./SaleForm.styled-ad4580db.js";import{n as d}from"./emotion-styled.browser.esm-ec5f7d06.js";import{e as M,f as le,b as de}from"./mixins-1e7646ac.js";import{R as he}from"./Ruls-ec76ca34.js";const ue=d.li`
  max-width: 80px;
`,B=d.span`
  ${M}
  ${le}
  height: 20px;
  min-width: 60px;
`,pe=d.img`
  height: 70px;
  object-fit: cover;
`,O=({link:t,isPermitted:u})=>e.jsxs(ue,{children:[u===!1?e.jsx(B,{children:"Помилка"}):e.jsx(B,{}),e.jsx(pe,{className:"image",src:t,alt:"",loading:"lazy",width:"400",height:"400"},t)]});O.propTypes={link:c.string,isPermitted:c.bool};const me=d.ul`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;
`,V=({array:t,imagesAfterCheck:u})=>{const x=a=>{var s;const i=(s=u[a])==null?void 0:s.isPermitted;if(i!==void 0)return!!i};return e.jsx(me,{children:t.map((a,i)=>e.jsx(O,{link:a,isPermitted:x(i)},i))})};V.propTypes={array:c.array.isRequired,imagesAfterCheck:c.array.isRequired};const ge=d.div`
  display: flex;
  flex-direction: column;
`,fe=d.label`
  position: relative;
  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
  }

  span {
    margin-bottom: 5px;
    font-size: 14px;
    font-style: italic;
  }

  p {
    position: absolute;
    top: 0;
    right: 0;
    font-style: italic;
    color: blue;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-5px, 7px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;

    border: 0;
    border-radius: 50%;
    background-color: #61616170;

    &:active {
      background-color: black;
      color: white;
    }
  }
`,xe=d.input`
  display: none;
`,je=d.button`
  ${de}
`,ye=d.span`
  ${M}
`,_=({register:t,photoError:u,setPhotos:x,setPhotoError:a,previewImage:i,setPreviewImage:s,setIsLoading:S})=>{const[h,b]=n.useState([]),[L,k]=n.useState([]),[C,j]=n.useState(!0);n.useEffect(()=>{if(h==null||h.length===0)return;(async()=>{j(!1),S(!0),a("");try{const{resultCheck:r}=await D("/check-photo/some",h);if(r.map(({isPermitted:l})=>l).find(l=>l===!1)===void 0){const l=r.map(({imageURL:p})=>p);x(l)}k(r)}catch(r){a(r.message)}j(!0),S(!1)})()},[h]);const R=m=>{if(s([]),k([]),!m.target.files)return;if(m.target.files.length>5){a("Має бути 5 або менше фото");return}const r=new FormData,y=m.target.files;let g=[];for(const l of Object.keys(y)){const p=y[l],f=`${Date.now()}_${p.name}`;r.append("photos",p,f),g=[...g,URL.createObjectURL(p)]}s(g),b(r)},I=()=>{document.getElementById("upfile").click()};return e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx("h2",{children:"Фото"}),e.jsx("span",{children:"* до 5 шт i не більше 10мб кожна"}),e.jsx(xe,{id:"upfile",...t("photos"),onChange:R,type:"file",accept:"image/jpeg image/png",multiple:!0})]}),e.jsx(je,{onClick:I,type:"button","aria-label":"Load",children:C?e.jsx("p",{children:"Завантажити"}):e.jsx("p",{children:"Перевірка фото змісту..."})}),e.jsx(ye,{children:u}),i.length>0&&e.jsx(V,{array:i,imagesAfterCheck:L})]})};_.propTypes={register:c.func.isRequired,photoError:c.string.isRequired,setPhotos:c.func.isRequired,setPhotoError:c.func.isRequired,previewImage:c.array.isRequired,setPreviewImage:c.func.isRequired};const Se={isAccept:!1,title:"",description:"",cost:"",contact:"",photos:null,photoURL:[]},be={headers:{"Content-Type":"application/json"}},ke=()=>{var P,T,U;const{register:t,handleSubmit:u,getValues:x,setValue:a,reset:i,formState:{errors:s,isValid:S}}=Q({defaultValues:Se,resolver:ae(ce),mode:"onChange"}),[h,b]=n.useState(0),[L,k]=n.useState(!1),[C,j]=n.useState(x("isAccept")),[R,I]=n.useState([]),[m,r]=n.useState(""),{user:y,onClose:g,queryId:l}=W(),[p,f]=n.useState(!1),[N,$]=n.useState(!1),z=({target:o})=>{const w=ie-o.value.length;b(v=>w)},G=()=>{a("contact",`@${y}`,{shouldValidate:!0})},H=o=>{a("photoURL",o,{shouldValidate:!0})},F=()=>{k(o=>!o)},J=async o=>{f(!0);const w=JSON.stringify({...o,queryId:l});try{if(await D("/web-data",w,be)){$(!0),g(),i(),j(!1),f(!1),b(0),I([]);const K=setTimeout(()=>{$(!1),clearTimeout(K)},1500);return}}catch(v){alert(`error ==> ${v.message}`),f(!1)}},X=o=>{console.log("form onErrors",o),r(o.photoURL.message)};return e.jsxs(e.Fragment,{children:[p&&e.jsx(Y,{}),N&&e.jsx(Z,{text:"Ваше оголошення відправлено"}),e.jsxs(ee,{onSubmit:u(J,X),children:[L&&e.jsx(te,{toggleRulsModal:F,children:e.jsx(he,{})}),e.jsx(se,{register:t,setIsChecked:j,isChecked:C,toggleRulsModal:F,errors:s}),e.jsxs(A,{children:[e.jsx("h2",{children:"Заголовок"}),e.jsx(q,{...t("title"),placeholder:"Продам Iphone 12 256 GB"}),e.jsx(E,{children:(P=s.title)==null?void 0:P.message})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Опис товару"}),h>0&&e.jsxs("p",{children:["до ",h," символів"]}),e.jsx(oe,{...t("description",{onChange:o=>z(o)}),rows:"4",cols:"50",placeholder:"Колір чорний, памʼять 256 GB..."}),e.jsx(E,{children:(T=s.description)==null?void 0:T.message})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Вартість, грн"}),e.jsx(q,{...t("cost"),placeholder:"14000"}),e.jsx(E,{children:(U=s.cost)==null?void 0:U.message})]}),e.jsx(re,{register:t,setContact:G,errors:s}),e.jsx(_,{register:t,photoError:m,setPhotoError:r,setPhotos:H,setPreviewImage:I,previewImage:R,setIsLoading:f}),e.jsx(ne,{disabled:!S&&!s,type:"submit","aria-label":"Send",children:"Відправити"})]})]})},ve=()=>e.jsx(ke,{});export{ve as default};
