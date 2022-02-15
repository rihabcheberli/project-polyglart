import {Body, Controller, Get, Post,Req,Res,HttpStatus, Param } from '@nestjs/common';
// @ts-ignore
import { Response } from 'express';
import {CreateSiteDto} from "./create-site.dto";

@Controller('sites')
export class SitesController {
    @Post()
    async addSite (@Body() CreateSiteDto: CreateSiteDto) {
        return 'The site was added';
    }

    @Get('sites')
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }
}

