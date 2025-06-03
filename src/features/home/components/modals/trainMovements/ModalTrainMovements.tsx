import type { IDataContextMenu } from "@features/home/components/charts/elements/GHTChartContextMenu/contextMenu.types";
import { DataGridTrainMovements } from "@features/home/components/modals/trainMovements/GridTrainMovements";
import { Button, type OnSelectionChangeData } from "@fluentui/react-components";
import { WindowModal } from "@shared/components/windowModal/WindowModal";
import type { IModalData } from "@shared/types/IModalData.type";
import { useState } from "react";

interface IModalTrainMovementsProps {
  onSelectedPlans?: (data: OnSelectionChangeData) => void;
  openTrainMovements: IModalData<IDataContextMenu>;
  setOpenTrainMovements: React.Dispatch<React.SetStateAction<IModalData<IDataContextMenu>>>;
}

// Array com múltiplos exemplos para teste
const sampleOfficializationDataArray = [
  {
    id: "OFIC-2024-001",
    trainsOfficialization: "Composição 4001 - Linha 4-Amarela",
    user: "Carlos Eduardo Silva",
    dateOfficialization: "2024-05-15",
    mesa: "Mesa Técnica SP-01",
    timeline: "Q2 2024 - Fase 2",
    officializationType: "Oficialização Completa",
    versionModel: "v3.2.1",
    details: {
      description: "Oficialização da composição 4001 após modernização completa do sistema de sinalização.",
      status: "Aprovado com Restrições",
      observations: "Monitoramento semanal obrigatório nos primeiros 30 dias.",
      attachments: [
        "certificado_seguranca_composicao_4001.pdf",
        "relatorio_testes_dinamicos_v2.pdf",
        "laudo_tecnico_sinalizacao.pdf",
      ],
      history: [
        {
          date: "2024-04-10",
          action: "Solicitação de oficialização criada",
          user: "Carlos Eduardo Silva",
        },
        {
          date: "2024-05-15",
          action: "Oficialização aprovada com restrições",
          user: "Diretor Técnico - Paulo Henrique",
        },
      ],
    },
  },
  {
    id: "OFIC-2024-002",
    trainsOfficialization: "Composição 3105 - Linha 3-Vermelha",
    user: "Maria Fernanda Santos",
    dateOfficialization: "2024-05-20",
    mesa: "Mesa Técnica SP-02",
    timeline: "Q2 2024 - Fase 1",
    officializationType: "Oficialização Parcial",
    versionModel: "v2.8.5",
    details: {
      description: "Oficialização parcial para testes operacionais em horários de baixo movimento.",
      status: "Em Análise",
      observations: "Aguardando validação dos testes de frenagem em situações extremas.",
      attachments: ["relatorio_preliminar.pdf", "cronograma_testes.xlsx"],
      history: [
        {
          date: "2024-05-18",
          action: "Solicitação submetida",
          user: "Maria Fernanda Santos",
        },
        {
          date: "2024-05-20",
          action: "Análise iniciada",
          user: "João Carlos Oliveira",
        },
      ],
    },
  },
  {
    id: "OFIC-2024-003",
    trainsOfficialization: "Composição 2087 - Linha 2-Verde",
    user: "João Carlos Oliveira",
    dateOfficialization: "2024-05-10",
    mesa: "Mesa Técnica SP-01",
    timeline: "Q1 2024 - Finalização",
    officializationType: "Renovação de Certificação",
    versionModel: "v4.1.0",
    details: {
      description: "Renovação da certificação após manutenção preventiva programada.",
      status: "Rejeitado",
      observations: "Problemas identificados no sistema de ar condicionado. Requer substituição de componentes.",
      attachments: ["relatorio_rejeicao_detalhado.pdf", "lista_componentes_defeituosos.xlsx"],
      history: [
        {
          date: "2024-05-05",
          action: "Solicitação de renovação",
          user: "João Carlos Oliveira",
        },
        {
          date: "2024-05-08",
          action: "Inspeção realizada",
          user: "Ana Paula Costa",
        },
        {
          date: "2024-05-10",
          action: "Certificação rejeitada",
          user: "Roberto Mendes",
        },
      ],
    },
  },
  {
    id: "OFIC-2024-004",
    trainsOfficialization: "Composição 5025 - Linha 5-Lilás",
    user: "Ana Paula Costa",
    dateOfficialization: "2024-05-25",
    mesa: "Mesa Técnica SP-03",
    timeline: "Q3 2024 - Início",
    officializationType: "Oficialização Emergencial",
    versionModel: "v1.9.2",
    // Este item não tem details - será uma linha sem expansão
  },
  {
    id: "OFIC-2024-005",
    trainsOfficialization: "Composição 6012 - Linha 6-Laranja",
    user: "Roberto Mendes",
    dateOfficialization: "2024-06-01",
    mesa: "Mesa Técnica SP-02",
    timeline: "Q3 2024 - Planejamento",
    officializationType: "Oficialização Completa",
    versionModel: "v3.0.0",
    details: {
      description: "Nova composição para expansão da Linha 6-Laranja. Primeira unidade da nova frota.",
      status: "Aprovado",
      observations: "Aprovação total. Composição aprovada para operação comercial imediata.",
      attachments: [
        "certificado_final_aprovacao.pdf",
        "manual_operacao_linha6.pdf",
        "especificacoes_tecnicas_completas.pdf",
        "fotos_composicao_final.zip",
        "videos_testes_operacionais.mp4",
      ],
      history: [
        {
          date: "2024-05-20",
          action: "Solicitação criada para nova frota",
          user: "Roberto Mendes",
        },
        {
          date: "2024-05-22",
          action: "Documentação técnica aprovada",
          user: "Maria Fernanda Santos",
        },
        {
          date: "2024-05-28",
          action: "Testes operacionais concluídos",
          user: "Carlos Eduardo Silva",
        },
        {
          date: "2024-06-01",
          action: "Aprovação final concedida",
          user: "Diretor Geral - Fernando Almeida",
        },
      ],
    },
  },
];

const ModalTrainMovements = (props: IModalTrainMovementsProps) => {
  const { onSelectedPlans, openTrainMovements, setOpenTrainMovements } = props;
  const [selection] = useState<OnSelectionChangeData>({} as OnSelectionChangeData);

  const handleCloseModal = () => {
    if (!selection?.selectedItems?.size || selection?.selectedItems?.size === 0) {
      alert("Selecione uma oficialização");
      return;
    }

    onSelectedPlans?.(selection);
    setOpenTrainMovements({ isOpen: false });
  };

  return (
    <>
      <WindowModal
        title={`Movimentos do trem: ${openTrainMovements?.data?.name}`}
        initialWidth={"55%"}
        initialHeight={"70%"}
        open={openTrainMovements.isOpen}
        onClose={() => setOpenTrainMovements({ isOpen: false })}
      >
        <WindowModal.Body>
          <DataGridTrainMovements data={sampleOfficializationDataArray} />
        </WindowModal.Body>

        <WindowModal.Footer>
          <div className="flex justify-end gap-2">
            <Button>Cancelar</Button>
            <Button appearance="primary" onClick={handleCloseModal}>
              Salvar
            </Button>
          </div>
        </WindowModal.Footer>
      </WindowModal>
    </>
  );
};

export { ModalTrainMovements };
