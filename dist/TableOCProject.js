"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EmployeeTableHeader = _interopRequireDefault(require("./EmployeeTableHeader"));
var _EmployeeTableRow = _interopRequireDefault(require("./EmployeeTableRow"));
var _TableMenu = _interopRequireDefault(require("./TableMenu"));
var _TablePagination = _interopRequireDefault(require("./TablePagination"));
var _EmployeeTable = _interopRequireDefault(require("./EmployeeTable"));
var _SortIcon = _interopRequireDefault(require("./SortIcon"));
require("./EmployeeTable.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TableOCProject(_ref) {
  let {
    data,
    range,
    columns
  } = _ref;
  const firstOffset = range[0];
  const [offset, setOffset] = (0, _react.useState)(firstOffset);
  const [displayedRows, setDisplayedRows] = (0, _react.useState)([]);
  const [currentPage, setCurrentPage] = (0, _react.useState)(1);
  const [dataTable, setDataTable] = (0, _react.useState)(data);
  const [filteredData, setFilteredData] = (0, _react.useState)();
  const [isFiltered, setIsFiltered] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const indexOfLastEntry = currentPage * offset;
    const indexOfFirstEntry = indexOfLastEntry - offset;
    const newCurrentEntries = dataTable.slice(indexOfFirstEntry, indexOfLastEntry);
    setDisplayedRows(newCurrentEntries);
  }, [data]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 900
    }
  }, /*#__PURE__*/_react.default.createElement(_TableMenu.default, {
    range: range,
    data: data,
    setOffset: setOffset,
    offset: offset,
    setDisplayedRows: setDisplayedRows,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage,
    setDataTable: setDataTable,
    dataTable: dataTable,
    setIsFiltered: setIsFiltered,
    setFilteredData: setFilteredData
  }), /*#__PURE__*/_react.default.createElement(_EmployeeTable.default, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(column => /*#__PURE__*/_react.default.createElement(_EmployeeTableHeader.default, {
    key: "".concat(column.label, "-").concat(column.dataKey),
    scope: column.scope
  }, column.label, /*#__PURE__*/_react.default.createElement(_SortIcon.default, {
    setDisplayedRows: setDisplayedRows,
    dataTable: dataTable,
    type: column.type,
    dataKey: column.dataKey,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage,
    offset: offset,
    setDataTable: setDataTable,
    isFiltered: isFiltered,
    filteredData: filteredData
  }))))), /*#__PURE__*/_react.default.createElement("tbody", null, displayedRows && displayedRows.length > 0 ? displayedRows.map(employee => {
    const keys = Object.keys(employee);
    const firstKey = keys[0];
    const secondKey = keys[1];
    return /*#__PURE__*/_react.default.createElement(_EmployeeTableRow.default, {
      key: "".concat(employee[firstKey], "-").concat(employee[secondKey]),
      data: employee
    });
  }) : /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "No data available")))), /*#__PURE__*/_react.default.createElement(_TablePagination.default, {
    dataTable: dataTable,
    offset: offset,
    setDisplayedRows: setDisplayedRows,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    isFiltered: isFiltered,
    filteredData: filteredData
  }));
}
var _default = exports.default = TableOCProject;