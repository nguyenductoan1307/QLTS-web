(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1555],{

/***/ "./node_modules/@angular/common/locales/sk.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/sk.js ***!
  \****************************************************/
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
        if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
            return 3;
        if (!(v === 0))
            return 4;
        return 5;
    }
    exports.default = [
        'sk',
        [['AM', 'PM'], u, u],
        u,
        [
            ['n', 'p', 'u', 's', 'š', 'p', 's'], ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
            ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
            ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
        ],
        u,
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
            [
                'januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta',
                'septembra', 'októbra', 'novembra', 'decembra'
            ]
        ],
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
            [
                'január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september',
                'október', 'november', 'december'
            ]
        ],
        [['pred Kr.', 'po Kr.'], u, ['pred Kristom', 'po Kristovi']],
        1,
        [6, 0],
        ['d. M. y', u, 'd. MMMM y', 'EEEE d. MMMM y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', u, u],
        [',', ' ', ';', '%', '+', '-', 'e', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'AUD': [u, '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': ['NIS', '₪'],
            'INR': [u, '₹'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'NZD': [u, '$'],
            'TWD': [u, 'NT$'],
            'USD': [u, '$'],
            'VND': [u, '₫'],
            'XXX': []
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxF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QUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIGlmIChpID09PSBNYXRoLmZsb29yKGkpICYmIGkgPj0gMiAmJiBpIDw9IDQgJiYgdiA9PT0gMCkgcmV0dXJuIDM7XG4gIGlmICghKHYgPT09IDApKSByZXR1cm4gNDtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3NrJyxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ24nLCAncCcsICd1JywgJ3MnLCAnxaEnLCAncCcsICdzJ10sIFsnbmUnLCAncG8nLCAndXQnLCAnc3QnLCAnxaF0JywgJ3BpJywgJ3NvJ10sXG4gICAgWyduZWRlxL5hJywgJ3BvbmRlbG9rJywgJ3V0b3JvaycsICdzdHJlZGEnLCAnxaF0dnJ0b2snLCAncGlhdG9rJywgJ3NvYm90YSddLFxuICAgIFsnbmUnLCAncG8nLCAndXQnLCAnc3QnLCAnxaF0JywgJ3BpJywgJ3NvJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgICBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtw6FqJywgJ2rDum4nLCAnasO6bCcsICdhdWcnLCAnc2VwJywgJ29rdCcsICdub3YnLCAnZGVjJ10sXG4gICAgW1xuICAgICAgJ2phbnXDoXJhJywgJ2ZlYnJ1w6FyYScsICdtYXJjYScsICdhcHLDrWxhJywgJ23DoWphJywgJ2rDum5hJywgJ2rDumxhJywgJ2F1Z3VzdGEnLFxuICAgICAgJ3NlcHRlbWJyYScsICdva3TDs2JyYScsICdub3ZlbWJyYScsICdkZWNlbWJyYSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ2onLCAnZicsICdtJywgJ2EnLCAnbScsICdqJywgJ2onLCAnYScsICdzJywgJ28nLCAnbicsICdkJ10sXG4gICAgWydqYW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbcOhaicsICdqw7puJywgJ2rDumwnLCAnYXVnJywgJ3NlcCcsICdva3QnLCAnbm92JywgJ2RlYyddLFxuICAgIFtcbiAgICAgICdqYW51w6FyJywgJ2ZlYnJ1w6FyJywgJ21hcmVjJywgJ2FwcsOtbCcsICdtw6FqJywgJ2rDum4nLCAnasO6bCcsICdhdWd1c3QnLCAnc2VwdGVtYmVyJyxcbiAgICAgICdva3TDs2JlcicsICdub3ZlbWJlcicsICdkZWNlbWJlcidcbiAgICBdXG4gIF0sXG4gIFtbJ3ByZWQgS3IuJywgJ3BvIEtyLiddLCB1LCBbJ3ByZWQgS3Jpc3RvbScsICdwbyBLcmlzdG92aSddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2QuIE0uIHknLCB1LCAnZC4gTU1NTSB5JywgJ0VFRUUgZC4gTU1NTSB5J10sXG4gIFsnSDptbScsICdIOm1tOnNzJywgJ0g6bW06c3MgeicsICdIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgJ3sxfSwgezB9JywgdSwgdV0sXG4gIFsnLCcsICfCoCcsICc7JywgJyUnLCAnKycsICctJywgJ2UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V1cm8nLFxuICB7XG4gICAgJ0FVRCc6IFt1LCAnJCddLFxuICAgICdCUkwnOiBbdSwgJ1IkJ10sXG4gICAgJ0NBRCc6IFt1LCAnJCddLFxuICAgICdDTlknOiBbdSwgJ8KlJ10sXG4gICAgJ0dCUCc6IFt1LCAnwqMnXSxcbiAgICAnSEtEJzogW3UsICckJ10sXG4gICAgJ0lMUyc6IFsnTklTJywgJ+KCqiddLFxuICAgICdJTlInOiBbdSwgJ+KCuSddLFxuICAgICdKUFknOiBbdSwgJ8KlJ10sXG4gICAgJ0tSVyc6IFt1LCAn4oKpJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdUV0QnOiBbdSwgJ05UJCddLFxuICAgICdVU0QnOiBbdSwgJyQnXSxcbiAgICAnVk5EJzogW3UsICfigqsnXSxcbiAgICAnWFhYJzogW11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=1555-es2015.js.map