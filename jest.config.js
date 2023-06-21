/** @type {import('ts-jest').JestConfigWithTsJest} */




module.exports = {
    preset: "ts-jest",
    //setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testEnvironment: "jsdom",
    //testEnvironment: "node",
    collectCoverageFrom: [
        "src/**/*.test.tsx",
        "src/**/*.spec.tsx",
        "src/**/*.test.ts",
        "src/**/*.spec.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
        "./src": {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};
