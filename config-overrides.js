module.exports = function override(config, env) {
  config.module.rules.find(e => e.oneOf).oneOf.unshift(
    {
      test: /\.adoc$/i,
      use: 'raw-loader',
    }
  )
  return config;
}
