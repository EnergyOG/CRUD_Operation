import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";

describe("POST /api/create - Validation", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should respond with 200", async () => {
    const response = await request(app).post("/api/create").send({
      username: "Dennis Peprah",
      email: "dennispeprah@gmail.com",
      password: "dennis1"
    });
    console.log("Response body:", response.body);

    expect(response.status).toBe(400);
  });
});