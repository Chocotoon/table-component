"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./TableMenu.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TableMenu(_ref) {
  let {
    range,
    setOffset,
    setDisplayedRows,
    dataTable,
    setCurrentPage,
    offset,
    currentPage,
    data,
    setIsFiltered,
    setFilteredData
  } = _ref;
  const handleSearchChange = e => {
    const inputValue = e.target.value;
    if (inputValue.length >= 2) {
      const filteredData = dataTable.filter(item => {
        return Object.values(item).some(value => value.toString().toLowerCase().includes(inputValue.toLowerCase()));
      });
      setIsFiltered(true);
      if (filteredData) {
        setCurrentPage(1);
        const indexOfLastEntry = currentPage * offset;
        const indexOfFirstEntry = indexOfLastEntry - offset;
        const newCurrentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
        setFilteredData(filteredData);
        setDisplayedRows(newCurrentEntries);
      }
    } else {
      setCurrentPage(1);
      const indexOfLastEntry = currentPage * offset;
      const indexOfFirstEntry = indexOfLastEntry - offset;
      const newCurrentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);
      setIsFiltered(false);
      setDisplayedRows(newCurrentEntries);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table_menu"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Show", /*#__PURE__*/_react.default.createElement("select", {
    onChange: () => {
      const newOffset = document.querySelector(".table_menu select").value;
      setCurrentPage(1);
      setOffset(newOffset);
    },
    defaultValue: range[0]
  }, range.map(el => /*#__PURE__*/_react.default.createElement("option", {
    id: "id".concat(el),
    key: "".concat(el),
    value: el
  }, el))), "entries"), /*#__PURE__*/_react.default.createElement("div", null, "Search: ", /*#__PURE__*/_react.default.createElement("input", {
    id: "searchInput",
    type: "text",
    onChange: handleSearchChange
  })));
}
var _default = exports.default = TableMenu;