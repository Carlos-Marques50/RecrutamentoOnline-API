import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import LevelAccess from "./LevelAccess";
import Company from "./Company";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  public id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  public name!: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  public email!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  public password!: string;

  @Column({ type: "boolean", nullable: false, default: true })
  public status!: boolean;

  @ManyToOne(() => LevelAccess, (levelAccess) => levelAccess.users) // ManyToOne relationship
  public levelAccess!: LevelAccess;

  @ManyToOne(() => Company, (company) => company.users) // ManyToOne relationship
  public company!: Company;

  @CreateDateColumn()
  public createdDate!: Date;

  @UpdateDateColumn()
  public updatedDate!: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    status: boolean,
    levelAccess: LevelAccess,
    company: Company
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = status;
    this.levelAccess = levelAccess;
    this.company = company;
  }
}
