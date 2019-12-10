import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pug } from './interfaces/pug.interface';
import { CreatePugDto } from './dto/create-pug.dto';

@Injectable()
export class PugService {
  constructor(@InjectModel('Pug') private readonly pugModel: Model<Pug>) {}

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
