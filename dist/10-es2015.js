(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{sXTw:function(e,n,a){"use strict";a.r(n),a.d(n,"AccountModule",(function(){return z}));var t=a("ofXK"),c=a("3Pt+"),o=a("tk/3"),i=a("K3ix"),s=a("tyNb"),r=a("wzdi"),l=a("FCZ4"),d=a("5IEl"),b=a("fXoL"),u=a("4Fy5"),m=a("yPwq"),p=a("tYQx");let h=(()=>{class e extends r.a{constructor(e,n,a){super(e),this.authService=n,this._sessionService=a,this.submitting=!1}get multiTenancySideIsTeanant(){return this._sessionService.tenantId>0}get isSelfRegistrationAllowed(){return!!this._sessionService.tenantId}login(){this.submitting=!0,this.authService.authenticate(()=>{this.submitting=!1,abp.utils.setCookieValue("taiSanTabIndexActive","0",new Date(this.today.setDate(this.today.getDate()+1)),abp.appPath)})}}return e.\u0275fac=function(n){return new(n||e)(b.Ub(b.u),b.Ub(d.a),b.Ub(u.c))},e.\u0275cmp=b.Ob({type:e,selectors:[["ng-component"]],features:[b.Fb],decls:34,vars:21,consts:[[1,"text-center","mb-3"],["novalidate","","autocomplete","off",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],[1,"input-group"],["type","text","name","userNameOrEmailAddress","required","","maxlength","256",1,"form-control",3,"ngModel","placeholder","ngModelChange"],["userNameOrEmailAddressModel","ngModel","userNameOrEmailAddressEl",""],[1,"input-group-append"],[1,"input-group-text"],[1,"fas","fa-user"],[3,"control","controlEl"],["type","password","name","password","required","","maxlength","32",1,"form-control",3,"ngModel","placeholder","ngModelChange"],["passwordModel","ngModel","passwordEl",""],[1,"fas","fa-lock"],[1,"form-group","row"],[1,"col-md-7"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","rememberMe","name","rememberMe",1,"custom-control-input",3,"ngModel","ngModelChange"],[1,"col-md-5"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"]],template:function(e,n){if(1&e&&(b.ac(0,"div"),b.ac(1,"h4",0),b.Rc(2),b.mc(3,"localize"),b.Zb(),b.ac(4,"form",1,2),b.ic("ngSubmit",(function(){return n.login()})),b.ac(6,"div",3),b.ac(7,"div",4),b.ac(8,"input",5,6),b.ic("ngModelChange",(function(e){return n.authService.authenticateModel.userNameOrEmailAddress=e})),b.mc(11,"localize"),b.Zb(),b.ac(12,"div",7),b.ac(13,"div",8),b.Vb(14,"span",9),b.Zb(),b.Zb(),b.Zb(),b.Vb(15,"abp-validation-summary",10),b.Zb(),b.ac(16,"div",3),b.ac(17,"div",4),b.ac(18,"input",11,12),b.ic("ngModelChange",(function(e){return n.authService.authenticateModel.password=e})),b.mc(21,"localize"),b.Zb(),b.ac(22,"div",7),b.ac(23,"div",8),b.Vb(24,"span",13),b.Zb(),b.Zb(),b.Zb(),b.Vb(25,"abp-validation-summary",10),b.Zb(),b.ac(26,"div",14),b.ac(27,"div",15),b.ac(28,"div",16),b.ac(29,"input",17),b.ic("ngModelChange",(function(e){return n.authService.rememberMe=e})),b.Zb(),b.Zb(),b.Zb(),b.ac(30,"div",18),b.ac(31,"button",19),b.Rc(32),b.mc(33,"localize"),b.Zb(),b.Zb(),b.Zb(),b.Zb(),b.Zb()),2&e){const e=b.Fc(5),a=b.Fc(9),t=b.Fc(10),c=b.Fc(19),o=b.Fc(20);b.sc("@routerTransition",void 0),b.Ib(2),b.Sc(b.nc(3,13,"LogIn")),b.Ib(6),b.sc("ngModel",n.authService.authenticateModel.userNameOrEmailAddress)("placeholder",b.nc(11,15,"UserNameOrEmail")),b.Ib(7),b.sc("control",a)("controlEl",t),b.Ib(3),b.sc("ngModel",n.authService.authenticateModel.password)("placeholder",b.nc(21,17,"Password")),b.Ib(7),b.sc("control",c)("controlEl",o),b.Ib(4),b.sc("ngModel",n.authService.rememberMe),b.Ib(2),b.sc("disabled",!e.form.valid||n.submitting),b.Ib(1),b.Tc(" ",b.nc(33,19,"LogIn")," ")}},directives:[c.z,c.q,c.r,c.b,c.x,c.k,c.p,c.s,m.a,c.a],pipes:[p.a],encapsulation:2,data:{animation:[Object(l.a)()]}}),e})();var g=a("nYR2"),v=a("KALY");const f=function(){return["../login"]};let Z=(()=>{class e extends r.a{constructor(e,n,a,t){super(e),this._accountService=n,this._router=a,this.authService=t,this.model=new v.fb,this.saving=!1}save(){this.saving=!0,this._accountService.register(this.model).pipe(Object(g.a)(()=>{this.saving=!1})).subscribe(e=>{if(!e.canLogin)return this.notify.success(this.l("SuccessfullyRegistered")),void this._router.navigate(["/login"]);this.saving=!0,this.authService.authenticateModel.userNameOrEmailAddress=this.model.userName,this.authService.authenticateModel.password=this.model.password,this.authService.authenticate(()=>{this.saving=!1})})}}return e.\u0275fac=function(n){return new(n||e)(b.Ub(b.u),b.Ub(v.b),b.Ub(s.c),b.Ub(d.a))},e.\u0275cmp=b.Ob({type:e,selectors:[["ng-component"]],features:[b.Fb],decls:66,vars:44,consts:[[1,"text-center","mb-3"],["autocomplete","off",3,"ngSubmit"],["registerForm","ngForm"],[1,"form-group"],[1,"input-group"],["type","text","name","name","required","","maxlength","64",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["nameModel","ngModel","nameEl",""],[1,"input-group-append"],[1,"input-group-text"],[1,"fas","fa-arrow-left"],[3,"control","controlEl"],["type","text","name","surname","required","","maxlength","64",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["surnameModel","ngModel","surnameEl",""],["type","email","name","emailAddress","required","","maxlength","256","pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["emailAddressModel","ngModel","emailAddressEl",""],[1,"fas","fa-envelope"],["type","email","name","userName","required","","maxlength","32",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["userNameModel","ngModel","userNameEl",""],[1,"fas","fa-user"],["type","password","name","password","required","","maxlength","32",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["passwordModel","ngModel","passwordEl",""],[1,"fas","fa-lock"],[1,"row"],[1,"col-8"],["type","button",1,"btn","btn-default",3,"disabled","routerLink"],[1,"fa","fa-arrow-circle-left"],[1,"col-4"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"]],template:function(e,n){if(1&e&&(b.ac(0,"div"),b.ac(1,"h4",0),b.Rc(2),b.mc(3,"localize"),b.Zb(),b.ac(4,"form",1,2),b.ic("ngSubmit",(function(){return n.save()})),b.ac(6,"div",3),b.ac(7,"div",4),b.ac(8,"input",5,6),b.ic("ngModelChange",(function(e){return n.model.name=e})),b.mc(11,"localize"),b.Zb(),b.ac(12,"div",7),b.ac(13,"div",8),b.Vb(14,"span",9),b.Zb(),b.Zb(),b.Zb(),b.Vb(15,"abp-validation-summary",10),b.Zb(),b.ac(16,"div",3),b.ac(17,"div",4),b.ac(18,"input",11,12),b.ic("ngModelChange",(function(e){return n.model.surname=e})),b.mc(21,"localize"),b.Zb(),b.ac(22,"div",7),b.ac(23,"div",8),b.Vb(24,"span",9),b.Zb(),b.Zb(),b.Zb(),b.Vb(25,"abp-validation-summary",10),b.Zb(),b.ac(26,"div",3),b.ac(27,"div",4),b.ac(28,"input",13,14),b.ic("ngModelChange",(function(e){return n.model.emailAddress=e})),b.mc(31,"localize"),b.Zb(),b.ac(32,"div",7),b.ac(33,"div",8),b.Vb(34,"span",15),b.Zb(),b.Zb(),b.Zb(),b.Vb(35,"abp-validation-summary",10),b.Zb(),b.ac(36,"div",3),b.ac(37,"div",4),b.ac(38,"input",16,17),b.ic("ngModelChange",(function(e){return n.model.userName=e})),b.mc(41,"localize"),b.Zb(),b.ac(42,"div",7),b.ac(43,"div",8),b.Vb(44,"span",18),b.Zb(),b.Zb(),b.Zb(),b.Vb(45,"abp-validation-summary",10),b.Zb(),b.ac(46,"div",3),b.ac(47,"div",4),b.ac(48,"input",19,20),b.ic("ngModelChange",(function(e){return n.model.password=e})),b.mc(51,"localize"),b.Zb(),b.ac(52,"div",7),b.ac(53,"div",8),b.Vb(54,"span",21),b.Zb(),b.Zb(),b.Zb(),b.Vb(55,"abp-validation-summary",10),b.Zb(),b.ac(56,"div",22),b.ac(57,"div",23),b.ac(58,"button",24),b.Vb(59,"i",25),b.Rc(60),b.mc(61,"localize"),b.Zb(),b.Zb(),b.ac(62,"div",26),b.ac(63,"button",27),b.Rc(64),b.mc(65,"localize"),b.Zb(),b.Zb(),b.Zb(),b.Zb(),b.Zb()),2&e){const e=b.Fc(29),a=b.Fc(5),t=b.Fc(10),c=b.Fc(19),o=b.Fc(20),i=b.Fc(9),s=b.Fc(30),r=b.Fc(39),l=b.Fc(40),d=b.Fc(49),u=b.Fc(50);b.sc("@routerTransition",void 0),b.Ib(2),b.Sc(b.nc(3,27,"Register")),b.Ib(6),b.tc("placeholder",b.nc(11,29,"Name")),b.sc("ngModel",n.model.name),b.Ib(7),b.sc("control",i)("controlEl",t),b.Ib(3),b.tc("placeholder",b.nc(21,31,"Surname")),b.sc("ngModel",n.model.surname),b.Ib(7),b.sc("control",c)("controlEl",o),b.Ib(3),b.tc("placeholder",b.nc(31,33,"EmailAddress")),b.sc("ngModel",n.model.emailAddress),b.Ib(7),b.sc("control",e)("controlEl",s),b.Ib(3),b.uc("placeholder"," ",b.nc(41,35,"UserName"),""),b.sc("ngModel",n.model.userName),b.Ib(7),b.sc("control",r)("controlEl",l),b.Ib(3),b.tc("placeholder",b.nc(51,37,"Password")),b.sc("ngModel",n.model.password),b.Ib(7),b.sc("control",d)("controlEl",u),b.Ib(3),b.sc("disabled",n.saving)("routerLink",b.vc(43,f)),b.Ib(2),b.Tc(" ",b.nc(61,39,"Back")," "),b.Ib(3),b.sc("disabled",!a.form.valid||n.saving),b.Ib(1),b.Tc(" ",b.nc(65,41,"Register")," ")}},directives:[c.z,c.q,c.r,c.b,c.x,c.k,c.p,c.s,m.a,c.u,s.d],pipes:[p.a],encapsulation:2,data:{animation:[Object(l.a)()]}}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Ob({type:e,selectors:[["account-header"]],decls:4,vars:0,consts:[[1,"login-logo"],["href","/"]],template:function(e,n){1&e&&(b.ac(0,"div",0),b.ac(1,"a",1),b.ac(2,"b"),b.Rc(3,"Qu\u1ea3n l\xfd t\xe0i s\u1ea3n"),b.Zb(),b.Zb(),b.Zb())},encapsulation:2,changeDetection:0}),e})();var M=a("cj2p"),I=a("CR43"),w=a("0EPa");let S=(()=>{class e extends r.a{constructor(e,n,a){super(e),this._accountService=n,this.bsModalRef=a,this.saving=!1,this.tenancyName=""}save(){if(!this.tenancyName)return abp.multiTenancy.setTenantIdCookie(),this.bsModalRef.hide(),void location.reload();const e=new v.K;e.tenancyName=this.tenancyName,this.saving=!0,this._accountService.isTenantAvailable(e).pipe(Object(g.a)(()=>{this.saving=!1})).subscribe(e=>{switch(e.state){case M.AppTenantAvailabilityState.Available:return abp.multiTenancy.setTenantIdCookie(e.tenantId),void location.reload();case M.AppTenantAvailabilityState.InActive:this.message.warn(this.l("TenantIsNotActive",this.tenancyName));break;case M.AppTenantAvailabilityState.NotFound:this.message.warn(this.l("ThereIsNoTenantDefinedWithName{0}",this.tenancyName))}})}}return e.\u0275fac=function(n){return new(n||e)(b.Ub(b.u),b.Ub(v.b),b.Ub(i.a))},e.\u0275cmp=b.Ob({type:e,selectors:[["ng-component"]],features:[b.Fb],decls:16,vars:12,consts:[["autocomplete","off",1,"form-horizontal",3,"ngSubmit"],["changeTenantForm","ngForm"],[3,"title","onCloseClick"],[1,"modal-body"],[1,"form-group","row"],["for","tenancyName",1,"col-md-3","col-form-label"],[1,"col-md-9"],["type","text","id","tenancyName","name","tenancyName","maxlength","64",1,"form-control",3,"ngModel","ngModelChange"],[1,"fa","fa-info-circle"],[3,"cancelDisabled","saveDisabled","onCancelClick"]],template:function(e,n){if(1&e&&(b.ac(0,"form",0,1),b.ic("ngSubmit",(function(){return n.save()})),b.ac(2,"abp-modal-header",2),b.ic("onCloseClick",(function(){return n.bsModalRef.hide()})),b.mc(3,"localize"),b.Zb(),b.ac(4,"div",3),b.ac(5,"div",4),b.ac(6,"label",5),b.Rc(7),b.mc(8,"localize"),b.Zb(),b.ac(9,"div",6),b.ac(10,"input",7),b.ic("ngModelChange",(function(e){return n.tenancyName=e})),b.Zb(),b.Zb(),b.Zb(),b.ac(11,"span"),b.Vb(12,"i",8),b.Rc(13),b.mc(14,"localize"),b.Zb(),b.Zb(),b.ac(15,"abp-modal-footer",9),b.ic("onCancelClick",(function(){return n.bsModalRef.hide()})),b.Zb(),b.Zb()),2&e){const e=b.Fc(1);b.Ib(2),b.sc("title",b.nc(3,6,"ChangeTenant")),b.Ib(5),b.Tc(" ",b.nc(8,8,"TenancyName")," "),b.Ib(3),b.sc("ngModel",n.tenancyName),b.Ib(3),b.Tc(" ",b.nc(14,10,"LeaveEmptyToSwitchToHost")," "),b.Ib(2),b.sc("cancelDisabled",n.saving)("saveDisabled",!e.form.valid||n.saving)}},directives:[c.z,c.q,c.r,I.a,c.b,c.k,c.p,c.s,w.a],pipes:[p.a],encapsulation:2}),e})();function C(e,n){if(1&e&&(b.ac(0,"span",5),b.ac(1,"strong"),b.Rc(2),b.Zb(),b.Zb()),2&e){const e=b.lc(2);b.tc("title",e.name),b.Ib(2),b.Sc(e.tenancyName)}}function N(e,n){1&e&&(b.ac(0,"span"),b.Rc(1),b.mc(2,"localize"),b.Zb()),2&e&&(b.Ib(1),b.Sc(b.nc(2,1,"NotSelected")))}function T(e,n){if(1&e){const e=b.bc();b.ac(0,"div",1),b.ac(1,"span"),b.Rc(2),b.mc(3,"localize"),b.Pc(4,C,3,2,"span",2),b.Pc(5,N,3,3,"span",3),b.Rc(6," ("),b.ac(7,"a",4),b.ic("click",(function(){return b.Ic(e),b.lc().showChangeModal()})),b.Rc(8),b.mc(9,"localize"),b.Zb(),b.Rc(10,") "),b.Zb(),b.Zb()}if(2&e){const e=b.lc();b.Ib(2),b.Tc(" ",b.nc(3,4,"CurrentTenant"),": "),b.Ib(2),b.sc("ngIf",e.tenancyName),b.Ib(1),b.sc("ngIf",!e.tenancyName),b.Ib(3),b.Tc(" ",b.nc(9,6,"Change")," ")}}let x=(()=>{class e extends r.a{constructor(e,n){super(e),this._modalService=n,this.tenancyName="",this.name=""}get isMultiTenancyEnabled(){return abp.multiTenancy.isEnabled}ngOnInit(){this.appSession.tenant&&(this.tenancyName=this.appSession.tenant.tenancyName,this.name=this.appSession.tenant.name)}showChangeModal(){const e=this._modalService.show(S);this.appSession.tenant&&(e.content.tenancyName=this.appSession.tenant.tenancyName)}}return e.\u0275fac=function(n){return new(n||e)(b.Ub(b.u),b.Ub(i.b))},e.\u0275cmp=b.Ob({type:e,selectors:[["tenant-change"]],features:[b.Fb],decls:1,vars:1,consts:[["class","text-center tenant-change-component",4,"ngIf"],[1,"text-center","tenant-change-component"],[3,"title",4,"ngIf"],[4,"ngIf"],["href","javascript:;",3,"click"],[3,"title"]],template:function(e,n){1&e&&b.Pc(0,T,11,8,"div",0),2&e&&b.sc("ngIf",n.isMultiTenancyEnabled)},directives:[t.l],pipes:[p.a],encapsulation:2}),e})();function E(e,n){1&e&&(b.ac(0,"div",4),b.Vb(1,"tenant-change"),b.Zb())}let F=(()=>{class e extends r.a{constructor(e,n){super(e),this.renderer=n}showTenantChange(){return abp.multiTenancy.isEnabled}ngOnInit(){this.renderer.addClass(document.body,"login-page")}}return e.\u0275fac=function(n){return new(n||e)(b.Ub(b.u),b.Ub(b.K))},e.\u0275cmp=b.Ob({type:e,selectors:[["ng-component"]],features:[b.Fb],decls:6,vars:1,consts:[[1,"login-box"],[1,"card"],["class","card-header",4,"ngIf"],[1,"card-body","login-card-body"],[1,"card-header"]],template:function(e,n){1&e&&(b.ac(0,"div",0),b.Vb(1,"account-header"),b.ac(2,"div",1),b.Pc(3,E,2,0,"div",2),b.ac(4,"div",3),b.Vb(5,"router-outlet"),b.Zb(),b.Zb(),b.Zb()),2&e&&(b.Ib(3),b.sc("ngIf",n.showTenantChange()))},directives:[y,t.l,s.h,x],encapsulation:2}),e})(),A=(()=>{class e{}return e.\u0275mod=b.Sb({type:e}),e.\u0275inj=b.Rb({factory:function(n){return new(n||e)},imports:[[s.g.forChild([{path:"",component:F,children:[{path:"login",component:h},{path:"register",component:Z}]}])],s.g]}),e})();var R=a("YirH"),k=a("KZX/");let z=(()=>{class e{}return e.\u0275mod=b.Sb({type:e}),e.\u0275inj=b.Rb({factory:function(n){return new(n||e)},imports:[[t.b,c.j,o.d,o.c,k.a,R.a,A,i.c.forChild()]]}),e})()}}]);