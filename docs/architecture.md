# 🏗️ Arquitetura do Projeto: Sistema de Confirmação de Pacientes da Agenda

## 1. Visão Geral

Arquitetura composta por um backend (API) e frontend (interface web), integrando com:

- Google Calendar API
- WhatsApp (via links)

## 2. Diagrama de Arquitetura

Frontend (Next.js)
⬇️
Backend (FastAPI)
⬇️⬇️⬇️
📅 Google Calendar API
🗄️ Banco de Dados (SQLite/PostgreSQL)
🔗 Link Generator (WhatsApp)

## 3. Componentes

### 🔸 Frontend

- Framework: Next.js + TailwindCSS
- Função:
  - Interface para visualização da agenda e mensagens
  - Geração de links WhatsApp
  - Marcação manual de status de envio
- Organização:
  - /components → Componentes reutilizáveis
  - /pages → Roteamento automático (Next.js)
  - /services → Comunicação com API (Axios)
  - /utils → Funções auxiliares
- Deploy: Vercel

### 🔸 Backend

- Framework: FastAPI (Python)
- Função:
  - Sincronização com Google Calendar
  - Geração dos lembretes
  - API REST para fornecer dados ao frontend
  - Gerenciamento do banco (status de envio, pacientes, consultas)
- Deploy: Railway ou Render

### 🔸 Banco de Dados

- SQLite (desenvolvimento/local)
- PostgreSQL (produção)
- Entidades principais:
  - Paciente: nome, telefone
  - Consulta: data, horário, status
  - Mensagem: tipo (orientação, lembrete), status (pendente/enviado)

### 🔸 Integrações

- Google Calendar API (OAuth2)
- WhatsApp via link web (`https://wa.me/`)

## 4. Fluxo das Requisições

1. Frontend faz requisição à API (/agendamentos).
2. Backend lê dados do banco (atualizado via Calendar).
3. API retorna:
   - Lista de pacientes
   - Mensagens pendentes
   - Links de WhatsApp prontos
4. Frontend apresenta os dados ao usuário.

## 5. Segurança

- Armazenamento seguro das credenciais OAuth2
- Validação de dados na API
- Sem armazenamento de mensagens sensíveis fora do necessário

## 6. Deploy

- Backend: Railway, Render, Fly.io ou VPS
- Frontend: Vercel, Netlify ou hospedagem estática
- Banco: PostgreSQL (Railway, Supabase ou Heroku)

## 7. Escalabilidade

- Stateless backend (pode ser replicado)
- Banco pode ser migrado de SQLite para PostgreSQL sem mudanças estruturais
- Possível expansão futura:
  - API de envio automatizado (WhatsApp API oficial)
  - Integração com outros sistemas de agenda
