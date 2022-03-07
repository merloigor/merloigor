import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("Bill")
class Bill {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    due_date: Date;

    @Column()
    is_payed: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Bill };
