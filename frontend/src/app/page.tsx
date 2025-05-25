import React from "react";
import TabelaAgenda from "../components/TabelaAgenda";
import { SemanaAgenda } from "../types/agenda";

// Mock de horários e semana para exemplo
const horarios = [
  "08:30",
  "09:15",
  "10:00",
  "10:45",
  "11:30",
  "12:15",
  "14:00",
  "14:45",
  "15:30",
  "16:15",
  "17:00",
];

const semanaMock: SemanaAgenda = {
  dias: [
    {
      data: "2023-06-12",
      slots: [
        {
          horario: "10:00",
          paciente: { id: 1, nome: "João Santos", telefone: "11976543210" },
          consulta: {
            id: 1,
            pacienteId: 1,
            data: "2023-06-12",
            horario: "10:00",
            status: "agendada",
          },
          mensagem: {
            id: 1,
            tipo: "lembrete",
            consultaId: 1,
            pacienteId: 1,
            texto: "Olá João, lembrete de consulta!",
            status: "pendente",
          },
        },
      ],
    },
    {
      data: "2023-06-13",
      slots: [
        {
          horario: "08:30",
          paciente: { id: 2, nome: "Maria Silva", telefone: "11987654321" },
          consulta: {
            id: 2,
            pacienteId: 2,
            data: "2023-06-13",
            horario: "08:30",
            status: "agendada",
          },
          mensagem: {
            id: 2,
            tipo: "orientacao",
            consultaId: 2,
            pacienteId: 2,
            texto: "Olá Maria, orientação de consulta!",
            status: "enviada",
          },
        },
      ],
    },
    {
      data: "2023-06-14",
      slots: [
        {
          horario: "14:00",
          paciente: { id: 3, nome: "Pedro Souza", telefone: "11999887766" },
          consulta: {
            id: 3,
            pacienteId: 3,
            data: "2023-06-14",
            horario: "14:00",
            status: "agendada",
          },
          mensagem: {
            id: 3,
            tipo: "lembrete",
            consultaId: 3,
            pacienteId: 3,
            texto: "Olá Pedro, lembrete de consulta!",
            status: "pendente",
          },
        },
      ],
    },
    {
      data: "2023-06-15",
      slots: [],
    },
    {
      data: "2023-06-16",
      slots: [
        {
          horario: "14:00",
          paciente: { id: 4, nome: "Beatriz Lima", telefone: "11988776655" },
          consulta: {
            id: 4,
            pacienteId: 4,
            data: "2023-06-16",
            horario: "14:00",
            status: "agendada",
          },
          mensagem: {
            id: 4,
            tipo: "lembrete",
            consultaId: 4,
            pacienteId: 4,
            texto: "Olá Beatriz, lembrete de consulta!",
            status: "enviada",
          },
        },
      ],
    },
  ],
};

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Agenda da Semana</h1>
      <TabelaAgenda semana={semanaMock} horarios={horarios} />
    </section>
  );
}
