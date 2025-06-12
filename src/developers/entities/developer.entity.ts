import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const {nanoid} = require("nanoid");

@Entity('developers') // This will create a table named 'developers'
export class Developer {
    @PrimaryColumn()
    id: string; //dev_09d8as-d09as

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid(10)}`;
    }   
}
