// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ["expo", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
				tabWidth: 2,
				trailingComma: "es5",
				useTabs: true,
				experimentalTernaries: true,
			},
		],
	},
};
