"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./TablePagination.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TablePagination(_ref) {
  let {
    offset,
    setDisplayedRows,
    currentPage,
    setCurrentPage,
    dataTable,
    isFiltered,
    filteredData
  } = _ref;
  const totalPages = isFiltered ? Math.ceil(filteredData.length / offset) : Math.ceil(dataTable.length === 0 ? 1 : dataTable.length / offset);
  const setPreviousPage = () => {
    setCurrentPage(prevIndex => prevIndex === 1 ? 1 : prevIndex - 1);
  };
  const setNextPage = () => {
    setCurrentPage(prevIndex => prevIndex === totalPages ? totalPages : prevIndex + 1);
  };
  (0, _react.useEffect)(() => {
    const indexOfLastEntry = currentPage * offset;
    const indexOfFirstEntry = indexOfLastEntry - offset;
    const newCurrentEntries = isFiltered ? filteredData.slice(indexOfFirstEntry, indexOfLastEntry) : dataTable.slice(indexOfFirstEntry, indexOfLastEntry);
    setDisplayedRows(newCurrentEntries);
  }, [currentPage, offset]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table_pagination"
  }, /*#__PURE__*/_react.default.createElement("div", null, " Showing ", currentPage === 1 ? 1 : parseInt(offset) * (currentPage - 1) + 1, " to ", offset * currentPage, " of ", isFiltered ? "".concat(filteredData.length, " (filtered)") : dataTable.length, " entries"), /*#__PURE__*/_react.default.createElement("div", {
    className: "table_navigation"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      cursor: "pointer"
    },
    onClick: setPreviousPage
  }, "Previous"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      cursor: "pointer"
    },
    onClick: setNextPage
  }, "Next")));
}
var _default = exports.default = TablePagination;