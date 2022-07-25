import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ nullable: false })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ nullable: false })
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ nullable: false })
  cpf: string;

  @ApiProperty()
  @IsBoolean()
  @Column()
  acctive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;
}
