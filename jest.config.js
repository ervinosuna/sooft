module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage", // Carpeta donde Jest guardará el reporte de cobertura
  testMatch: ["**/?(*.)+(test).js"], //["**/tests/**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/"],
};
