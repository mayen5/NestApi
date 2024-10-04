import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');

    use(req: Request, res: Response, next: NextFunction): void {
        const { method, originalUrl } = req;
        const startTime = Date.now();

        // Capturar la respuesta finalizada
        res.on('finish', () => {
            const { statusCode } = res;
            const contentLength = res.get('content-length');
            const responseTime = Date.now() - startTime;

            // Log con formato similar a Morgan 'dev', pero usando el logger de Nest.js
            this.logger.log(
                `${method} ${originalUrl} ${statusCode} - ${contentLength || 0}b sent in ${responseTime}ms`,
            );
        });

        // Continuar al siguiente middleware
        next();
    }
}
