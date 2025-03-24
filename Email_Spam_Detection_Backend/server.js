import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PythonShell } from "python-shell";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", (req, res) => {
    const emailText = req.body.email_text;

    let options = {
        mode: "text",
        pythonPath: "python",
        scriptPath: "./",
        args: [emailText]
    };

    PythonShell.run("predict.py", options, (err, results) => {
        if (err) res.json({ error: err.message });
        else res.json({ result: results[0] });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
