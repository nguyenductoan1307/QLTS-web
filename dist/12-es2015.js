(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2/36":function(a,t,e){"use strict";e.r(t),e.d(t,"BaoCaoCanhBaoModule",(function(){return S}));var i=e("ofXK"),o=e("tyNb"),n=e("FCZ4"),c=e("wzdi"),r=e("N7wC"),s=e("bzU9"),l=e("KALY"),b=e("wd/R"),d=e("nYR2"),h=e("y+N+"),u=e("fXoL"),g=e("XDtX"),p=e("eO1q"),v=e("3Pt+"),m=e("I5S5"),Z=e("rEr+"),f=e("7zfz");const T=["dt"];function y(a,t){1&a&&(u.ac(0,"tr"),u.ac(1,"th",30),u.Rc(2,"Th\u1eddi gian"),u.Zb(),u.ac(3,"th",31),u.Rc(4,"T\xe0i s\u1ea3n ra"),u.Zb(),u.ac(5,"th",31),u.Rc(6,"T\xe0i s\u1ea3n v\xe0o"),u.Zb(),u.ac(7,"th",32),u.Rc(8,"B\u1eaft \u0111\u1ea7u ki\u1ec3m k\xea"),u.Zb(),u.ac(9,"th",32),u.Rc(10,"K\u1ebft th\xfac ki\u1ec3m k\xea"),u.Zb(),u.Zb())}const C=function(a){return{"font-weight":a}};function D(a,t){if(1&a&&(u.ac(0,"tr",33),u.ac(1,"td",30),u.Rc(2),u.mc(3,"date"),u.Zb(),u.ac(4,"td",34),u.Rc(5),u.Zb(),u.ac(6,"td",34),u.Rc(7),u.Zb(),u.ac(8,"td",34),u.Rc(9),u.Zb(),u.ac(10,"td",34),u.Rc(11),u.Zb(),u.Zb()),2&a){const a=t.$implicit;u.sc("ngStyle",u.wc(9,C,a.isCheck?"bold":"normal")),u.Ib(2),u.Tc(" ",null!=a.toTal?a.toTal:"Ng\xe0y "+u.oc(3,6,a.ngayKhaiBao,"dd/MM/yyyy")," "),u.Ib(3),u.Tc(" ",a.taiSanRa," "),u.Ib(2),u.Tc(" ",a.taiSanVao," "),u.Ib(2),u.Tc(" ",a.batDauKiemKe," "),u.Ib(2),u.Tc(" ",a.ketThucKiemKe," ")}}function w(a,t){if(1&a&&(u.ac(0,"tr"),u.ac(1,"td",35),u.Rc(2),u.Zb(),u.Zb()),2&a){const a=u.lc();u.Ib(2),u.Sc(a.khongCoDuLieu)}}const k=[{path:"",component:(()=>{class a extends c.a{constructor(a,t,e,i){super(a),this._baoCaoCanhBaoServiceProxy=t,this._lookupTableService=e,this._fileDownloadService=i,this.isActive=0,this.tenPhongBan="",this.loading=!0,this.exporting=!1,this.totalCount=0,this.nowDate=b(new Date).format("DD/MM/YYYY"),this.records=[],this.input=[],this.arrTaiSanChecked=[],this.selectedValues=[],this.rangeDates=[]}ngOnInit(){this.rangeDates[0]=r.a.getNgayDauTienCuaThangHienTaiDatessss(),this.rangeDates[1]=new Date,this._lookupTableService.getAllToChucTheoNguoiDung().subscribe(a=>{this.toChucItems={data:a,selectedData:a.map(a=>a.id)},this.toChucValue=a.map(a=>a.id),this.getDataPage(!1)}),this._baoCaoCanhBaoServiceProxy.checkPhongBan().subscribe(a=>{this.tenPhongBan=a}),this.barOptions1={legend:{position:"bottom",display:!1,onClick:null},hover:{animationDuration:0},animation:h.a.animationBar,scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}}}exportToExcel(){this.exporting=!0,this._baoCaoCanhBaoServiceProxy.exportToExcel(this.rangeDates?this.rangeDates[0]:void 0,this.rangeDates?this.rangeDates[1]:void 0,this.toChucValue||void 0).subscribe(a=>{this._fileDownloadService.downloadTempFile(a),this.exporting=!1},()=>{this.exporting=!1})}getDataPage(a){this.arrTaiSanChecked=[],this.loading=!0,this._baoCaoCanhBaoServiceProxy.getAllBaoCao(this.toChucValue||void 0,this.rangeDates?this.rangeDates[0]:void 0,this.rangeDates?this.rangeDates[1]:void 0,a).pipe(Object(d.a)(()=>{this.loading=!1})).subscribe(a=>{var t,e,i,o;this.records=a,this.totalCount=a.length,this.data={labels:["T\xe0i s\u1ea3n ra","T\xe0i s\u1ea3n v\xe0o","B\u1eaft \u0111\u1ea7u ki\u1ec3m k\xea","K\u1ebft th\xfac ki\u1ec3m k\xea"],datasets:[{label:void 0,backgroundColor:[h.a.backGroundTealMTCL5,h.a.backGroundChiTieuMTCL,h.a.backGroundDatMTCL,h.a.backGroundDatCoGiaiTrinhMTCL],data:[null===(t=a[a.length-1])||void 0===t?void 0:t.taiSanRa,null===(e=a[a.length-1])||void 0===e?void 0:e.taiSanVao,null===(i=a[a.length-1])||void 0===i?void 0:i.batDauKiemKe,null===(o=a[a.length-1])||void 0===o?void 0:o.ketThucKiemKe]}]}})}}return a.\u0275fac=function(t){return new(t||a)(u.Ub(u.u),u.Ub(l.f),u.Ub(l.T),u.Ub(s.a))},a.\u0275cmp=u.Ob({type:a,selectors:[["app-bao-cao-canh-bao"]],viewQuery:function(a,t){var e;1&a&&u.Vc(T,!0),2&a&&u.Ec(e=u.jc())&&(t.table=e.first)},inputs:{isActive:"isActive"},features:[u.Fb],decls:49,vars:16,consts:[["id","tesst",1,"content-header"],[1,"container-fluid"],[1,"row"],[1,"col-8"],[1,"col-4","text-right"],["type","button",1,"btn","btn-success",3,"click"],[1,"fa","fa-download"],[2,"margin-left","5px"],[1,"content","px-2"],[1,"card","m-0"],[1,"card-header"],[1,"ui-fluid","row","m-t-10"],[1,"col-sm-6","col-md-6"],[1,"form-group"],["for","PhongBan","id","PhongBan"],[3,"dataEdit","onSelect"],["for","Time","id","Time"],["selectionMode","range","name","rangeDates",3,"ngModel","dateFormat","showIcon","monthNavigator","yearNavigator","yearRange","ngModelChange"],[1,"col-12","text-right"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-search"],[1,"text-center"],[1,"row",2,"overflow","auto"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12",2,"min-width","493px"],["type","bar",3,"options","height","data","onLazyLoad"],[3,"value","loading","scrollHeight","scrollable","lazy","onLazyLoad"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"width-180"],[1,"width-200"],[1,"width-250"],[1,"ui-selectable-row",3,"ngStyle"],[1,"width-150"],["colspan","12",1,"text-left"]],template:function(a,t){1&a&&(u.ac(0,"div"),u.ac(1,"section",0),u.ac(2,"div",1),u.ac(3,"div",2),u.ac(4,"div",3),u.ac(5,"h1"),u.Rc(6,"B\xe1o c\xe1o C\u1ea3nh b\xe1o"),u.Zb(),u.Zb(),u.ac(7,"div",4),u.ac(8,"button",5),u.ic("click",(function(){return t.exportToExcel()})),u.Vb(9,"i",6),u.ac(10,"span",7),u.Rc(11,"Xu\u1ea5t Excel"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.ac(12,"section",8),u.ac(13,"div",1),u.ac(14,"div",9),u.ac(15,"div",10),u.ac(16,"div",11),u.ac(17,"div",12),u.ac(18,"div",13),u.ac(19,"label",14),u.Rc(20,"\u0110\u01a1n v\u1ecb qu\u1ea3n l\xfd"),u.Zb(),u.ac(21,"app-multiple-select-tree",15),u.ic("onSelect",(function(a){return t.toChucValue=a})),u.Zb(),u.Zb(),u.Zb(),u.ac(22,"div",12),u.ac(23,"div",13),u.ac(24,"label",16),u.Rc(25,"Th\u1eddi gian"),u.Zb(),u.ac(26,"p-calendar",17),u.ic("ngModelChange",(function(a){return t.rangeDates=a})),u.Zb(),u.Zb(),u.Zb(),u.ac(27,"div",18),u.ac(28,"button",19),u.ic("click",(function(){return t.getDataPage(!0)})),u.Vb(29,"i",20),u.ac(30,"span",7),u.Rc(31,"T\xecm ki\u1ebfm"),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Vb(32,"br"),u.Vb(33,"br"),u.ac(34,"h4",21),u.Rc(35,"T\u1ed5ng quan t\xecnh tr\u1ea1ng c\u1ea3nh b\xe1o"),u.Zb(),u.ac(36,"div",22),u.ac(37,"div",23),u.ac(38,"p-chart",24),u.ic("onLazyLoad",(function(a){return t.getDataPage(a)})),u.Zb(),u.Zb(),u.Zb(),u.Vb(39,"br"),u.Vb(40,"br"),u.ac(41,"h4"),u.Rc(42,"Th\xf4ng tin chi ti\u1ebft"),u.Zb(),u.ac(43,"div"),u.ac(44,"p-table",25,26),u.ic("onLazyLoad",(function(){return t.getDataPage(!1)})),u.Pc(46,y,11,0,"ng-template",27),u.Pc(47,D,12,11,"ng-template",28),u.Pc(48,w,3,1,"ng-template",29),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb(),u.Zb()),2&a&&(u.sc("@routerTransition",void 0),u.Ib(21),u.sc("dataEdit",t.toChucItems),u.Ib(5),u.sc("ngModel",t.rangeDates)("dateFormat",t.dateFormatInput)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("yearRange",t.yearRange),u.Ib(12),u.sc("options",t.barOptions1)("height",400)("data",t.data),u.Ib(6),u.tc("scrollHeight",t.scrollHeight),u.sc("value",t.records)("loading",t.loading)("scrollable",!0)("lazy",!0))},directives:[g.a,p.a,v.p,v.s,m.b,Z.c,f.d,i.m],pipes:[i.d],styles:[""],data:{animation:[Object(n.b)()]}}),a})()}];let R=(()=>{class a{}return a.\u0275mod=u.Sb({type:a}),a.\u0275inj=u.Rb({factory:function(t){return new(t||a)},imports:[[o.g.forChild(k)],o.g]}),a})();var x=e("KZX/");let S=(()=>{class a{}return a.\u0275mod=u.Sb({type:a}),a.\u0275inj=u.Rb({factory:function(t){return new(t||a)},imports:[[i.b,x.a,R]]}),a})()}}]);