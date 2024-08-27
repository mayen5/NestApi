import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ErrorHandleService } from 'src/common/services/error-handle/error-handle.service';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly errorHandler: ErrorHandleService,
  ) { }

  async create(createProductDto: CreateProductDto) {
    try {
      // Create a new product
      const product = this.productRepository.create(createProductDto);
      // Save the product to the database
      await this.productRepository.save(product);
      // Return the product
      return product;
    } catch (error) {
      this.errorHandler.errorHandle(error);
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

}
