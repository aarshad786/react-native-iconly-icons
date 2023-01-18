"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const BagLight = (props) => ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M16.514 21.5H8.166c-3.067 0-5.419-1.108-4.75-5.565l.777-6.041c.412-2.225 1.83-3.076 3.076-3.076h10.178c1.263 0 2.6.915 3.076 3.076l.778 6.04c.567 3.955-1.721 5.566-4.787 5.566Z", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M16.651 6.598a4.32 4.32 0 0 0-4.32-4.32v0a4.32 4.32 0 0 0-4.34 4.32h0M15.296 11.102h-.045M9.466 11.102H9.42", stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })] }));
exports.default = BagLight;
//# sourceMappingURL=Light.js.map