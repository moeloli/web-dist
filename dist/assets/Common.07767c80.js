import{u as v,a as l,b4 as r,br as $,bN as C,e as w,f as t,bO as I,af as R,bd as o,n as u,a0 as L,B as p,W as T}from"./index.7e0b41a4.js";import{u as _}from"./useT.0fdec411.js";import{b as x}from"./useTitle.b4f89c2e.js";import{I as B}from"./SettingItem.b73960b4.js";import{R as D}from"./ResponsiveGrid.65d8235a.js";import"./index.388684b1.js";import"./index.e2e838ec.js";import"./item_type.be442da4.js";const j=m=>{const s=_(),{pathname:d}=v();x(`manage.sidemenu.${d().split("/").pop()}`);const[f,h]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[i,c]=$([]),a=async()=>{const e=await h();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",C(i))),[k,g]=w(!1);return t(T,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(I,{each:i,children:(e,F)=>t(B,R(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{u.success(s("global.delete_success")),a()})}}))})}}),t(L,{spacing:"$2",get children(){return[t(p,{colorScheme:"accent",onClick:a,get loading(){return f()||k()},get children(){return s("global.refresh")}}),t(p,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>u.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{j as default};
