const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello! CI/CD Pipeline is working successfully.");
});

describe("GET /", () => {
  test("should return 200 and expected message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello! CI/CD Pipeline is working successfully."
    );
  });
});