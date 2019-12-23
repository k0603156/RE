import Router from "express";
const router = Router();
router.get("/", (req, res, next) => {
  res.send("ww");
});
router.post("/", (req, res, next) => {});
router.put("/", (req, res, next) => {});
router.delete("/", (req, res, next) => {});

export default router;
