-- CreateTable
CREATE TABLE [dbo].[Veiculo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [placa] NVARCHAR(1000) NOT NULL,
    [chassi] NVARCHAR(1000) NOT NULL,
    [renavam] NVARCHAR(1000) NOT NULL,
    [modelo] NVARCHAR(1000) NOT NULL,
    [marca] NVARCHAR(1000) NOT NULL,
    [ano] INT NOT NULL,
    [criadoEm] DATETIME2 NOT NULL CONSTRAINT [DF__Veiculo__criadoEm] DEFAULT CURRENT_TIMESTAMP,
    [editadoEm] DATETIME2,
    CONSTRAINT [Veiculo_id_unique] UNIQUE ([id]),
    CONSTRAINT [Veiculo_placa_unique] UNIQUE ([placa]),
    CONSTRAINT [Veiculo_chassi_unique] UNIQUE ([chassi]),
    CONSTRAINT [Veiculo_renavam_unique] UNIQUE ([renavam])
);
