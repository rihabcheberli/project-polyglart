import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateSiteDto } from './dto/create-site.dto';

@Controller('sites')
export class SitesController {
  @Post()
  async addSite(@Body() CreateSiteDto: CreateSiteDto) {
    return 'The site was added';
  }

  @Get('sites')
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }
}
