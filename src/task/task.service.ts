import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class TaskService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: Logger,
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
  async handleCronKeepAlive() {
    this.logger.log('Iniciando requisição POST para JSONPlaceholder...');
  }
}
