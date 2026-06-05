const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const corsOptions = {
	origin: process.env.FRONTEND_URL,
	methods: ["GET", "POST", "DELETE", "PUT"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use 9000 locally so it matches your frontend env example.
// On Vercel, the platform-provided PORT will be used automatically.
const PORT = process.env.PORT || 9000;

// All routers
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const taskRoute = require("./routes/task");
const analyticsRoute = require("./routes/analytics");

// Connect to Database
main()
	.then(() => console.log("Database Connection established"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(process.env.MONGODB_URI);
}

// Root route
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to Task_Management!",
		frontend_url: process.env.FRONTEND_URL,
	});
});

// All routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/task", taskRoute);
app.use("/api/analytics", analyticsRoute);

// Invalid routes (Express 5 requires a named wildcard)
app.all("/{*splat}", (req, res) => {
	res.status(404).json({ error: "Invalid Route" });
});

// Error handling middleware
app.use((err, req, res, next) => {
	const errorMessage = err.message || "Something Went Wrong!";
	res.status(500).json({ message: errorMessage });
});

// Only listen when running locally
if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Server listening on ${PORT}`);
	});
}

module.exports = app;