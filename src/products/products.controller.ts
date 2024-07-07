import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get, Param, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): any {
    return this.productsService.getById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    const success = this.productsService.deleteById(id);
    if (success) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
