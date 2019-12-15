import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pug } from './interfaces/pug.interface';
import { CreatePugDto } from './dto/create-pug.dto';
import { ConfigurationService } from 'src/shared/configuration.service';

@Injectable()
export class PugService {
  constructor(
    private readonly configuration: ConfigurationService,
    @InjectModel('Pug') private readonly pugModel: Model<Pug>,
  ) {}

  async create(createPug: CreatePugDto): Promise<Pug> {
    const createdPug = new this.pugModel(createPug);
    return await createdPug.save();
  }

  async findAll(): Promise<Pug[]> {
    return await this.pugModel.find().exec();
  }

  async findById(id: string): Promise<Pug> {
    return await this.pugModel.findById(id).exec();
  }
}
