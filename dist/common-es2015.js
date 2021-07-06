(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/main/bao-cao/bao-cao-thong-tin-tai-san/DashBoardConst.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/bao-cao/bao-cao-thong-tin-tai-san/DashBoardConst.ts ***!
  \**************************************************************************/
/*! exports provided: DashBoardConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardConst", function() { return DashBoardConst; });
// tslint:disable
class DashBoardConst {
}
DashBoardConst.backGroundChiTieu = '#ff7f0e';
DashBoardConst.backGroundDat = '#1f77b4';
DashBoardConst.backGroundDatCoGiaiTrinh = '#008080';
DashBoardConst.backGroundMTCLMang = '#009999';
DashBoardConst.backGroundKhongDat = '#ff0000';
DashBoardConst.backGroundTeal = '#08BC77';
// MTCL Mang
DashBoardConst.backGroundChiTieuMTCL = '#61b15a';
DashBoardConst.backGroundDatMTCL = '#bedcfa';
DashBoardConst.backGroundDatCoGiaiTrinhMTCL = '#fff76a';
DashBoardConst.backGroundKhongDatMTCL = '#ff8e71';
DashBoardConst.backGroundTealMTCL1 = '#d1c145';
DashBoardConst.backGroundTealMTCL2 = '#d0e8f2';
DashBoardConst.backGroundTealMTCL3 = '#fca3cc';
DashBoardConst.backGroundTealMTCL4 = '#5aa469';
DashBoardConst.backGroundTealMTCL5 = '#79a3b1';
DashBoardConst.backGroundTealMTCL6 = '#898b8a';
DashBoardConst.backGroundTealMTCL7 = '#f9813a';
DashBoardConst.backGroundTealMTCL8 = '#32afa9';
DashBoardConst.backGroundTealMTCL9 = '#7189bf';
DashBoardConst.backGroundTealMTCL10 = '#7ed3b2';
DashBoardConst.nhanCong = '#01fa16';
DashBoardConst.csht = '#0052bd';
DashBoardConst.kenh = '#df9a06';
DashBoardConst.dien = '#c22bb5';
DashBoardConst.vhkt = '#e64100';
DashBoardConst.khauHaoChuyenTiep = '#10b491';
DashBoardConst.quanLy = '#ff7f0e';
DashBoardConst.animationBar = {
    duration: 500,
    onComplete() {
        const chartInstance = this.chart;
        const ctx = chartInstance.ctx;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach((dataset, i) => {
            for (let j = 0; j < dataset.data.length; j++) {
                const model = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._model;
                const scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._yScale.maxHeight;
                ctx.fillStyle = '#444';
                let y_pos = model.y - 5;
                // Make sure data value does not get overflown and hidden
                // when the bar's value is too close to max value of scale
                // Note: The y value is reverse, it counts from top down
                if (((scale_max - model.y) / scale_max >= 0.93)) {
                    y_pos = model.y + 20;
                }
                ctx.fillText(dataset.data[j], model.x, y_pos);
            }
        });
    },
};
DashBoardConst.animationPie = {
    duration: 500,
    easing: 'easeOutQuart',
    onComplete() {
        const ctx = this.chart.ctx;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach((dataset) => {
            for (let i = 0; i < dataset.data.length; i++) {
                const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                const mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2;
                const start_angle = model.startAngle;
                const end_angle = model.endAngle;
                const mid_angle = start_angle + (end_angle - start_angle) / 2;
                const x = mid_radius * Math.cos(mid_angle);
                const y = mid_radius * Math.sin(mid_angle);
                ctx.fillStyle = '#fff';
                if (i === 3) { // Darker text color for lighter background
                    ctx.fillStyle = '#444';
                }
                const val = dataset.data[i];
                if (val !== 0) {
                    ctx.fillText(dataset.data[i] + '%', model.x + x, model.y + y);
                    // Display percent in another line, line break doesn't work for fillText
                    // ctx.fillText(percent, model.x + x, model.y + y + 15);
                }
            }
        });
    },
};


/***/ }),

/***/ "./src/shared/animations/routerTransition.ts":
/*!***************************************************!*\
  !*** ./src/shared/animations/routerTransition.ts ***!
  \***************************************************/
/*! exports provided: appModuleAnimation, accountModuleAnimation, slideFromBottom, slideFromUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModuleAnimation", function() { return appModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountModuleAnimation", function() { return accountModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromUp", function() { return slideFromUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
// tslint:disable

function appModuleAnimation() {
    return slideFromBottom();
}
function accountModuleAnimation() {
    return slideFromUp();
}
function slideFromBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '20px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'padding-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.33s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'padding-top': '0px' }))
        ])
    ]);
}
function slideFromUp() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '10px', opacity: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'margin-top': '0px', opacity: '1' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', 'margin-top': '0px' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map