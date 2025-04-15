const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, Node.js server is running!\n");
});

const PORT = 3010;

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
