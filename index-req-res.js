const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
	const { method, url } = req;

	console.log(`Incoming ${method} request to ${url}`);

	if (url === "/api/data") {
		switch (method) {
			case "GET":
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "GET request received" }));
				break;

			case "POST":
				let body = "";
				req.on("data", (chunk) => {
					body += chunk;
				});
				req.on("end", () => {
					console.log("POST Data:", body);
					res.writeHead(201, { "Content-Type": "application/json" });
					res.end(
						JSON.stringify({
							message: "POST request received",
							data: body,
						})
					);
				});
				break;

			case "PUT":
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "PUT request received" }));
				break;

			case "PATCH":
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "PATCH request received" }));
				break;

			case "DELETE":
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ message: "DELETE request received" }));
				break;

			default:
				res.writeHead(405, { "Content-Type": "text/plain" });
				res.end(`${method} not allowed`);
				break;
		}
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("Route not found");
	}
});

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
