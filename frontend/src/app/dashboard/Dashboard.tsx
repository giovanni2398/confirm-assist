import React, { useState } from "react";
import TabelaAgenda from "../../components/TabelaAgenda";
import ModalMensagem from "../../components/ModalMensagem";
import ModalFiltros from "../../components/ModalFiltros";
import ModalConfig from "../../components/ModalConfig";
import {
  SemanaAgenda,
  SlotAgenda,
  Paciente,
  Consulta,
  Mensagem,
} from "../../types/agenda";
import { Button } from "../../components/Button";

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

const semanaBase: SemanaAgenda = {
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

export default function Dashboard() {
  // Estado dos modais
  const [modalMensagem, setModalMensagem] = useState<{
    open: boolean;
    paciente?: Paciente;
    consulta?: Consulta;
    mensagem?: Mensagem;
  }>({ open: false });
  const [modalFiltros, setModalFiltros] = useState(false);
  const [modalConfig, setModalConfig] = useState(false);

  // Estado da semana e filtros (mock)
  const [semana, setSemana] = useState<SemanaAgenda>(semanaBase);
  const [filtros, setFiltros] = useState<any>({});

  // Navegação de semana (mock)
  const handleSemanaAnterior = () => {
    // Aqui você implementaria a lógica real de navegação
    alert("Semana anterior (mock)");
  };
  const handleSemanaProxima = () => {
    alert("Próxima semana (mock)");
  };
  const handleHoje = () => {
    alert("Hoje (mock)");
  };

  // Ao clicar em Mensagem no CardPaciente
  const handleAbrirMensagem = (slot: SlotAgenda) => {
    if (slot.paciente && slot.consulta && slot.mensagem) {
      setModalMensagem({
        open: true,
        paciente: slot.paciente,
        consulta: slot.consulta,
        mensagem: slot.mensagem,
      });
    }
  };

  // Renderizar TabelaAgenda com prop para abrir modal de mensagem
  return (
    <section>
      <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Agenda da Semana</h1>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setModalFiltros(true)}>
            Filtros
          </Button>
          <Button variant="secondary" onClick={handleHoje}>
            Hoje
          </Button>
          <Button variant="secondary" onClick={handleSemanaAnterior}>
            &lt;
          </Button>
          <Button variant="secondary" onClick={handleSemanaProxima}>
            &gt;
          </Button>
          <Button variant="secondary" onClick={() => setModalConfig(true)}>
            Config
          </Button>
        </div>
      </div>
      <TabelaAgenda
        semana={semana}
        horarios={horarios}
        onAbrirMensagem={handleAbrirMensagem}
      />
      <ModalMensagem
        isOpen={modalMensagem.open}
        onClose={() => setModalMensagem({ open: false })}
        paciente={modalMensagem.paciente!}
        consulta={modalMensagem.consulta!}
        mensagem={modalMensagem.mensagem!}
        onMarcarEnviada={() => alert("Marcar como enviada (mock)")}
      />
      <ModalFiltros
        isOpen={modalFiltros}
        onClose={() => setModalFiltros(false)}
        onAplicar={(f) => setFiltros(f)}
      />
      <ModalConfig isOpen={modalConfig} onClose={() => setModalConfig(false)} />
    </section>
  );
}
