const PROXY_CONFIG = [
  {
    context: [
      "/images/list"
    ],
    target: "https://araneum.marcomprocloud.eu/",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;