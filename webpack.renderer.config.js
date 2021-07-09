/* eslint @typescript-eslint/no-var-requires: "off"  */
const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");

rules.push({
	test: /\.css$/,
	use: [
		{ loader: "style-loader" },
		{ loader: "css-loader", options: { importLoaders: 1 } },
		{ loader: "postcss-loader" },
	],
});

module.exports = {
	module: {
		rules,
	},
	plugins: plugins,
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
		plugins: [
			new TsconfigPathsPlugin({
				baseUrl: ".",
			}),
			// prettier-ignore

			new webpack.ProvidePlugin({
				"React": "react",
			}),
		],
	},
};
