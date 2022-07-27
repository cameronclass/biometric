"use strict";(self["webpackChunkendless_vue"]=self["webpackChunkendless_vue"]||[]).push([[210],{9210:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register__bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"register"},[t._m(0),e("div",{staticClass:"register__form"},[e("div",{staticClass:"register__form_content"},[e("Login")],1)])])])])},a=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"register__info"},[r("div",{staticClass:"register__logo"},[r("img",{staticClass:"register__logo_img",attrs:{src:e(4791),alt:""}}),r("p",{staticClass:"register__logo_text"},[t._v("The future is open")])]),r("div",{staticClass:"register__img"},[r("img",{attrs:{src:e(892),alt:""}})])])}],i=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"c-login"},[r("router-link",{staticClass:"go-back",attrs:{to:"/"}},[r("img",{staticClass:"go-back__icon",attrs:{src:e(9023),alt:""}}),r("span",{staticClass:"go-back__text"},[t._v("Назад")])]),r("h2",{staticClass:"register__title"},[t._v("Войдите в систему")]),r("p",{staticClass:"register__subtitle"},[r("span",[t._v("Вы еще не зарегистрировались? ")]),r("router-link",{staticClass:"register__subtitle_link",attrs:{to:"/register"}},[t._v("Создать учетную запись")])],1),r("form",{attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),t.login.apply(null,arguments)}}},[r("div",{staticClass:"register-form register-form__login"},[r("c-input",{staticClass:"register-form__input",attrs:{type:"text",label:"Почта",placeholder:"email@company.com",rules:[t.rules.required,t.rules.email],name:"email",error:t.errors.email},model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)},expression:"form.email"}}),r("c-input",{staticClass:"register-form__input",attrs:{type:"password",label:"Пароль",rules:t.rules.required,error:t.errors.password,name:"password"},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),r("router-link",{staticClass:"register-form__password",attrs:{to:"password"}},[t._v("Забыли пароль?")])],1),r("c-button",{staticClass:"register-form__btn",attrs:{type:"submit"}},[t._v(" Войти ")])],1)],1)},l=[],o=e(3584),n=e(428),c={name:"c-login",components:{CButton:n.Z,CInput:o.Z},data(){return{errors:[],rules:{required(t,s){return""===t.trim()?{validated:!1,message:"Поле должно быть заполненно"}:{validated:!0,message:null}},email(t,s){const e=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);return e.test(t)?{validated:!0,message:null}:{validated:!1,message:"Поле должно быть валидным в формате email@company.com"}}},form:{email:"",password:""}}},methods:{async login(){if(this.errors=[],this.check()){await this.$store.dispatch("auth/login",this.form);const t=await this.$store.getters["auth/isAuthenticated"];t&&await this.$router.push("/dashboard")}},check(){for(const[t,s]of Object.entries(this.form))!1===this.rules.required(s,t).validated&&(this.errors[t]=this.rules.required(s,t).message),"email"===t&&void 0===this.errors[t]&&(this.errors[t]=this.rules.email(s,t).message);return 0===this.errors.length}}},u=c,m=e(1001),_=(0,m.Z)(u,i,l,!1,null,"7c8ff22e",null),d=_.exports,g={name:"login",components:{Login:d},metaInfo:{title:"Login | BIOMETRIC"}},f=g,p=(0,m.Z)(f,r,a,!1,null,"df85f1c2",null),h=p.exports}}]);
//# sourceMappingURL=210.ac0a67b1.js.map