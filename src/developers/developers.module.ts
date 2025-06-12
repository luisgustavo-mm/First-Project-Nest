import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './entities/developer.entity'; // Adjust the import path as necessary

@Module({
  imports: [TypeOrmModule.forFeature([Developer])], // Assuming Developer is an entity defined in your application
  controllers: [DevelopersController],
  providers: [DevelopersService],
})
export class DevelopersModule {}
