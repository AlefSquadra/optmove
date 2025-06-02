import type { IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "./GHTChart.types";

const yLabels: IYLabelsGHT[] = [
  {
    label: "ISN",
    value: 0.0,
    order: 1,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ISN",
    value: 2.5,
    order: 2,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IQA",
    value: 1.457,
    order: 3,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IQA",
    value: 0.163,
    order: 4,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICB",
    value: 3.845,
    order: 5,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICB",
    value: 1.97,
    order: 6,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICB",
    value: 2.122,
    order: 7,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICB",
    value: 0.186,
    order: 8,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ZPG",
    value: 1.508,
    order: 9,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ZPG",
    value: 2.549,
    order: 10,
    backgroundColor: "#6E6464",
  },
  {
    label: "IAA",
    value: 0.635,
    order: 11,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IAA",
    value: 1.769,
    order: 12,
    backgroundColor: "#6E6464",
  },
  {
    label: "IAA",
    value: 0.5,
    order: 13,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IAA",
    value: 0.156,
    order: 14,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IFA",
    value: 1.5,
    order: 15,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IPG",
    value: 1.782,
    order: 16,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IPG",
    value: 0.5,
    order: 17,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IPG",
    value: 1.0,
    order: 18,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IPG",
    value: 2.5,
    order: 19,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IPG",
    value: 1.662,
    order: 20,
    backgroundColor: "#6E6464",
  },
  {
    label: "IUF",
    value: 0.113,
    order: 21,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IUF",
    value: 1.565,
    order: 22,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IBA",
    value: 6.015,
    order: 23,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IBA",
    value: 1.66,
    order: 24,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICZ",
    value: 5.239,
    order: 25,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "ICZ",
    value: 2.408,
    order: 26,
    backgroundColor: "#6E6464",
  },
];

const database = new Date("2025-05-07T02:32:00-03:00");
export const dataOfficialization = new Date("2025-05-07T08:50:00-03:00");

const data: IDataGHT[] = [
  // TREM 1: HUP0131 - Com parada no meio do trajeto (cruza oficialização)
  {
    id: "1",
    name: "HUP0131",
    color: "#800000",
    type: "Carga",
    segments: [
      // Movimento inicial
      {
        id: "1",
        xi: "2025-05-07T02:16:59-03:00",
        xf: "2025-05-07T07:18:51-03:00",
        yi: 0,
        yf: 10.997,
        dash: false,
        color: "#800000",
        info: [
          { label: "SB", value: "IBA-1" },
          { label: "Destino", value: "IBA" },
        ],
      },
      // Parada para atividade
      {
        id: "2",
        xi: "2025-05-07T07:18:51-03:00",
        xf: "2025-05-07T08:18:51-03:00",
        yi: 10.997,
        yf: 10.997, // PARADO - com atividade
        dash: false,
        color: "#800000",
        info: [
          { label: "SB", value: "IBA-PARADA" },
          { label: "Status", value: "Parado para operação" },
        ],
        activities: [
          {
            id: "act1",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para acoplamento" },
              { label: "Duração", value: "60min" },
              { label: "Responsável", value: "CCO" },
            ],
            color: "#FF6347",
          },
        ],
      },
      // Continuação do movimento
      {
        id: "3",
        xi: "2025-05-07T08:18:51-03:00",
        xf: "2025-05-07T11:30:53-03:00",
        yi: 10.997,
        yf: 32.304,
        dash: false,
        color: "#800000",
        info: [
          { label: "SB", value: "IPG-2-16" },
          { label: "Destino", value: "IPG-2" },
        ],
      },
    ],
  },

  // TREM 2: HUP0132 - Trem tracejado com parada
  {
    id: "2",
    name: "HUP0132",
    color: "#800000",
    type: "Carga",
    segments: [
      // Movimento inicial
      {
        id: "1",
        xi: "2025-05-07T09:12:59-03:00",
        xf: "2025-05-07T10:30:00-03:00",
        yi: 0,
        yf: 8.5,
        dash: true,
        color: "#800000",
        info: [
          { label: "SB", value: "IBA-MOVIMENTO" },
          { label: "Status", value: "Planejado" },
        ],
      },
      // Parada
      {
        id: "2",
        xi: "2025-05-07T10:30:00-03:00",
        xf: "2025-05-07T11:00:00-03:00",
        yi: 8.5,
        yf: 8.5, // PARADO - com atividade
        dash: true,
        color: "#800000",
        info: [
          { label: "SB", value: "IBA-PARADA" },
          { label: "Status", value: "Parado planejado" },
        ],
        activities: [
          {
            id: "act2",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para inspeção" },
              { label: "Duração", value: "30min" },
              { label: "Motivo", value: "Verificação planejada" },
            ],
            color: "#FF4500",
          },
        ],
      },
      // Continuação
      {
        id: "3",
        xi: "2025-05-07T11:00:00-03:00",
        xf: "2025-05-07T11:18:51-03:00",
        yi: 8.5,
        yf: 10.997,
        dash: true,
        color: "#800000",
        info: [
          { label: "SB", value: "IBA-FINAL" },
          { label: "Status", value: "Finalização" },
        ],
      },
    ],
  },

  // TREM 3: EMU0245 - Passageiros com parada comercial
  {
    id: "3",
    name: "EMU0245",
    color: "#0066CC",
    type: "Passageiro",
    segments: [
      // Movimento inicial
      {
        id: "1",
        xi: "2025-05-07T03:00:00-03:00",
        xf: "2025-05-07T04:30:00-03:00",
        yi: 5.5,
        yf: 12.0,
        dash: false,
        color: "#0066CC",
        info: [
          { label: "SB", value: "PASSENGER-1" },
          { label: "Composição", value: "EMU-8 carros" },
        ],
      },
      // Parada comercial
      {
        id: "2",
        xi: "2025-05-07T04:30:00-03:00",
        xf: "2025-05-07T04:33:00-03:00",
        yi: 12.0,
        yf: 12.0, // PARADO - com atividade
        dash: false,
        color: "#0066CC",
        info: [
          { label: "SB", value: "PASSENGER-STOP" },
          { label: "Status", value: "Parada comercial" },
        ],
        activities: [
          {
            id: "act3",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para embarque" },
              { label: "Duração", value: "3min" },
              { label: "Passageiros", value: "Embarque/Desembarque" },
            ],
            color: "#0066FF",
          },
        ],
      },
      // Continuação
      {
        id: "3",
        xi: "2025-05-07T04:33:00-03:00",
        xf: "2025-05-07T06:30:00-03:00",
        yi: 12.0,
        yf: 18.5,
        dash: false,
        color: "#0066CC",
        info: [
          { label: "SB", value: "PASSENGER-FINAL" },
          { label: "Destino", value: "Terminal" },
        ],
      },
    ],
  },

  // TREM 4: HFV0583 - Minério com parada para abastecimento
  {
    id: "4",
    name: "HFV0583",
    color: "#228B22",
    type: "Minério",
    segments: [
      // Movimento inicial
      {
        id: "1",
        xi: "2025-05-07T08:45:00-03:00",
        xf: "2025-05-07T11:00:00-03:00",
        yi: 20.5,
        yf: 28.0,
        dash: false,
        color: "#228B22",
        info: [
          { label: "SB", value: "MINE-TRANSPORT" },
          { label: "Tonnage", value: "14.500 ton" },
        ],
      },
      // Parada para abastecimento
      {
        id: "2",
        xi: "2025-05-07T11:00:00-03:00",
        xf: "2025-05-07T11:20:00-03:00",
        yi: 28.0,
        yf: 28.0, // PARADO - com atividade
        dash: false,
        color: "#228B22",
        info: [
          { label: "SB", value: "MINE-REFUEL" },
          { label: "Status", value: "Abastecimento" },
        ],
        activities: [
          {
            id: "act4",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para abastecimento" },
              { label: "Duração", value: "20min" },
              { label: "Combustível", value: "Diesel" },
            ],
            color: "#32CD32",
          },
        ],
      },
      // Continuação
      {
        id: "3",
        xi: "2025-05-07T11:20:00-03:00",
        xf: "2025-05-07T14:30:00-03:00",
        yi: 28.0,
        yf: 42.0,
        dash: false,
        color: "#228B22",
        info: [
          { label: "SB", value: "MINE-FINAL" },
          { label: "Destino", value: "Porto" },
        ],
      },
    ],
  },

  // TREM 5: EXP0101 - Expresso SEM ATIVIDADES (movimento direto)
  {
    id: "5",
    name: "EXP0101",
    color: "#DC143C",
    type: "Expresso",
    segments: [
      {
        id: "1",
        xi: "2025-05-07T10:30:00-03:00",
        xf: "2025-05-07T11:15:00-03:00",
        yi: 0,
        yf: 42.0,
        dash: false,
        color: "#DC143C",
        info: [
          { label: "SB", value: "EXPRESS-DIRECT" },
          { label: "Velocidade Média", value: "120 km/h" },
          { label: "Prioridade", value: "Máxima" },
        ],
      },
    ],
  },

  // TREM 6: MAN0777 - Manutenção com parada prolongada
  {
    id: "6",
    name: "MAN0777",
    color: "#8A2BE2",
    type: "Manutenção",
    segments: [
      {
        id: "1",
        xi: "2025-05-07T14:00:00-03:00",
        xf: "2025-05-07T16:00:00-03:00",
        yi: 14.5,
        yf: 14.5, // PARADO - com atividade
        dash: false,
        color: "#8A2BE2",
        info: [
          { label: "SB", value: "MAINT-OPERATION" },
          { label: "Status", value: "Manutenção ativa" },
        ],
        activities: [
          {
            id: "act5",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para manutenção" },
              { label: "Duração", value: "2h" },
              { label: "Equipamento", value: "Via Permanente" },
            ],
            color: "#FF8C00",
          },
        ],
      },
    ],
  },

  // TREM 7: NOT0888 - Noturno com parada para cruzamento
  {
    id: "7",
    name: "NOT0888",
    color: "#191970",
    type: "Noturno",
    segments: [
      // Movimento inicial
      {
        id: "1",
        xi: "2025-05-07T02:45:00-03:00",
        xf: "2025-05-07T05:30:00-03:00",
        yi: 25.0,
        yf: 30.0,
        dash: false,
        color: "#191970",
        info: [
          { label: "SB", value: "NIGHT-FREIGHT-1" },
          { label: "Cargas", value: "Frigoríficas" },
        ],
      },
      // Parada para cruzamento
      {
        id: "2",
        xi: "2025-05-07T05:30:00-03:00",
        xf: "2025-05-07T05:38:00-03:00",
        yi: 30.0,
        yf: 30.0, // PARADO - com atividade
        dash: false,
        color: "#191970",
        info: [
          { label: "SB", value: "NIGHT-CROSSING" },
          { label: "Status", value: "Aguardando cruzamento" },
        ],
        activities: [
          {
            id: "act6",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para cruzamento" },
              { label: "Duração", value: "8min" },
              { label: "Aguardo", value: "Trem prioritário" },
            ],
            color: "#FF69B4",
          },
        ],
      },
      // Continuação
      {
        id: "3",
        xi: "2025-05-07T05:38:00-03:00",
        xf: "2025-05-07T09:15:00-03:00",
        yi: 30.0,
        yf: 35.5,
        dash: false,
        color: "#191970",
        info: [
          { label: "SB", value: "NIGHT-FINAL" },
          { label: "Destino", value: "Terminal noturno" },
        ],
      },
    ],
  },

  // TREM 8: MUL0456 - Multimodal SEM ATIVIDADES (movimento contínuo)
  {
    id: "8",
    name: "MUL0456",
    color: "#8B4513",
    type: "Multimodal",
    segments: [
      {
        id: "1",
        xi: "2025-05-07T12:00:00-03:00",
        xf: "2025-05-07T13:30:00-03:00",
        yi: 8.5,
        yf: 15.2,
        dash: false,
        color: "#8B4513",
        info: [
          { label: "SB", value: "MULTI-1" },
          { label: "Cargas", value: "Mista" },
        ],
      },
      {
        id: "2",
        xi: "2025-05-07T13:30:00-03:00",
        xf: "2025-05-07T15:45:00-03:00",
        yi: 15.2,
        yf: 28.0,
        dash: false,
        color: "#8B4513",
        info: [{ label: "SB", value: "MULTI-2" }],
      },
      {
        id: "3",
        xi: "2025-05-07T15:45:00-03:00",
        xf: "2025-05-07T17:00:00-03:00",
        yi: 28.0,
        yf: 38.5,
        dash: false,
        color: "#8B4513",
        info: [{ label: "SB", value: "MULTI-3-FINAL" }],
      },
    ],
  },

  // TREM 9: TST0001 - Teste com parada para teste completo
  {
    id: "9",
    name: "TST0001",
    color: "#FF1493",
    type: "Teste",
    segments: [
      {
        id: "1",
        xi: "2025-05-07T13:00:00-03:00",
        xf: "2025-05-07T15:00:00-03:00",
        yi: 12.0,
        yf: 12.0, // PARADO - com atividade
        dash: false,
        color: "#FF1493",
        info: [
          { label: "SB", value: "TEST-COMPLETE" },
          { label: "Status", value: "Teste em andamento" },
        ],
        activities: [
          {
            id: "act7",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para teste completo" },
              { label: "Duração", value: "2h" },
              { label: "Sistema", value: "ATC/ATP + Freios" },
            ],
            color: "#FF0000",
          },
        ],
      },
    ],
  },

  // TREM 10: HOR0123 - Horizontal com parada para manobra
  {
    id: "10",
    name: "HOR0123",
    color: "#9370DB",
    type: "Horizontal",
    segments: [
      {
        id: "1",
        xi: "2025-05-07T15:00:00-03:00",
        xf: "2025-05-07T16:00:00-03:00",
        yi: 25.5,
        yf: 25.5, // PARADO - com atividade
        dash: false,
        color: "#9370DB",
        info: [
          { label: "SB", value: "HORIZONTAL-MANEUVER" },
          { label: "Status", value: "Manobra de pátio" },
        ],
        activities: [
          {
            id: "act8",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para manobra" },
              { label: "Duração", value: "1h" },
              { label: "Operação", value: "Formação de comboio" },
            ],
            color: "#BA55D3",
          },
        ],
      },
    ],
  },

  // TREM 11: LNG0999 - Longa distância com parada noturna
  {
    id: "11",
    name: "LNG0999",
    color: "#2E8B57",
    type: "Longa_Distância",
    segments: [
      // Movimento D
      {
        id: "1",
        xi: "2025-05-07T18:00:00-03:00",
        xf: "2025-05-07T23:00:00-03:00",
        yi: 2.0,
        yf: 20.0,
        dash: false,
        color: "#2E8B57",
        info: [
          { label: "SB", value: "LONG-DIST-D" },
          { label: "Distância", value: "400 km" },
        ],
      },
      // Parada noturna
      {
        id: "2",
        xi: "2025-05-07T23:00:00-03:00",
        xf: "2025-05-08T01:00:00-03:00",
        yi: 20.0,
        yf: 20.0, // PARADO - com atividade
        dash: false,
        color: "#2E8B57",
        info: [
          { label: "SB", value: "LONG-NIGHT-STOP" },
          { label: "Status", value: "Parada noturna" },
        ],
        activities: [
          {
            id: "act9",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para descanso" },
              { label: "Duração", value: "2h" },
              { label: "Motivo", value: "Troca de maquinista" },
            ],
            color: "#32CD32",
          },
        ],
      },
      // Continuação D+1
      {
        id: "3",
        xi: "2025-05-08T01:00:00-03:00",
        xf: "2025-05-08T06:00:00-03:00",
        yi: 20.0,
        yf: 40.0,
        dash: false,
        color: "#2E8B57",
        info: [
          { label: "SB", value: "LONG-DIST-D1" },
          { label: "Destino", value: "Terminal final" },
        ],
      },
    ],
  },

  // TREM 12: MAT0555 - Matutino SEM ATIVIDADES
  {
    id: "12",
    name: "MAT0555",
    color: "#FF6347",
    type: "Matutino",
    segments: [
      {
        id: "1",
        xi: "2025-05-08T05:30:00-03:00",
        xf: "2025-05-08T09:45:00-03:00",
        yi: 10.0,
        yf: 30.0,
        dash: false,
        color: "#FF6347",
        info: [
          { label: "SB", value: "MORNING-SERVICE" },
          { label: "Horário", value: "Pico matutino" },
        ],
      },
    ],
  },

  // TREM 13: SHT0111 - Shuttle com parada operacional
  {
    id: "13",
    name: "SHT0111",
    color: "#4169E1",
    type: "Shuttle",
    segments: [
      {
        id: "1",
        xi: "2025-05-08T16:00:00-03:00",
        xf: "2025-05-08T17:00:00-03:00",
        yi: 18.0,
        yf: 18.0, // PARADO - com atividade
        dash: false,
        color: "#4169E1",
        info: [
          { label: "SB", value: "SHUTTLE-OPERATION" },
          { label: "Status", value: "Operação shuttle" },
        ],
        activities: [
          {
            id: "act10",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para operação shuttle" },
              { label: "Duração", value: "1h" },
              { label: "Serviço", value: "Transporte interno" },
            ],
            color: "#1E90FF",
          },
        ],
      },
    ],
  },

  // TREM 14: ULT1000 - Ultra longa distância SEM ATIVIDADES
  {
    id: "14",
    name: "ULT1000",
    color: "#20B2AA",
    type: "Ultra_Longa_Distância",
    segments: [
      {
        id: "1",
        xi: "2025-05-08T20:00:00-03:00",
        xf: "2025-05-09T08:00:00-03:00",
        yi: 5.0,
        yf: 38.0,
        dash: false,
        color: "#20B2AA",
        info: [
          { label: "SB", value: "ULTRA-LONG-1" },
          { label: "Distância", value: "1200 km" },
          { label: "Tipo", value: "Transcontinental" },
        ],
      },
    ],
  },

  // TREM 15: AFT0666 - Apoio com parada logística
  {
    id: "15",
    name: "AFT0666",
    color: "#B22222",
    type: "Apoio",
    segments: [
      {
        id: "1",
        xi: "2025-05-08T08:00:00-03:00",
        xf: "2025-05-08T09:00:00-03:00",
        yi: 35.0,
        yf: 35.0, // PARADO - com atividade
        dash: false,
        color: "#B22222",
        info: [
          { label: "SB", value: "SUPPORT-LOGISTICS" },
          { label: "Status", value: "Apoio logístico" },
        ],
        activities: [
          {
            id: "act11",
            type: "parada",
            position: 0.5, // Centralizada
            info: [
              { label: "Tipo", value: "Parada para apoio logístico" },
              { label: "Duração", value: "1h" },
              { label: "Operação", value: "Carregamento equipamentos" },
            ],
            color: "#DC143C",
          },
        ],
      },
    ],
  },
];

