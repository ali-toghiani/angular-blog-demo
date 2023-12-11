import{a as N}from"./chunk-G7UCTNOC.js";import{a as w,c as O,e as u,f as P,g as y,h as S,i as s,k as E,l as B,m as D,o as I}from"./chunk-BIGJDJWK.js";import{a as L}from"./chunk-4MFAVDDW.js";import{Ea as b,J as a,K as f,P as l,R as d,T as n,U as t,V as p,_ as C,da as o,ha as x,ia as v,la as M,sa as h,t as _}from"./chunk-IO2BSXBM.js";import"./chunk-PYQTE2ZK.js";function T(i,r){i&1&&(n(0,"div",14),o(1," Title is required "),t())}function F(i,r){i&1&&(n(0,"div",14),o(1," Title is required "),t())}function G(i,r){i&1&&p(0,"div",15)}function q(i,r){i&1&&(n(0,"div",16),o(1," Please fill all the required data "),t())}var R=()=>({height:"300px"}),W=(()=>{let r=class r{constructor(m,c){this.mockDataService=m,this.router=c,this.isLoading=!1,this.defaultImageURL="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",this.form=new S({title:new s("",{validators:u.required,nonNullable:!0}),image_url:new s(this.defaultImageURL,{validators:u.required,nonNullable:!0}),main_text:new s("",{validators:u.required,nonNullable:!0})})}submit(){this.isLoading=!0;let{title:m,image_url:c,main_text:e}=this.form.controls,g={id:Math.floor(Math.random()*9e3)+1e3,title:m.value,image_url:c.value,main_text:e.value,date:new Date().toDateString(),author_name:"John Doe",author_avatar_url:"https://randomuser.me/api/portraits/men/41.jpg",comments:[]};this.mockDataService.postBlog(g),setTimeout(()=>{this.router.navigate(["/",w.BLOGS_LIST,g.id])},3e3)}};r.\u0275fac=function(c){return new(c||r)(f(L),f(b))},r.\u0275cmp=_({type:r,selectors:[["app-create-blog"]],standalone:!0,features:[x],decls:26,vars:10,consts:[[1,"create-outer-container"],[1,"create-page-title"],[1,"create-inner-container",3,"formGroup","ngSubmit"],[1,"create-row","create-title-container"],[1,"create-label"],[1,"row-inner-container"],["rows","3","formControlName","title",1,"create-input","create-title-input",3,"readOnly"],["class","error-message",4,"ngIf"],[1,"create-row"],["type","url","formControlName","image_url",1,"create-input",3,"readOnly"],["format","text","formControlName","main_text","dir","ltr",1,"ps-mb-30px",3,"styles","readOnly"],[1,"button-secondary","create-submit-btn",3,"disabled"],["id","loading",4,"ngIf"],["error_message",""],[1,"error-message"],["id","loading"],[1,"error-template"]],template:function(c,e){c&1&&(n(0,"div",0)(1,"h1",1),o(2,"Write your own Blog !"),t(),n(3,"form",2),C("ngSubmit",function(){return e.submit()}),n(4,"div",3)(5,"label",4),o(6,"Title of blog:"),t(),n(7,"div",5)(8,"textarea",6),o(9,"        "),t(),d(10,T,2,0,"div",7),t()(),n(11,"div",8)(12,"label",4),o(13,"Blog Image URL:"),t(),n(14,"div",5),p(15,"input",9),d(16,F,2,0,"div",7),t()(),n(17,"div",8)(18,"label",4),o(19,"Content:"),t(),p(20,"quill-editor",10),t(),n(21,"button",11),o(22," Submit "),d(23,G,1,0,"div",12),t()(),d(24,q,2,0,"ng-template",null,13,M),t()),c&2&&(a(3),l("formGroup",e.form),a(5),l("readOnly",e.isLoading),a(2),l("ngIf",e.form.controls.title.touched&&e.form.controls.title.invalid),a(5),l("readOnly",e.isLoading),a(1),l("ngIf",e.form.controls.image_url.touched&&e.form.controls.image_url.invalid),a(4),l("styles",v(9,R))("readOnly",e.isLoading),a(1),l("disabled",e.form.touched&&e.form.invalid||e.isLoading?"disabled":null),a(2),l("ngIf",e.isLoading))},dependencies:[N,I,E,O,P,y,B,D,h],styles:['.create-outer-container[_ngcontent-%COMP%]{max-width:900px;padding-inline:15px;padding-top:50px;padding-bottom:50px;width:100%;margin-inline:auto;display:flex;flex-direction:column}.create-outer-container[_ngcontent-%COMP%]   .create-page-title[_ngcontent-%COMP%]{margin-inline:auto;margin-bottom:30px}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]{background:white;border-radius:30px;width:100%;display:flex;flex-direction:column;padding:30px 20px 20px;row-gap:30px;font-size:15px}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;column-gap:20px;row-gap:10px}@media only screen and (max-width: 500px){.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]{flex-direction:column}}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]   .row-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]   .create-label[_ngcontent-%COMP%]{white-space:nowrap;font-family:Mulish;font-weight:600;color:var(--gray);min-width:125px}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]   .create-label[_ngcontent-%COMP%]:after{content:"*";color:red}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-row[_ngcontent-%COMP%]   .create-input[_ngcontent-%COMP%]{width:100%;border-radius:5px;padding:5px 10px;border:1px solid var(--gray);font-family:Mulish}.create-outer-container[_ngcontent-%COMP%]   .create-inner-container[_ngcontent-%COMP%]   .create-submit-btn[_ngcontent-%COMP%]{width:fit-content;margin-inline:auto;margin-top:20px}.create-outer-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#cd5c5c;border:1px solid indianred;padding:5px 10px;margin-top:3px;border-radius:5px}']});let i=r;return i})();export{W as CreateBlogComponent};