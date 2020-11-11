import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return `
    DATABASE_USER: ${this.configService.get<string>('DATABASE_USER')}
    DATABASE_PASSWORD: ${this.configService.get<string>('DATABASE_PASSWORD')}
    FOO: ${this.configService.get<string>('FOO')}
    `;
  }
}
