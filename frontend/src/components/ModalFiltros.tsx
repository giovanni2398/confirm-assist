import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ModalFiltrosProps {
  isOpen: boolean;
  onClose: () => void;
  onAplicar: (filtros: any) => void;
}

export const ModalFiltros: React.FC<ModalFiltrosProps> = ({
  isOpen,
  onClose,
  onAplicar,
}) => {
  const [periodo, setPeriodo] = useState("semana");
  const [status, setStatus] = useState<string[]>(["todas"]);
  const [nome, setNome] = useState("");

  const handleStatusChange = (value: string) => {
    setStatus((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const handleAplicar = () => {
    onAplicar({ periodo, status, nome });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filtros">
      <div className="flex flex-col gap-3">
        <div>
          <div className="font-medium mb-1">Período:</div>
          <div className="flex gap-2 flex-wrap">
            <label>
              <input
                type="radio"
                checked={periodo === "hoje"}
                onChange={() => setPeriodo("hoje")}
              />{" "}
              Hoje
            </label>
            <label>
              <input
                type="radio"
                checked={periodo === "semana"}
                onChange={() => setPeriodo("semana")}
              />{" "}
              Esta semana
            </label>
            <label>
              <input
                type="radio"
                checked={periodo === "proxima"}
                onChange={() => setPeriodo("proxima")}
              />{" "}
              Próxima semana
            </label>
            <label>
              <input
                type="radio"
                checked={periodo === "personalizado"}
                onChange={() => setPeriodo("personalizado")}
              />{" "}
              Personalizado
            </label>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Status da mensagem:</div>
          <div className="flex gap-2 flex-wrap">
            <label>
              <input
                type="checkbox"
                checked={status.includes("todas")}
                onChange={() => handleStatusChange("todas")}
              />{" "}
              Todas
            </label>
            <label>
              <input
                type="checkbox"
                checked={status.includes("pendentes")}
                onChange={() => handleStatusChange("pendentes")}
              />{" "}
              Pendentes
            </label>
            <label>
              <input
                type="checkbox"
                checked={status.includes("enviadas")}
                onChange={() => handleStatusChange("enviadas")}
              />{" "}
              Enviadas
            </label>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Buscar por nome:</div>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do paciente"
          />
        </div>
        <div className="flex gap-2 justify-end mt-2">
          <Button
            variant="secondary"
            onClick={() => {
              setPeriodo("semana");
              setStatus(["todas"]);
              setNome("");
            }}
          >
            Limpar Filtros
          </Button>
          <Button variant="primary" onClick={handleAplicar}>
            Aplicar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalFiltros;
