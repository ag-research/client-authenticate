//This is a setup file for jest

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};

const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};

const JSONMock = {
    parse: jest.fn(),
    stringify: jest.fn(),
};

global.localStorage = localStorageMock;
global.sessionStorage = sessionStorageMock;
// global.JSON = JSONMock