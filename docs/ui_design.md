# 🎨 Design da Interface do Usuário (UI Wireframes)

Este documento apresenta os wireframes para as principais telas do Sistema de Confirmação de Pacientes da Agenda. O objetivo é fornecer uma representação visual de baixo nível da estrutura e dos principais componentes de cada tela, servindo como guia para o desenvolvimento da interface.

## 1. Dashboard Principal (Visualização Semanal)

O Dashboard Principal exibe os agendamentos em uma visualização de tabela semanal, permitindo ao usuário ver rapidamente os pacientes agendados para cada dia e horário.

```
+-------------------------------------------------------------------------------------------------+
|  LOGO                                                     [Filtros▼] [Hoje] [<] [Semana] [>] [Config] |
+-------------------------------------------------------------------------------------------------+
|                                   SEMANA: 12/06/2023 - 18/06/2023                               |
+-------------------------------------------------------------------------------------------------+
| HORÁRIO |   SEGUNDA (12/06)  |    TERÇA (13/06)   |   QUARTA (14/06)   |  QUINTA (15/06)  |   SEXTA (16/06)   |
+---------+--------------------+--------------------+--------------------+------------------+-------------------+
|         |                    |                    |                    |                  |                   |
|  MANHÃ  |                    |                    |                    |                  |                   |
|         |                    |                    |                    |                  |                   |
| 08:00   |                    | +----------------+ |                    |                  |                   |
|         |                    | | Maria Silva    | |                    |                  |                   |
| 09:00   | +----------------+ | | Tel: 987654321 | |                    | +----------------+ |                   |
|         | | João Santos    | | | Status:  ●    | |                    | | Ana Oliveira   | |                   |
| 10:00   | | Tel: 976543210 | | | [Mensagem]     | |                    | | Tel: 912345678 | |                   |
|         | | Status:  ○    | | +----------------+ |                    | | Status:  ●    | |                   |
| 11:00   | | [Mensagem]     | |                    |                    | | [Mensagem]     | |                   |
|         | +----------------+ |                    |                    | +----------------+ |                   |
|         |                    |                    |                    |                  |                   |
| 12:00   | --- ALMOÇO ---     | --- ALMOÇO ---     | --- ALMOÇO ---     | --- ALMOÇO ---   | --- ALMOÇO ---    |
|         |                    |                    |                    |                  |                   |
|  TARDE  |                    |                    |                    |                  |                   |
|         |                    |                    |                    |                  |                   |
| 14:00   |                    |                    | +----------------+ |                  | +----------------+  |
|         |                    |                    | | Pedro Souza    | |                  | | Beatriz Lima   |  |
| 15:00   |                    |                    | | Tel: 998765432 | |                  | | Tel: 988776655 |  |
|         |                    |                    | | Status:  ○    | |                  | | Status:  ●    |  |
| 16:00   |                    |                    | | [Mensagem]     | |                  | | [Mensagem]     |  |
|         |                    |                    | +----------------+ |                  | +----------------+  |
| 17:00   |                    |                    |                    |                  |                   |
+---------+--------------------+--------------------+--------------------+------------------+-------------------+
```

**Componentes Chave:**

- **Navegação de Data:** Botões para semana anterior/seguinte, ir para "Hoje" e selecionar uma semana específica.
- **Tabela de Agenda:** Colunas para dias da semana, linhas para horários.
- **Card do Paciente:** Exibido no slot de agendamento, contendo nome, telefone, status da confirmação e botão de ação para mensagem.
- **Controles Globais:** Acesso a Filtros e Configurações.

## 2. Modal de Mensagem

Este modal aparece ao clicar no botão "[Mensagem]" de um paciente. Ele permite ao usuário visualizar a mensagem gerada, selecionar o tipo de mensagem (se aplicável), copiar o texto, abrir diretamente no WhatsApp ou marcar como enviada.

