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
const HeartCurved = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsxs)(react_native_svg_1.G, { stroke: props.fillColor, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { clipRule: "evenodd", d: "M2.922 12.446C1.849 9.096 3.104 4.931 6.62 3.8c1.85-.597 4.133-.099 5.43 1.69 1.223-1.855 3.572-2.283 5.42-1.69 3.516 1.132 4.778 5.297 3.706 8.647-1.67 5.31-7.497 8.076-9.126 8.076-1.628 0-7.403-2.704-9.13-8.076Z" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M15.789 7.564c1.207.124 1.962 1.081 1.917 2.422" })] }) }));
exports.default = HeartCurved;
//# sourceMappingURL=Curved.js.map