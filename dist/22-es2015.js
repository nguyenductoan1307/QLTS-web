(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{gzgf:function(t,e,i){"use strict";i.r(e),i.d(e,"LoaiTaiSanModule",(function(){return F}));var a=i("KZX/"),o=i("ofXK"),n=i("tyNb"),c=i("FCZ4"),s=i("wzdi"),r=i("nS6G"),l=i("6i1F"),b=i("bzU9"),d=i("KALY"),h=i("K3ix"),u=i("nYR2"),p=i("fXoL"),g=i("3Pt+"),m=i("N7wC"),f=i("CR43"),v=i("j9gp"),S=i("7kUa"),w=i("Di65"),T=i("kKUO"),C=i("0EPa");let x=(()=>{class t extends s.a{constructor(t,e,i,a,o){super(t),this._fb=e,this.bsModalRef=i,this._lookupTableService=a,this._loaiTaiSanServiceProxy=o,this.onSave=new p.q,this.saving=!1,this.isEdit=!1,this.isView=!1,this.createInputDto=new d.Q}ngOnInit(){this.khoiTaoForm(),this._lookupTableService.getAllLoaiTaiSanTree().subscribe(t=>{this.loaiTaiSanItems=this.getTreeviewItem(t),this.id?(this.isEdit=!0,this._loaiTaiSanServiceProxy.getForEdit(this.id,this.isView).subscribe(t=>{this.createInputDto=t,this._setValueForEdit()})):(this.createInputDto=new d.Q,this.isEdit=!1),this.isView?this.form.disable():this.form.enable()})}khoiTaoForm(){this.form=this._fb.group({ma:["",g.y.required],ten:["",g.y.required],ghiChu:[""]})}save(){""===m.a.getControlErr(this.form)&&(this.saving=!0,this._getValueForSave(),this._loaiTaiSanServiceProxy.createOrEdit(this.createInputDto).pipe(Object(u.a)(()=>{this.saving=!1})).subscribe(t=>{1===t?this.showExistMessage("M\xe3 lo\u1ea1i t\xe0i s\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i!"):2===t?this.showExistMessage("T\xean lo\u1ea1i t\xe0i s\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i!"):this.id?(this.showUpdateMessage(),this.bsModalRef.hide(),this.onSave.emit()):(this.showCreateMessage(),this.bsModalRef.hide(),this.onSave.emit())}))}close(){this.bsModalRef.hide()}_getValueForSave(){this.createInputDto.ma=this.form.controls.ma.value,this.createInputDto.ten=this.form.controls.ten.value,this.createInputDto.ghiChu=this.form.controls.ghiChu.value}_setValueForEdit(){this.form.controls.ma.setValue(this.createInputDto.ma),this.form.controls.ten.setValue(this.createInputDto.ten),this.form.controls.ghiChu.setValue(this.createInputDto.ghiChu)}}return t.\u0275fac=function(e){return new(e||t)(p.Ub(p.u),p.Ub(g.d),p.Ub(h.a),p.Ub(d.T),p.Ub(d.S))},t.\u0275cmp=p.Ob({type:t,selectors:[["app-create-or-edit-loai-tai-san"]],outputs:{onSave:"onSave"},features:[p.Fb],decls:26,vars:20,consts:[["tabindex","-1","autocomplete","off",1,"form-horizontal",3,"formGroup","ngSubmit"],[3,"title","onCloseClick"],[1,"modal-body","fixed-modal-height"],[1,"row","ui-fluid"],[1,"col-md-6"],[1,"form-group"],[3,"control","title"],["maxlength","50","type","text","id","ma","name","ma","formControlName","ma","pInputText",""],[3,"control"],["maxlength","255","type","text","id","ten","name","ten","formControlName","ten","pInputText",""],[3,"disabled","value","items","valueChange"],[1,"col-md-12"],["formControlName","ghiChu","id","ghiChu","rows","4","maxlength","4000",1,"form-control"],[3,"saveHidden","cancelLabel","cancelDisabled","onCancelClick"]],template:function(t,e){1&t&&(p.ac(0,"form",0),p.ic("ngSubmit",(function(){return e.save()})),p.ac(1,"abp-modal-header",1),p.ic("onCloseClick",(function(){return e.bsModalRef.hide()})),p.Zb(),p.ac(2,"div",2),p.ac(3,"div",3),p.ac(4,"div",4),p.ac(5,"div",5),p.Vb(6,"dft-label-validation",6),p.Vb(7,"input",7),p.Vb(8,"dft-validation",8),p.Zb(),p.Zb(),p.ac(9,"div",4),p.ac(10,"div",5),p.Vb(11,"dft-label-validation",6),p.Vb(12,"input",9),p.Vb(13,"dft-validation",8),p.Zb(),p.Zb(),p.Zb(),p.ac(14,"div",3),p.ac(15,"div",4),p.ac(16,"div",5),p.Vb(17,"dft-label-validation",6),p.ac(18,"app-dropdown-treeview-select",10),p.ic("valueChange",(function(t){return e.createInputDto.taiSanChaId=t})),p.Zb(),p.Vb(19,"dft-validation",8),p.Zb(),p.Zb(),p.ac(20,"div",11),p.ac(21,"div",5),p.Vb(22,"dft-label-validation",6),p.Vb(23,"textarea",12),p.Vb(24,"dft-validation",8),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(25,"abp-modal-footer",13),p.ic("onCancelClick",(function(){return e.close()})),p.Zb(),p.Zb()),2&t&&(p.sc("formGroup",e.form),p.Ib(1),p.sc("title",e.id?e.isView?"Xem chi ti\u1ebft: "+e.createInputDto.ten:"C\u1eadp nh\u1eadt: "+e.createInputDto.ten:"Th\xeam m\u1edbi Lo\u1ea1i t\xe0i s\u1ea3n"),p.Ib(5),p.sc("control",e.form.get("ma"))("title","M\xe3 lo\u1ea1i t\xe0i s\u1ea3n *"),p.Ib(2),p.sc("control",e.form.get("ma")),p.Ib(3),p.sc("control",e.form.get("ten"))("title","T\xean lo\u1ea1i t\xe0i s\u1ea3n *"),p.Ib(2),p.sc("control",e.form.get("ten")),p.Ib(4),p.sc("control",e.form.get("taiSanChaId"))("title","Thu\u1ed9c lo\u1ea1i t\xe0i s\u1ea3n"),p.Ib(1),p.sc("disabled",e.isView)("value",e.createInputDto.taiSanChaId)("items",e.loaiTaiSanItems),p.Ib(1),p.sc("control",e.form.get("taiSanChaId")),p.Ib(3),p.sc("control",e.form.get("ghiChu"))("title","Ghi ch\xfa"),p.Ib(2),p.sc("control",e.form.get("ghiChu")),p.Ib(1),p.sc("saveHidden",e.isView)("cancelLabel",e.isView?"\u0110\xf3ng":"H\u1ee7y")("cancelDisabled",e.saving))},directives:[g.z,g.q,g.i,f.a,v.a,g.b,g.k,g.p,g.g,S.a,w.a,T.a,C.a],styles:[""]}),t})();var I=i("tk/3"),Z=i("ukTS"),y=i("EVgl"),k=i("7zfz"),D=i("oStN");const V=["dt"];function _(t,e){1&t&&(p.ac(0,"tr"),p.Vb(1,"th",25),p.ac(2,"th",26),p.Rc(3," M\xe3 lo\u1ea1i t\xe0i s\u1ea3n "),p.Vb(4,"p-treeTableSortIcon",27),p.Zb(),p.ac(5,"th",28),p.Rc(6," T\xean lo\u1ea1i t\xe0i s\u1ea3n "),p.Vb(7,"p-treeTableSortIcon",29),p.Zb(),p.ac(8,"th",30),p.Rc(9," M\xe3 Hexa "),p.Vb(10,"p-treeTableSortIcon",31),p.Zb(),p.ac(11,"th",32),p.Rc(12," Ghi ch\xfa "),p.Vb(13,"p-treeTableSortIcon",33),p.Zb(),p.Zb())}function M(t,e){if(1&t){const t=p.bc();p.ac(0,"a",39),p.ic("click",(function(){p.Ic(t);const e=p.lc(),i=e.rowData,a=e.$implicit;return p.lc().delete(i,a.node)})),p.Rc(1,"X\xf3a"),p.Zb()}}function R(t,e){if(1&t){const t=p.bc();p.ac(0,"tr",34),p.ac(1,"td",25),p.ac(2,"div",35),p.ac(3,"button",36),p.Vb(4,"i",37),p.Zb(),p.ac(5,"div",38),p.ac(6,"a",39),p.ic("click",(function(){p.Ic(t);const i=e.rowData;return p.lc().view(i.loaiTaiSan.id)})),p.Rc(7,"Xem"),p.Zb(),p.ac(8,"a",39),p.ic("click",(function(){p.Ic(t);const i=e.rowData;return p.lc().create(i.loaiTaiSan.id)})),p.Rc(9,"C\u1eadp nh\u1eadt"),p.Zb(),p.Pc(10,M,2,0,"a",40),p.Zb(),p.Zb(),p.Zb(),p.ac(11,"td",41),p.Vb(12,"p-treeTableToggler",42),p.Rc(13),p.mc(14,"truncate"),p.Zb(),p.ac(15,"td",41),p.Rc(16),p.mc(17,"truncate"),p.Zb(),p.ac(18,"td",41),p.Rc(19),p.mc(20,"truncate"),p.Zb(),p.ac(21,"td",43),p.Rc(22),p.mc(23,"truncate"),p.Zb(),p.Zb()}if(2&t){const t=e.$implicit,i=e.rowData;p.sc("ttRow",t),p.Ib(10),p.sc("ngIf",i.loaiTaiSan.id>2),p.Ib(1),p.sc("ngClass",i.loaiTaiSan.taiSanChaId?"in-nghieng":"in-dam"),p.Ib(1),p.sc("rowNode",t),p.Ib(1),p.Tc(" ",p.nc(14,10,i.loaiTaiSan.ma)," "),p.Ib(2),p.sc("ngClass",i.loaiTaiSan.taiSanChaId?"in-nghieng":"in-dam"),p.Ib(1),p.Sc(p.nc(17,12,i.loaiTaiSan.ten)),p.Ib(2),p.sc("ngClass",i.loaiTaiSan.taiSanChaId?"in-nghieng":"in-dam"),p.Ib(1),p.Sc(p.nc(20,14,i.maHexa)),p.Ib(3),p.Sc(p.nc(23,16,i.loaiTaiSan.ghiChu))}}function E(t,e){if(1&t&&(p.ac(0,"tr"),p.ac(1,"td",44),p.Rc(2),p.Zb(),p.Zb()),2&t){const t=p.lc();p.Ib(2),p.Sc(t.khongCoDuLieu)}}const P=r.a.remoteServiceBaseUrl+"/api/Upload/LoaiTaiSanUpload",L=[{path:"",component:(()=>{class t extends s.a{constructor(t,e,i,a,o){super(t),this._http=e,this._modalService=i,this._fileDownloadService=a,this._loaiTaiSanServiceProxy=o,this.loading=!0,this.exporting=!1,this.keyword="",this.totalCount=0,this.records=[],this.files1=[]}ngOnInit(){this.getDataPage(!1)}getDataPage(t){this.loading=!0,this._loaiTaiSanServiceProxy.getAll(this.keyword||void 0,t).pipe(Object(u.a)(()=>{this.loading=!1})).subscribe(t=>{this.files1=t,this.records=t,this.totalCount=t.length})}create(t){this._showCreateOrEditLoaiTaiSanDialog(t)}view(t){this._showCreateOrEditLoaiTaiSanDialog(t,!0)}delete(t,e){var i;(null===(i=e.children)||void 0===i?void 0:i.length)>0?this.showExistMessage("Lo\u1ea1i t\xe0i s\u1ea3n cha kh\xf4ng th\u1ec3 x\xf3a!"):this.swal.fire({title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn kh\xf4ng?",text:"Lo\u1ea1i t\xe0i s\u1ea3n "+t.loaiTaiSan.ten+" s\u1ebd b\u1ecb x\xf3a!",icon:"warning",showCancelButton:!0,confirmButtonColor:this.confirmButtonColor,cancelButtonColor:this.cancelButtonColor,cancelButtonText:this.cancelButtonText,confirmButtonText:this.confirmButtonText}).then(e=>{e.value&&this._loaiTaiSanServiceProxy.delete(t.loaiTaiSan.id).subscribe(t=>{1===t?this.showExistMessage("Lo\u1ea1i t\xe0i s\u1ea3n \u0111\xe3 c\xf3 t\xe0i s\u1ea3n, kh\xf4ng \u0111\u01b0\u1ee3c x\xf3a!"):(this.showDeleteMessage(),this.getDataPage(!1))})})}importExcel(){this._showImportLoaiTaiSanDialog()}exportToExcel(){this.exporting=!0,this.input=new d.R,this.input.keyword=this.keyword||void 0,this._loaiTaiSanServiceProxy.exportToExcel(this.input).subscribe(t=>{this._fileDownloadService.downloadTempFile(t),this.exporting=!1},()=>{this.exporting=!1})}_showCreateOrEditLoaiTaiSanDialog(t,e=!1){let i;i=this._modalService.show(x,{class:"modal-xl",ignoreBackdropClick:!0,initialState:{id:t,isView:e}}),i.content.onSave.subscribe(()=>{this.getDataPage(!1)})}_showImportLoaiTaiSanDialog(){let t;t=this._modalService.show(l.a,{class:"modal-lg",ignoreBackdropClick:!0,initialState:{maxFile:1,excelAcceptTypes:this.excelAcceptTypes}}),t.content.onDownload.subscribe(()=>{this._loaiTaiSanServiceProxy.downloadFileMau().subscribe(e=>{t.content.downLoading=!1,this._fileDownloadService.downloadTempFile(e)})}),t.content.onSave.subscribe(e=>{t.content.returnMessage="\u0110ang upload file....";const i=new FormData;for(let t=0;t<e.length;t++)i.append(t+1+"",e[t]);this._http.post(P,i).subscribe(e=>{this._loaiTaiSanServiceProxy.importFileExcel(e.result[0]).subscribe(e=>{t.content.returnMessage=e,t.content.uploading=!1,t.content.uploadDone()})})}),t.content.onClose.subscribe(()=>{this.getDataPage(!1)})}}return t.\u0275fac=function(e){return new(e||t)(p.Ub(p.u),p.Ub(I.b),p.Ub(h.b),p.Ub(b.a),p.Ub(d.S))},t.\u0275cmp=p.Ob({type:t,selectors:[["app-loai-tai-san"]],viewQuery:function(t,e){var i;1&t&&p.Vc(V,!0),2&t&&p.Ec(i=p.jc())&&(e.table=i.first)},features:[p.Fb],decls:35,vars:6,consts:[["id","tesst",1,"content-header"],[1,"container-fluid"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["type","button",1,"btn","btn-success","m-r-5",3,"click"],[1,"fa","fa-upload"],[2,"margin-left","5px"],["type","button",1,"btn","btn-success","m-r-5",3,"buttonBusy","click"],[1,"fa","fa-download"],["type","button",1,"btn","btn-primary","m-r-5",3,"click"],[1,"fa","fa-plus"],[1,"content","px-2"],[1,"card","m-0"],[1,"card-header"],[1,"input-group"],[1,"input-group-prepend"],["type","button",1,"btn","bg-blue",3,"click"],[1,"fas","fa-search"],["type","text","name","keyword",1,"form-control",3,"placeholder","ngModel","ngModelChange","keyup.enter"],[1,"auto-scroll"],[3,"value","loading"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"width-30","table-border"],["ttSortableColumn","loaiTaiSan.ma",1,"width-150","table-border"],["field","loaiTaiSan.ma"],["ttSortableColumn","loaiTaiSan.ten",1,"width-150","table-border"],["field","loaiTaiSan.ten"],["ttSortableColumn","maHexa",1,"width-150","table-border"],["field","maHexa"],["ttSortableColumn","loaiTaiSan.ghiChu",1,"width-150","table-border"],["field","loaiTaiSan.ghiChu"],[3,"ttRow"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","btn","btn-sm","btn-transparent","btn-action"],[1,"fas","fa-ellipsis-v"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],["class","dropdown-item",3,"click",4,"ngIf"],[1,"w-150","table-border",3,"ngClass"],[3,"rowNode"],[1,"w-150","table-border"],["colspan","2",1,"text-left"]],template:function(t,e){1&t&&(p.ac(0,"div"),p.ac(1,"section",0),p.ac(2,"div",1),p.ac(3,"div",2),p.ac(4,"div",3),p.ac(5,"h1"),p.Rc(6,"Danh s\xe1ch Lo\u1ea1i t\xe0i s\u1ea3n"),p.Zb(),p.Zb(),p.ac(7,"div",4),p.ac(8,"button",5),p.ic("click",(function(){return e.importExcel()})),p.Vb(9,"i",6),p.ac(10,"span",7),p.Rc(11,"Nh\u1eadp Excel"),p.Zb(),p.Zb(),p.ac(12,"button",8),p.ic("click",(function(){return e.exportToExcel()})),p.Vb(13,"i",9),p.ac(14,"span",7),p.Rc(15,"Xu\u1ea5t Excel"),p.Zb(),p.Zb(),p.ac(16,"button",10),p.ic("click",(function(){return e.create()})),p.Vb(17,"i",11),p.ac(18,"span",7),p.Rc(19,"Th\xeam m\u1edbi"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(20,"section",12),p.ac(21,"div",1),p.ac(22,"div",13),p.ac(23,"div",14),p.ac(24,"div",15),p.ac(25,"div",16),p.ac(26,"button",17),p.ic("click",(function(){return e.getDataPage(!0)})),p.Vb(27,"i",18),p.Zb(),p.Zb(),p.ac(28,"input",19),p.ic("ngModelChange",(function(t){return e.keyword=t}))("keyup.enter",(function(){return e.getDataPage(!0)})),p.Zb(),p.Zb(),p.Zb(),p.ac(29,"div"),p.ac(30,"div",20),p.ac(31,"p-treeTable",21),p.Pc(32,_,14,0,"ng-template",22),p.Pc(33,R,24,18,"ng-template",23),p.Pc(34,E,3,1,"ng-template",24),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb()),2&t&&(p.sc("@routerTransition",void 0),p.Ib(12),p.sc("buttonBusy",e.exporting),p.Ib(16),p.sc("placeholder","Nh\u1eadp t\xean lo\u1ea1i t\xe0i s\u1ea3n, m\xe3 lo\u1ea1i t\xe0i s\u1ea3n")("ngModel",e.keyword),p.Ib(3),p.sc("value",e.records)("loading",e.loading))},directives:[Z.a,g.b,g.p,g.s,y.d,k.d,y.c,y.b,y.a,o.l,o.j,y.f],pipes:[D.a],styles:[".table-border[_ngcontent-%COMP%]{border:1px solid #c8c8c8!important}.in-dam[_ngcontent-%COMP%]{font-weight:700}.in-nghieng[_ngcontent-%COMP%]{font-style:italic}.auto-scroll[_ngcontent-%COMP%]{overflow:auto}"],data:{animation:[Object(c.b)()]}}),t})()}];let B=(()=>{class t{}return t.\u0275mod=p.Sb({type:t}),t.\u0275inj=p.Rb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(L)],n.g]}),t})(),F=(()=>{class t{}return t.\u0275mod=p.Sb({type:t}),t.\u0275inj=p.Rb({factory:function(e){return new(e||t)},imports:[[o.b,a.a,B]]}),t})()}}]);