```
+------------------------------------------------------+
|  ENVIAR MENSAGEM                             [X]     |
+------------------------------------------------------+
|                                                      |
|  Paciente: Maria Silva                               |
|  Consulta: 12/06/2023 às 09:00                       |
|                                                      |
|  Tipo de mensagem:                                   |
|  [●] Orientação inicial                              |
|  [○] Lembrete 7 dias                                 |
|  [○] Lembrete 3 dias                                 |
|  [○] Lembrete 1 dia                                  |
|                                                      |
|  +--------------------------------------------------+|
|  | Olá Maria, tudo bem?                            ||
|  |                                                 ||
|  | Confirmando sua consulta para o dia 12/06/2023  ||
|  | às 09:00h.                                      ||
|  |                                                 ||
|  | Por favor, chegue com 10 minutos de             ||
|  | antecedência e traga seus exames anteriores.    ||
|  |                                                 ||
|  | Até lá!                                         ||
|  +--------------------------------------------------+|
|                                                      |
|  [Copiar]      [Abrir WhatsApp]      [Marcar Enviada]|
+------------------------------------------------------+
```

**Componentes Chave:**

- **Informações do Paciente/Consulta:** Contexto claro sobre a mensagem.
- **Seleção de Tipo de Mensagem:** Permite escolher entre diferentes modelos (ex: orientação, lembretes).
- **Visualização da Mensagem:** Área de texto para ver a mensagem gerada.
- **Ações:** Botões para copiar, abrir no WhatsApp e marcar como enviada.

## 3. Modal de Filtros e Pesquisa

Acessado pelo botão "[Filtros▼]" no Dashboard, permite ao usuário refinar a lista de agendamentos exibida.

```
+------------------------------------------------------+
|  FILTROS                                    [X]      |
+------------------------------------------------------+
|                                                      |
|  Período:                                            |
|  [○] Hoje                                            |
|  [●] Esta semana                                     |
|  [○] Próxima semana                                  |
|  [○] Personalizado: [__/__/____] até [__/__/____]    |
|                                                      |
|  Status da mensagem:                                 |
|  [✓] Todas                                           |
|  [✓] Pendentes                                       |
|  [✓] Enviadas                                        |
|                                                      |
|  Buscar por nome: [_________________________]        |
|                                                      |
|  [Limpar Filtros]                    [Aplicar]       |
+------------------------------------------------------+
```

**Componentes Chave:**

- **Filtro de Período:** Seleção de datas predefinidas ou um intervalo personalizado.
- **Filtro de Status:** Filtrar por mensagens pendentes, enviadas ou todas.
- **Busca por Nome:** Campo para encontrar rapidamente um paciente.
- **Ações:** Aplicar filtros ou limpar todas as seleções.

## 4. Modal de Configurações

Acessado pelo ícone "[Config]" no Dashboard, permite ao usuário gerenciar as configurações da aplicação.

```
+------------------------------------------------------+
|  CONFIGURAÇÕES                              [X]      |
+------------------------------------------------------+
|                                                      |
|  INTEGRAÇÃO COM GOOGLE CALENDAR                      |
|  [●] Conta conectada: nutricionista@gmail.com        |
|  [     Desconectar     ]    [     Reconectar     ]   |
|                                                      |
|  AGENDAMENTOS                                        |
|  Agenda padrão: [Consultas Nutrição        ▼]        |
|  Formato do número no evento: [Descrição    ▼]        |
|                                                      |
|  ATUALIZAÇÕES                                        |
|  [✓] Atualizar agenda automaticamente                |
|  Frequência: [A cada 30 minutos            ▼]        |
|                                                      |
|  MENSAGENS                                           |
|  [Editar modelo: Orientação inicial       ▼] [Editar]|
|                                                      |
|  [       Salvar Configurações      ]                 |
+------------------------------------------------------+
```

**Componentes Chave:**

- **Integração Google Calendar:** Gerenciar conexão com a conta Google.
- **Configurações de Agendamento:** Definir qual agenda sincronizar e onde buscar o telefone do paciente no evento.
- **Configurações de Atualização:** Controlar a sincronização automática.
- **Modelos de Mensagem:** (Opcional) Permitir a edição dos textos padrão das mensagens.
- **Ações:** Salvar as configurações.
