"use strict";(self["webpackChunkendless_vue"]=self["webpackChunkendless_vue"]||[]).push([[516],{8516:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register__bg"},[s("div",{staticClass:"container"},[s("div",{staticClass:"register"},[e._m(0),s("div",{staticClass:"register__form"},[s("div",{staticClass:"register__form_content"},[s("Password")],1)])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register__info"},[r("div",{staticClass:"register__logo"},[r("img",{staticClass:"register__logo_img",attrs:{src:s(4791),alt:""}}),r("p",{staticClass:"register__logo_text"},[e._v("The future is open")])]),r("div",{staticClass:"register__img"},[r("img",{attrs:{src:s(892),alt:""}})])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"c-login"},[r("router-link",{staticClass:"go-back",attrs:{to:"/"}},[r("img",{staticClass:"go-back__icon",attrs:{src:s(9023),alt:""}}),r("span",{staticClass:"go-back__text"},[e._v("Назад")])]),r("h2",{staticClass:"register__title"},[e._v("Восстановление пароля")]),r("p",{staticClass:"register__subtitle"},[r("span",[e._v("Вы еще не зарегистрировались? ")]),r("router-link",{staticClass:"register__subtitle_link",attrs:{to:"/register"}},[e._v("Создать учетную запись")])],1),r("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("div",{staticClass:"register-form register-form__login"},[r("c-input",{staticClass:"register-form__input",attrs:{type:"text",label:"Имя пользователя",placeholder:"Имя пользователя",rules:e.rules.required,name:"username",error:e.errors.username},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),r("c-input",{staticClass:"register-form__input",attrs:{type:"email",label:"Почта",placeholder:"email@company.com",rules:e.rules.required,name:"email",error:e.errors.email},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("c-button",{staticClass:"register-form__btn",attrs:{type:"submit"}},[e._v(" Продолжить ")])],1)],1)},l=[],n=s(5200),o=(s(3210),s(4603),s(8450),s(4916),s(8386),s(9714),s(7601),s(9720),s(3584)),c=s(428),u={name:"c-password",components:{CButton:c.Z,CInput:o.Z},data:function(){return{rules:{required:function(e,t){return""===e.trim()?{validated:!1,message:"Поле должно быть заполненно"}:{validated:!0,message:null}},email:function(e,t){var s=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);return s.test(e)?{validated:!0,message:null}:{validated:!1,message:"Поле должно быть валидным в формате email@company.com"}}},errors:[],form:{email:"",username:""}}},methods:{login:function(){this.errors=[],this.check()},check:function(){for(var e=0,t=Object.entries(this.form);e<t.length;e++){var s=(0,n.Z)(t[e],2),r=s[0],a=s[1];this.rules.required(a,r).validated,this.errors[r]=this.rules.required(a,r).message}return 0===this.errors.length}}},m=u,_=s(1001),g=(0,_.Z)(m,i,l,!1,null,null,null),d=g.exports,f={name:"password",components:{Password:d},metaInfo:{title:"Reset Password | BIOMETRIC"}},p=f,v=(0,_.Z)(p,r,a,!1,null,null,null),C=v.exports}}]);
//# sourceMappingURL=516-legacy.1dbf7b89.js.map