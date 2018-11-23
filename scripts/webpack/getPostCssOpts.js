module.exports = ({ IS_PRODUCTION, config }) => ({
  ident: 'postcss',
  sourceMap:
    (IS_PRODUCTION && config.ENABLE_PROD_SOURCEMAPS) ||
    (!IS_PRODUCTION && config.ENABLE_DEV_SOURCEMAPS),
  plugins: [
    require('postcss-import')(),
    require('precss')(),
    require('autoprefixer')({
      browsers: config.BROWSERS_LIST,
    }),
  ],
});
