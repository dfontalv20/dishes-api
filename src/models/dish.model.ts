import { Column, Model, Table } from "sequelize-typescript";

@Table
class Dish extends Model {
    @Column
    name: string

    @Column
    description: string

    @Column
    photo: string

    @Column
    cost: number
}

export default Dish;