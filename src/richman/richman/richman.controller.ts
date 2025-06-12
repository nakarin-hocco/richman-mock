import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';

import testcase from 'src/richman/richman/category/testcase-20.json';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('api')
export class RichmanController {
  @Get('games')
  findGames() {
    return testcase;
  }

  @Get('gamePrices/:gameId')
  findGamePrices(@Param('gameId') gameId: number, @Res() res: Response) {
    // return testcase;
    const filePath = path.join(
      __dirname,
      'product',
      `testcase-1-category-${gameId}.json`,
    );
    console.log(filePath);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException(`File with id ${gameId} not found`);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${gameId}.json"`,
    );

    return res.sendFile(filePath);
  }
}
