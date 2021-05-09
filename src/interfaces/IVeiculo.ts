interface IVeiculo {
  id: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
  criadoEm: Date;
  editadoEm: Date;
}

export { IVeiculo };