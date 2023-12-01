"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-property-descriptors";
exports.ids = ["vendor-chunks/has-property-descriptors"];
exports.modules = {

/***/ "(ssr)/../node_modules/has-property-descriptors/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/has-property-descriptors/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/../node_modules/get-intrinsic/index.js\");\nvar $defineProperty = GetIntrinsic(\"%Object.defineProperty%\", true);\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n    if ($defineProperty) {\n        try {\n            $defineProperty({}, \"a\", {\n                value: 1\n            });\n            return true;\n        } catch (e) {\n            // IE 8 has a broken defineProperty\n            return false;\n        }\n    }\n    return false;\n};\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n    // node v0.6 has a bug where array lengths can be Set but not Defined\n    if (!hasPropertyDescriptors()) {\n        return null;\n    }\n    try {\n        return $defineProperty([], \"length\", {\n            value: 1\n        }).length !== 1;\n    } catch (e) {\n        // In Firefox 4-22, defining length on an array throws an exception.\n        return true;\n    }\n};\nmodule.exports = hasPropertyDescriptors;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBRTNCLElBQUlDLGtCQUFrQkYsYUFBYSwyQkFBMkI7QUFFOUQsSUFBSUcseUJBQXlCLFNBQVNBO0lBQ3JDLElBQUlELGlCQUFpQjtRQUNwQixJQUFJO1lBQ0hBLGdCQUFnQixDQUFDLEdBQUcsS0FBSztnQkFBRUUsT0FBTztZQUFFO1lBQ3BDLE9BQU87UUFDUixFQUFFLE9BQU9DLEdBQUc7WUFDWCxtQ0FBbUM7WUFDbkMsT0FBTztRQUNSO0lBQ0Q7SUFDQSxPQUFPO0FBQ1I7QUFFQUYsdUJBQXVCRyx1QkFBdUIsR0FBRyxTQUFTQTtJQUN6RCxxRUFBcUU7SUFDckUsSUFBSSxDQUFDSCwwQkFBMEI7UUFDOUIsT0FBTztJQUNSO0lBQ0EsSUFBSTtRQUNILE9BQU9ELGdCQUFnQixFQUFFLEVBQUUsVUFBVTtZQUFFRSxPQUFPO1FBQUUsR0FBR0csTUFBTSxLQUFLO0lBQy9ELEVBQUUsT0FBT0YsR0FBRztRQUNYLG9FQUFvRTtRQUNwRSxPQUFPO0lBQ1I7QUFDRDtBQUVBRyxPQUFPQyxPQUFPLEdBQUdOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzPzhiNTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSB7XG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5oYXNQcm9wZXJ0eURlc2NyaXB0b3JzLmhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnID0gZnVuY3Rpb24gaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcoKSB7XG5cdC8vIG5vZGUgdjAuNiBoYXMgYSBidWcgd2hlcmUgYXJyYXkgbGVuZ3RocyBjYW4gYmUgU2V0IGJ1dCBub3QgRGVmaW5lZFxuXHRpZiAoIWhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRkZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDEgfSkubGVuZ3RoICE9PSAxO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSW4gRmlyZWZveCA0LTIyLCBkZWZpbmluZyBsZW5ndGggb24gYW4gYXJyYXkgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzO1xuIl0sIm5hbWVzIjpbIkdldEludHJpbnNpYyIsInJlcXVpcmUiLCIkZGVmaW5lUHJvcGVydHkiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3JzIiwidmFsdWUiLCJlIiwiaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWciLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/has-property-descriptors/index.js\n");

/***/ })

};
;