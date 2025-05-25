import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ModalConfigProps {
  isOpen: boolean;
  onClose: () => void;
  // Adicione props conforme necessário para integração real
}

export const ModalConfig: React.FC<ModalConfigProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Configurações">
      <div className="flex flex-col gap-4">
        <div>
          <div className="font-medium mb-1">Integração com Google Calendar</div>
          <div className="flex gap-2 items-center">
            <span className="text-sm">
              Conta conectada: nutricionista@gmail.com
            </span>
            <Button variant="secondary">Desconectar</Button>
            <Button variant="primary">Reconectar</Button>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Agendamentos</div>
          <div className="flex gap-2 items-center">
            <span className="text-sm">Agenda padrão:</span>
            <select className="border rounded p-1">
              <option>Consultas Nutrição</option>
            </select>
            <span className="text-sm">Formato do número no evento:</span>
            <select className="border rounded p-1">
              <option>Descrição</option>
            </select>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Atualizações</div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked readOnly /> Atualizar agenda
            automaticamente
          </label>
          <div className="flex gap-2 items-center">
            <span className="text-sm">Frequência:</span>
            <select className="border rounded p-1">
              <option>A cada 30 minutos</option>
            </select>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Mensagens</div>
          <div className="flex gap-2 items-center">
            <span className="text-sm">Editar modelo:</span>
            <select className="border rounded p-1">
              <option>Orientação inicial</option>
            </select>
            <Button variant="secondary">Editar</Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="primary">Salvar Configurações</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfig;
