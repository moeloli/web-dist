import{u as J,e as T,br as M,f as a,m as U,a0 as z,B,w as V,I as L,W as A,bb as I,n as x,bf as O,a7 as H,bq as W,bc as v,bs as K,ay as N,bt as Q,bu as X,bv as Y,c as Z,b4 as E}from"./index.7e0b41a4.js";import{u as j}from"./useT.0fdec411.js";import{a as ee,b as te}from"./index.b0a3b29c.js";async function*ae(r,c,m){const n=new Set;async function h(){const[w,o]=await Promise.race(n);return n.delete(w),o}for(const w of c){const o=(async()=>await m(w,c))().then(b=>[o,b]);n.add(o),n.size>=r&&(yield await h())}for(;n.size;)yield await h()}const re={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},ne=async r=>{let c=[];const m=async(n,h)=>{await new Promise(o=>{const b=s=>{console.error(s),o({})};n.isFile?n.file(s=>{const u=new File([s],h+s.name,{type:s.type});c.push(u),console.log(u),o({})},b):n.isDirectory&&n.createReader().readEntries(async u=>{for(let k=0;k<u.length;k++)await m(u[k],h+n.name+"/");o({})},b)})};return await m(r,""),c},oe=r=>{const c=j();return a(A,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${I()}`}},get children(){return[a(v,{css:{wordBreak:"break-all"},get children(){return r.path}}),a(z,{spacing:"$2",get children(){return[a(K,{get colorScheme(){return re[r.status]},get children(){return c(`home.upload.${r.status}`)}}),a(v,{get children(){return[N(()=>Q(r.speed)),"/s"]}})]}}),a(X,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return r.progress},size:"sm",get children(){return a(Y,{get color(){return I()},rounded:"$md"})}}),a(v,{color:"$danger10",get children(){return r.msg}})]}})},se=r=>({name:r.name,path:r.webkitRelativePath===""?r.name:r.webkitRelativePath,size:r.size,progress:0,speed:0,status:"pending"}),ue=()=>{const r=j(),{pathname:c}=J(),[m,n]=T(!1),[h,w]=T(!1),[o,b]=T(!1),[s,u]=M({uploads:[]}),k=()=>s.uploads.every(({status:t})=>["success","error"].includes(t));let P,D;const R=async t=>{if(t.length!==0){w(!0);for(const e of t){const g=se(e);u("uploads",p=>[...p,g])}for await(const e of ae(3,t,q))console.log(e)}},l=(t,e,g)=>{u("uploads",p=>p.path===t,e,g)},q=async t=>{const e=t.webkitRelativePath===""?t.name:t.webkitRelativePath;l(e,"status","uploading");const g=Z(c(),e);let p=new Date().valueOf(),y=0;try{const f=await E.put("/fs/put",await t.arrayBuffer(),{headers:{"File-Path":encodeURIComponent(g),"As-Task":o(),"Content-Type":t.type||"application/octet-stream"},onUploadProgress:i=>{if(i.lengthComputable){const $=i.loaded/i.total*100|0;l(e,"progress",$);const _=new Date().valueOf(),C=(_-p)/1e3;if(C>1){const S=(i.loaded-y)/C,G=(i.total-i.loaded)/S;l(e,"speed",S),console.log(G),p=_,y=i.loaded}$===100&&l(e,"status","backending")}}});f.code===200?(l(e,"status","success"),l(e,"progress",100)):(l(e,"status","error"),l(e,"msg",f.message))}catch(f){console.error(f),l(e,"status","error"),l(e,"msg",f.message)}};return a(A,{w:"$full",pb:"$2",spacing:"$2",get children(){return a(U,{get when(){return!h()},get fallback(){return[a(z,{spacing:"$2",get children(){return[a(B,{colorScheme:"accent",onClick:()=>{u("uploads",t=>t.filter(({status:e})=>!["success","error"].includes(e))),console.log(s.uploads)},get children(){return r("home.upload.clear_done")}}),a(U,{get when(){return k()},get children(){return a(B,{onClick:()=>{w(!1)},get children(){return r("home.upload.back")}})}})]}}),a(V,{get each(){return s.uploads},children:t=>a(oe,t)})]},get children(){return[a(L,{type:"file",multiple:!0,ref(t){const e=P;typeof e=="function"?e(t):P=t},display:"none",onChange:t=>{var e;R(Array.from((e=t.target.files)!=null?e:[]))}}),a(L,{type:"file",multiple:!0,webkitdirectory:!0,ref(t){const e=D;typeof e=="function"?e(t):D=t},display:"none",onChange:t=>{var e;R(Array.from((e=t.target.files)!=null?e:[]))}}),a(A,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${m()?I():"$neutral8"}`},rounded:"$lg",onDragOver:t=>{t.preventDefault(),n(!0)},onDragLeave:()=>{n(!1)},onDrop:async t=>{var i,$,_,C;t.preventDefault(),t.stopPropagation(),n(!1);const e=[],g=Array.from(($=(i=t.dataTransfer)==null?void 0:i.items)!=null?$:[]),p=Array.from((C=(_=t.dataTransfer)==null?void 0:_.files)!=null?C:[]);let y=0,f=g.length;for(let F=0;F<f;F++){if(y>0){x.warning(r("home.upload.only_files_or_one_folder"));return}const d=g[F].webkitGetAsEntry();console.log(d),d!=null&&d.isFile?e.push(p[F]):d!=null&&d.isDirectory&&(e.push(...await ne(d)),y++)}if(y>0&&f>1){x.warning(r("home.upload.only_files_or_one_folder"));return}e.length===0&&x.warning(r("home.upload.no_files_drag")),R(e)},spacing:"$4",h:"$48",get children(){return a(U,{get when(){return!m()},get fallback(){return a(O,{get children(){return r("home.upload.release")}})},get children(){return[a(O,{get children(){return r("home.upload.upload-tips")}}),a(z,{spacing:"$4",get children(){return[a(H,{compact:!0,size:"xl",get["aria-label"](){return r("home.upload.upload_folder")},colorScheme:"accent",get icon(){return a(ee,{})},onClick:()=>{D.click()}}),a(H,{compact:!0,size:"xl",get["aria-label"](){return r("home.upload.upload_files")},get icon(){return a(te,{})},onClick:()=>{P.click()}})]}}),a(W,{get checked(){return o()},onChange:()=>{b(!o())},get children(){return r("home.upload.add_as_task")}})]}})}})]}})}})};export{ue as default};
