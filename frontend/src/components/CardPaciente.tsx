import React from "react";
import { SlotAgenda } from "../types/agenda";
import Button from "./Button";

interface CardPacienteProps {
  slot: SlotAgenda;
  onAbrirMensagem?: (slot: SlotAgenda) => void;
}

export const CardPaciente: React.FC<CardPacienteProps> = ({
  slot,
  onAbrirMensagem,
}) => {
  if (!slot.paciente || !slot.consulta) return null;
  const { paciente, consulta, mensagem } = slot;
  return (
    <div className="bg-white rounded shadow p-2 flex flex-col gap-1 border border-blue-100">
      <div className="font-semibold text-blue-800">{paciente.nome}</div>
      <div className="text-xs text-gray-600">{paciente.telefone}</div>
      <div className="text-xs text-gray-500">
        Status:{" "}
        {mensagem?.status === "enviada" ? (
          <span className="text-green-600">● Enviada</span>
        ) : (
          <span className="text-yellow-600">○ Pendente</span>
        )}
      </div>
      <Button
        variant="primary"
        className="mt-1 w-full text-xs"
        onClick={() => onAbrirMensagem && onAbrirMensagem(slot)}
      >
        Mensagem
      </Button>
    </div>
  );
};

export default CardPaciente;
