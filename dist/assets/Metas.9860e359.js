import{a as $,b as k,aS as M,b5 as l,k as y,cE as C,e,ad as o,B as c,a6 as S,cF as F,cG as v,cH as d,E as g,cI as u,cJ as B,cK as n,b6 as h,n as H,a3 as x}from"./index.44cc2916.js";import{n as D}from"./index.0d8a97e9.js";import{D as E}from"./DeletePopover.b99147b6.js";import{W as I}from"./Wether.1b6b15ad.js";const J=()=>{const r=$();D("manage.sidemenu.metas");const{to:i}=k(),[p,m]=M(()=>l.get("/admin/meta/list")),[f,b]=y([]),a=async()=>{const t=await m();h(t,s=>b(s.content))};a();const[w,T]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(x,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(F,{highlightOnHover:!0,dense:!0,get children(){return[e(v,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(B,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(I,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(E,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{H.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{J as default};