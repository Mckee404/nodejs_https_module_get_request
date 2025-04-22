const https = require("https");
const { URL } = require("url");

const url = new URL("https://httpbin.org/headers");

const options = {
	// headersに[key: value]の形式でヘッダ情報を記載する
	// headersの他にもいろいろなオプションを指定できる
	headers: {
		"User-Agent": "Node.js",
		Accept: "application/json",
	},
};

https.get(url, options, (res) => {
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log("Response:", data);
	});
});
