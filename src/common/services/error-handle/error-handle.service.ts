import {
    BadRequestException, Injectable, InternalServerErrorException,
    Logger, LoggerService
} from '@nestjs/common';

@Injectable()
export class ErrorHandleService {
    private readonly logger = new Logger('ErrorHandleService');
    constructor() {

    }
    public errorHandle(error: any) {
        if (error.code === '23505') {
            this.logger.error('Database error:', error.detail);
            throw new BadRequestException(error.detail);
        }

        this.logger.error('Unexpected error:', error);
        throw new InternalServerErrorException('Unexpected Error, check server logs for more details.');
    }
}