"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.1a7d16c2.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storageKey = "theme-preference";

const onClick = () => {
  // flip current value
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);else return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  var _document$querySelect;

  document.firstElementChild.setAttribute("data-theme", theme.value);
  (_document$querySelect = document.querySelector("#theme-toggle")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference()
}; // set early so no page flashes / CSS is made aware

reflectPreference();

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference(); // now this script can find and listen for clicks on the control

  document.querySelector("#theme-toggle").addEventListener("click", onClick);
}; // sync with system changes


window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", _ref => {
  let {
    matches: isDark
  } = _ref;
  theme.value = isDark ? "dark" : "light";
  setPreference();
});

const ThemeSwitch = () => {
  return /*#__PURE__*/_react.default.createElement("button", {
    class: "theme-toggle",
    id: "theme-toggle",
    title: "Toggles light & dark",
    "aria-label": "auto",
    "aria-live": "polite"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    class: "sun-and-moon",
    "aria-hidden": "true",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("mask", {
    class: "moon",
    id: "moon-mask"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "24",
    cy: "10",
    r: "6",
    fill: "black"
  })), /*#__PURE__*/_react.default.createElement("circle", {
    class: "sun",
    cx: "12",
    cy: "12",
    r: "6",
    mask: "url(#moon-mask)",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("g", {
    class: "sun-beams",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  }))));
};

var _default = ThemeSwitch;
exports.default = _default;