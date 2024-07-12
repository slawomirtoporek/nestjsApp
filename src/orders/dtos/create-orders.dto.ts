import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateOrderDTO {
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  @IsString()
  client: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
