import React from "react";
import { Mensagem, Paciente, Consulta } from "../types/agenda";
import Modal from "./Modal";
import Button from "./Button";

interface ModalMensagemProps {
  isOpen: boolean;
  onClose: () => void;
  paciente: Paciente;
  consulta: Consulta;
  mensagem: Mensagem;
  onMarcarEnviada: () => void;
}

export const ModalMensagem: React.FC<ModalMensagemProps> = ({
  isOpen,
  onClose,
  paciente,
  consulta,
  mensagem,
  onMarcarEnviada,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Enviar Mensagem">
      <div className="mb-2 text-sm">
        <div>
          <b>Paciente:</b> {paciente.nome}
        </div>
        <div>
          <b>Consulta:</b> {consulta.data} às {consulta.horario}
        </div>
        <div>
          <b>Tipo:</b>{" "}
          {mensagem.tipo === "orientacao" ? "Orientação" : "Lembrete"}
        </div>
      </div>
      <textarea
        className="w-full border rounded p-2 text-sm mb-2"
        value={mensagem.texto}
        readOnly
        rows={5}
      />
      <div className="flex gap-2 justify-end">
        <Button
          variant="secondary"
          onClick={() => navigator.clipboard.writeText(mensagem.texto)}
        >
          Copiar
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            window.open(
              `https://wa.me/${paciente.telefone}?text=${encodeURIComponent(
                mensagem.texto
              )}`,
              "_blank"
            )
          }
        >
          Abrir WhatsApp
        </Button>
        <Button variant="primary" onClick={onMarcarEnviada}>
          Marcar Enviada
        </Button>
      </div>
    </Modal>
  );
};

export default ModalMensagem;
