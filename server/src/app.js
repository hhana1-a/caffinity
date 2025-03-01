import express from "express";
import cors from "cors";
import cafeRouter from "./routes/cafe.js";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import reviewRouter from "./routes/review.js";
import utilitiesRouter from "./routes/utilities.js";
import foodOptionsRouter from "./routes/food-options.js";
import favoritesRouter from "./routes/favorites.js";
import errorHandler from "./middlewares/errorHandler.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/cafes", cafeRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/utilities", utilitiesRouter);
app.use("/api/food-options", foodOptionsRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api", authRouter);

app.use(errorHandler);

export default app;
