import{V as z,cI as $,A as u,x as r,av as b,S as h,Q as i,aB as d,W as g,bG as w,bH as k,ao as M,bL as _,bM as A,bN as v,bO as O}from"./index-ad495dea.js";import{s as y,t as B,u as F}from"./index-d1778743.js";const H=x=>{var m;const t=z({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},x),[n,S]=$({pageSize:t.defaultPageSize,current:t.defaultCurrent});(m=t.setResetCallback)==null||m.call(t,()=>{S("current",t.defaultCurrent)});const a=u(()=>Math.ceil(t.total/n.pageSize)),f=u(()=>{const e=n.current,c=Math.max(2,e-Math.floor(t.maxShowPage/2));return Array.from({length:e-c},(P,s)=>c+s)}),p=u(()=>{const e=n.current,c=Math.min(a()-1,e+Math.floor(t.maxShowPage/2));return Array.from({length:c-e},(P,s)=>e+1+s)}),C=u(()=>Array.from({length:a()},(e,c)=>1+c)),o={"@initial":"sm","@md":"md"},l=e=>{var c;S("current",e),(c=t.onChange)==null||c.call(t,e)};return r(h,{get when(){return!t.hideOnSinglePage||a()>1},get children(){return r(b,{spacing:"$1",get children(){return[r(h,{get when(){return n.current!==1},get children(){return[r(i,{size:o,get colorScheme(){return t.colorScheme},onClick:()=>{l(1)},px:"$3",children:"1"}),r(d,{size:o,get icon(){return r(y,{})},"aria-label":"Previous",get colorScheme(){return t.colorScheme},onClick:()=>{l(n.current-1)},w:"2rem !important"})]}}),r(g,{get each(){return f()},children:e=>r(i,{size:o,get colorScheme(){return t.colorScheme},onClick:()=>{l(e)},px:e>10?"$2_5":"$3",children:e})}),r(w,{size:o,variant:"unstyled",get defaultValue(){return n.current},onChange:e=>{l(+e)},get children(){return[r(k,{as:i,size:o,width:"auto",px:"$1",variant:"solid",get colorScheme(){return t.colorScheme},get children(){return[r(M,{get px(){return n.current>10?"$1_5":"$2"},get children(){return n.current}}),r(B,{})]}}),r(_,{minW:"80px",get children(){return r(A,{get children(){return r(g,{get each(){return C()},children:e=>r(v,{value:e,get children(){return r(O,{px:"$2",children:e})}})})}})}})]}}),r(g,{get each(){return p()},children:e=>r(i,{size:o,get colorScheme(){return t.colorScheme},onClick:()=>{l(e)},px:e>10?"$2_5":"$3",children:e})}),r(h,{get when(){return n.current!==a()},get children(){return[r(d,{size:o,get icon(){return r(F,{})},"aria-label":"Next",get colorScheme(){return t.colorScheme},onClick:()=>{l(n.current+1)},w:"2rem !important"}),r(i,{size:o,get colorScheme(){return t.colorScheme},onClick:()=>{l(a())},get px(){return a()>10?"$2_5":"$3"},get children(){return a()}})]}})]}})}})};export{H as P};
