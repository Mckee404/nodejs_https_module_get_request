const https = require("https");
const { URL } = require("url");

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

// URLオブジェクトを作成
// URLオブジェクトはURLを操作するための便利なクラス
const url = new URL(baseUrl);

let postIds = [1, 3, 9];

for (postId of postIds) {
	// URLにクエリパラメータを追加
	// https://jsonplaceholder.typicode.com/posts?id=1&id=3&id=9 ってなる
	url.searchParams.append("id", postId);
}

// リクエストを送る
https.get(url, (res) => {
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log("Response:", data);
	});
});
