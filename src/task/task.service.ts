import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
    private readonly httpService: HttpService,
  ) {}
  
  /**
   * Agendamento para ser executado a cada 50 minutos.
   * Expressão cron:
   * Minuto (0-59) | Hora (0-23) | Dia do Mês (1-31) | Mês (1-12) | Dia da Semana (0-7)
   * 50          * * * *
   *
   * Isso significa: A cada 50 minutos de cada hora, todos os dias.
  */
  @Cron('*/50 * * * *')
  async handleCreatePost() {
    this.logger.log('Iniciando requisição POST para JSONPlaceholder...');

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const payload = {
      title: 'Título da minha tarefa agendada',
      body: 'Este é o conteúdo enviado automaticamente a cada 50 minutos.',
      userId: 1,
    };

    try {
      const { data } = await firstValueFrom(
        this.httpService.post(url, payload).pipe(
          catchError((error) => {
            this.logger.error(`Falha ao criar post: ${error.message}`);
            if (error.response) {
              this.logger.error(`Status: ${error.response.status}, Dados: ${JSON.stringify(error.response.data)}`);
            }
            throw 'Erro na requisição HTTP'; 
          })
        )
      )
      
      this.logger.log(`Post criando com sucesso: ID gerado: ${data.id}`);
      this.logger.debug(`Dados retornados: ${JSON.stringify(data)}`);
      return data;
    } catch (error) {
      this.logger.error(`O job handleCreatePost falhou.`);
    }
  }
}
