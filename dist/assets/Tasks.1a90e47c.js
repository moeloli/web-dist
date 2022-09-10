import{a as h,b4 as $,e as y,f as e,c5 as b,J as I,W as c,bf as m,bc as p,bu as B,bv as z,B as f,bd as k,n as P,m as S,bs as F,w as C,an as H,a0 as L,af as M}from"./index.7e0b41a4.js";import{u as l}from"./useT.0fdec411.js";const V={errored:"danger",succeeded:"success",canceled:"neutral"},_=t=>{const n=l();return e(F,{get colorScheme(){var r;return(r=V[t.state])!=null?r:"info"},get children(){return n(`tasks.${t.state}`)}})},j=t=>{const n=l(),r=t.done==="undone"?"cancel":"delete",[o,i]=h(()=>$.post(`/admin/task/${t.type}/${r}?tid=${t.id}`)),[d,s]=y(!1);return e(S,{get when(){return!d()},get children(){return e(b,{get bgColor(){return I("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(c,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(m,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(_,{get state(){return t.state}}),e(p,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(B,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(z,{color:"$info8",rounded:"$md"})}})]}}),e(b,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(f,{colorScheme:"danger",get loading(){return o()},onClick:async()=>{const u=await i();k(u,()=>{P.success(n("global.delete_success")),s(!0)})},get children(){return n(`global.${r}`)}})}})]}})}})},D=t=>{const n=l(),[r,o]=h(()=>$.get(`/admin/task/${t.type}/${t.done}`)),[i,d]=y([]),s=async()=>{const a=await o();k(a,g=>{var w;return d((w=g==null?void 0:g.sort((v,x)=>v.id>x.id?1:-1))!=null?w:[])})};if(s(),t.done==="undone"){const a=setInterval(s,2e3);H(()=>clearInterval(a))}const[u,T]=h(()=>$.post(`/admin/task/${t.type}/clear_done`));return e(c,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(m,{size:"lg",get children(){return n(`tasks.${t.done}`)}}),e(S,{get when(){return t.done==="done"},get children(){return e(L,{spacing:"$2",get children(){return[e(f,{colorScheme:"accent",get loading(){return r()},onClick:s,get children(){return n("global.refresh")}}),e(f,{get loading(){return u()},onClick:async()=>{const a=await T();k(a,()=>s())},get children(){return n("global.clear")}})]}})}}),e(c,{w:"$full",spacing:"$2",get children(){return e(C,{get each(){return i()},children:a=>e(j,M(a,t))})}})]}})},R=t=>{const n=l();return e(c,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(m,{size:"xl",get children(){return n(`tasks.${t.type}`)}}),e(c,{w:"$full",spacing:"$2",get children(){return e(C,{each:["undone","done"],children:r=>e(D,{get type(){return t.type},done:r})})}})]}})};export{R as T};
