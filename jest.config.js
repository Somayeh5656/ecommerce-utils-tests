export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  coveragePathIgnorePatterns: ["<rootDir>/src/.internal/"],
};
