import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Assessment } from './assessment.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  movie: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  actor: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  director: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  gender: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @OneToMany(() => Assessment, (assessment) => assessment.movie)
  public assessments?: Assessment[];
}
