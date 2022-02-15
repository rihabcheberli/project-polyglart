import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Site } from './entities/Site.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { UserRoleEnum } from '../enums/user-role.enum';
import { UsersService } from '../user/users.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EVENTS } from '../config/events';
import { Cache } from 'cache-manager';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
    private userService: UsersService,
    private eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findSiteById(id: number, user) {
    const site = await this.siteRepository.findOne(id);
    if (!site) {
      throw new NotFoundException(`${id} n'existe pas`);
    }
    if (this.usersService.isOwnerOrAdmin(site, user)) {
      return site;
    } else throw new UnauthorizedException();
  }
  async getSites(user): Promise<Site[]> {
    if (user.role === UserRoleEnum.ADMIN)
      return await this.siteRepository.find();
    return await this.siteRepository.find({ owner: user });
  }

  async addSite(site: CreateSiteDto, user): Promise<Site> {
    const newSite = this.siteRepository.create(site);
    newSite.owner = user;
    await this.siteRepository.save(newSite);
    this.eventEmitter.emit(EVENTS.SITE_ADD, {
      name: newSite.name,
    });
    return newSite;
  }

  async updateSite(id: number, site: UpdateSiteDto, user): Promise<Site> {
    const newSite = await this.siteRepository.preload({ id: site.id });
    if (!newSite) {
      throw new NotFoundException(`${id} n'existe pas`);
    }
    if (this.userService.isOwnerOrAdmin(newSite, user))
      return await this.siteRepository.save(newSite);
    else new UnauthorizedException('');
  }

  async removeSite(id: number, user) {
    const siteToRemove = await this.findSiteById(id, user);
    return await this.siteRepository.remove(siteToRemove);
  }

  async softDeleteSite(id: number, user) {
    const site = await this.siteRepository.findOne({ id });
    if (!site) {
      throw new NotFoundException('');
    }
    if (this.userService.isOwnerOrAdmin(site, user))
      return this.siteRepository.softDelete(id);
    else throw new UnauthorizedException('');
  }

  async restoreSite(id: number, user) {
    const site = await this.siteRepository.query(
      'select * from Site where id = ?',
      [id],
    );
    if (!site) {
      throw new NotFoundException('');
    }
    if (this.userService.isOwnerOrAdmin(site, user))
      return this.siteRepository.restore(id);
    else throw new UnauthorizedException('');
  }

  async deleteSite(id: number) {
    return await this.siteRepository.delete(id);
  }
}
