import { PrismaClient } from '@prisma/client';
import { IVeiculo } from "../interfaces/IVeiculo";
import { CustomError } from '../utils/CustomError';
import { httpStatusCode } from '../utils/httpStatusCode';

class Veiculo {
  async show(placa: string) {
    const prisma = new PrismaClient();

    try {
      const veiculo = await prisma.veiculo.findUnique({
        select: {
          id: true,
          placa: true,
          chassi: true,
          renavam: true,
          modelo: true,
          marca: true,
          ano: true
        },
        where: {
          placa
        }
      });

      return veiculo;
    } catch (error) {
      throw new CustomError(error.message, httpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async index() {
    const prisma = new PrismaClient();

    try {
      const veiculos = await prisma.veiculo.findMany({
        select: {
          id: true,
          placa: true,
          chassi: true,
          renavam: true,
          modelo: true,
          marca: true,
          ano: true
        }
      });
      return veiculos;
    } catch (error) {
      throw new CustomError(error.message, httpStatusCode.INTERNAL_SERVER_ERROR);

    }
  }

  async create(veiculo: IVeiculo) {
    const prisma = new PrismaClient();

    try {
      await prisma.veiculo.create({
        data: veiculo
      });

    } catch (error) {
      throw new CustomError(error.message, httpStatusCode.INTERNAL_SERVER_ERROR);
      ;
    }
  }

  async update(veiculo: IVeiculo) {
    const prisma = new PrismaClient();

    try {
      await prisma.veiculo.update({
        data: veiculo,
        where: {
          placa: veiculo.placa
        }
      })
    } catch (error) {
      throw new CustomError(error.message, httpStatusCode.INTERNAL_SERVER_ERROR);
      ;
    }
  }

  async delete(placa: string) {
    const prisma = new PrismaClient();

    try {
      await prisma.veiculo.delete({
        where: { placa }
      });
    } catch (error) {
      throw new CustomError(error.message, httpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}

export { Veiculo };