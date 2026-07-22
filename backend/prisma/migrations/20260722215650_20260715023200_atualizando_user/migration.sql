/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "tela_tema_enum" AS ENUM ('light', 'dark', 'auto');

-- CreateEnum
CREATE TYPE "role_enum" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "visibilidade_enum" AS ENUM ('private', 'public');

-- CreateEnum
CREATE TYPE "status_tarefa_enum" AS ENUM ('pending', 'in_progress', 'done');

-- CreateEnum
CREATE TYPE "status_amizade_enum" AS ENUM ('pendente', 'aceito', 'recusado');

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Tema";

-- CreateTable
CREATE TABLE "tb_amizades" (
    "id_usuario_remetente" UUID NOT NULL,
    "id_usuario_destinatario" UUID NOT NULL,
    "data_convite" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "status" "status_amizade_enum" DEFAULT 'pendente',

    CONSTRAINT "tb_amizades_pkey" PRIMARY KEY ("id_usuario_remetente","id_usuario_destinatario")
);

-- CreateTable
CREATE TABLE "tb_anotacao" (
    "id_anotacao" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(1000),
    "visibilidade" "visibilidade_enum" NOT NULL DEFAULT 'private',
    "data_criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cor_tematica" CHAR(7) NOT NULL DEFAULT '#3B82F6',
    "id_conjunto" UUID NOT NULL,
    "id_secao" UUID,
    "id_criador" UUID NOT NULL,

    CONSTRAINT "tb_anotacao_pkey" PRIMARY KEY ("id_anotacao")
);

-- CreateTable
CREATE TABLE "tb_conjunto" (
    "id_conjunto" UUID NOT NULL,
    "nome_conjunto" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(1000),
    "visibilidade" "visibilidade_enum" NOT NULL DEFAULT 'private',
    "data_de_criacao" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cor_tematica" CHAR(7) NOT NULL DEFAULT '#3B82F6',
    "id_criador" UUID NOT NULL,

    CONSTRAINT "tb_conjunto_pkey" PRIMARY KEY ("id_conjunto")
);

-- CreateTable
CREATE TABLE "tb_idioma" (
    "id_idioma" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "sigla" VARCHAR(5) NOT NULL,

    CONSTRAINT "tb_idioma_pkey" PRIMARY KEY ("id_idioma")
);

-- CreateTable
CREATE TABLE "tb_notas_tarefa" (
    "id_nota" UUID NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "id_tarefa" UUID NOT NULL,
    "id_autor" UUID NOT NULL,

    CONSTRAINT "tb_notas_tarefa_pkey" PRIMARY KEY ("id_nota")
);

-- CreateTable
CREATE TABLE "tb_secao" (
    "id_secao" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(1000),
    "visibilidade" "visibilidade_enum" NOT NULL DEFAULT 'private',
    "data_criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cor_tematica" CHAR(7) NOT NULL DEFAULT '#3B82F6',
    "id_conjunto" UUID NOT NULL,
    "id_criador" UUID NOT NULL,

    CONSTRAINT "tb_secao_pkey" PRIMARY KEY ("id_secao")
);

-- CreateTable
CREATE TABLE "tb_seguidores" (
    "id_seguidor" UUID NOT NULL,
    "id_seguido" UUID NOT NULL,
    "data_convite" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_seguidores_pkey" PRIMARY KEY ("id_seguidor","id_seguido")
);

-- CreateTable
CREATE TABLE "tb_tarefa" (
    "id_tarefa" UUID NOT NULL,
    "nome_tarefa" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(1000),
    "visibilidade" "visibilidade_enum" NOT NULL DEFAULT 'private',
    "data_de_criacao" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cor_tematica" CHAR(7) NOT NULL DEFAULT '#3B82F6',
    "prazo" TIMESTAMP(6) NOT NULL,
    "status" "status_tarefa_enum" NOT NULL DEFAULT 'pending',
    "id_conjunto" UUID NOT NULL,
    "id_secao" UUID,
    "id_criador" UUID NOT NULL,

    CONSTRAINT "tb_tarefa_pkey" PRIMARY KEY ("id_tarefa")
);

-- CreateTable
CREATE TABLE "tb_usuario" (
    "id_usuario" UUID NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "nickname" VARCHAR(50),
    "biografia" VARCHAR(500),
    "data_cadastro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "foto_perfil" VARCHAR(255),
    "tema_de_tela" "tela_tema_enum" DEFAULT 'auto',
    "idioma" UUID NOT NULL DEFAULT '00c59c0c-5d7a-43ad-a905-ef8ff1985310',
    "refresh_token" VARCHAR(500),
    "role_" "role_enum" DEFAULT 'user',

    CONSTRAINT "tb_usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_idioma_nome_key" ON "tb_idioma"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tb_idioma_sigla_key" ON "tb_idioma"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuario_username_key" ON "tb_usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuario_email_key" ON "tb_usuario"("email");

-- AddForeignKey
ALTER TABLE "tb_amizades" ADD CONSTRAINT "tb_amizades_id_usuario_remetente_fkey" FOREIGN KEY ("id_usuario_remetente") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_amizades" ADD CONSTRAINT "tb_amizades_id_usuario_destinatario_fkey" FOREIGN KEY ("id_usuario_destinatario") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_anotacao" ADD CONSTRAINT "tb_anotacao_id_conjunto_fkey" FOREIGN KEY ("id_conjunto") REFERENCES "tb_conjunto"("id_conjunto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_anotacao" ADD CONSTRAINT "tb_anotacao_id_secao_fkey" FOREIGN KEY ("id_secao") REFERENCES "tb_secao"("id_secao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_anotacao" ADD CONSTRAINT "tb_anotacao_id_criador_fkey" FOREIGN KEY ("id_criador") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_conjunto" ADD CONSTRAINT "tb_conjunto_id_criador_fkey" FOREIGN KEY ("id_criador") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_notas_tarefa" ADD CONSTRAINT "tb_notas_tarefa_id_tarefa_fkey" FOREIGN KEY ("id_tarefa") REFERENCES "tb_tarefa"("id_tarefa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_notas_tarefa" ADD CONSTRAINT "tb_notas_tarefa_id_autor_fkey" FOREIGN KEY ("id_autor") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_secao" ADD CONSTRAINT "tb_secao_id_conjunto_fkey" FOREIGN KEY ("id_conjunto") REFERENCES "tb_conjunto"("id_conjunto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_secao" ADD CONSTRAINT "tb_secao_id_criador_fkey" FOREIGN KEY ("id_criador") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_seguidores" ADD CONSTRAINT "tb_seguidores_id_seguidor_fkey" FOREIGN KEY ("id_seguidor") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_seguidores" ADD CONSTRAINT "tb_seguidores_id_seguido_fkey" FOREIGN KEY ("id_seguido") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_tarefa" ADD CONSTRAINT "tb_tarefa_id_conjunto_fkey" FOREIGN KEY ("id_conjunto") REFERENCES "tb_conjunto"("id_conjunto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_tarefa" ADD CONSTRAINT "tb_tarefa_id_secao_fkey" FOREIGN KEY ("id_secao") REFERENCES "tb_secao"("id_secao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_tarefa" ADD CONSTRAINT "tb_tarefa_id_criador_fkey" FOREIGN KEY ("id_criador") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_usuario" ADD CONSTRAINT "tb_usuario_idioma_fkey" FOREIGN KEY ("idioma") REFERENCES "tb_idioma"("id_idioma") ON DELETE NO ACTION ON UPDATE NO ACTION;