const restricts: IRestrictionsGHT[] = [
  // Restrição 1: Original - cruza oficialização
  {
    id: "1",
    name: "INTERDIÇÃO IPG-1",
    color: "#008000CC",
    xi: "2025-05-07T02:32:00-03:00",
    xf: "2025-05-07T05:32:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      { label: "SB", value: "IPG-1" },
      { label: "Motivo", value: "Manutenção preventiva" },
    ],
  },

  // Restrição 2: Depois da oficialização
  {
    id: "2",
    name: "OBRAS ICB-3",
    color: "#FF4500CC",
    xi: "2025-05-07T08:00:00-03:00",
    xf: "2025-05-07T12:00:00-03:00",
    yi: 5.0,
    yf: 8.5,
    info: [
      { label: "SB", value: "ICB-3" },
      { label: "Motivo", value: "Obras de sinalização" },
      { label: "Responsável", value: "Engenharia" },
    ],
  },

  // Restrição 3: Longa duração cruzando oficialização
  {
    id: "3",
    name: "MANUTENÇÃO ZPG-GERAL",
    color: "#8B0000CC",
    xi: "2025-05-07T06:00:00-03:00",
    xf: "2025-05-07T18:00:00-03:00",
    yi: 15.0,
    yf: 20.0,
    info: [
      { label: "SB", value: "ZPG-ALL" },
      { label: "Motivo", value: "Manutenção de subestação" },
      { label: "Duração", value: "12 horas" },
      { label: "Status", value: "Crítica" },
    ],
  },

  // Restrição 4: Antes da oficialização
  {
    id: "4",
    name: "BLOQUEIO IQA-2",
    color: "#FFD700CC",
    xi: "2025-05-07T04:30:00-03:00",
    xf: "2025-05-07T06:00:00-03:00",
    yi: 3.5,
    yf: 4.2,
    info: [
      { label: "SB", value: "IQA-2" },
      { label: "Motivo", value: "Passagem de trem especial" },
      { label: "Tipo", value: "Bloqueio temporário" },
    ],
  },

  // Restrição 5: Velocidade reduzida
  {
    id: "5",
    name: "VELOCIDADE REDUZIDA IAA-1",
    color: "#FFA500CC",
    xi: "2025-05-07T07:00:00-03:00",
    xf: "2025-05-07T10:00:00-03:00",
    yi: 22.5,
    yf: 25.0,
    info: [
      { label: "SB", value: "IAA-1" },
      { label: "Motivo", value: "Geometria da via" },
      { label: "Velocidade Máxima", value: "40 km/h" },
    ],
  },

  // Restrição 6: Manutenção noturna
  {
    id: "6",
    name: "MANUTENÇÃO NOTURNA IBA",
    color: "#2F4F4FCC",
    xi: "2025-05-07T22:00:00-03:00",
    xf: "2025-05-08T06:00:00-03:00",
    yi: 33.0,
    yf: 37.0,
    info: [
      { label: "SB", value: "IBA-YARD" },
      { label: "Motivo", value: "Renovação de AMVs" },
      { label: "Período", value: "Janela noturna" },
      { label: "Equipe", value: "Via Permanente - Turno C" },
    ],
  },

  // Restrição 7: Zona de trabalho D+1
  {
    id: "7",
    name: "RENOVAÇÃO IPG-COMPLEX",
    color: "#8B4513CC",
    xi: "2025-05-08T08:00:00-03:00",
    xf: "2025-05-08T17:00:00-03:00",
    yi: 30.5,
    yf: 35.5,
    info: [
      { label: "SB", value: "IPG-WORK-ZONE" },
      { label: "Motivo", value: "Renovação completa de via" },
      { label: "Equipamentos", value: "RGR, Socadora, Regularizadora" },
      { label: "Duração", value: "9 horas" },
    ],
  },

  // Restrição 8: Múltiplas restrições sobrepostas
  {
    id: "8",
    name: "BLOQUEIO TOTAL ZPG-NORTE",
    color: "#800080CC",
    xi: "2025-05-07T16:00:00-03:00",
    xf: "2025-05-07T20:00:00-03:00",
    yi: 16.5,
    yf: 19.0,
    info: [
      { label: "SB", value: "ZPG-NORTH" },
      { label: "Motivo", value: "Substituição de trilhos" },
      { label: "Tipo", value: "Bloqueio total" },
    ],
  },

  // Restrição 9: Obra especial D+1/D+2
  {
    id: "9",
    name: "OBRA ESPECIAL ICB-EXTENSÃO",
    color: "#B22222CC",
    xi: "2025-05-08T12:00:00-03:00",
    xf: "2025-05-09T06:00:00-03:00",
    yi: 7.0,
    yf: 12.0,
    info: [
      { label: "SB", value: "ICB-EXTENSION" },
      { label: "Motivo", value: "Construção de nova linha" },
      { label: "Duração", value: "18 horas" },
      { label: "Complexidade", value: "Alto" },
      { label: "Equipes", value: "3 turnos" },
    ],
  },

  // Restrição 10: D+2 início
  {
    id: "10",
    name: "PREPARAÇÃO NOVA OPERAÇÃO",
    color: "#20B2AACC",
    xi: "2025-05-09T02:00:00-03:00",
    xf: "2025-05-09T08:00:00-03:00",
    yi: 1.0,
    yf: 5.0,
    info: [
      { label: "SB", value: "SYSTEM-PREP" },
      { label: "Motivo", value: "Preparação novo horário operacional" },
      { label: "Tipo", value: "Sistêmica" },
      { label: "Prioridade", value: "Estratégica" },
    ],
  },
];

export const GHTChartMock = {
  yLabels,
  database,
  dataOfficialization,
  restricts,
  data,
};
