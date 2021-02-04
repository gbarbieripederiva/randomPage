import express from "express";
import path from "path";

import userRoute from "./apiRoutes/user";
import loginRoute from "./apiRoutes/login";

const PORT = parseInt(process.env.PORT) || 8080;

const app = express();

app.use(express.json({ type: (req) => req.headers["content-type"].match("application/.*\\+?json") }));

app.use("/api/user", userRoute);
app.use("/api/login", loginRoute);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Server started...");
})
