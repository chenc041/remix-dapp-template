/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    "axios",
    "@web3modal/ethereum",
    "@web3modal/react",
    "@web3modal/core",
    /^@?wagmi.*/,
    /.*/,
  ],
};
