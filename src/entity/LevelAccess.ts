import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";

@Entity("level_access")
export default class NivelAcesso {
  @PrimaryGeneratedColumn("increment")
  public id!: number;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  public role!: string;

  @Column({ type: "longtext", nullable: true })
  public descricao!: string;

  @OneToMany(() => User, (users) => users.company)
  public users!: User[];

  @CreateDateColumn()
  public createdDate!: Date;

  @UpdateDateColumn()
  public updatedDate!: Date;

  constructor(descricao: string, role: string) {
    this.descricao = descricao;
    this.role = role;
  }
}
