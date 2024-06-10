"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SortIcons(_ref) {
  let {
    type,
    setDisplayedRows,
    dataTable,
    dataKey,
    setDataTable,
    currentPage,
    offset,
    isFiltered,
    filteredData
  } = _ref;
  const tableData = dataTable && dataTable.length > 0 ? dataTable : [];
  const rows = filteredData;
  function sortAscend() {
    if (!isFiltered) {
      const sortedRows = [...tableData].sort((a, b) => {
        if (type === "string") {
          if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return -1;
          if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return 1;
          return 0;
        } else if (type === "date") {
          if (new Date(a[dataKey]) > new Date(b[dataKey])) {
            return 1;
          }
          if (new Date(a[dataKey]) < new Date(b[dataKey])) {
            return -1;
          }
          return 0;
        } else if (type === "number") {
          return a[dataKey] - b[dataKey];
        }
      });
      const startIndex = (currentPage - 1) * offset;
      const endIndex = startIndex + offset;
      const displayedRows = sortedRows.slice(startIndex, endIndex);
      setDisplayedRows(displayedRows);
      setDataTable(sortedRows);
    } else {
      const sortedRows = rows.sort((a, b) => {
        if (type === "string") {
          if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return -1;
          if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return 1;
          return 0;
        } else if (type === "date") {
          if (new Date(a[dataKey]) > new Date(b[dataKey])) {
            return 1;
          }
          if (new Date(a[dataKey]) < new Date(b[dataKey])) {
            return -1;
          }
          return 0;
        } else if (type === "number") {
          return a[dataKey] - b[dataKey];
        }
      });
      const startIndex = (currentPage - 1) * offset;
      const endIndex = startIndex + offset;
      const displayedRows = sortedRows.slice(startIndex, endIndex);
      setDisplayedRows(displayedRows);
    }
  }
  function sortDescend() {
    if (!isFiltered) {
      const sortedRows = [...tableData].sort((a, b) => {
        if (type === "string") {
          if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return 1;
          if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return -1;
          return 0;
        } else if (type === "date") {
          if (new Date(a[dataKey]) < new Date(b[dataKey])) {
            return 1;
          }
          if (new Date(a[dataKey]) > new Date(b[dataKey])) {
            return -1;
          }
          return 0;
        } else if (type === "number") {
          return a[dataKey] + b[dataKey];
        }
      });
      const startIndex = (currentPage - 1) * offset;
      const endIndex = startIndex + offset;
      const displayedRows = sortedRows.slice(startIndex, endIndex);
      setDisplayedRows(displayedRows);
      setDataTable(sortedRows);
    } else {
      const sortedRows = rows.sort((a, b) => {
        if (type === "string") {
          if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return 1;
          if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return -1;
          return 0;
        } else if (type === "date") {
          if (new Date(a[dataKey]) < new Date(b[dataKey])) {
            return 1;
          }
          if (new Date(a[dataKey]) > new Date(b[dataKey])) {
            return -1;
          }
          return 0;
        } else if (type === "number") {
          return a[dataKey] + b[dataKey];
        }
      });
      const startIndex = (currentPage - 1) * offset;
      const endIndex = startIndex + offset;
      const displayedRows = sortedRows.slice(startIndex, endIndex);
      setDisplayedRows(displayedRows);
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "4px"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretUp,
    style: {
      marginBottom: '-8px',
      cursor: 'pointer'
    },
    onClick: () => sortAscend()
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    style: {
      cursor: 'pointer'
    },
    onClick: () => sortDescend()
  }));
}
var _default = exports.default = SortIcons;