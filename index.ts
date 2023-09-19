import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.render("index", {
    userAgent: req.headers["user-agent"],
    title: "Homepage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact-me", (req, res) => {
  res.render("contact", { title: "Contact Me" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
