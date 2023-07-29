import{j as e,r as i}from"./index-72685862.js";import{n as E,c as ie}from"./notiflix-notify-aio-a7bb5e95.js";import{P as n,u as ee,s as G,M as le,C as ce,a as de,i as ue,o as pe,L as he,S as fe}from"./isObjectEmpty-8abe88ef.js";import{u as me,L as ge}from"./Loader-74f30f07.js";import{G as z}from"./firebase.config-a847182b.js";import{n as f}from"./emotion-styled.browser.esm-e07269da.js";import{e as te,f as xe,l as ye,b as je}from"./mixins-0b8905f2.js";import{T as I}from"./errorsAndMessages-afba9031.js";import{R as be}from"./Ruls-bc3fe234.js";import{F as Se,L as D,I as J,E as $,T as Ie,B as ke}from"./SaleForm.styled-9b1d0324.js";import{M as Re,B as Ce,a as K}from"./pagesStyle-bbdac604.js";function Le(s){return z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(s)}function Ee(s){return z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z",clipRule:"evenodd"}}]})(s)}function Te(s){return z({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}}]})(s)}const we=f.li`
  max-width: 80px;
`,Y=f.span`
  ${te}
  ${xe}
  height: 30px;
  min-width: 60px;
  text-align: center;
  line-height: 1;
`,ve=f.img`
  height: 70px;
  object-fit: cover;
`,se=({link:s,isPermitted:m})=>e.jsxs(we,{children:[m===!1?e.jsxs(Y,{children:["Зaміни",e.jsx("br",{}),"фото"]}):e.jsx(Y,{}),e.jsx(ve,{className:"image",src:s,alt:"",loading:"lazy",width:"400",height:"400"},s)]});se.propTypes={link:n.string,isPermitted:n.bool};const _e=f.ul`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;
`,oe=({array:s,imagesAfterCheck:m})=>{const j=t=>{var c;const r=(c=m[t])==null?void 0:c.isPermitted;if(r!==void 0)return!!r};return e.jsx(_e,{children:s.map((t,r)=>e.jsx(se,{link:t,isPermitted:j(r)},r))})};oe.propTypes={array:n.array.isRequired,imagesAfterCheck:n.array.isRequired};const Ae=f.div`
  display: flex;
  flex-direction: column;
`,Me=f.label`
  ${ye}

  span {
    margin-bottom: 5px;
    font-size: 14px;
    font-style: italic;
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
`,Q=f.input`
  display: none;
`,Ne=f.div`
  display: flex;
  gap: 10px;
`,q=f.button`
  ${je}

  &.load-some {
    width: 60%;

    @media screen and (min-width: 480px) {
      width: 80%;
    }
  }

  &.load-one {
    width: 20%;

    @media screen and (min-width: 480px) {
      width: 10%;
    }
  }

  &.remove {
    width: 20%;

    @media screen and (min-width: 480px) {
      width: 10%;
    }
  }

  &[disabled] {
    color: #dddddd;
    border-color: #efefef4d;

    &:active {
      background-color: #efefef4d;
      color: #dddddd;
    }
  }
`,Ue=f.span`
  ${te}
`;E.Notify.init({borderRadius:"8px",useIcon:!1,plainText:!1,fontSize:"18px",success:{textColor:"#ffd700",background:"#0057b8"},failure:{background:"#ff5549"}});const ae=({register:s,photoError:m,setPhotos:j,setPhotoError:t,previewImage:r,setPreviewImage:c,setIsLoading:p,removePhotos:k})=>{const{user:g,onClose:H,queryId:X,platform:T}=ee(),[b,P]=i.useState([]),[F,C]=i.useState([]),[w,v]=i.useState(!0),[_,A]=i.useState(!0);i.useEffect(()=>{if(b==null||b.length===0)return;(async()=>{var u,h;v(!1),p(!0),t("");try{const{resultCheck:o}=await G("/check-photo/some",b);if(o.find(d=>d===I.cannotConvert)&&t("Щось пішло не по плану. Спробуй з початку"),o.map(({isPermitted:d})=>d).find(d=>d===!1)===void 0){const d=o.map(({imageURL:N})=>N);j({isPermitted:!0,photoURL:d})}C(o)}catch(o){if(((u=o.response)==null?void 0:u.data)===I.fileSize)return t("Заборонений розмір файлу");if(((h=o.response)==null?void 0:h.data)===I.unexpectedFile)return t("Неочікуваний файл/и");if(o.code===I.network)return t("Якісь проблеми. Спробуй трішки пізніше");t(o.code)}finally{v(!0),p(!1)}})()},[b]);const M=x=>{if(c([]),C([]),!x.target.files)return;if(x.target.files.length>5){t("Має бути 5 або менше фото");return}const u=new FormData,h=x.target.files;let o=[];for(const S of Object.keys(h)){const y=h[S],a=`${Date.now()}_${y.name}`;u.append("photos",y,a),o=[...o,URL.createObjectURL(y)]}c(o),P(u)},O=async x=>{var S,y;if(!x.target.files[0])return;p(!0),A(!1);const u=x.target.files[0],h=new FormData,o=`${Date.now()}_${u.name}`;h.append("photo",u,o),c(a=>[...a,URL.createObjectURL(u)]);try{const{resultCheck:a}=await G("/check-photo/one",h);console.log(a),a===I.cannotConvert&&t("Щось пішло не по плану. Спробуй з початку"),j({isPermitted:a.isPermitted,photoURL:[a.imageURL]}),C(d=>[...d,a])}catch(a){if(((S=a.response)==null?void 0:S.data)===I.fileSize)return t("Заборонений розмір файлу");if(((y=a.response)==null?void 0:y.data)===I.unexpectedFile)return t("Неочікуваний файл/и");if(a.code===I.network)return t("Якісь проблеми. Спробуй трішки пізніше");t(a.code)}finally{A(!0),p(!1)}},R=()=>{T==="android"&&alert("Прикро, але ви можете обирати лише по 1 фото"),document.getElementById("upfiles").click()},B=()=>{document.getElementById("onefile").click()},V=()=>{k(),c([]),t(""),E.Notify.success("Всі фото видалені! <br> Завантажуй заново")};return e.jsxs(Ae,{children:[e.jsxs(Me,{children:[e.jsx("h2",{children:"Фото"}),e.jsx("span",{children:"* до 5 шт i не більше 10мб кожна"}),e.jsx(Q,{id:"upfiles",...s("photos"),onChange:M,type:"file",accept:"image/jpeg image/png",multiple:!0}),e.jsx(Q,{id:"onefile",...s("photos"),onChange:O,type:"file",accept:"image/jpeg image/png"})]}),e.jsxs(Ne,{children:[e.jsx(q,{className:"load-some",onClick:R,type:"button","aria-label":"Load some photo",children:w?e.jsx("p",{children:"Завантажити"}):e.jsx("p",{children:"Перевірка фото змісту..."})}),e.jsx(q,{className:"load-one",onClick:B,disabled:r.length===5,type:"button","aria-label":"Load one photo",children:_?e.jsx(Te,{}):e.jsx(Ee,{})}),e.jsx(q,{className:"remove",onClick:V,disabled:r.length===0,type:"button","aria-label":"remove all photos",children:e.jsx(Le,{})})]}),e.jsx(Ue,{children:m}),r.length>0&&e.jsx(oe,{array:r,imagesAfterCheck:F})]})};ae.propTypes={register:n.func.isRequired,photoError:n.string.isRequired,setPhotos:n.func.isRequired,setPhotoError:n.func.isRequired,previewImage:n.array.isRequired,setPreviewImage:n.func.isRequired,setIsLoading:n.func.isRequired,removePhotos:n.func.isRequired};E.Notify.init({borderRadius:"8px",useIcon:!1,plainText:!1,fontSize:"18px",success:{textColor:"#ffd700",background:"#0057b8"},failure:{background:"#ff5549"}});const Pe={isAccept:!1,title:"",description:"",cost:"",contact:"",photos:null,photoURL:[]},Fe={headers:{"Content-Type":"application/json"}},re=({user:s,queryId:m,onClose:j})=>{var d,N,W;const{register:t,handleSubmit:r,getValues:c,setValue:p,reset:k,formState:{errors:g,isDirty:H,isValid:X}}=me({defaultValues:Pe,resolver:pe(fe),mode:"onChange"}),[T,b]=i.useState(0),[P,F]=i.useState(!1),[C,w]=i.useState(c("isAccept")),[v,_]=i.useState([]),[A,M]=i.useState(""),[O,R]=i.useState(!1),[B,V]=i.useState(!1),x=({target:l})=>{const L=he-l.value.length;b(U=>L)},u=()=>{p("contact",`@${s}`,{shouldValidate:!0})},h=()=>{p("photoURL",[],{shouldValidate:!0})},o=({isPermitted:l,photoURL:L})=>{const ne=[...c("photoURL"),...L];V(l),p("photoURL",ne,{shouldValidate:!0})},S=()=>{F(l=>!l)},y=async l=>{R(!0);const L=JSON.stringify({...l,user:s,queryId:m});try{if(await G("/web-data-sale",L,Fe)){E.Notify.success("Ваше оголошення відправлено!"),j(),k(),w(!1),R(!1),b(0),_([]);return}}catch(U){E.Notify.failure(`Помилка відправки оголошення! <br> ${U.message}`),R(!1)}},a=l=>{console.log("form onErrors",l),l.photoURL&&M(l.photoURL.message)};return e.jsxs(e.Fragment,{children:[O&&e.jsx(ge,{}),P&&e.jsx(le,{toggleRulsModal:S,children:e.jsx(be,{})}),e.jsxs(Se,{onSubmit:r(y,a),autoComplete:"off",children:[e.jsx(ce,{register:t,setIsChecked:w,isChecked:C,toggleRulsModal:S,errors:g}),e.jsxs(D,{children:[e.jsx("h2",{children:"Заголовок"}),e.jsx(J,{...t("title"),placeholder:"Продам Iphone 12 256 GB"}),e.jsx($,{children:(d=g.title)==null?void 0:d.message})]}),e.jsxs(D,{children:[e.jsx("h2",{children:"Опис товару"}),T>0&&e.jsxs("p",{children:["до ",T," символів"]}),e.jsx(Ie,{...t("description",{onChange:l=>x(l)}),rows:"2",cols:"50",placeholder:"Колір чорний, памʼять 256 GB..."}),e.jsx($,{children:(N=g.description)==null?void 0:N.message})]}),e.jsxs(D,{children:[e.jsx("h2",{children:"Вартість, грн"}),e.jsx(J,{...t("cost"),placeholder:"14000"}),e.jsx($,{children:(W=g.cost)==null?void 0:W.message})]}),e.jsx(de,{register:t,setContact:u,errors:g}),e.jsx(ae,{register:t,photoError:A,setPhotoError:M,setPhotos:o,setPreviewImage:_,previewImage:v,setIsLoading:R,removePhotos:h}),e.jsx(ke,{disabled:!H||!X||!B||!ue(g),type:"submit","aria-label":"Send",children:"Відправити"})]})]})};re.propTypes={user:n.string,queryId:n.string,onClose:n.func};const{VITE_BOT_NAME:Z}={VITE_API_KEY:"AIzaSyDjaop_dMf76XIw9kE5rAx6GS8iB2xIGFI",VITE_AUTH_DOMAIN:"telegram-bot-d339c.firebaseapp.com",VITE_PROJECT_ID:"telegram-bot-d339c",VITE_STORAGE_BUCKET:"telegram-bot-d339c.appspot.com",VITE_MESSAGING_SENDER_ID:"1063834393786",VITE_APP_ID:"1:1063834393786:web:f3a8d12d6afa1f8d713683",VITE_MEASUREMENT_ID:"G-2S51PS053E",VITE_BOT_NAME:"cat_gm_bot",VITE_CHANNEL_NAME:"production_buy_sale",VITE_COLLECTION:"users",BASE_URL:"/sales-telegram-bot-react/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Je=()=>{const{user:s,onClose:m,queryId:j}=ee(),[t,r]=i.useState({}),[c,p]=i.useState(!0);if(i.useEffect(()=>{(async()=>{const g=await ie(s);r(g)})()},[s,r]),!s)return e.jsx(e.Fragment,{children:e.jsxs(Re,{children:["Немає користувача. ",e.jsx("br",{})," Запускай бота",e.jsx(Ce,{href:`https://t.me/${Z}`,target:"_blank",rel:"noopener noreferrer","aria-label":"link to telegram bot",children:`@${Z}`})]})});if(t.permission===!1)return e.jsx(K,{children:t.text});if(t.permission===!0){const k=setTimeout(()=>{p(!1),clearTimeout(k)},4e3);return e.jsxs(e.Fragment,{children:[c&&e.jsx(K,{children:t.text}),e.jsx(re,{user:s,queryId:j,onClose:m})]})}};export{Je as default};
