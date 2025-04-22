const https = require("node:https");
// require("node:https") はnodejsの標準パッケージであることを強調
// require("https")でもOK

https.get("https://pokeapi.co/api/v2/pokemon/pikachu", (res) => {
	console.log(`ステータスコード: ${res.statusCode}`);

	let body = "";

	// データが分割されたカタマリ（chunk）を受信する度に以下の関数が実行される
	res.on("data", (chunk) => {
		body += chunk;
	});

	// 全てのchunkが受信されたら以下の関数が実行される
	res.on("end", () => {
		// bodyは文字列なのでオブジェクトにパースする
		const data = JSON.parse(body);
		console.log("ピカチュウの情報");
		console.log(
			`タイプ: ${data.types.map((type) => type.type.name).join(", ")}`
		);
		console.log(`体重: ${data.weight}`);
	});
});
