import{d as r,a0 as n,aw as c,ak as h,l as o,ax as l,b as d,c as u,N as f}from"./entry.f68031ab.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=c(h(o().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return l(a,t.src)}return t.src});return(s,a)=>(d(),u("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
