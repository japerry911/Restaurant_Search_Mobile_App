/*module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};*/

module.exports = function (api) {
  api.cache(true)
  return {
    "presets": ["module:metro-react-native-babel-preset", "module:react-native-dotenv"]
  };
}