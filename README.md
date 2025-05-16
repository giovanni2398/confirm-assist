
# 📅 Sistema de Confirmação de Pacientes da Agenda

## Visão Geral

Este projeto tem como objetivo facilitar o gerenciamento de confirmações e lembretes de consultas de pacientes agendados no Google Calendar, gerando mensagens personalizadas prontas para envio via WhatsApp. O envio será realizado manualmente, através de links que abrem o WhatsApp com a mensagem formatada para o número do paciente.

O sistema será utilizado por nutricionistas (ou secretárias) para otimizar a comunicação com pacientes e reduzir faltas ou desmarcações de última hora.

---

## Funcionalidades

- Integração com Google Calendar para leitura dos eventos dos próximos 7 dias.
- Geração automática de mensagens:
  - Orientações de consulta após o agendamento.
  - Lembretes 7, 5, 3 e 1 dia antes da consulta.
- Criação de links clicáveis para envio da mensagem pelo WhatsApp Web ou app.
- Interface web para visualização da agenda semanal com:
  - Lista de pacientes agendados.
  - Mensagens pendentes e enviadas.
  - Botão "Marcar como enviada".
- Filtros por data e status.

---

## Tecnologias Utilizadas

### Backend
- Python + FastAPI
- Google Calendar API
- SQLite (modo local) ou PostgreSQL (modo produção)

### Frontend
- React (ou Next.js, a depender do deploy)
- TailwindCSS (para estilização rápida)
- Axios (para consumo da API)

### Outros
- APScheduler (atualizações diárias da agenda)
- Link generator para WhatsApp Web: `https://wa.me/<DDD+NÚMERO>?text=<MENSAGEM_ENCODED>`

---

## Estrutura de Pastas Proposta

```
projeto-confirmacao-consultas/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── calendar.py
│   │   ├── messages.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   └── utils.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── scripts/
│   └── update_agenda.py
│
├── .env
├── README.md
└── LICENSE
```

---

## Requisitos

- Conta Google com acesso à agenda
- Número de WhatsApp dos pacientes inserido no evento (ex: na descrição ou título)
- Ambiente Python 3.10+
- Node.js 18+ para frontend

---

## Como Executar

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Observação

Este projeto **não envia mensagens automaticamente**. Ele apenas organiza e prepara mensagens personalizadas com base nos dados da agenda e fornece **links diretos para envio via WhatsApp**.

---

## Licença

MIT © Seu Nome
