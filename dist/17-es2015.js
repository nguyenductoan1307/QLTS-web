(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Cs77:function(t,o,i){"use strict";i.r(o),i.d(o,"DatLichXuatBaoCaoModule",(function(){return R}));var e=i("ofXK"),a=i("tyNb"),n=i("FCZ4"),s=i("wzdi"),r=(i("nS6G"),i("KALY")),l=i("K3ix"),c=i("cp0P"),h=i("nYR2"),d=i("fXoL"),u=i("3Pt+"),b=i("N7wC"),g=i("wd/R"),p=i("tk/3"),f=i("CR43"),m=i("j9gp"),v=i("arFO"),C=i("Di65"),w=i("eO1q"),B=i("kKUO"),y=i("lVkt"),V=i("0EPa");function I(t,o){if(1&t&&(d.ac(0,"div",4),d.ac(1,"div",5),d.Vb(2,"dft-label-validation",6),d.Vb(3,"p-dropdown",17),d.Vb(4,"dft-validation",8),d.Zb(),d.Zb()),2&t){const t=d.lc();d.Ib(2),d.sc("control",t.form.get("ngayGuiBC"))("title","Ng\xe0y g\u1eedi b\xe1o c\xe1o *"),d.Ib(1),d.sc("options",t.listThang)("showClear",!0)("filter",!0),d.Ib(1),d.sc("control",t.form.get("ngayGuiBC"))}}function L(t,o){if(1&t&&(d.ac(0,"div",4),d.ac(1,"div",5),d.Vb(2,"dft-label-validation",18),d.Vb(3,"p-calendar",19),d.Vb(4,"dft-validation",8),d.Zb(),d.Zb()),2&t){const t=d.lc();d.Ib(2),d.sc("form",t.form.get("ngayGuiBC"))("title","Ng\xe0y g\u1eedi b\xe1o c\xe1o *"),d.Ib(1),d.sc("showIcon",!0)("monthNavigator",!0),d.Ib(1),d.sc("control",t.form.get("ngayGuiBC"))}}let T=(()=>{class t extends s.a{constructor(t,o,i,e,a,n){super(t),this._fb=o,this.bsModalRef=i,this._datLichServiceProxy=e,this._lookupTableServiceProxy=a,this.http=n,this.onSave=new d.q,this.saving=!1,this.isEdit=!1,this.uploading=!1,this.isView=!1,this.filesAllFile=[],this.createInputDto=new r.p,this.getForView=new r.H}ngOnInit(){this.khoiTaoForm(),this.changeLapLai(),this.changePB(),Object(c.a)(this._lookupTableServiceProxy.getAllBaoCaoLookupTable(),this._lookupTableServiceProxy.getAllLapLaiLookupTable(),this._lookupTableServiceProxy.getAllToChucTree()).subscribe(([t,o,i])=>{this.listBaoCao=t,this.listLapLai=o,this.toChucItems=this.getTreeviewItem(i),this.id?(this.isEdit=!0,this._datLichServiceProxy.getForEdit(this.id,this.isView).subscribe(t=>{this.getForView=t,this._setValueForEdit()})):(this.createInputDto=new r.p,this.isEdit=!1),this.isView?this.form.disable():this.form.enable()})}khoiTaoForm(){this.form=this._fb.group({tenBaoCao:["",[u.y.required]],lapLai:["",[u.y.required]],gioGuiBC:["",u.y.required],nguoiNhanBC:["",u.y.required],phongBanNhanBC:["",u.y.required],ngayGuiBC:["",u.y.required],ghiChu:[""]})}changeLapLai(){this.form.controls.lapLai.valueChanges.subscribe(t=>{this.check=t.id,this.form.controls.ngayGuiBC.setValue(void 0),void 0!==t&&1===t.id?this._lookupTableServiceProxy.getAllThuLookupTable().subscribe(t=>{this.listThang=t}):void 0!==t&&2===t.id&&this._lookupTableServiceProxy.getAllThangLookupTable().subscribe(t=>{this.listThang=t}),this.setEror(t.id)})}setEror(t){0===t||3===t?this.form.controls.ngayGuiBC.setErrors(null):this.form.controls.ngayGuiBC.setValidators([u.y.required])}changePB(){this.form.controls.phongBanNhanBC.valueChanges.subscribe(t=>{void 0!==t?this._lookupTableServiceProxy.getAllNguoiDungTheoPBLookupTable(t).subscribe(t=>{this.listUsers=t}):this.form.controls.nguoiNhanBC.setValue("")})}save(){""===b.a.getControlErr(this.form)&&(this.saving=!0,this._getValueForSave(),this._datLichServiceProxy.createOrEdit(this.createInputDto).pipe(Object(h.a)(()=>{this.saving=!1})).subscribe(t=>{this.id?(this.showUpdateMessage(),this.bsModalRef.hide(),this.onSave.emit()):(this.showCreateMessage(),this.bsModalRef.hide(),this.onSave.emit())}))}close(){this.bsModalRef.hide()}_getValueForSave(){var t,o,i,e,a;this.createInputDto.id=this.id,this.createInputDto.baoCaoId=null===(t=this.form.controls.tenBaoCao.value)||void 0===t?void 0:t.id,this.createInputDto.lapLaiId=null===(o=this.form.controls.lapLai.value)||void 0===o?void 0:o.id,this.createInputDto.gioGuiBaoCao=this.form.controls.gioGuiBC.value,this.createInputDto.nguoiNhanBaoCaoId=this.form.controls.nguoiNhanBC.value?null===(i=this.form.controls.nguoiNhanBC.value)||void 0===i?void 0:i.map(t=>t.id).join(this.separator):null,this.createInputDto.phongBanNhanId=this.form.controls.phongBanNhanBC.value,this.createInputDto.ngayGuiBaoCao=4===(null===(e=this.form.controls.lapLai.value)||void 0===e?void 0:e.id)?g(this.form.controls.ngayGuiBC.value.toString()).format("DD/MM"):null===(a=this.form.controls.ngayGuiBC.value)||void 0===a?void 0:a.id,this.createInputDto.ghiChu=this.form.controls.ghiChu.value}_setValueForEdit(){if(this.check=this.getForView.lapLaiId,this.form.controls.tenBaoCao.setValue(this.listBaoCao.find(t=>t.id===this.getForView.baoCaoId)),this.form.controls.lapLai.setValue(this.listLapLai.find(t=>t.id===this.getForView.lapLaiId)),this.form.controls.gioGuiBC.setValue(b.a.getDateForEditFromMoment(this.getForView.gioBaoCao)),this.phongBanValueId=this.getForView.phongBanNhan,this.form.controls.phongBanNhanBC.setValue(this.getForView.phongBanNhan),this._lookupTableServiceProxy.getAllNguoiDungTheoPBLookupTable(this.getForView.phongBanNhan).subscribe(t=>{this.listUsers=t},()=>{},()=>{var t;const o=null===(t=this.getForView.nguoiNhan)||void 0===t?void 0:t.split(this.separator).map(t=>Number(t));this.form.controls.nguoiNhanBC.setValue(o?this.listUsers.filter(t=>o.findIndex(o=>o===t.id)>-1):null)}),1===this.check)this._lookupTableServiceProxy.getAllThuLookupTable().subscribe(t=>{this.listThang=t},()=>{},()=>{this.form.controls.ngayGuiBC.setValue(this.listThang.find(t=>t.id===Number(this.getForView.ngayGuiBaoCao)))});else if(2===this.check)this._lookupTableServiceProxy.getAllThangLookupTable().subscribe(t=>{this.listThang=t},()=>{},()=>{this.form.controls.ngayGuiBC.setValue(this.listThang.find(t=>t.id===Number(this.getForView.ngayGuiBaoCao)))});else if(4===this.check){const t=`${g().year()}/ ${this.getForView.ngayGuiBaoCao.split("/").reverse().join("/")}`;this.form.controls.ngayGuiBC.setValue(b.a.getDateForEditFromString(t))}this.form.controls.ghiChu.setValue(this.getForView.ghiChu)}setControlValue(t){this.form.get("phongBanNhanBC").setValue(t)}}return t.\u0275fac=function(o){return new(o||t)(d.Ub(d.u),d.Ub(u.d),d.Ub(l.a),d.Ub(r.u),d.Ub(r.T),d.Ub(p.b))},t.\u0275cmp=d.Ob({type:t,selectors:[["app-create-or-edit-dat-lich"]],outputs:{onSave:"onSave"},features:[d.Fb],decls:38,vars:37,consts:[["tabindex","-1","autocomplete","off",1,"form-horizontal",3,"formGroup","ngSubmit"],[3,"title","onCloseClick"],[1,"modal-body","fixed-modal-height"],[1,"row","ui-fluid"],[1,"col-md-6"],[1,"form-group"],[3,"control","title"],["formControlName","tenBaoCao","placeholder","Ch\u1ecdn","optionLabel","displayName","resetFilterOnHide","true",3,"options","showClear","filter"],[3,"control"],["formControlName","lapLai","placeholder","Ch\u1ecdn","optionLabel","displayName","resetFilterOnHide","true",3,"options","showClear","filter"],["formControlName","gioGuiBC",3,"timeOnly","showIcon"],["class","col-md-6",4,"ngIf"],[3,"disabled","items","value","valueChange"],["optionLabel","displayName","formControlName","nguoiNhanBC",3,"options"],[1,"col-md-12"],["formControlName","ghiChu","id","ghiChu","rows","5","maxlength","4000",1,"form-control"],[3,"saveHidden","cancelLabel","cancelDisabled","onCancelClick"],["formControlName","ngayGuiBC","placeholder","Ch\u1ecdn","optionLabel","displayName","resetFilterOnHide","true",3,"options","showClear","filter"],[3,"form","title"],["formControlName","ngayGuiBC","dateFormat","dd/mm",3,"showIcon","monthNavigator"]],template:function(t,o){1&t&&(d.ac(0,"form",0),d.ic("ngSubmit",(function(){return o.save()})),d.ac(1,"abp-modal-header",1),d.ic("onCloseClick",(function(){return o.bsModalRef.hide()})),d.Zb(),d.ac(2,"div",2),d.ac(3,"div",3),d.ac(4,"div",4),d.ac(5,"div",5),d.Vb(6,"dft-label-validation",6),d.Vb(7,"p-dropdown",7),d.Vb(8,"dft-validation",8),d.Zb(),d.Zb(),d.ac(9,"div",4),d.ac(10,"div",5),d.Vb(11,"dft-label-validation",6),d.Vb(12,"p-dropdown",9),d.Vb(13,"dft-validation",8),d.Zb(),d.Zb(),d.Zb(),d.ac(14,"div",3),d.ac(15,"div",4),d.ac(16,"div",5),d.Vb(17,"dft-label-validation",6),d.Vb(18,"p-calendar",10),d.Vb(19,"dft-validation",8),d.Zb(),d.Zb(),d.Pc(20,I,5,6,"div",11),d.Pc(21,L,5,5,"div",11),d.ac(22,"div",4),d.ac(23,"div",5),d.Vb(24,"dft-label-validation",6),d.ac(25,"app-dropdown-treeview-select",12),d.ic("valueChange",(function(t){return o.setControlValue(t)})),d.Zb(),d.Vb(26,"dft-validation",8),d.Zb(),d.Zb(),d.ac(27,"div",4),d.ac(28,"div",5),d.Vb(29,"dft-label-validation",6),d.Vb(30,"p-multiSelect",13),d.Vb(31,"dft-validation",8),d.Zb(),d.Zb(),d.ac(32,"div",14),d.ac(33,"div",5),d.Vb(34,"dft-label-validation",6),d.Vb(35,"textarea",15),d.Vb(36,"dft-validation",8),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(37,"abp-modal-footer",16),d.ic("onCancelClick",(function(){return o.close()})),d.Zb(),d.Zb()),2&t&&(d.sc("formGroup",o.form),d.Ib(1),d.sc("title",o.id?o.isView?"Xem c\xe0i \u0111\u1eb7t: "+o.getForView.tenBaoCao:"C\u1eadp nh\u1eadt: "+o.getForView.tenBaoCao:"Th\xeam m\u1edbi c\xe0i \u0111\u1eb7t"),d.Ib(5),d.sc("control",o.form.get("tenBaoCao"))("title","T\xean b\xe1o c\xe1o *"),d.Ib(1),d.sc("options",o.listBaoCao)("showClear",!0)("filter",!0),d.Ib(1),d.sc("control",o.form.get("tenBaoCao")),d.Ib(3),d.sc("control",o.form.get("lapLai"))("title","L\u1eb7p l\u1ea1i *"),d.Ib(1),d.sc("options",o.listLapLai)("showClear",!0)("filter",!0),d.Ib(1),d.sc("control",o.form.get("lapLai")),d.Ib(4),d.sc("control",o.form.get("gioGuiBC"))("title","Gi\u1edd g\u1eedi b\xe1o c\xe1o *"),d.Ib(1),d.sc("timeOnly",!0)("showIcon",!0),d.Ib(1),d.sc("control",o.form.get("gioGuiBC")),d.Ib(1),d.sc("ngIf",1===o.check||2===o.check),d.Ib(1),d.sc("ngIf",4===o.check),d.Ib(3),d.sc("control",o.form.get("phongBanNhanBC"))("title","Ph\xf2ng ban nh\u1eadn b\xe1o c\xe1o *"),d.Ib(1),d.sc("disabled",o.isView)("items",o.toChucItems)("value",o.phongBanValueId),d.Ib(1),d.sc("control",o.form.get("phongBanNhanBC")),d.Ib(3),d.sc("control",o.form.get("nguoiNhanBC"))("title","Ng\u01b0\u1eddi nh\u1eadn b\xe1o c\xe1o *"),d.Ib(1),d.sc("options",o.listUsers),d.Ib(1),d.sc("control",o.form.get("nguoiNhanBC")),d.Ib(3),d.sc("control",o.form.get("ghiChu"))("title","Ghi ch\xfa"),d.Ib(2),d.sc("control",o.form.get("ghiChu")),d.Ib(1),d.sc("saveHidden",o.isView)("cancelLabel",o.isView?"\u0110\xf3ng":"H\u1ee7y")("cancelDisabled",o.saving))},directives:[u.z,u.q,u.i,f.a,m.a,v.a,u.p,u.g,C.a,w.a,e.l,B.a,y.a,u.b,u.k,V.a],styles:[""]}),t})();var Z=i("rEr+"),k=i("7zfz"),N=i("oStN");const P=["dt"];function x(t,o){1&t&&(d.ac(0,"tr"),d.Vb(1,"th",17),d.ac(2,"th",18),d.Rc(3,"T\xean b\xe1o c\xe1o "),d.Zb(),d.ac(4,"th",19),d.Rc(5,"L\u1eb7p l\u1ea1i "),d.Zb(),d.ac(6,"th",18),d.Rc(7,"Ng\xe0y gi\u1edd g\u1eedi b\xe1o c\xe1o "),d.Zb(),d.Zb())}function F(t,o){if(1&t){const t=d.bc();d.ac(0,"tr",20),d.ac(1,"td",17),d.ac(2,"div",21),d.ac(3,"button",22),d.Vb(4,"i",23),d.Zb(),d.ac(5,"div",24),d.ac(6,"a",25),d.ic("click",(function(){d.Ic(t);const i=o.$implicit;return d.lc().view(i.id)})),d.Rc(7,"Xem"),d.Zb(),d.ac(8,"a",25),d.ic("click",(function(){d.Ic(t);const i=o.$implicit;return d.lc().create(i.id)})),d.Rc(9,"C\u1eadp nh\u1eadt"),d.Zb(),d.ac(10,"a",25),d.ic("click",(function(){d.Ic(t);const i=o.$implicit;return d.lc().delete(i)})),d.Rc(11,"X\xf3a"),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(12,"td",18),d.Rc(13),d.mc(14,"truncate"),d.Zb(),d.ac(15,"td",19),d.Rc(16),d.mc(17,"truncate"),d.Zb(),d.ac(18,"td",18),d.Rc(19),d.mc(20,"truncate"),d.Zb(),d.Zb()}if(2&t){const t=o.$implicit;d.Ib(13),d.Tc(" ",d.nc(14,3,t.tenBaoCao)," "),d.Ib(3),d.Tc(" ",d.nc(17,5,t.lapLai)," "),d.Ib(3),d.Tc(" ",d.nc(20,7,t.ngayGio)," ")}}function S(t,o){if(1&t&&(d.ac(0,"tr"),d.ac(1,"td",26),d.Rc(2),d.Zb(),d.Zb()),2&t){const t=d.lc();d.Ib(2),d.Sc(t.khongCoDuLieu)}}const D=[{path:"",component:(()=>{class t extends s.a{constructor(t,o,i,e,a,n){super(t),this._http=o,this._modalService=i,this._datLichServiceProxy=e,this._lookupTableServiceProxy=a,this._fb=n,this.loading=!0,this.exporting=!1,this.keyword="",this.totalCount=0,this.records=[],this.listLinhVuc=[]}ngOnInit(){Object(c.a)(this._lookupTableServiceProxy.getAllLinhVucKinhDoanh()).subscribe(([t])=>{this.listLinhVuc=t}),this.khoiTaoForm()}khoiTaoForm(){this.form=this._fb.group({keyword:[""],LinhVuc:[""]})}getDataPage(t,o){this.loading=!0,this._datLichServiceProxy.getAllDatLich(void 0,t,this.getSortField(this.table),o?o.first:this.table.first,o?o.rows:this.table.rows).pipe(Object(h.a)(()=>{this.loading=!1})).subscribe(t=>{this.records=t.items,this.totalCount=t.totalCount})}create(t){this._showCreateOrEditDemoDialog(t)}view(t){this._showCreateOrEditDemoDialog(t,!0)}delete(t){this.swal.fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn kh\xf4ng?",text:"L\u1ecbch xu\u1ea5t "+t.tenBaoCao+" s\u1ebd b\u1ecb x\xf3a!",icon:"warning",showCancelButton:!0,confirmButtonColor:this.confirmButtonColor,cancelButtonColor:this.cancelButtonColor,cancelButtonText:this.cancelButtonText,confirmButtonText:this.confirmButtonText}).then(o=>{o.value&&this._datLichServiceProxy.delete(t.id).subscribe(()=>{this.showDeleteMessage(),this.getDataPage(!0)})})}_showCreateOrEditDemoDialog(t,o=!1){let i;i=this._modalService.show(T,{class:"modal-xl",ignoreBackdropClick:!0,initialState:{id:t,isView:o}}),i.content.onSave.subscribe(()=>{this.getDataPage(!1)})}}return t.\u0275fac=function(o){return new(o||t)(d.Ub(d.u),d.Ub(p.b),d.Ub(l.b),d.Ub(r.u),d.Ub(r.T),d.Ub(u.d))},t.\u0275cmp=d.Ob({type:t,selectors:[["app-dat-lich-xuat-bao-cao"]],viewQuery:function(t,o){var i;1&t&&d.Vc(P,!0),2&t&&d.Ec(i=d.jc())&&(o.table=i.first)},features:[d.Fb],decls:22,vars:13,consts:[["id","tesst",1,"content-header"],[1,"container-fluid"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["type","button",1,"btn","btn-primary","m-r-5","m-t-5","width-130",3,"click"],[1,"fa","fa-plus"],[2,"margin-left","5px"],["tabindex","-1","autocomplete","off",1,"form-horizontal",3,"formGroup"],["createUserModal","ngForm"],[1,"content","px-2"],[1,"card","m-0"],[3,"value","lazy","paginator","loading","showCurrentPageReport","currentPageReportTemplate","rows","totalRecords","rowsPerPageOptions","scrollable","scrollHeight","onLazyLoad"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"width-30"],[1,"width-200"],[1,"width-100"],[1,"ui-selectable-row"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","btn","btn-sm","btn-transparent","btn-action"],[1,"fas","fa-ellipsis-v"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],["colspan","8",1,"text-left"]],template:function(t,o){1&t&&(d.ac(0,"div"),d.ac(1,"section",0),d.ac(2,"div",1),d.ac(3,"div",2),d.ac(4,"div",3),d.ac(5,"h1"),d.Rc(6,"\u0110\u1eb7t l\u1ecbch xu\u1ea5t b\xe1o c\xe1o"),d.Zb(),d.Zb(),d.ac(7,"div",4),d.ac(8,"button",5),d.ic("click",(function(){return o.create()})),d.Vb(9,"i",6),d.ac(10,"span",7),d.Rc(11,"Th\xeam m\u1edbi"),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(12,"form",8,9),d.ac(14,"section",10),d.ac(15,"div",11),d.ac(16,"div"),d.ac(17,"p-table",12,13),d.ic("onLazyLoad",(function(t){return o.getDataPage(!0,t)})),d.Pc(19,x,8,0,"ng-template",14),d.Pc(20,F,21,9,"ng-template",15),d.Pc(21,S,3,1,"ng-template",16),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.Zb()),2&t&&(d.sc("@routerTransition",void 0),d.Ib(12),d.sc("formGroup",o.form),d.Ib(5),d.uc("currentPageReportTemplate","",0==o.totalCount?"":" Hi\u1ec3n th\u1ecb: {first}-{last}/{totalRecords}"," "),d.tc("scrollHeight",o.scrollHeight),d.sc("value",o.records)("lazy",!0)("paginator",o.paginator)("loading",o.loading)("showCurrentPageReport",o.showCurrentPageReport)("rows",o.paginatorRows)("totalRecords",o.totalCount)("rowsPerPageOptions",o.rowsPerPageOptions)("scrollable",o.scrollable))},directives:[u.z,u.q,u.i,Z.c,k.d],pipes:[N.a],styles:[""],data:{animation:[Object(n.b)()]}}),t})()}];let G=(()=>{class t{}return t.\u0275mod=d.Sb({type:t}),t.\u0275inj=d.Rb({factory:function(o){return new(o||t)},imports:[[a.g.forChild(D)],a.g]}),t})();var _=i("KZX/");let R=(()=>{class t{}return t.\u0275mod=d.Sb({type:t}),t.\u0275inj=d.Rb({factory:function(o){return new(o||t)},imports:[[e.b,G,_.a]]}),t})()}}]);