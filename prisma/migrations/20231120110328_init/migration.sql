-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "dataLimite" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "listaDeLances" TEXT NOT NULL,
    CONSTRAINT "Leilao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuarioId" TEXT NOT NULL,
    "leilaoId" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "Lance_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_usuarioId_key" ON "Leilao"("usuarioId");
