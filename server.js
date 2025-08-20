import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __devPath = `${__dirname}/dist`;

app.use(express.static(__devPath));

app.use((req, res) => {
   res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
   console.log(`Portfolio running at http://localhost:${port}`);
});
