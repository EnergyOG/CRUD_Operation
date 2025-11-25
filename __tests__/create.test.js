import request from "supertest";
import app from "../server.js";
// import mongoose from "mongoose";

describe("POST /api/create", () => {
  
  // afterAll(async () => {
  //   await mongoose.connection.close();
  // });

  it("should respond with 201 and return JSON", async () => {
    
    const email = `test${Math.random()}@gmail.com`;

    const response = await request(app)
      .post("/api/create")
      .send({
        username: "username",
        email,
        password: "password",
      });

    expect(response.status).toBe(201);

    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    expect(response.body).toHaveProperty("message", "User created successfully");
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("email", email);
  });

  it("should return 400 if user already exists", async () => {
    const email = `duplicate${Math.random()}@gmail.com`;

    await request(app)
      .post("/api/create")
      .send({
        username: "username",
        email,
        password: "password",
      });

    const response = await request(app)
      .post("/api/create")
      .send({
        username: "username",
        email,
        password: "password",
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "User already exists");
  });

});