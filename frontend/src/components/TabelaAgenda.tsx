import React from "react";
import { SemanaAgenda, SlotAgenda } from "../types/agenda";
import { CardPaciente } from "./CardPaciente";

interface TabelaAgendaProps {
  semana: SemanaAgenda;
  horarios: string[]; // ex: ['08:00', '09:00', ...]
  onAbrirMensagem?: (slot: SlotAgenda) => void;
}

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export const TabelaAgenda: React.FC<TabelaAgendaProps> = ({
  semana,
  horarios,
  onAbrirMensagem,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-100">HORÁRIO</th>
            {semana.dias.map((dia, idx) => (
              <th key={dia.data} className="p-2 border bg-gray-100">
                {diasSemana[idx]}
                <br />
                <span className="text-xs text-gray-500">{dia.data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario) => (
            <tr key={horario}>
              <td className="p-2 border font-bold bg-gray-50">{horario}</td>
              {semana.dias.map((dia) => {
                const slot = dia.slots.find((s) => s.horario === horario);
                return (
                  <td
                    key={dia.data + horario}
                    className="p-2 border align-top min-w-[160px]"
                  >
                    {slot && slot.paciente ? (
                      <CardPaciente
                        slot={slot}
                        onAbrirMensagem={onAbrirMensagem}
                      />
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAgenda;
