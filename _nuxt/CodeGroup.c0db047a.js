import{_ as v}from"./ProseCodeIcon.vue.3fac02d1.js";import{d as _,X as y,H as h,r as k,U as u,b as s,c as m,e as x,F as C,M as B,J as e,n as c,N,P as w,g as I,C as V,t as $}from"./entry.62cc1941.js";import"./Icon.553a4fc0.js";const D=["onClick"],T=_({__name:"CodeGroup",setup(F){const f={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},i=y(),{ui:o}=h("content.codeGroup",void 0,f),d=k(0),b=u(()=>{var n;return((n=i.default)==null?void 0:n.call(i).map((a,l)=>{var r,t,p;return{label:((r=a.props)==null?void 0:r.filename)||((t=a.props)==null?void 0:t.label)||`${l}`,icon:(p=a.props)==null?void 0:p.icon,component:a}}))||[]}),g=u(()=>b.value.find((n,a)=>a===d.value));return(n,a)=>{const l=v;return s(),m("div",{class:c(e(o).wrapper)},[x("div",{class:c(e(o).header)},[(s(!0),m(C,null,B(e(b),(r,t)=>(s(),m("button",{key:t,tabindex:"-1",class:c([e(o).tab.base,e(d)===t?e(o).tab.active:e(o).tab.inactive]),onClick:p=>d.value=t},[I(l,{icon:r.icon,filename:r.label,class:c(e(o).tab.icon.base)},null,8,["icon","filename","class"]),V(" "+$(r.label),1)],10,D))),128))],2),(s(),N(w(e(g).component),{"hide-header":""}))],2)}}});export{T as default};
