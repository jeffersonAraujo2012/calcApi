import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import calcRouter from "./modules/calc/calc.routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (true) {
        callback(null, true)
      }
    },
    credentials: true, // Permitir compartilhamento de cookies
  })
);
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/calc", calcRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is online on port ${PORT}`);
});
