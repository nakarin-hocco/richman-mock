import { Module } from '@nestjs/common';
import { RichmanController } from './richman/richman.controller';

@Module({
  controllers: [RichmanController]
})
export class RichmanModule {}
