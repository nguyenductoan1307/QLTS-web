(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1529],{

/***/ "./node_modules/@angular/common/locales/ro-MD.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/ro-MD.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        if (!(v === 0) || n === 0 ||
            !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
            return 3;
        return 5;
    }
    exports.default = [
        'ro-MD',
        [['a.m.', 'p.m.'], u, u],
        u,
        [
            ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'], ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
            ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
            ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ']
        ],
        u,
        [
            ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
            [
                'ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'
            ],
            [
                'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie',
                'octombrie', 'noiembrie', 'decembrie'
            ]
        ],
        u,
        [['î.Hr.', 'd.Hr.'], u, ['înainte de Hristos', 'după Hristos']],
        1,
        [6, 0],
        ['dd.MM.y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'MDL',
        'L',
        'leu moldovenesc',
        {
            'AUD': [u, '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'EUR': [u, '€'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': [u, '₪'],
            'INR': [u, '₹'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'MDL': ['L'],
            'MXN': [u, '$'],
            'NZD': [u, '$'],
            'TWD': [u, 'NT$'],
            'USD': [u, '$'],
            'VND': [u, '₫'],
            'XCD': [u, '$']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8tTUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9yby1NRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUNoRixPQUFPLENBQUMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTztRQUNQLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUs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Q0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIGlmICghKHYgPT09IDApIHx8IG4gPT09IDAgfHxcbiAgICAgICEobiA9PT0gMSkgJiYgbiAlIDEwMCA9PT0gTWF0aC5mbG9vcihuICUgMTAwKSAmJiBuICUgMTAwID49IDEgJiYgbiAlIDEwMCA8PSAxOSlcbiAgICByZXR1cm4gMztcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3JvLU1EJyxcbiAgW1snYS5tLicsICdwLm0uJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydEJywgJ0wnLCAnTWEnLCAnTWknLCAnSicsICdWJywgJ1MnXSwgWydEdW0nLCAnTHVuJywgJ01hcicsICdNaWUnLCAnSm9pJywgJ1ZpbicsICdTw6JtJ10sXG4gICAgWydkdW1pbmljxIMnLCAnbHVuaScsICdtYXLIm2knLCAnbWllcmN1cmknLCAnam9pJywgJ3ZpbmVyaScsICdzw6JtYsSDdMSDJ10sXG4gICAgWydEdScsICdMdScsICdNYScsICdNaScsICdKbycsICdWaScsICdTw6InXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydJJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSScsICdJJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdpYW4uJywgJ2ZlYi4nLCAnbWFyLicsICdhcHIuJywgJ21haScsICdpdW4uJywgJ2l1bC4nLCAnYXVnLicsICdzZXB0LicsICdvY3QuJywgJ25vdi4nLCAnZGVjLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdpYW51YXJpZScsICdmZWJydWFyaWUnLCAnbWFydGllJywgJ2FwcmlsaWUnLCAnbWFpJywgJ2l1bmllJywgJ2l1bGllJywgJ2F1Z3VzdCcsICdzZXB0ZW1icmllJyxcbiAgICAgICdvY3RvbWJyaWUnLCAnbm9pZW1icmllJywgJ2RlY2VtYnJpZSdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtbJ8OuLkhyLicsICdkLkhyLiddLCB1LCBbJ8OubmFpbnRlIGRlIEhyaXN0b3MnLCAnZHVwxIMgSHJpc3RvcyddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkLk1NLnknLCAnZCBNTU0geScsICdkIE1NTU0geScsICdFRUVFLCBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgdSwgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ01ETCcsXG4gICdMJyxcbiAgJ2xldSBtb2xkb3ZlbmVzYycsXG4gIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQ0FEJzogW3UsICckJ10sXG4gICAgJ0NOWSc6IFt1LCAnwqUnXSxcbiAgICAnRVVSJzogW3UsICfigqwnXSxcbiAgICAnR0JQJzogW3UsICfCoyddLFxuICAgICdIS0QnOiBbdSwgJyQnXSxcbiAgICAnSUxTJzogW3UsICfigqonXSxcbiAgICAnSU5SJzogW3UsICfigrknXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdNREwnOiBbJ0wnXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdUV0QnOiBbdSwgJ05UJCddLFxuICAgICdVU0QnOiBbdSwgJyQnXSxcbiAgICAnVk5EJzogW3UsICfigqsnXSxcbiAgICAnWENEJzogW3UsICckJ11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=1529-es2015.js.map