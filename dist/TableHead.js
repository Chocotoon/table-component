"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TableHead(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: "row"
    }
  }, children));
}
var _default = exports.default = TableHead;