import express from "express";
import * as dishController from "../controllers/dish.controller";
const router = express.Router();

router.get('', dishController.all);
router.get('/:id', dishController.get);
router.post('', dishController.add);
router.delete('/:id', dishController.destroy);
router.put('/:id', dishController.update);
router.patch('/:id', dishController.update);


export default router;