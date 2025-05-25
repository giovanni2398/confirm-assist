// Tipos globais para o sistema de confirmação de pacientes

export interface Paciente {
  id: number;
  nome: string;
  telefone: string;
}

export interface Consulta {
  id: number;
  pacienteId: number;
  data: string; // ISO date
  horario: string; // ex: '09:00'
  status: "agendada" | "confirmada" | "cancelada";
}

export interface Mensagem {
  id: number;
  tipo: "orientacao" | "lembrete";
  consultaId: number;
  pacienteId: number;
  texto: string;
  status: "pendente" | "enviada";
}

export interface SlotAgenda {
  horario: string; // ex: '09:00'
  paciente?: Paciente;
  consulta?: Consulta;
  mensagem?: Mensagem;
}

export interface DiaAgenda {
  data: string; // ISO date
  slots: SlotAgenda[];
}

export interface SemanaAgenda {
  dias: DiaAgenda[];
}
