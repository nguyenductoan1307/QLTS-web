(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53], {
  /***/
  "./node_modules/@angular/common/locales/bs.js":
  /*!****************************************************!*\
    !*** ./node_modules/@angular/common/locales/bs.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCommonLocalesBsJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */


    (function (factory) {
      if (true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
      } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // THIS CODE IS GENERATED - DO NOT MODIFY
      // See angular/tools/gulp-tasks/cldr/extract.js

      var u = undefined;

      function plural(n) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, '').length,
            f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11)) return 1;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14) || f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14)) return 3;
        return 5;
      }

      exports["default"] = ['bs', [['prijepodne', 'popodne'], ['AM', 'PM'], ['prijepodne', 'popodne']], u, [['N', 'P', 'U', 'S', 'Č', 'P', 'S'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'], ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']], [['n', 'p', 'u', 's', 'č', 'p', 's'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'], ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'], ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']], [['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'], ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'], ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar']], u, [['p.n.e.', 'n.e.'], ['p. n. e.', 'n. e.'], ['prije nove ere', 'nove ere']], 1, [6, 0], ['d. M. y.', 'd. MMM y.', 'd. MMMM y.', 'EEEE, d. MMMM y.'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, '{1} \'u\' {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'BAM', 'KM', 'Bosanskohercegovačka konvertibilna marka', {
        'AUD': [u, '$'],
        'BAM': ['KM'],
        'BRL': [u, 'R$'],
        'CAD': [u, '$'],
        'CNY': [u, '¥'],
        'GBP': [u, '£'],
        'HKD': [u, '$'],
        'HRK': ['kn'],
        'ILS': [u, '₪'],
        'MXN': [u, '$'],
        'NZD': [u, '$'],
        'RSD': ['din.'],
        'THB': ['฿'],
        'TWD': ['NT$'],
        'USD': [u, '$'],
        'XCD': [u, '$'],
        'XPF': []
      }, 'ltr', plural];
    }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDN0UsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FB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Q29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsXG4gICAgICBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDEgJiYgIShpICUgMTAwID09PSAxMSkgfHwgZiAlIDEwID09PSAxICYmICEoZiAlIDEwMCA9PT0gMTEpKSByZXR1cm4gMTtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgaSAlIDEwID49IDIgJiYgaSAlIDEwIDw9IDQgJiZcbiAgICAgICAgICAhKGkgJSAxMDAgPj0gMTIgJiYgaSAlIDEwMCA8PSAxNCkgfHxcbiAgICAgIGYgJSAxMCA9PT0gTWF0aC5mbG9vcihmICUgMTApICYmIGYgJSAxMCA+PSAyICYmIGYgJSAxMCA8PSA0ICYmXG4gICAgICAgICAgIShmICUgMTAwID49IDEyICYmIGYgJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnYnMnLFxuICBbWydwcmlqZXBvZG5lJywgJ3BvcG9kbmUnXSwgWydBTScsICdQTSddLCBbJ3ByaWplcG9kbmUnLCAncG9wb2RuZSddXSxcbiAgdSxcbiAgW1xuICAgIFsnTicsICdQJywgJ1UnLCAnUycsICfEjCcsICdQJywgJ1MnXSwgWyduZWQnLCAncG9uJywgJ3V0bycsICdzcmknLCAnxI1ldCcsICdwZXQnLCAnc3ViJ10sXG4gICAgWyduZWRqZWxqYScsICdwb25lZGplbGphaycsICd1dG9yYWsnLCAnc3JpamVkYScsICfEjWV0dnJ0YWsnLCAncGV0YWsnLCAnc3Vib3RhJ10sXG4gICAgWyduZWQnLCAncG9uJywgJ3V0bycsICdzcmknLCAnxI1ldCcsICdwZXQnLCAnc3ViJ11cbiAgXSxcbiAgW1xuICAgIFsnbicsICdwJywgJ3UnLCAncycsICfEjScsICdwJywgJ3MnXSwgWyduZWQnLCAncG9uJywgJ3V0bycsICdzcmknLCAnxI1ldCcsICdwZXQnLCAnc3ViJ10sXG4gICAgWyduZWRqZWxqYScsICdwb25lZGplbGphaycsICd1dG9yYWsnLCAnc3JpamVkYScsICfEjWV0dnJ0YWsnLCAncGV0YWsnLCAnc3Vib3RhJ10sXG4gICAgWyduZWQnLCAncG9uJywgJ3V0bycsICdzcmknLCAnxI1ldCcsICdwZXQnLCAnc3ViJ11cbiAgXSxcbiAgW1xuICAgIFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgICBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYWonLCAnanVuJywgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29rdCcsICdub3YnLCAnZGVjJ10sXG4gICAgW1xuICAgICAgJ2phbnVhcicsICdmZWJydWFyJywgJ21hcnQnLCAnYXByaWwnLCAnbWFqJywgJ2p1bmknLCAnanVsaScsICdhdWd1c3QnLCAnc2VwdGVtYmFyJywgJ29rdG9iYXInLFxuICAgICAgJ25vdmVtYmFyJywgJ2RlY2VtYmFyJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1sncC5uLmUuJywgJ24uZS4nXSwgWydwLiBuLiBlLicsICduLiBlLiddLCBbJ3ByaWplIG5vdmUgZXJlJywgJ25vdmUgZXJlJ11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC4gTS4geS4nLCAnZC4gTU1NIHkuJywgJ2QuIE1NTU0geS4nLCAnRUVFRSwgZC4gTU1NTSB5LiddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCAnezF9IFxcJ3VcXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0JBTScsXG4gICdLTScsXG4gICdCb3NhbnNrb2hlcmNlZ292YcSNa2Ega29udmVydGliaWxuYSBtYXJrYScsXG4gIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0JBTSc6IFsnS00nXSxcbiAgICAnQlJMJzogW3UsICdSJCddLFxuICAgICdDQUQnOiBbdSwgJyQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdHQlAnOiBbdSwgJ8KjJ10sXG4gICAgJ0hLRCc6IFt1LCAnJCddLFxuICAgICdIUksnOiBbJ2tuJ10sXG4gICAgJ0lMUyc6IFt1LCAn4oKqJ10sXG4gICAgJ01YTic6IFt1LCAnJCddLFxuICAgICdOWkQnOiBbdSwgJyQnXSxcbiAgICAnUlNEJzogWydkaW4uJ10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RXRCc6IFsnTlQkJ10sXG4gICAgJ1VTRCc6IFt1LCAnJCddLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWFBGJzogW11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==

    /***/

  }
}]);
//# sourceMappingURL=53-es5.js.map