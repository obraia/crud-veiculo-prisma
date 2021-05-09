import { Request, Response } from 'express';
import { Veiculo as Repository } from '../repositories/Veiculo'
import { CustomError } from '../utils/CustomError';
import { httpStatusCode } from '../utils/httpStatusCode';

class Veiculo {
  async show(req: Request, res: Response) {
    const { placa } = req.params;
    const repository = new Repository();

    try {
      const veiculo = await repository.show(placa);

      if (!veiculo) throw new CustomError('Placa não encontrada.', httpStatusCode.NOT_FOUND);

      res.status(200).json(veiculo);
    } catch (error) {
      res.status(error.status).json({ mensagem: error.message });
    }
  }

  async index(req: Request, res: Response) {
    const { pagina = 1, linhas = 10 } = req.query;
    const repository = new Repository();

    try {
      const veiculos = await repository.index({
        pagina: Number(pagina),
        linhas: Number(linhas)
      });

      res.status(200).json(veiculos);
    } catch (error) {
      res.status(error.status).json({ mensagem: error.message });
    }
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    const repository = new Repository();

    try {
      const veiculo = await repository.show(body.placa);

      if (veiculo) throw new CustomError('Placa já cadastrada.', httpStatusCode.BAD_REQUEST);

      await repository.create(body);

      res.status(201).json({ mensagem: 'Veículo criado com sucesso.' });
    } catch (error) {
      res.status(error.status).json({ mensagem: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const { body } = req;
    const repository = new Repository();

    try {
      const veiculo = await repository.show(body.placa);

      if (!veiculo) throw new CustomError('Placa não encontrada.', httpStatusCode.NOT_FOUND);

      await repository.update(body);

      res.status(200).json({ mensagem: 'Veículo atualizado com sucesso.' });
    } catch (error) {
      res.status(error.status).json({ mensagem: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    const { placa } = req.params;
    const repository = new Repository();

    try {
      const veiculo = await repository.show(placa);

      if (!veiculo) throw new CustomError('Placa não encontrada.', httpStatusCode.BAD_REQUEST);

      await repository.delete(placa);

      res.status(200).json({ mensagem: 'Veículo deletado com sucesso.' });
    } catch (error) {
      res.status(error.status).json({ mensagem: error.message });
    }
  }
}

export { Veiculo };