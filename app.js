import "dotenv/config";
import { connectDB } from "./config/connect.js";
import fastify from "fastify";
import { PORT } from "./config/config.js";

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("Connected to the database");
  const app = fastify();

  app.listen({ port: process.env.PORT || 3000, host: "127.0.0.1" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
