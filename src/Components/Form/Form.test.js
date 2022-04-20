"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("./Form"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
describe('Form', () => {
    it('renders Form component', () => {
        (0, react_2.render)(react_1.default.createElement(Form_1.default, { addMessage: Object }));
    });
    it('have to the input', () => {
        (0, react_2.render)(react_1.default.createElement(Form_1.default, { addMessage: Object }));
        expect(react_2.screen.getByRole('textbox')).toBeInTheDocument();
    });
    it('render to by placeholder', () => {
        (0, react_2.render)(react_1.default.createElement(Form_1.default, { addMessage: Object }));
        expect(react_2.screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
    });
    it('value is empty string', () => {
        (0, react_2.render)(react_1.default.createElement(Form_1.default, { addMessage: Object }));
        expect(react_2.screen.getByDisplayValue('')).toBeInTheDocument();
    });
    it('render with snapshot', () => {
        const { asFragment } = (0, react_2.render)(react_1.default.createElement(Form_1.default, { addMessage: Object }));
        expect(asFragment()).toMatchSnapshot();
    });
});
