import * as express from "express";
import * as dishService from "../services/dish.service";

export const all = async (req: express.Request, res: express.Response) => {
    try {
        const records = await dishService.all();
        return res.status(200).json(records);
    } catch (error) {
        console.error(error);
    }
}

export const get = async (req: express.Request, res: express.Response) => {
    try {
        const id = parseInt(req.params.id);
        const record = await dishService.get(id);
        if (record === null) return res.status(404).json({message: "Plato no encontrado"});
        return res.status(200).json(record);
    } catch (error) {
        console.error(error);
    }
}

export const add = async (req: express.Request, res: express.Response) => {
    try {
        const newDish = await dishService.add(req.body);
        return res.status(201).json(newDish);
    } catch (error) {
        console.error(error);
    }
}

export const destroy = async (req: express.Request, res: express.Response) => {
    try {
        const id = parseInt(req.params.id);
        await dishService.destroy(id);
        return res.status(200).json({message: "Plato eliminado"});
    } catch (error) {
        console.error(error);
    }
}

export const update = async (req: express.Request, res: express.Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedDish = await dishService.update(id, req.body);
        return res.status(200).json(updatedDish);
    } catch (error) {
        console.error(error);
    }
}