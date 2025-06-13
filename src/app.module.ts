import { Module } from '@nestjs/common';
import { RichmanModule } from './richman/richman.module';

@Module({
  imports: [RichmanModule],
})
export class AppModule {}
