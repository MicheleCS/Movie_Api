import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { UserRepository } from 'shared/repositories/user.repository';
import { CreateAssessmentController } from './contexts/create/create.controller';
import { CreateAssessmentService } from './contexts/create/create.service';
import { DeleteAssessmentController } from './contexts/delete/delete.controller';
import { DeleteAssessmentService } from './contexts/delete/delete.service';
import { GetAllAssessmentController } from './contexts/getAll/getAll.controller';
import { GetAllAssessmentService } from './contexts/getAll/getAll.service';
import { GetOneAssessmentController } from './contexts/getOne/getOne.controller';
import { GetOneAssessmentService } from './contexts/getOne/getOne.service';
import { UpdateAssessmentController } from './contexts/update/update.controller';
import { UpdateAssessmentService } from './contexts/update/update.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssessmentRepository,
      UserRepository,
      MovieRepository,
    ]),
  ],
  controllers: [
    CreateAssessmentController,
    DeleteAssessmentController,
    GetAllAssessmentController,
    GetOneAssessmentController,
    UpdateAssessmentController,
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateAssessmentService,
    DeleteAssessmentService,
    GetAllAssessmentService,
    GetOneAssessmentService,
    UpdateAssessmentService,
  ],
})
export class AssessmentModule {}
