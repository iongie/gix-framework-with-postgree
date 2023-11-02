import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Example {
    @PrimaryColumn()
    id: number
    
    @Column()
    name: string;

    @Column()
    username: number;

    @Column()
    password: string;

    @Column()
    loading: boolean;
}
