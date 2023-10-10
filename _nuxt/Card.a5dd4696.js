import{_ as y}from"./nuxt-link.e487793f.js";import{_ as b}from"./Icon.3d0791ce.js";import{k as h,Q as v,R as k,S as p,d as g,H as $,I as C,U as S,V as _,W as w,b as a,N as n,w as d,c as u,n as s,K as l,f as o,e as c,L as B,P as N,t as U}from"./entry.62cc1941.js";import{r as I}from"./slot.dba81470.js";import"./node.e4a9c3bc.js";const V=v(p.ui.strategy,p.ui.card,k),j=g({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:i}=$("card",C(e,"ui"),V),r=S(()=>_(w(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:i,cardClass:r}}});function A(e,t,i,r,m,f){return a(),n(N(e.$attrs.onSubmit?"form":e.as),B({class:e.cardClass},e.attrs),{default:d(()=>[e.$slots.header?(a(),u("div",{key:0,class:s([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[l(e.$slots,"header")],2)):o("",!0),c("div",{class:s([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[l(e.$slots,"default")],2),e.$slots.footer?(a(),u("div",{key:1,class:s([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[l(e.$slots,"footer")],2)):o("",!0)]),_:3},16,["class"])}const D=h(j,[["render",A]]),L=c("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),O={class:"text-gray-900 dark:text-white font-medium text-base my-0"},P={key:2,class:"text-sm text-gray-500 dark:text-gray-400 mt-1 mb-0"},K=g({__name:"Card",props:{icon:{type:String,default:null},color:{type:String,default:"text-primary"},to:{type:String,default:null},title:{type:String,default:null}},setup(e){return(t,i)=>{const r=y,m=b,f=D;return a(),n(f,{class:s(["relative overflow-hidden flex items-center",[e.to&&"hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"]])},{default:d(()=>[e.to?(a(),n(r,{key:0,to:e.to,class:"focus:outline-none",tabindex:"-1"},{default:d(()=>[L]),_:1},8,["to"])):o("",!0),e.icon?(a(),n(m,{key:1,name:e.icon,class:s(["w-8 h-8 mb-4 inline-flex items-center align-text-top",e.color])},null,8,["name","class"])):o("",!0),c("p",O,U(e.title),1),t.$slots.default?(a(),u("p",P,[I(t.$slots,"default",{unwrap:"p"})])):o("",!0)]),_:3},8,["class"])}}});export{K as default};