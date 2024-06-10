"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function EmployeeTableRow(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "body_tr"
  }, Object.keys(data).map(stat => /*#__PURE__*/_react.default.createElement("td", {
    key: stat
  }, data[stat])));
}
var _default = exports.default = EmployeeTableRow;