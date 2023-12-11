import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('THIS IS INTECEPTING THE REQUEST');
    console.log({ context });

    return handler.handle().pipe(
      map((data) => {
        console.log('THIS IS INTECEPTING THE RESPONSE');
        const response = {
          ...data,
          createdAt: data.created_at,
        };
        delete response.created_at;
        delete response.updated_at;
        console.log({ response });

        return response;
      }),
    );
  }
}
