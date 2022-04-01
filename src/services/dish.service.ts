import Dish from "../models/dish.model";

export const get = async (id: number): Promise<Dish> => {
    try {
        return await Dish.findByPk(id);
    } catch (error) {
        console.error(error);
    }
}

export const all = async (): Promise<Dish[]> => {
    try {
        return await Dish.findAll();
    } catch (error) {
        console.error(error);
    }
}

export const add = async (params: { name: string; description: string; photo?: string; cost: number; }): Promise<Dish> => {
    try {
        const { name, description, photo, cost } = params;
        return await new Dish({ name, description, photo, cost }).save();
    } catch (error) {
        console.error(error);
    }
}

export const update = async (id: number, params: { name: string; description: string; photo?: string; cost: number; }): Promise<Dish> => {
    try {
        const { name, description, photo, cost } = params;
        const dish = await Dish.findByPk(id);
        return await dish.update({ name, description, photo, cost });
    } catch (error) {
        console.error(error);
    }
}

export const destroy = async (id: number): Promise<void> => {
    try {
        const result = await (await Dish.findByPk(id)).destroy();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}