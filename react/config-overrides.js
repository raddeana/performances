/**
 * create react app 配置覆盖
 * @author Philip
 */
const { override, fixBabelImports } = require('customize-cra');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production";

const closedMap = config => {
    // 修改掉webpack里面devtool的配置
    config.devtool = isEnvProduction ? 'cheap-module-source-map' : false;
    return config;
}; 

const addCompression = () => config => {
  if (isEnvProduction) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        threshold: 10240,
        deleteOriginalAssets: false,
        minRatio: 0.2
      })
    );
  }

  return config;
};

// 查看打包后各包大小
const addAnalyzer = () => config => {
    if (process.env.ANALYZER) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
};

const removeManifest = () => config => {
    config.plugins = config.plugins.filter(
        p => p.constructor.name !== "ManifestPlugin"
    );
    return config;
};

module.exports = override(
    closedMap,
    addAnalyzer(),
    addCompression(),
    removeManifest(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css'
    })
);