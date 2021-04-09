module.exports = {
	outputDir: "docs",
	publicPath: process.env.NODE_ENV === "production" ? "/" : "/Home",
	configureWebpack: {
		output: {
			libraryExport: "default",
		},
	},
	css: { extract: false },
};
