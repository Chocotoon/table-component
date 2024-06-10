"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function EmployeeTableTH(_ref) {
  let {
    scope,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("th", {
    scope: scope
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, children));
}
var _default = exports.default = EmployeeTableTH;