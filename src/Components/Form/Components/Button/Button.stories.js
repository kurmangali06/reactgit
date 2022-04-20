"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("./Button");
exports.default = {
    title: 'MyComponents/Button',
    component: Button_1.Button,
    argTypes: {
        onButtonClick: { action: 'click' },
    },
};
const Template = (args) => react_1.default.createElement(Button_1.Button, Object.assign({}, args));
exports.Primary = Template.bind({});
exports.Primary.args = {
    disabled: false,
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    disabled: true,
};
