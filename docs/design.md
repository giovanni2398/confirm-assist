# 🧠 Design do Projeto: Sistema de Confirmação de Pacientes da Agenda

## 1. Visão Geral

Sistema para auxiliar profissionais de saúde no processo de confirmação de consultas. O sistema extrai dados da agenda (Google Calendar), organiza os lembretes e gera mensagens prontas para envio via WhatsApp manualmente.

## 2. Público-Alvo

- Nutricionistas
- Secretárias de consultórios
- Pequenas clínicas

## 3. Objetivos Funcionais

- Reduzir faltas e cancelamentos
- Simplificar o acompanhamento dos agendamentos
- Gerar lembretes prontos de forma rápida e organizada

## 4. Funcionalidades

- Sincronização com Google Calendar
- Geração de mensagens automáticas:
  - Após agendamento (orientação)
  - Lembretes em 7, 5, 3 e 1 dia antes da consulta
- Criação de links clicáveis de WhatsApp
- Dashboard com status dos lembretes enviados e pendentes

## 5. Fluxo do Usuário

1. O sistema lê os agendamentos dos próximos 7 dias no Google Calendar.
2. Gera mensagens específicas por paciente.
3. Exibe essas mensagens na interface.
4. O usuário clica no botão para abrir o WhatsApp com a mensagem pronta.
5. Após envio, marca manualmente como "Enviado".

## 6. Regras de Negócio

- Um lembrete é gerado apenas se ainda não foi enviado para aquela data.
- O envio é manual, não automatizado.
- A leitura da agenda é feita diariamente.
- Caso o paciente tenha múltiplos eventos, os lembretes são independentes por evento.

## 7. Limitações

- Não realiza envio automático.
- Depende da correta inserção do número do paciente no Google Calendar.
