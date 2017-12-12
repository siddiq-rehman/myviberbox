var config = {
   entry: './Loader.jsx',
	
   output: {
             libraryTarget: "umd",
        library: "Loader",
      filename: './bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 6900,
	  historyApiFallback: true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react'],
			   plugins: ['transform-decorators-legacy']
            }
         },
		 { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
   },
}

module.exports = config;