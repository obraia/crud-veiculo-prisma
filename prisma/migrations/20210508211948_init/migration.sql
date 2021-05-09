-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "renavam" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL,
    "editadoEm" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo.id_unique" ON "Veiculo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo.placa_unique" ON "Veiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo.chassi_unique" ON "Veiculo"("chassi");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo.renavam_unique" ON "Veiculo"("renavam");
