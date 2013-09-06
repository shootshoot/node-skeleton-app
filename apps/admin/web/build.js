({
  baseUrl: ".",
  name: "main",
  out: "main-built.js",

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  mainConfigFile: ["static/require.config.js"]
})