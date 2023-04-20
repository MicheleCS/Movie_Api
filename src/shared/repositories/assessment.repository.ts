import { Assessment } from 'shared/database/entities/assessment.entity';
import { CreateAssessmentDTO } from 'shared/dto/assessment/createAssessment.dto';
import { UpdateAssessmentDTO } from 'shared/dto/assessment/updateAssessment.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Assessment)
export class AssessmentRepository extends Repository<Assessment> {
  async createAssessment(dto: CreateAssessmentDTO): Promise<Assessment> {
    const assessment = this.create(dto);
    return this.save(assessment);
  }

  async findAllAssessment(): Promise<Assessment[] | undefined> {
    return this.find();
  }

  async findAllAssessmentsByMovie(id): Promise<Assessment[]> {
    return this.find({ where: { movie: id } });
  }

  async findOneAssessment(id: string): Promise<Assessment | undefined> {
    return this.findOne({ id });
  }

  async updateAssessment(dto: UpdateAssessmentDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteAssessment(id: string): Promise<void> {
    await this.delete(id);
  }
}
