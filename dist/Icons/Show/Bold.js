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
const ShowBold = (props) => ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { width: 24, height: 24, fill: "none", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M8.098 12c0 2.133 1.746 3.87 3.902 3.87 2.146 0 3.893-1.737 3.893-3.87A3.888 3.888 0 0 0 12 8.121c-2.156 0-3.902 1.736-3.902 3.879Zm9.639-5.954c1.707 1.319 3.16 3.249 4.205 5.663a.729.729 0 0 1 0 .572C19.854 17.111 16.137 20 12 20h-.01c-4.127 0-7.844-2.89-9.931-7.719a.728.728 0 0 1 0-.572C4.146 6.88 7.863 4 11.99 4H12c2.068 0 4.03.718 5.737 2.046ZM12 14.412a2.428 2.428 0 0 0 2.43-2.414A2.43 2.43 0 0 0 12 9.574c-.117 0-.234.01-.341.029a1.997 1.997 0 0 1-2 1.92h-.05c-.028.155-.048.31-.048.475 0 1.328 1.093 2.414 2.44 2.414Z", fill: props.fillColor }) }));
exports.default = ShowBold;
//# sourceMappingURL=Bold.js.map