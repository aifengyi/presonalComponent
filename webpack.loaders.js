module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public\/)/,
		loader: "babel"
	},
	{
		test: /\.(gif|jpg|eot|ttf)\??.*$/,
		exclude: /(node_modules|bower_components)/,
		loader: 'url-loader?limit=50000&name=[path][name].[ext]'
	}
];
