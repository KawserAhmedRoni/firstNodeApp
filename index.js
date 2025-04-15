const fs = require("fs");
const path = require("path");

// Set file path
const filePath = path.join(__dirname, "test.txt");
const newFilePath = path.join(__dirname, "renamed.txt");

// ✅ Create or Write file
fs.writeFile(filePath, "Hello Kawser Roni!", (err) => {
	if (err) throw err;
	console.log("File created ✔️");

	// 📖 Read the file
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) throw err;
		console.log("File content 📄:", data);

		// 📝 Append new content
		fs.appendFile(filePath, "\nThis is extra content.", (err) => {
			if (err) throw err;
			console.log("Content appended ✏️");

			// ✏️ Rename the file
			fs.rename(filePath, newFilePath, (err) => {
				if (err) throw err;
				console.log("File renamed 📝");

				// ❌ Delete the file
				fs.unlink(newFilePath, (err) => {
					if (err) throw err;
					console.log("File deleted ❌");
				});
			});
		});
	});
});
