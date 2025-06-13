import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

import testcase from 'src/richman/richman/category/testcase-2.json';
import * as path from 'path';
import * as fs from 'fs';

@Controller('api')
export class RichmanController {
  @Get('games')
  findGames() {
    console.log('findGames');
    const timeStamp = new Date().toISOString();

    return {
      message: {
        code: 'P_I_0000',
        desc: 'Success.',
        timeStamp,
      },
      data: testcase,
    };
  }

  @Get('gamePrices/:gameId')

  findGamePrices(@Param('gameId') gameId: number) {
    const filePath = path.join(
      __dirname,
      'product',
      `testcase-2-category-${gameId}.json`,
    );

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException(`File with id ${gameId} not found`);
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const testcase = JSON.parse(fileContent);

    const timeStamp = new Date().toISOString();

    return {
      message: {
        code: 'P_I_0000',
        desc: 'Success.',
        timeStamp,
      },
      data: testcase,
    };
  }
}
