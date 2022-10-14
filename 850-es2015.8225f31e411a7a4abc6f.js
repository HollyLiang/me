"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[850],{3850:function(r,n,e){e.r(n),e.d(n,{AuthModule:function(){return v}});var t=e(8583),o=e(3679),i=e(7179),s=e(7716),c=e(4769),a=e(3902),u=e(8295),g=e(9983);function m(r,n){if(1&r&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&r){const r=s.oxw(2);s.xp6(1),s.Oqu(r.requiredText)}}function l(r,n){if(1&r&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&r){const r=s.oxw(2);s.xp6(1),s.Oqu(r.formatIncorrectText)}}function p(r,n){if(1&r&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&r){const r=s.oxw(2);s.xp6(1),s.Oqu(r.maxlengthText)}}function h(r,n){if(1&r&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&r){const r=s.oxw(2);s.xp6(1),s.Oqu(r.rangeText)}}function f(r,n){if(1&r&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&r){const r=s.oxw(2);s.xp6(1),s.Oqu(r.rangeText)}}function d(r,n){if(1&r&&(s.ynx(0),s.YNc(1,m,2,1,"span",0),s.YNc(2,l,2,1,"span",0),s.YNc(3,p,2,1,"span",0),s.YNc(4,h,2,1,"span",0),s.YNc(5,f,2,1,"span",0),s.Hsn(6),s.BQk()),2&r){const r=s.oxw();s.xp6(1),s.Q6J("ngIf",r.control.hasError("required")),s.xp6(1),s.Q6J("ngIf",r.control.hasError("email")),s.xp6(1),s.Q6J("ngIf",r.control.hasError("maxlength")),s.xp6(1),s.Q6J("ngIf",r.control.hasError("min")),s.xp6(1),s.Q6J("ngIf",r.control.hasError("max"))}}const x=["*"];let Z=(()=>{class r{constructor(){this.requiredText="Required",this.formatIncorrectText="Email Format incorrect",this.maxlengthText="Over max length",this.rangeText="Over limit"}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-form-error"]],hostVars:2,hostBindings:function(r,n){2&r&&s.ekj("hy-form-error",!0)},inputs:{control:"control",requiredText:"requiredText",formatIncorrectText:"formatIncorrectText",maxlengthText:"maxlengthText",rangeText:"rangeText"},ngContentSelectors:x,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(r,n){1&r&&(s.F$t(),s.YNc(0,d,7,5,"ng-container",0)),2&r&&s.Q6J("ngIf",n.control.touched&&n.control.errors)},directives:[t.O5],encapsulation:2}),r})();var b=e(5396),T=e(1095);function q(r,n){1&r&&(s.TgZ(0,"mat-error"),s.TgZ(1,"strong"),s._uU(2,"Account or Password incorrected"),s.qZA(),s.qZA())}const _=[{path:"signIn",component:(()=>{class r{constructor(r,n,e,t){this.fb=r,this.router=n,this.userService=e,this.authAPI=t;let i="";this.userService.rememberMe&&(i=this.userService.account),this.signInForm=this.fb.group({account:[i,[o.kI.required]],password:["",[o.kI.required]],rememberMe:[this.userService.rememberMe]})}ngOnInit(){}onFormSubmit(){if(this.errorMsg="",this.signInForm.valid){const r=this.signInForm.value,n=this.signInForm.value.rememberMe;this.userService.rememberMe=n,this.userService.account=n?r.account:"",this.authAPI.signIn(r.account,r.password).subscribe(r=>{console.log(r),this.router.navigate(["/"])},()=>{console.log("err"),this.errorMsg="AccountOrPasswordError"})}}}return r.\u0275fac=function(n){return new(n||r)(s.Y36(o.qu),s.Y36(i.F0),s.Y36(c.K),s.Y36(a.Q))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-auth-signin"]],decls:30,vars:4,consts:[[1,"bg-blur"],[1,"bg-cover"],[1,"container"],[1,"singin-container",3,"formGroup","ngSubmit"],["form","ngForm"],[1,"singin-header"],[1,"col-12"],["matInput","","required","","placeholder","holly","formControlName","account"],[3,"control"],["matInput","","type","password","required","","placeholder","123456","formControlName","password"],["color","primary","formControlName","rememberMe",1,"example-margin"],[4,"ngIf"],[1,"col-10","offset-1",2,"margin-top","16px"],["mat-raised-button","","color","primary","type","submit",1,"col-12"]],template:function(r,n){1&r&&(s._UZ(0,"div",0),s._UZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"form",3,4),s.NdJ("ngSubmit",function(){return n.onFormSubmit()}),s.TgZ(5,"h1",5),s._uU(6,"Welcome"),s.qZA(),s.TgZ(7,"section"),s.TgZ(8,"mat-form-field",6),s.TgZ(9,"mat-label"),s._uU(10,"Account"),s.qZA(),s._uU(11,"'' "),s._UZ(12,"input",7),s.TgZ(13,"mat-error"),s._UZ(14,"app-form-error",8),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"section"),s.TgZ(16,"mat-form-field",6),s.TgZ(17,"mat-label"),s._uU(18,"Password"),s.qZA(),s._UZ(19,"input",9),s.TgZ(20,"mat-error"),s._UZ(21,"app-form-error",8),s.qZA(),s.qZA(),s.qZA(),s.TgZ(22,"section",6),s.TgZ(23,"mat-slide-toggle",10),s._uU(24," Remember me "),s.qZA(),s.qZA(),s.TgZ(25,"section",6),s.YNc(26,q,3,0,"mat-error",11),s.qZA(),s.TgZ(27,"section",12),s.TgZ(28,"button",13),s._uU(29,"Sign In"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&r&&(s.xp6(3),s.Q6J("formGroup",n.signInForm),s.xp6(11),s.Q6J("control",n.signInForm.controls.account),s.xp6(7),s.Q6J("control",n.signInForm.controls.password),s.xp6(5),s.Q6J("ngIf",n.errorMsg))},directives:[o._Y,o.JL,o.sg,u.KE,u.hX,g.Nt,o.Fj,o.Q7,o.JJ,o.u,u.TO,Z,b.Rr,t.O5,T.lW],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:block;overflow:hidden;position:relative}[_nghost-%COMP%]   .bg-blur[_ngcontent-%COMP%]{width:110%;height:110%;background-image:url(/assets/img/signin-bg.jpeg);background-size:100%;background-position:center;position:absolute;top:-5%;left:-5%;filter:blur(10px);z-index:-2}[_nghost-%COMP%]   .bg-cover[_ngcontent-%COMP%]{background-color:#e8e8e866;width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .singin-container[_ngcontent-%COMP%]{background-color:#e8e8e8b3;width:400px;border-radius:8px;box-shadow:0 0 12px 3px #2020204d;padding:16px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .singin-container[_ngcontent-%COMP%]   .singin-header[_ngcontent-%COMP%]{text-align:center}"]}),r})()}];let A=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[i.Bz.forChild(_)],i.Bz]}),r})();var I=e(4466);let v=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({providers:[a.Q],imports:[[t.ez,o.u5,o.UX,A,I.m]]}),r})()}}]);