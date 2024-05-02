import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";

@Entity("companies")
export default class Empresa {
  @PrimaryGeneratedColumn("increment")
  public id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  public name: string;

  @Column({ type: "decimal", nullable: false, unique: true })
  public phone: number;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  public nif: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  public email: string;

  @Column({ type: "varchar", length: 255, nullable: true, unique: true })
  public logo_img: string;

  @OneToMany(() => User, (user) => user.company)
  public users!: User[];

  @CreateDateColumn()
  public createdDate!: Date;

  @UpdateDateColumn()
  public updatedDate!: Date;
 
  constructor(
    name: string,
    phone: number,
    email: string,
    nif: string,
    logo_img: string
  ) {
    this.name = name;
    (this.phone = phone), (this.email = email);
    this.nif = nif;
    this.logo_img = logo_img;
  }
}
