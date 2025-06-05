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
    backgroundColor: "#D2C8C8",
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
    value: 0.87,
    order: 22,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IUF",
    value: 0.595,
    order: 23,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "IBA",
    value: 6.115,
    order: 24,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "IBA",
    value: 1.66,
    order: 25,
    backgroundColor: "#D2C8C8",
  },
  {
    label: "ICZ",
    value: 5.239,
    order: 26,
    backgroundColor: "#FFFFFF",
  },
  {
    label: "ICZ",
    value: 2.408,
    order: 27,
    backgroundColor: "#6E6464",
  },
];

// const database = new Date("2025-05-07T02:32:00-03:00");
const database = new Date("2025-06-04T01:05:19");
export const dataOfficialization = new Date("2025-06-04T06:05:19");

// const data: IDataGHT[] = [
//   // TREM 1: HUP0131 - Com parada no meio do trajeto (cruza oficialização)
//   {
//     id: "1",
//     name: "HUP0131",
//     color: "#800000",
//     type: "Carga",
//     segments: [
//       // Movimento inicial
//       {
//         id: "1",
//         xi: "2025-05-07T02:16:59-03:00",
//         xf: "2025-05-07T07:18:51-03:00",
//         yi: 0,
//         yf: 10.997,
//         dash: false,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IBA-1" },
//           { label: "Destino", value: "IBA" },
//         ],
//       },
//       // Parada para atividade
//       {
//         id: "2",
//         xi: "2025-05-07T07:18:51-03:00",
//         xf: "2025-05-07T08:18:51-03:00",
//         yi: 10.997,
//         yf: 10.997, // PARADO - com atividade
//         dash: false,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IBA-PARADA" },
//           { label: "Status", value: "Parado para operação" },
//         ],
//         activities: [
//           {
//             id: "act1",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para acoplamento" },
//               { label: "Duração", value: "60min" },
//               { label: "Responsável", value: "CCO" },
//             ],
//             color: "#FF6347",
//           },
//         ],
//       },
//       // Continuação do movimento
//       {
//         id: "3",
//         xi: "2025-05-07T08:18:51-03:00",
//         xf: "2025-05-07T11:30:53-03:00",
//         yi: 10.997,
//         yf: 32.304,
//         dash: false,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IPG-2-16" },
//           { label: "Destino", value: "IPG-2" },
//         ],
//       },
//     ],
//   },

//   // TREM 2: HUP0132 - Trem tracejado com parada
//   {
//     id: "2",
//     name: "HUP0132",
//     color: "#800000",
//     type: "Carga",
//     segments: [
//       // Movimento inicial
//       {
//         id: "1",
//         xi: "2025-05-07T09:12:59-03:00",
//         xf: "2025-05-07T10:30:00-03:00",
//         yi: 0,
//         yf: 8.5,
//         dash: true,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IBA-MOVIMENTO" },
//           { label: "Status", value: "Planejado" },
//         ],
//       },
//       // Parada
//       {
//         id: "2",
//         xi: "2025-05-07T10:30:00-03:00",
//         xf: "2025-05-07T11:00:00-03:00",
//         yi: 8.5,
//         yf: 8.5, // PARADO - com atividade
//         dash: true,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IBA-PARADA" },
//           { label: "Status", value: "Parado planejado" },
//         ],
//         activities: [
//           {
//             id: "act2",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para inspeção" },
//               { label: "Duração", value: "30min" },
//               { label: "Motivo", value: "Verificação planejada" },
//             ],
//             color: "#FF4500",
//           },
//         ],
//       },
//       // Continuação
//       {
//         id: "3",
//         xi: "2025-05-07T11:00:00-03:00",
//         xf: "2025-05-07T11:18:51-03:00",
//         yi: 8.5,
//         yf: 10.997,
//         dash: true,
//         color: "#800000",
//         info: [
//           { label: "SB", value: "IBA-FINAL" },
//           { label: "Status", value: "Finalização" },
//         ],
//       },
//     ],
//   },

//   // TREM 3: EMU0245 - Passageiros com parada comercial
//   {
//     id: "3",
//     name: "EMU0245",
//     color: "#0066CC",
//     type: "Passageiro",
//     segments: [
//       // Movimento inicial
//       {
//         id: "1",
//         xi: "2025-05-07T03:00:00-03:00",
//         xf: "2025-05-07T04:30:00-03:00",
//         yi: 5.5,
//         yf: 12.0,
//         dash: false,
//         color: "#0066CC",
//         info: [
//           { label: "SB", value: "PASSENGER-1" },
//           { label: "Composição", value: "EMU-8 carros" },
//         ],
//       },
//       // Parada comercial
//       {
//         id: "2",
//         xi: "2025-05-07T04:30:00-03:00",
//         xf: "2025-05-07T04:33:00-03:00",
//         yi: 12.0,
//         yf: 12.0, // PARADO - com atividade
//         dash: false,
//         color: "#0066CC",
//         info: [
//           { label: "SB", value: "PASSENGER-STOP" },
//           { label: "Status", value: "Parada comercial" },
//         ],
//         activities: [
//           {
//             id: "act3",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para embarque" },
//               { label: "Duração", value: "3min" },
//               { label: "Passageiros", value: "Embarque/Desembarque" },
//             ],
//             color: "#0066FF",
//           },
//         ],
//       },
//       // Continuação
//       {
//         id: "3",
//         xi: "2025-05-07T04:33:00-03:00",
//         xf: "2025-05-07T06:30:00-03:00",
//         yi: 12.0,
//         yf: 18.5,
//         dash: false,
//         color: "#0066CC",
//         info: [
//           { label: "SB", value: "PASSENGER-FINAL" },
//           { label: "Destino", value: "Terminal" },
//         ],
//       },
//     ],
//   },

//   // TREM 4: HFV0583 - Minério com parada para abastecimento
//   {
//     id: "4",
//     name: "HFV0583",
//     color: "#228B22",
//     type: "Minério",
//     segments: [
//       // Movimento inicial
//       {
//         id: "1",
//         xi: "2025-05-07T08:45:00-03:00",
//         xf: "2025-05-07T11:00:00-03:00",
//         yi: 20.5,
//         yf: 28.0,
//         dash: false,
//         color: "#228B22",
//         info: [
//           { label: "SB", value: "MINE-TRANSPORT" },
//           { label: "Tonnage", value: "14.500 ton" },
//         ],
//       },
//       // Parada para abastecimento
//       {
//         id: "2",
//         xi: "2025-05-07T11:00:00-03:00",
//         xf: "2025-05-07T11:20:00-03:00",
//         yi: 28.0,
//         yf: 28.0, // PARADO - com atividade
//         dash: false,
//         color: "#228B22",
//         info: [
//           { label: "SB", value: "MINE-REFUEL" },
//           { label: "Status", value: "Abastecimento" },
//         ],
//         activities: [
//           {
//             id: "act4",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para abastecimento" },
//               { label: "Duração", value: "20min" },
//               { label: "Combustível", value: "Diesel" },
//             ],
//             color: "#32CD32",
//           },
//         ],
//       },
//       // Continuação
//       {
//         id: "3",
//         xi: "2025-05-07T11:20:00-03:00",
//         xf: "2025-05-07T14:30:00-03:00",
//         yi: 28.0,
//         yf: 42.0,
//         dash: false,
//         color: "#228B22",
//         info: [
//           { label: "SB", value: "MINE-FINAL" },
//           { label: "Destino", value: "Porto" },
//         ],
//       },
//     ],
//   },

//   // TREM 5: EXP0101 - Expresso SEM ATIVIDADES (movimento direto)
//   {
//     id: "5",
//     name: "EXP0101",
//     color: "#DC143C",
//     type: "Expresso",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-07T10:30:00-03:00",
//         xf: "2025-05-07T11:15:00-03:00",
//         yi: 0,
//         yf: 42.0,
//         dash: false,
//         color: "#DC143C",
//         info: [
//           { label: "SB", value: "EXPRESS-DIRECT" },
//           { label: "Velocidade Média", value: "120 km/h" },
//           { label: "Prioridade", value: "Máxima" },
//         ],
//       },
//     ],
//   },

//   // TREM 6: MAN0777 - Manutenção com parada prolongada
//   {
//     id: "6",
//     name: "MAN0777",
//     color: "#8A2BE2",
//     type: "Manutenção",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-07T14:00:00-03:00",
//         xf: "2025-05-07T16:00:00-03:00",
//         yi: 14.5,
//         yf: 14.5, // PARADO - com atividade
//         dash: false,
//         color: "#8A2BE2",
//         info: [
//           { label: "SB", value: "MAINT-OPERATION" },
//           { label: "Status", value: "Manutenção ativa" },
//         ],
//         activities: [
//           {
//             id: "act5",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para manutenção" },
//               { label: "Duração", value: "2h" },
//               { label: "Equipamento", value: "Via Permanente" },
//             ],
//             color: "#FF8C00",
//           },
//         ],
//       },
//     ],
//   },

//   // TREM 7: NOT0888 - Noturno com parada para cruzamento
//   {
//     id: "7",
//     name: "NOT0888",
//     color: "#191970",
//     type: "Noturno",
//     segments: [
//       // Movimento inicial
//       {
//         id: "1",
//         xi: "2025-05-07T02:45:00-03:00",
//         xf: "2025-05-07T05:30:00-03:00",
//         yi: 25.0,
//         yf: 30.0,
//         dash: false,
//         color: "#191970",
//         info: [
//           { label: "SB", value: "NIGHT-FREIGHT-1" },
//           { label: "Cargas", value: "Frigoríficas" },
//         ],
//       },
//       // Parada para cruzamento
//       {
//         id: "2",
//         xi: "2025-05-07T05:30:00-03:00",
//         xf: "2025-05-07T05:38:00-03:00",
//         yi: 30.0,
//         yf: 30.0, // PARADO - com atividade
//         dash: false,
//         color: "#191970",
//         info: [
//           { label: "SB", value: "NIGHT-CROSSING" },
//           { label: "Status", value: "Aguardando cruzamento" },
//         ],
//         activities: [
//           {
//             id: "act6",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para cruzamento" },
//               { label: "Duração", value: "8min" },
//               { label: "Aguardo", value: "Trem prioritário" },
//             ],
//             color: "#FF69B4",
//           },
//         ],
//       },
//       // Continuação
//       {
//         id: "3",
//         xi: "2025-05-07T05:38:00-03:00",
//         xf: "2025-05-07T09:15:00-03:00",
//         yi: 30.0,
//         yf: 35.5,
//         dash: false,
//         color: "#191970",
//         info: [
//           { label: "SB", value: "NIGHT-FINAL" },
//           { label: "Destino", value: "Terminal noturno" },
//         ],
//       },
//     ],
//   },

//   // TREM 8: MUL0456 - Multimodal SEM ATIVIDADES (movimento contínuo)
//   {
//     id: "8",
//     name: "MUL0456",
//     color: "#8B4513",
//     type: "Multimodal",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-07T12:00:00-03:00",
//         xf: "2025-05-07T13:30:00-03:00",
//         yi: 8.5,
//         yf: 15.2,
//         dash: false,
//         color: "#8B4513",
//         info: [
//           { label: "SB", value: "MULTI-1" },
//           { label: "Cargas", value: "Mista" },
//         ],
//       },
//       {
//         id: "2",
//         xi: "2025-05-07T13:30:00-03:00",
//         xf: "2025-05-07T15:45:00-03:00",
//         yi: 15.2,
//         yf: 28.0,
//         dash: false,
//         color: "#8B4513",
//         info: [{ label: "SB", value: "MULTI-2" }],
//       },
//       {
//         id: "3",
//         xi: "2025-05-07T15:45:00-03:00",
//         xf: "2025-05-07T17:00:00-03:00",
//         yi: 28.0,
//         yf: 38.5,
//         dash: false,
//         color: "#8B4513",
//         info: [{ label: "SB", value: "MULTI-3-FINAL" }],
//       },
//     ],
//   },

//   // TREM 9: TST0001 - Teste com parada para teste completo
//   {
//     id: "9",
//     name: "TST0001",
//     color: "#FF1493",
//     type: "Teste",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-07T13:00:00-03:00",
//         xf: "2025-05-07T15:00:00-03:00",
//         yi: 12.0,
//         yf: 12.0, // PARADO - com atividade
//         dash: false,
//         color: "#FF1493",
//         info: [
//           { label: "SB", value: "TEST-COMPLETE" },
//           { label: "Status", value: "Teste em andamento" },
//         ],
//         activities: [
//           {
//             id: "act7",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para teste completo" },
//               { label: "Duração", value: "2h" },
//               { label: "Sistema", value: "ATC/ATP + Freios" },
//             ],
//             color: "#FF0000",
//           },
//         ],
//       },
//     ],
//   },

//   // TREM 10: HOR0123 - Horizontal com parada para manobra
//   {
//     id: "10",
//     name: "HOR0123",
//     color: "#9370DB",
//     type: "Horizontal",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-07T15:00:00-03:00",
//         xf: "2025-05-07T16:00:00-03:00",
//         yi: 25.5,
//         yf: 25.5, // PARADO - com atividade
//         dash: false,
//         color: "#9370DB",
//         info: [
//           { label: "SB", value: "HORIZONTAL-MANEUVER" },
//           { label: "Status", value: "Manobra de pátio" },
//         ],
//         activities: [
//           {
//             id: "act8",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para manobra" },
//               { label: "Duração", value: "1h" },
//               { label: "Operação", value: "Formação de comboio" },
//             ],
//             color: "#BA55D3",
//           },
//         ],
//       },
//     ],
//   },

//   // TREM 11: LNG0999 - Longa distância com parada noturna
//   {
//     id: "11",
//     name: "LNG0999",
//     color: "#2E8B57",
//     type: "Longa_Distância",
//     segments: [
//       // Movimento D
//       {
//         id: "1",
//         xi: "2025-05-07T18:00:00-03:00",
//         xf: "2025-05-07T23:00:00-03:00",
//         yi: 2.0,
//         yf: 20.0,
//         dash: false,
//         color: "#2E8B57",
//         info: [
//           { label: "SB", value: "LONG-DIST-D" },
//           { label: "Distância", value: "400 km" },
//         ],
//       },
//       // Parada noturna
//       {
//         id: "2",
//         xi: "2025-05-07T23:00:00-03:00",
//         xf: "2025-05-08T01:00:00-03:00",
//         yi: 20.0,
//         yf: 20.0, // PARADO - com atividade
//         dash: false,
//         color: "#2E8B57",
//         info: [
//           { label: "SB", value: "LONG-NIGHT-STOP" },
//           { label: "Status", value: "Parada noturna" },
//         ],
//         activities: [
//           {
//             id: "act9",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para descanso" },
//               { label: "Duração", value: "2h" },
//               { label: "Motivo", value: "Troca de maquinista" },
//             ],
//             color: "#32CD32",
//           },
//         ],
//       },
//       // Continuação D+1
//       {
//         id: "3",
//         xi: "2025-05-08T01:00:00-03:00",
//         xf: "2025-05-08T06:00:00-03:00",
//         yi: 20.0,
//         yf: 40.0,
//         dash: false,
//         color: "#2E8B57",
//         info: [
//           { label: "SB", value: "LONG-DIST-D1" },
//           { label: "Destino", value: "Terminal final" },
//         ],
//       },
//     ],
//   },

//   // TREM 12: MAT0555 - Matutino SEM ATIVIDADES
//   {
//     id: "12",
//     name: "MAT0555",
//     color: "#FF6347",
//     type: "Matutino",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-08T05:30:00-03:00",
//         xf: "2025-05-08T09:45:00-03:00",
//         yi: 10.0,
//         yf: 30.0,
//         dash: false,
//         color: "#FF6347",
//         info: [
//           { label: "SB", value: "MORNING-SERVICE" },
//           { label: "Horário", value: "Pico matutino" },
//         ],
//       },
//     ],
//   },

//   // TREM 13: SHT0111 - Shuttle com parada operacional
//   {
//     id: "13",
//     name: "SHT0111",
//     color: "#4169E1",
//     type: "Shuttle",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-08T16:00:00-03:00",
//         xf: "2025-05-08T17:00:00-03:00",
//         yi: 18.0,
//         yf: 18.0, // PARADO - com atividade
//         dash: false,
//         color: "#4169E1",
//         info: [
//           { label: "SB", value: "SHUTTLE-OPERATION" },
//           { label: "Status", value: "Operação shuttle" },
//         ],
//         activities: [
//           {
//             id: "act10",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para operação shuttle" },
//               { label: "Duração", value: "1h" },
//               { label: "Serviço", value: "Transporte interno" },
//             ],
//             color: "#1E90FF",
//           },
//         ],
//       },
//     ],
//   },

//   // TREM 14: ULT1000 - Ultra longa distância SEM ATIVIDADES
//   {
//     id: "14",
//     name: "ULT1000",
//     color: "#20B2AA",
//     type: "Ultra_Longa_Distância",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-08T20:00:00-03:00",
//         xf: "2025-05-09T08:00:00-03:00",
//         yi: 5.0,
//         yf: 38.0,
//         dash: false,
//         color: "#20B2AA",
//         info: [
//           { label: "SB", value: "ULTRA-LONG-1" },
//           { label: "Distância", value: "1200 km" },
//           { label: "Tipo", value: "Transcontinental" },
//         ],
//       },
//     ],
//   },

//   // TREM 15: AFT0666 - Apoio com parada logística
//   {
//     id: "15",
//     name: "AFT0666",
//     color: "#B22222",
//     type: "Apoio",
//     segments: [
//       {
//         id: "1",
//         xi: "2025-05-08T08:00:00-03:00",
//         xf: "2025-05-08T09:00:00-03:00",
//         yi: 35.0,
//         yf: 35.0, // PARADO - com atividade
//         dash: false,
//         color: "#B22222",
//         info: [
//           { label: "SB", value: "SUPPORT-LOGISTICS" },
//           { label: "Status", value: "Apoio logístico" },
//         ],
//         activities: [
//           {
//             id: "act11",
//             type: "parada",
//             position: 0.5, // Centralizada
//             info: [
//               { label: "Tipo", value: "Parada para apoio logístico" },
//               { label: "Duração", value: "1h" },
//               { label: "Operação", value: "Carregamento equipamentos" },
//             ],
//             color: "#DC143C",
//           },
//         ],
//       },
//     ],
//   },
// ];

const data: IDataGHT[] = [
  {
    name: "BDU2108",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T06:43:05",
        xf: "2025-06-05T06:45:52",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-0",
        color: "red",
      },
      {
        xi: "2025-06-05T06:45:52",
        xf: "2025-06-05T06:46:19",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-1",
        color: "red",
      },
      {
        xi: "2025-06-05T06:46:19",
        xf: "2025-06-05T06:49:31",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-2",
        color: "red",
      },
      {
        xi: "2025-06-05T06:49:31",
        xf: "2025-06-05T06:51:23",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-3",
        color: "red",
      },
      {
        xi: "2025-06-05T06:51:23",
        xf: "2025-06-05T07:11:22",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-4",
        color: "red",
      },
      {
        xi: "2025-06-05T07:11:22",
        xf: "2025-06-05T07:16:04",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:52",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "0-5",
        color: "red",
      },
    ],
    id: "0",
    patColor: "red",
    type: "line",
  },
  {
    name: "BDU7108",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T07:52:17",
        xf: "2025-06-04T07:54:47",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-0",
        color: "red",
      },
      {
        xi: "2025-06-04T07:54:47",
        xf: "2025-06-04T07:55:14",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-1",
        color: "red",
      },
      {
        xi: "2025-06-04T07:55:14",
        xf: "2025-06-04T07:58:09",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-2",
        color: "red",
      },
      {
        xi: "2025-06-04T07:58:09",
        xf: "2025-06-04T08:21:46",
        yi: 29.287,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-3",
        color: "red",
      },
      {
        xi: "2025-06-04T08:21:46",
        xf: "2025-06-04T08:23:13",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-4",
        color: "red",
      },
      {
        xi: "2025-06-04T08:23:13",
        xf: "2025-06-04T08:34:07",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-5",
        color: "red",
      },
      {
        xi: "2025-06-04T08:34:07",
        xf: "2025-06-04T08:38:53",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-6",
        color: "red",
      },
      {
        xi: "2025-06-04T08:38:53",
        xf: "2025-06-04T09:34:50",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-7",
        color: "red",
      },
      {
        xi: "2025-06-04T09:34:50",
        xf: "2025-06-04T09:47:39",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-8",
        color: "red",
      },
      {
        xi: "2025-06-04T09:47:39",
        xf: "2025-06-04T09:52:43",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-9",
        color: "red",
      },
      {
        xi: "2025-06-04T09:52:43",
        xf: "2025-06-04T10:22:43",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "1-10",
        color: "red",
      },
    ],
    id: "1",
    patColor: "red",
    type: "line",
  },
  {
    name: "BDU7110",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T07:52:17",
        xf: "2025-06-05T07:54:23",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-0",
        color: "red",
      },
      {
        xi: "2025-06-05T07:54:23",
        xf: "2025-06-05T07:54:50",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-1",
        color: "red",
      },
      {
        xi: "2025-06-05T07:54:50",
        xf: "2025-06-05T07:57:06",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-2",
        color: "red",
      },
      {
        xi: "2025-06-05T07:57:06",
        xf: "2025-06-05T07:58:43",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-3",
        color: "red",
      },
      {
        xi: "2025-06-05T07:58:43",
        xf: "2025-06-05T08:15:58",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-4",
        color: "red",
      },
      {
        xi: "2025-06-05T08:15:58",
        xf: "2025-06-05T08:22:11",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-5",
        color: "red",
      },
      {
        xi: "2025-06-05T08:22:11",
        xf: "2025-06-05T08:41:49",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-6",
        color: "red",
      },
      {
        xi: "2025-06-05T08:41:49",
        xf: "2025-06-05T08:47:24",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-7",
        color: "red",
      },
      {
        xi: "2025-06-05T08:47:24",
        xf: "2025-06-05T09:17:24",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 07:52",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:52",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "2-8",
        color: "red",
      },
    ],
    id: "2",
    patColor: "red",
    type: "line",
  },
  {
    name: "BKU4108",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T00:14:41",
        xf: "2025-06-05T00:16:47",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-0",
        color: "red",
      },
      {
        xi: "2025-06-05T00:16:47",
        xf: "2025-06-05T00:17:14",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-1",
        color: "red",
      },
      {
        xi: "2025-06-05T00:17:14",
        xf: "2025-06-05T00:19:30",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-2",
        color: "red",
      },
      {
        xi: "2025-06-05T00:19:30",
        xf: "2025-06-05T00:21:07",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-3",
        color: "red",
      },
      {
        xi: "2025-06-05T00:21:07",
        xf: "2025-06-05T00:38:22",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-4",
        color: "red",
      },
      {
        xi: "2025-06-05T00:38:22",
        xf: "2025-06-05T00:44:35",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-5",
        color: "red",
      },
      {
        xi: "2025-06-05T00:44:35",
        xf: "2025-06-05T01:04:13",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-6",
        color: "red",
      },
      {
        xi: "2025-06-05T01:04:13",
        xf: "2025-06-05T01:09:48",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-7",
        color: "red",
      },
      {
        xi: "2025-06-05T01:09:48",
        xf: "2025-06-05T01:39:48",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:10",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "3-8",
        color: "red",
      },
    ],
    id: "3",
    patColor: "red",
    type: "line",
  },
  {
    name: "BPU7103",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T23:12:48",
        xf: "2025-06-04T23:15:13",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-0",
        color: "red",
      },
      {
        xi: "2025-06-04T23:15:13",
        xf: "2025-06-04T23:15:40",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-1",
        color: "red",
      },
      {
        xi: "2025-06-04T23:15:40",
        xf: "2025-06-04T23:18:31",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-2",
        color: "red",
      },
      {
        xi: "2025-06-04T23:18:31",
        xf: "2025-06-04T23:19:57",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-3",
        color: "red",
      },
      {
        xi: "2025-06-04T23:19:57",
        xf: "2025-06-04T23:30:46",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-4",
        color: "red",
      },
      {
        xi: "2025-06-04T23:30:46",
        xf: "2025-06-04T23:34:49",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-5",
        color: "red",
      },
      {
        xi: "2025-06-04T23:34:49",
        xf: "2025-06-04T23:47:38",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-6",
        color: "red",
      },
      {
        xi: "2025-06-04T23:47:38",
        xf: "2025-06-04T23:52:42",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-7",
        color: "red",
      },
      {
        xi: "2025-06-04T23:52:42",
        xf: "2025-06-05T00:22:42",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "4-8",
        color: "red",
      },
    ],
    id: "4",
    patColor: "red",
    type: "line",
  },
  {
    name: "BUD2107",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T13:03:33",
        xf: "2025-06-04T13:05:32",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-0",
        color: "red",
      },
      {
        xi: "2025-06-04T13:05:32",
        xf: "2025-06-04T13:15:06",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-1",
        color: "red",
      },
      {
        xi: "2025-06-04T13:15:06",
        xf: "2025-06-04T14:05:29",
        yi: 29.882,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:05:29",
        xf: "2025-06-04T14:07:51",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:07:51",
        xf: "2025-06-04T14:10:24",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-4",
        color: "red",
      },
      {
        xi: "2025-06-04T14:10:24",
        xf: "2025-06-04T14:10:49",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-5",
        color: "red",
      },
      {
        xi: "2025-06-04T14:10:49",
        xf: "2025-06-04T14:13:47",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:50",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "5-6",
        color: "red",
      },
    ],
    id: "5",
    patColor: "red",
    type: "line",
  },
  {
    name: "BUD7105",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:03:06",
        xf: "2025-06-04T01:05:28",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:50",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "6-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:05:28",
        xf: "2025-06-04T01:07:36",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:50",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "6-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:07:36",
        xf: "2025-06-04T01:07:52",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:50",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "6-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:07:52",
        xf: "2025-06-04T01:10:54",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:50",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "6-3",
        color: "red",
      },
    ],
    id: "6",
    patColor: "red",
    type: "line",
  },
  {
    name: "BUP0106",
    otherName: null,
    color: "#000000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T07:00:26",
        xf: "2025-06-04T07:09:27",
        yi: 45.304,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-0",
        color: "red",
      },
      {
        xi: "2025-06-04T07:09:27",
        xf: "2025-06-04T07:10:27",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-1",
        color: "red",
      },
      {
        xi: "2025-06-04T07:10:27",
        xf: "2025-06-04T07:30:05",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-2",
        color: "red",
      },
      {
        xi: "2025-06-04T07:30:05",
        xf: "2025-06-04T07:34:18",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-3",
        color: "red",
      },
      {
        xi: "2025-06-04T07:34:18",
        xf: "2025-06-04T07:43:52",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-4",
        color: "red",
      },
      {
        xi: "2025-06-04T07:43:52",
        xf: "2025-06-04T07:56:06",
        yi: 29.882,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-5",
        color: "red",
      },
      {
        xi: "2025-06-04T07:56:06",
        xf: "2025-06-04T07:59:39",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-6",
        color: "red",
      },
      {
        xi: "2025-06-04T07:59:39",
        xf: "2025-06-04T08:11:16",
        yi: 29.287,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-7",
        color: "red",
      },
      {
        xi: "2025-06-04T08:11:16",
        xf: "2025-06-04T08:11:31",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-8",
        color: "red",
      },
      {
        xi: "2025-06-04T08:11:31",
        xf: "2025-06-04T08:11:56",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-9",
        color: "red",
      },
      {
        xi: "2025-06-04T08:11:56",
        xf: "2025-06-04T08:14:54",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "7-10",
        color: "red",
      },
    ],
    id: "7",
    patColor: "red",
    type: "line",
  },
  {
    name: "CNY0107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T04:00:00",
        xf: "2025-06-04T04:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-0",
        color: "red",
      },
      {
        xi: "2025-06-04T04:09:22",
        xf: "2025-06-04T04:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-1",
        color: "red",
      },
      {
        xi: "2025-06-04T04:15:09",
        xf: "2025-06-04T04:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-2",
        color: "red",
      },
      {
        xi: "2025-06-04T04:15:45",
        xf: "2025-06-04T04:26:30",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-3",
        color: "red",
      },
      {
        xi: "2025-06-04T04:26:30",
        xf: "2025-06-04T04:29:27",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-4",
        color: "red",
      },
      {
        xi: "2025-06-04T04:29:27",
        xf: "2025-06-04T04:30:11",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-5",
        color: "red",
      },
      {
        xi: "2025-06-04T04:30:11",
        xf: "2025-06-04T04:36:06",
        yi: 12.243,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-6",
        color: "red",
      },
      {
        xi: "2025-06-04T04:36:06",
        xf: "2025-06-04T04:38:28",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-7",
        color: "red",
      },
      {
        xi: "2025-06-04T04:38:28",
        xf: "2025-06-04T04:44:59",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-8",
        color: "red",
      },
      {
        xi: "2025-06-04T04:44:59",
        xf: "2025-06-04T04:51:53",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-9",
        color: "red",
      },
      {
        xi: "2025-06-04T04:51:53",
        xf: "2025-06-04T04:53:45",
        yi: 22.642,
        yf: 26.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-10",
        color: "red",
      },
      {
        xi: "2025-06-04T04:53:45",
        xf: "2025-06-04T05:00:18",
        yi: 26.642,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:00",
          },
          {
            label: "SB",
            value: "IPG-1",
          },
          {
            label: "Destino",
            value: "IPG",
          },
        ],
        id: "8-11",
        color: "red",
      },
    ],
    id: "8",
    patColor: "red",
    type: "line",
  },
  {
    name: "CUN0105",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:46:31",
        xf: "2025-06-04T01:55:32",
        yi: 45.304,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:55:32",
        xf: "2025-06-04T01:56:32",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:56:32",
        xf: "2025-06-04T02:16:10",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:16:10",
        xf: "2025-06-04T02:21:47",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:21:47",
        xf: "2025-06-04T02:31:58",
        yi: 35.997,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-4",
        color: "red",
      },
      {
        xi: "2025-06-04T02:31:58",
        xf: "2025-06-04T02:42:56",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-5",
        color: "red",
      },
      {
        xi: "2025-06-04T02:42:56",
        xf: "2025-06-04T02:46:29",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-6",
        color: "red",
      },
      {
        xi: "2025-06-04T02:46:29",
        xf: "2025-06-04T02:46:44",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-7",
        color: "red",
      },
      {
        xi: "2025-06-04T02:46:44",
        xf: "2025-06-04T02:47:09",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-8",
        color: "red",
      },
      {
        xi: "2025-06-04T02:47:09",
        xf: "2025-06-04T02:50:09",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-9",
        color: "red",
      },
      {
        xi: "2025-06-04T02:50:09",
        xf: "2025-06-04T02:52:09",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-10",
        color: "red",
      },
      {
        xi: "2025-06-04T02:52:09",
        xf: "2025-06-04T02:59:09",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-11",
        color: "red",
      },
      {
        xi: "2025-06-04T02:59:09",
        xf: "2025-06-04T03:04:45",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-12",
        color: "red",
      },
      {
        xi: "2025-06-04T03:04:45",
        xf: "2025-06-04T03:07:07",
        yi: 16.935,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-13",
        color: "red",
      },
      {
        xi: "2025-06-04T03:07:07",
        xf: "2025-06-04T03:12:46",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-14",
        color: "red",
      },
      {
        xi: "2025-06-04T03:12:46",
        xf: "2025-06-04T03:13:27",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-15",
        color: "red",
      },
      {
        xi: "2025-06-04T03:13:27",
        xf: "2025-06-04T03:18:08",
        yi: 12.057,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-16",
        color: "red",
      },
      {
        xi: "2025-06-04T03:18:08",
        xf: "2025-06-04T03:25:28",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-17",
        color: "red",
      },
      {
        xi: "2025-06-04T03:25:28",
        xf: "2025-06-04T03:32:24",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-18",
        color: "red",
      },
      {
        xi: "2025-06-04T03:32:24",
        xf: "2025-06-04T03:44:50",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-19",
        color: "red",
      },
      {
        xi: "2025-06-04T03:44:50",
        xf: "2025-06-04T03:50:17",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-20",
        color: "red",
      },
      {
        xi: "2025-06-04T03:50:17",
        xf: "2025-06-04T03:57:52",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 00:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "9-21",
        color: "red",
      },
    ],
    id: "9",
    patColor: "red",
    type: "line",
  },
  {
    name: "CYU0105",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:32:38",
        xf: "2025-06-04T03:35:25",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:35:25",
        xf: "2025-06-04T03:35:52",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:35:52",
        xf: "2025-06-04T03:36:16",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:36:16",
        xf: "2025-06-04T03:41:28",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:41:28",
        xf: "2025-06-04T04:26:10",
        yi: 29.882,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-4",
        color: "red",
      },
      {
        xi: "2025-06-04T04:26:10",
        xf: "2025-06-04T04:45:28",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-5",
        color: "red",
      },
      {
        xi: "2025-06-04T04:45:28",
        xf: "2025-06-04T04:51:41",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-6",
        color: "red",
      },
      {
        xi: "2025-06-04T04:51:41",
        xf: "2025-06-04T05:11:19",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-7",
        color: "red",
      },
      {
        xi: "2025-06-04T05:11:19",
        xf: "2025-06-04T05:18:23",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-8",
        color: "red",
      },
      {
        xi: "2025-06-04T05:18:23",
        xf: "2025-06-04T05:48:23",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "10-9",
        color: "red",
      },
    ],
    id: "10",
    patColor: "red",
    type: "line",
  },
  {
    name: "HDN9104",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:25:21",
        xf: "2025-06-04T09:33:03",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:33:03",
        xf: "2025-06-04T09:37:39",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:37:39",
        xf: "2025-06-04T09:38:13",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:38:13",
        xf: "2025-06-04T09:44:26",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:44:26",
        xf: "2025-06-04T09:50:23",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:50:23",
        xf: "2025-06-04T10:00:56",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:00:56",
        xf: "2025-06-04T10:04:30",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:04:30",
        xf: "2025-06-04T10:11:53",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:11:53",
        xf: "2025-06-04T10:31:53",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "11-8",
        color: "red",
      },
    ],
    id: "11",
    patColor: "red",
    type: "line",
  },
  {
    name: "HDN9106",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T00:25:20",
        xf: "2025-06-05T00:33:02",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-0",
        color: "red",
      },
      {
        xi: "2025-06-05T00:33:02",
        xf: "2025-06-05T00:37:38",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-1",
        color: "red",
      },
      {
        xi: "2025-06-05T00:37:38",
        xf: "2025-06-05T00:38:12",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-2",
        color: "red",
      },
      {
        xi: "2025-06-05T00:38:12",
        xf: "2025-06-05T00:44:25",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-3",
        color: "red",
      },
      {
        xi: "2025-06-05T00:44:25",
        xf: "2025-06-05T00:50:22",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-4",
        color: "red",
      },
      {
        xi: "2025-06-05T00:50:22",
        xf: "2025-06-05T01:00:55",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-5",
        color: "red",
      },
      {
        xi: "2025-06-05T01:00:55",
        xf: "2025-06-05T01:04:29",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-6",
        color: "red",
      },
      {
        xi: "2025-06-05T01:04:29",
        xf: "2025-06-05T01:11:52",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-7",
        color: "red",
      },
      {
        xi: "2025-06-05T01:11:52",
        xf: "2025-06-05T01:31:52",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 00:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "12-8",
        color: "red",
      },
    ],
    id: "12",
    patColor: "red",
    type: "line",
  },
  {
    name: "HDN9108",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T23:13:05",
        xf: "2025-06-05T23:22:38",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-0",
        color: "red",
      },
      {
        xi: "2025-06-05T23:22:38",
        xf: "2025-06-05T23:28:17",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-1",
        color: "red",
      },
      {
        xi: "2025-06-05T23:28:17",
        xf: "2025-06-05T23:28:58",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-2",
        color: "red",
      },
      {
        xi: "2025-06-05T23:28:58",
        xf: "2025-06-05T23:36:09",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-3",
        color: "red",
      },
      {
        xi: "2025-06-05T23:36:09",
        xf: "2025-06-05T23:42:56",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-4",
        color: "red",
      },
      {
        xi: "2025-06-05T23:42:56",
        xf: "2025-06-05T23:55:13",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-5",
        color: "red",
      },
      {
        xi: "2025-06-05T23:55:13",
        xf: "2025-06-06T00:00:40",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 23:13",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "13-6",
        color: "red",
      },
    ],
    id: "13",
    patColor: "red",
    type: "line",
  },
  {
    name: "HND9107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:30:31",
        xf: "2025-06-04T03:39:53",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:39:53",
        xf: "2025-06-04T03:45:37",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:45:37",
        xf: "2025-06-04T03:46:13",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:46:13",
        xf: "2025-06-04T03:55:56",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:55:56",
        xf: "2025-06-04T03:58:31",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:58:31",
        xf: "2025-06-04T03:59:15",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:59:15",
        xf: "2025-06-04T04:05:09",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-6",
        color: "red",
      },
      {
        xi: "2025-06-04T04:05:09",
        xf: "2025-06-04T04:12:19",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "14-7",
        color: "red",
      },
    ],
    id: "14",
    patColor: "red",
    type: "line",
  },
  {
    name: "HND9109",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T02:00:00",
        xf: "2025-06-05T02:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-0",
        color: "red",
      },
      {
        xi: "2025-06-05T02:09:22",
        xf: "2025-06-05T02:15:06",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-1",
        color: "red",
      },
      {
        xi: "2025-06-05T02:15:06",
        xf: "2025-06-05T02:15:42",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-2",
        color: "red",
      },
      {
        xi: "2025-06-05T02:15:42",
        xf: "2025-06-05T02:25:25",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-3",
        color: "red",
      },
      {
        xi: "2025-06-05T02:25:25",
        xf: "2025-06-05T02:28:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-4",
        color: "red",
      },
      {
        xi: "2025-06-05T02:28:00",
        xf: "2025-06-05T02:28:44",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-5",
        color: "red",
      },
      {
        xi: "2025-06-05T02:28:44",
        xf: "2025-06-05T02:34:38",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-6",
        color: "red",
      },
      {
        xi: "2025-06-05T02:34:38",
        xf: "2025-06-05T02:41:48",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "15-7",
        color: "red",
      },
    ],
    id: "15",
    patColor: "red",
    type: "line",
  },

  {
    name: "HPU0106",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T17:35:51",
        xf: "2025-06-04T17:37:18",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-0",
        color: "red",
      },
      {
        xi: "2025-06-04T17:37:18",
        xf: "2025-06-04T17:37:45",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-1",
        color: "red",
      },
      {
        xi: "2025-06-04T17:37:45",
        xf: "2025-06-04T17:39:57",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-2",
        color: "red",
      },
      {
        xi: "2025-06-04T17:39:57",
        xf: "2025-06-04T17:41:24",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-3",
        color: "red",
      },
      {
        xi: "2025-06-04T17:41:24",
        xf: "2025-06-04T17:51:10",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-4",
        color: "red",
      },
      {
        xi: "2025-06-04T17:51:10",
        xf: "2025-06-04T17:54:37",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "17-5",
        color: "red",
      },
    ],
    id: "17",
    patColor: "red",
    type: "line",
  },
  {
    name: "HPU0108",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T14:16:17",
        xf: "2025-06-04T14:18:08",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-0",
        color: "red",
      },
      {
        xi: "2025-06-04T14:18:08",
        xf: "2025-06-04T14:18:35",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-1",
        color: "red",
      },
      {
        xi: "2025-06-04T14:18:35",
        xf: "2025-06-04T14:20:38",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:20:38",
        xf: "2025-06-04T14:22:15",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:22:15",
        xf: "2025-06-04T14:39:21",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-4",
        color: "red",
      },
      {
        xi: "2025-06-04T14:39:21",
        xf: "2025-06-04T14:43:08",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "18-5",
        color: "red",
      },
    ],
    id: "18",
    patColor: "red",
    type: "line",
  },
  {
    name: "HPU0110",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T14:16:17",
        xf: "2025-06-05T14:18:08",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-0",
        color: "red",
      },
      {
        xi: "2025-06-05T14:18:08",
        xf: "2025-06-05T14:18:35",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-1",
        color: "red",
      },
      {
        xi: "2025-06-05T14:18:35",
        xf: "2025-06-05T14:20:38",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-2",
        color: "red",
      },
      {
        xi: "2025-06-05T14:20:38",
        xf: "2025-06-05T14:22:15",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-3",
        color: "red",
      },
      {
        xi: "2025-06-05T14:22:15",
        xf: "2025-06-05T14:39:21",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-4",
        color: "red",
      },
      {
        xi: "2025-06-05T14:39:21",
        xf: "2025-06-05T14:43:08",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 14:16",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "19-5",
        color: "red",
      },
    ],
    id: "19",
    patColor: "red",
    type: "line",
  },
  {
    name: "HPU1106",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T04:10:53",
        xf: "2025-06-04T04:12:57",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-0",
        color: "red",
      },
      {
        xi: "2025-06-04T04:12:57",
        xf: "2025-06-04T04:13:24",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-1",
        color: "red",
      },
      {
        xi: "2025-06-04T04:13:24",
        xf: "2025-06-04T04:16:01",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-2",
        color: "red",
      },
      {
        xi: "2025-06-04T04:16:01",
        xf: "2025-06-04T04:17:27",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-3",
        color: "red",
      },
      {
        xi: "2025-06-04T04:17:27",
        xf: "2025-06-04T04:27:53",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-4",
        color: "red",
      },
      {
        xi: "2025-06-04T04:27:53",
        xf: "2025-06-04T04:31:51",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "20-5",
        color: "red",
      },
    ],
    id: "20",
    patColor: "red",
    type: "line",
  },
  {
    name: "HPU1108",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T02:16:17",
        xf: "2025-06-05T02:18:08",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-0",
        color: "red",
      },
      {
        xi: "2025-06-05T02:18:08",
        xf: "2025-06-05T02:18:35",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-1",
        color: "red",
      },
      {
        xi: "2025-06-05T02:18:35",
        xf: "2025-06-05T02:20:38",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-2",
        color: "red",
      },
      {
        xi: "2025-06-05T02:20:38",
        xf: "2025-06-05T02:22:15",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-3",
        color: "red",
      },
      {
        xi: "2025-06-05T02:22:15",
        xf: "2025-06-05T02:39:21",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-4",
        color: "red",
      },
      {
        xi: "2025-06-05T02:39:21",
        xf: "2025-06-05T02:43:08",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 02:16",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "21-5",
        color: "red",
      },
    ],
    id: "21",
    patColor: "red",
    type: "line",
  },
  {
    name: "HUP0105",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T16:15:40",
        xf: "2025-06-04T16:17:39",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-0",
        color: "red",
      },
      {
        xi: "2025-06-04T16:17:39",
        xf: "2025-06-04T16:26:17",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-1",
        color: "red",
      },
      {
        xi: "2025-06-04T16:26:17",
        xf: "2025-06-04T16:28:22",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-2",
        color: "red",
      },
      {
        xi: "2025-06-04T16:28:22",
        xf: "2025-06-04T16:29:54",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-3",
        color: "red",
      },
      {
        xi: "2025-06-04T16:29:54",
        xf: "2025-06-04T16:30:19",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-4",
        color: "red",
      },
      {
        xi: "2025-06-04T16:30:19",
        xf: "2025-06-04T16:33:12",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "22-5",
        color: "red",
      },
    ],
    id: "22",
    patColor: "red",
    type: "line",
  },
  {
    name: "HUP0107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T02:02:38",
        xf: "2025-06-04T02:04:37",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-0",
        color: "red",
      },
      {
        xi: "2025-06-04T02:04:37",
        xf: "2025-06-04T02:13:15",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-1",
        color: "red",
      },
      {
        xi: "2025-06-04T02:13:15",
        xf: "2025-06-04T02:15:20",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:15:20",
        xf: "2025-06-04T02:16:52",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:16:52",
        xf: "2025-06-04T02:17:17",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-4",
        color: "red",
      },
      {
        xi: "2025-06-04T02:17:17",
        xf: "2025-06-04T02:20:10",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "23-5",
        color: "red",
      },
    ],
    id: "23",
    patColor: "red",
    type: "line",
  },
  {
    name: "HUP0109",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T04:15:00",
        xf: "2025-06-05T04:16:59",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-0",
        color: "red",
      },
      {
        xi: "2025-06-05T04:16:59",
        xf: "2025-06-05T04:25:37",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-1",
        color: "red",
      },
      {
        xi: "2025-06-05T04:25:37",
        xf: "2025-06-05T04:27:42",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-2",
        color: "red",
      },
      {
        xi: "2025-06-05T04:27:42",
        xf: "2025-06-05T04:29:14",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-3",
        color: "red",
      },
      {
        xi: "2025-06-05T04:29:14",
        xf: "2025-06-05T04:29:39",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-4",
        color: "red",
      },
      {
        xi: "2025-06-05T04:29:39",
        xf: "2025-06-05T04:32:32",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 04:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 04:15",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "24-5",
        color: "red",
      },
    ],
    id: "24",
    patColor: "red",
    type: "line",
  },
  {
    name: "HUP1107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T06:30:00",
        xf: "2025-06-04T06:31:59",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-0",
        color: "red",
      },
      {
        xi: "2025-06-04T06:31:59",
        xf: "2025-06-04T06:40:37",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-1",
        color: "red",
      },
      {
        xi: "2025-06-04T06:40:37",
        xf: "2025-06-04T06:42:42",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-2",
        color: "red",
      },
      {
        xi: "2025-06-04T06:42:42",
        xf: "2025-06-04T06:44:14",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-3",
        color: "red",
      },
      {
        xi: "2025-06-04T06:44:14",
        xf: "2025-06-04T06:44:39",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-4",
        color: "red",
      },
      {
        xi: "2025-06-04T06:44:39",
        xf: "2025-06-04T06:47:32",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "25-5",
        color: "red",
      },
    ],
    id: "25",
    patColor: "red",
    type: "line",
  },
  {
    name: "HUP1109",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T16:15:00",
        xf: "2025-06-05T16:16:59",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-0",
        color: "red",
      },
      {
        xi: "2025-06-05T16:16:59",
        xf: "2025-06-05T16:25:37",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-1",
        color: "red",
      },
      {
        xi: "2025-06-05T16:25:37",
        xf: "2025-06-05T16:27:42",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-2",
        color: "red",
      },
      {
        xi: "2025-06-05T16:27:42",
        xf: "2025-06-05T16:29:14",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-3",
        color: "red",
      },
      {
        xi: "2025-06-05T16:29:14",
        xf: "2025-06-05T16:29:39",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-4",
        color: "red",
      },
      {
        xi: "2025-06-05T16:29:39",
        xf: "2025-06-05T16:32:32",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 16:15",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 16:15",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "26-5",
        color: "red",
      },
    ],
    id: "26",
    patColor: "red",
    type: "line",
  },
  {
    name: "III2107",
    otherName: "C63",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T16:00:00",
        xf: "2025-06-04T16:05:37",
        yi: 20.86,
        yf: 19.36,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "IFA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-0",
        color: "red",
      },
      {
        xi: "2025-06-04T16:05:37",
        xf: "2025-06-04T16:06:12",
        yi: 19.36,
        yf: 19.204,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "IAA-IFA-2-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-1",
        color: "red",
      },
      {
        xi: "2025-06-04T16:06:12",
        xf: "2025-06-04T16:08:04",
        yi: 19.204,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "IAA-IFA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-2",
        color: "red",
      },
      {
        xi: "2025-06-04T16:08:04",
        xf: "2025-06-04T16:13:48",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "IAA-7",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-3",
        color: "red",
      },
      {
        xi: "2025-06-04T16:13:48",
        xf: "2025-06-04T16:14:15",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-4",
        color: "red",
      },
      {
        xi: "2025-06-04T16:14:15",
        xf: "2025-06-04T16:19:20",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 16:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "27-5",
        color: "red",
      },
    ],
    id: "27",
    patColor: "red",
    type: "line",
  },
  {
    name: "III5107",
    otherName: "G100",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T19:21:01",
        xf: "2025-06-04T19:30:34",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-0",
        color: "red",
      },
      {
        xi: "2025-06-04T19:30:34",
        xf: "2025-06-04T19:31:38",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-1",
        color: "red",
      },
      {
        xi: "2025-06-04T19:31:38",
        xf: "2025-06-04T19:38:20",
        yi: 16.935,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-2",
        color: "red",
      },
      {
        xi: "2025-06-04T19:38:20",
        xf: "2025-06-04T19:40:20",
        yi: 18.704,
        yf: 19.204,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "IAA-IFA-2",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-3",
        color: "red",
      },
      {
        xi: "2025-06-04T19:40:20",
        xf: "2025-06-04T19:40:57",
        yi: 19.204,
        yf: 19.36,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "IAA-IFA-2-1",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-4",
        color: "red",
      },
      {
        xi: "2025-06-04T19:40:57",
        xf: "2025-06-04T19:46:13",
        yi: 19.36,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:21",
          },
          {
            label: "SB",
            value: "IFA-1",
          },
          {
            label: "Destino",
            value: "IFA",
          },
        ],
        id: "28-5",
        color: "red",
      },
    ],
    id: "28",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2108",
    otherName: "I30",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T07:39:58",
        xf: "2025-06-04T07:49:31",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-0",
        color: "red",
      },
      {
        xi: "2025-06-04T07:49:31",
        xf: "2025-06-04T07:55:10",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-1",
        color: "red",
      },
      {
        xi: "2025-06-04T07:55:10",
        xf: "2025-06-04T07:55:51",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-2",
        color: "red",
      },
      {
        xi: "2025-06-04T07:55:51",
        xf: "2025-06-04T08:02:38",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-3",
        color: "red",
      },
      {
        xi: "2025-06-04T08:02:38",
        xf: "2025-06-04T08:07:46",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-4",
        color: "red",
      },
      {
        xi: "2025-06-04T08:07:46",
        xf: "2025-06-04T08:18:23",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-5",
        color: "red",
      },
      {
        xi: "2025-06-04T08:18:23",
        xf: "2025-06-04T08:24:10",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-6",
        color: "red",
      },
      {
        xi: "2025-06-04T08:24:10",
        xf: "2025-06-04T08:31:25",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:25",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "29-7",
        color: "red",
      },
    ],
    id: "29",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2208",
    otherName: "X84",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T10:00:00",
        xf: "2025-06-04T10:09:33",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-0",
        color: "red",
      },
      {
        xi: "2025-06-04T10:09:33",
        xf: "2025-06-04T10:15:12",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-1",
        color: "red",
      },
      {
        xi: "2025-06-04T10:15:12",
        xf: "2025-06-04T10:15:53",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-2",
        color: "red",
      },
      {
        xi: "2025-06-04T10:15:53",
        xf: "2025-06-04T10:23:13",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-3",
        color: "red",
      },
      {
        xi: "2025-06-04T10:23:13",
        xf: "2025-06-04T10:30:09",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-4",
        color: "red",
      },
      {
        xi: "2025-06-04T10:30:09",
        xf: "2025-06-04T10:42:35",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:42:35",
        xf: "2025-06-04T10:48:02",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:48:02",
        xf: "2025-06-04T10:55:37",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "30-7",
        color: "red",
      },
    ],
    id: "30",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2308",
    otherName: "I14",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T12:41:08",
        xf: "2025-06-04T12:50:41",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-0",
        color: "red",
      },
      {
        xi: "2025-06-04T12:50:41",
        xf: "2025-06-04T12:56:20",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-1",
        color: "red",
      },
      {
        xi: "2025-06-04T12:56:20",
        xf: "2025-06-04T12:57:01",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-2",
        color: "red",
      },
      {
        xi: "2025-06-04T12:57:01",
        xf: "2025-06-04T13:04:21",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-3",
        color: "red",
      },
      {
        xi: "2025-06-04T13:04:21",
        xf: "2025-06-04T13:07:50",
        yi: 9.935,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-4",
        color: "red",
      },
      {
        xi: "2025-06-04T13:07:50",
        xf: "2025-06-04T13:14:46",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-5",
        color: "red",
      },
      {
        xi: "2025-06-04T13:14:46",
        xf: "2025-06-04T13:27:12",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-6",
        color: "red",
      },
      {
        xi: "2025-06-04T13:27:12",
        xf: "2025-06-04T13:32:39",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-7",
        color: "red",
      },
      {
        xi: "2025-06-04T13:32:39",
        xf: "2025-06-04T13:40:14",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:41",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "31-8",
        color: "red",
      },
    ],
    id: "31",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2408",
    otherName: "R84",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T16:25:53",
        xf: "2025-06-04T16:35:26",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-0",
        color: "red",
      },
      {
        xi: "2025-06-04T16:35:26",
        xf: "2025-06-04T16:41:05",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-1",
        color: "red",
      },
      {
        xi: "2025-06-04T16:41:05",
        xf: "2025-06-04T16:41:46",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-2",
        color: "red",
      },
      {
        xi: "2025-06-04T16:41:46",
        xf: "2025-06-04T16:49:06",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-3",
        color: "red",
      },
      {
        xi: "2025-06-04T16:49:06",
        xf: "2025-06-04T16:56:02",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-4",
        color: "red",
      },
      {
        xi: "2025-06-04T16:56:02",
        xf: "2025-06-04T17:08:28",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-5",
        color: "red",
      },
      {
        xi: "2025-06-04T17:08:28",
        xf: "2025-06-04T17:13:55",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-6",
        color: "red",
      },
      {
        xi: "2025-06-04T17:13:55",
        xf: "2025-06-04T17:21:30",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 16:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "32-7",
        color: "red",
      },
    ],
    id: "32",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2508",
    otherName: "I32",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T18:25:24",
        xf: "2025-06-04T18:34:57",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-0",
        color: "red",
      },
      {
        xi: "2025-06-04T18:34:57",
        xf: "2025-06-04T18:40:36",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-1",
        color: "red",
      },
      {
        xi: "2025-06-04T18:40:36",
        xf: "2025-06-04T18:41:17",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-2",
        color: "red",
      },
      {
        xi: "2025-06-04T18:41:17",
        xf: "2025-06-04T18:48:37",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-3",
        color: "red",
      },
      {
        xi: "2025-06-04T18:48:37",
        xf: "2025-06-04T18:55:33",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-4",
        color: "red",
      },
      {
        xi: "2025-06-04T18:55:33",
        xf: "2025-06-04T19:07:59",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-5",
        color: "red",
      },
      {
        xi: "2025-06-04T19:07:59",
        xf: "2025-06-04T19:13:26",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-6",
        color: "red",
      },
      {
        xi: "2025-06-04T19:13:26",
        xf: "2025-06-04T19:21:01",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "33-7",
        color: "red",
      },
    ],
    id: "33",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2608",
    otherName: "X34",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T19:46:51",
        xf: "2025-06-04T19:56:24",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-0",
        color: "red",
      },
      {
        xi: "2025-06-04T19:56:24",
        xf: "2025-06-04T20:02:03",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-1",
        color: "red",
      },
      {
        xi: "2025-06-04T20:02:03",
        xf: "2025-06-04T20:02:44",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-2",
        color: "red",
      },
      {
        xi: "2025-06-04T20:02:44",
        xf: "2025-06-04T20:10:04",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-3",
        color: "red",
      },
      {
        xi: "2025-06-04T20:10:04",
        xf: "2025-06-04T20:17:00",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-4",
        color: "red",
      },
      {
        xi: "2025-06-04T20:17:00",
        xf: "2025-06-04T20:29:26",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-5",
        color: "red",
      },
      {
        xi: "2025-06-04T20:29:26",
        xf: "2025-06-04T20:34:53",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-6",
        color: "red",
      },
      {
        xi: "2025-06-04T20:34:53",
        xf: "2025-06-04T20:42:28",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:46",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "34-7",
        color: "red",
      },
    ],
    id: "34",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2706",
    otherName: "G72",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T02:22:14",
        xf: "2025-06-04T02:29:52",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-0",
        color: "red",
      },
      {
        xi: "2025-06-04T02:29:52",
        xf: "2025-06-04T02:34:28",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-1",
        color: "red",
      },
      {
        xi: "2025-06-04T02:34:28",
        xf: "2025-06-04T02:35:02",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:35:02",
        xf: "2025-06-04T02:43:31",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:43:31",
        xf: "2025-06-04T02:51:23",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-4",
        color: "red",
      },
      {
        xi: "2025-06-04T02:51:23",
        xf: "2025-06-04T03:04:19",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:04:19",
        xf: "2025-06-04T03:07:53",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:07:53",
        xf: "2025-06-04T03:13:57",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:50",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ISN-4",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "35-7",
        color: "red",
      },
    ],
    id: "35",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIN2906",
    otherName: "Y56",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T05:25:47",
        xf: "2025-06-04T05:33:25",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-0",
        color: "red",
      },
      {
        xi: "2025-06-04T05:33:25",
        xf: "2025-06-04T05:38:01",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-1",
        color: "red",
      },
      {
        xi: "2025-06-04T05:38:01",
        xf: "2025-06-04T05:38:35",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-2",
        color: "red",
      },
      {
        xi: "2025-06-04T05:38:35",
        xf: "2025-06-04T05:47:04",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-3",
        color: "red",
      },
      {
        xi: "2025-06-04T05:47:04",
        xf: "2025-06-04T05:54:56",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-4",
        color: "red",
      },
      {
        xi: "2025-06-04T05:54:56",
        xf: "2025-06-04T06:07:55",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-5",
        color: "red",
      },
      {
        xi: "2025-06-04T06:07:55",
        xf: "2025-06-04T06:11:29",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-6",
        color: "red",
      },
      {
        xi: "2025-06-04T06:11:29",
        xf: "2025-06-04T06:21:20",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "36-7",
        color: "red",
      },
    ],
    id: "36",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2108",
    otherName: "X54",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:00:00",
        xf: "2025-06-04T09:09:33",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:09:33",
        xf: "2025-06-04T09:10:37",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:10:37",
        xf: "2025-06-04T09:17:28",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:17:28",
        xf: "2025-06-04T09:23:45",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:23:45",
        xf: "2025-06-04T09:25:45",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:25:45",
        xf: "2025-06-04T09:28:45",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-5",
        color: "red",
      },
      {
        xi: "2025-06-04T09:28:45",
        xf: "2025-06-04T09:29:06",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-6",
        color: "red",
      },
      {
        xi: "2025-06-04T09:29:06",
        xf: "2025-06-04T09:31:51",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-7",
        color: "red",
      },
      {
        xi: "2025-06-04T09:31:51",
        xf: "2025-06-04T09:33:43",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-8",
        color: "red",
      },
      {
        xi: "2025-06-04T09:33:43",
        xf: "2025-06-04T09:54:07",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-9",
        color: "red",
      },
      {
        xi: "2025-06-04T09:54:07",
        xf: "2025-06-04T10:00:16",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-10",
        color: "red",
      },
      {
        xi: "2025-06-04T10:00:16",
        xf: "2025-06-04T13:59:43",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-11",
        color: "red",
      },
      {
        xi: "2025-06-04T13:59:43",
        xf: "2025-06-04T14:19:21",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-12",
        color: "red",
      },
      {
        xi: "2025-06-04T14:19:21",
        xf: "2025-06-04T14:26:25",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-13",
        color: "red",
      },
      {
        xi: "2025-06-04T14:26:25",
        xf: "2025-06-04T14:56:25",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:46",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "37-14",
        color: "red",
      },
    ],
    id: "37",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2208",
    otherName: "Y54",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:30:00",
        xf: "2025-06-04T09:39:33",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:39:33",
        xf: "2025-06-04T09:40:37",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:40:37",
        xf: "2025-06-04T09:47:28",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:47:28",
        xf: "2025-06-04T09:53:45",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:53:45",
        xf: "2025-06-04T09:55:45",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:55:45",
        xf: "2025-06-04T09:58:45",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-5",
        color: "red",
      },
      {
        xi: "2025-06-04T09:58:45",
        xf: "2025-06-04T09:59:06",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-6",
        color: "red",
      },
      {
        xi: "2025-06-04T09:59:06",
        xf: "2025-06-04T10:01:51",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:01:51",
        xf: "2025-06-04T10:03:43",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-8",
        color: "red",
      },
      {
        xi: "2025-06-04T10:03:43",
        xf: "2025-06-04T10:24:07",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-9",
        color: "red",
      },
      {
        xi: "2025-06-04T10:24:07",
        xf: "2025-06-04T10:30:20",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-10",
        color: "red",
      },
      {
        xi: "2025-06-04T10:30:20",
        xf: "2025-06-04T10:49:58",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-11",
        color: "red",
      },
      {
        xi: "2025-06-04T10:49:58",
        xf: "2025-06-04T10:57:02",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-12",
        color: "red",
      },
      {
        xi: "2025-06-04T10:57:02",
        xf: "2025-06-04T11:27:02",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 14:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "38-13",
        color: "red",
      },
    ],
    id: "38",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2308",
    otherName: "X58",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T13:48:20",
        xf: "2025-06-04T13:57:53",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-0",
        color: "red",
      },
      {
        xi: "2025-06-04T13:57:53",
        xf: "2025-06-04T13:58:57",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-1",
        color: "red",
      },
      {
        xi: "2025-06-04T13:58:57",
        xf: "2025-06-04T14:05:48",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:05:48",
        xf: "2025-06-04T14:12:05",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:12:05",
        xf: "2025-06-04T14:32:47",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-4",
        color: "red",
      },
      {
        xi: "2025-06-04T14:32:47",
        xf: "2025-06-04T14:34:47",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-5",
        color: "red",
      },
      {
        xi: "2025-06-04T14:34:47",
        xf: "2025-06-04T14:37:47",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-6",
        color: "red",
      },
      {
        xi: "2025-06-04T14:37:47",
        xf: "2025-06-04T14:38:08",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-7",
        color: "red",
      },
      {
        xi: "2025-06-04T14:38:08",
        xf: "2025-06-04T14:40:53",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-8",
        color: "red",
      },
      {
        xi: "2025-06-04T14:40:53",
        xf: "2025-06-04T14:42:45",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-9",
        color: "red",
      },
      {
        xi: "2025-06-04T14:42:45",
        xf: "2025-06-04T15:03:09",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-10",
        color: "red",
      },
      {
        xi: "2025-06-04T15:03:09",
        xf: "2025-06-04T15:09:22",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-11",
        color: "red",
      },
      {
        xi: "2025-06-04T15:09:22",
        xf: "2025-06-04T15:29:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-12",
        color: "red",
      },
      {
        xi: "2025-06-04T15:29:00",
        xf: "2025-06-04T15:36:04",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-13",
        color: "red",
      },
      {
        xi: "2025-06-04T15:36:04",
        xf: "2025-06-04T16:06:04",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:46",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "39-14",
        color: "red",
      },
    ],
    id: "39",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2408",
    otherName: "Y58",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T14:18:20",
        xf: "2025-06-04T14:27:53",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-0",
        color: "red",
      },
      {
        xi: "2025-06-04T14:27:53",
        xf: "2025-06-04T14:28:57",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-1",
        color: "red",
      },
      {
        xi: "2025-06-04T14:28:57",
        xf: "2025-06-04T14:35:33",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:35:33",
        xf: "2025-06-04T14:41:50",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:41:50",
        xf: "2025-06-04T15:00:18",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-4",
        color: "red",
      },
      {
        xi: "2025-06-04T15:00:18",
        xf: "2025-06-04T15:02:10",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-5",
        color: "red",
      },
      {
        xi: "2025-06-04T15:02:10",
        xf: "2025-06-04T15:04:59",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-6",
        color: "red",
      },
      {
        xi: "2025-06-04T15:04:59",
        xf: "2025-06-04T15:05:24",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-7",
        color: "red",
      },
      {
        xi: "2025-06-04T15:05:24",
        xf: "2025-06-04T15:08:09",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-8",
        color: "red",
      },
      {
        xi: "2025-06-04T15:08:09",
        xf: "2025-06-04T15:10:01",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-9",
        color: "red",
      },
      {
        xi: "2025-06-04T15:10:01",
        xf: "2025-06-04T15:30:25",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-10",
        color: "red",
      },
      {
        xi: "2025-06-04T15:30:25",
        xf: "2025-06-04T15:36:38",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-11",
        color: "red",
      },
      {
        xi: "2025-06-04T15:36:38",
        xf: "2025-06-04T15:56:16",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-12",
        color: "red",
      },
      {
        xi: "2025-06-04T15:56:16",
        xf: "2025-06-04T16:03:20",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-13",
        color: "red",
      },
      {
        xi: "2025-06-04T16:03:20",
        xf: "2025-06-04T16:33:20",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "40-14",
        color: "red",
      },
    ],
    id: "40",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2508",
    otherName: "I34",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T19:56:01",
        xf: "2025-06-04T20:05:34",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-0",
        color: "red",
      },
      {
        xi: "2025-06-04T20:05:34",
        xf: "2025-06-04T20:06:38",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-1",
        color: "red",
      },
      {
        xi: "2025-06-04T20:06:38",
        xf: "2025-06-04T20:13:29",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-2",
        color: "red",
      },
      {
        xi: "2025-06-04T20:13:29",
        xf: "2025-06-04T20:19:46",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-3",
        color: "red",
      },
      {
        xi: "2025-06-04T20:19:46",
        xf: "2025-06-04T20:21:46",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-4",
        color: "red",
      },
      {
        xi: "2025-06-04T20:21:46",
        xf: "2025-06-04T20:24:46",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-5",
        color: "red",
      },
      {
        xi: "2025-06-04T20:24:46",
        xf: "2025-06-04T20:25:07",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-6",
        color: "red",
      },
      {
        xi: "2025-06-04T20:25:07",
        xf: "2025-06-04T20:27:52",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-7",
        color: "red",
      },
      {
        xi: "2025-06-04T20:27:52",
        xf: "2025-06-04T20:29:44",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-8",
        color: "red",
      },
      {
        xi: "2025-06-04T20:29:44",
        xf: "2025-06-04T20:50:08",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-9",
        color: "red",
      },
      {
        xi: "2025-06-04T20:50:08",
        xf: "2025-06-04T20:56:21",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-10",
        color: "red",
      },
      {
        xi: "2025-06-04T20:56:21",
        xf: "2025-06-04T21:15:59",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-11",
        color: "red",
      },
      {
        xi: "2025-06-04T21:15:59",
        xf: "2025-06-04T21:23:03",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-12",
        color: "red",
      },
      {
        xi: "2025-06-04T21:23:03",
        xf: "2025-06-04T21:53:03",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:56",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "41-13",
        color: "red",
      },
    ],
    id: "41",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2606",
    otherName: "X60",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:31:32",
        xf: "2025-06-04T01:36:06",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 16:56",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "42-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:36:06",
        xf: "2025-06-04T02:06:06",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 16:56",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "42-1",
        color: "red",
      },
      {
        xi: "2025-06-04T02:06:06",
        xf: "2025-06-04T02:18:55",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 16:56",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "42-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:18:55",
        xf: "2025-06-04T02:24:03",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 16:56",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "42-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:24:03",
        xf: "2025-06-04T02:54:03",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 16:56",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "42-4",
        color: "red",
      },
    ],
    id: "42",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2706",
    otherName: "G68",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:14:16",
        xf: "2025-06-04T01:21:58",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:21:58",
        xf: "2025-06-04T01:22:49",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:22:49",
        xf: "2025-06-04T01:29:15",
        yi: 16.935,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:29:15",
        xf: "2025-06-04T02:23:49",
        yi: 18.704,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:23:49",
        xf: "2025-06-04T02:28:10",
        yi: 18.704,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-4",
        color: "red",
      },
      {
        xi: "2025-06-04T02:28:10",
        xf: "2025-06-04T03:37:47",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:37:47",
        xf: "2025-06-04T03:39:49",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:39:49",
        xf: "2025-06-04T03:42:53",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-7",
        color: "red",
      },
      {
        xi: "2025-06-04T03:42:53",
        xf: "2025-06-04T03:43:20",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-8",
        color: "red",
      },
      {
        xi: "2025-06-04T03:43:20",
        xf: "2025-06-04T03:46:53",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-9",
        color: "red",
      },
      {
        xi: "2025-06-04T03:46:53",
        xf: "2025-06-04T03:49:07",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-10",
        color: "red",
      },
      {
        xi: "2025-06-04T03:49:07",
        xf: "2025-06-04T04:02:25",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-11",
        color: "red",
      },
      {
        xi: "2025-06-04T04:02:25",
        xf: "2025-06-04T04:06:28",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-12",
        color: "red",
      },
      {
        xi: "2025-06-04T04:06:28",
        xf: "2025-06-04T04:19:20",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-13",
        color: "red",
      },
      {
        xi: "2025-06-04T04:19:20",
        xf: "2025-06-04T04:24:48",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-14",
        color: "red",
      },
      {
        xi: "2025-06-04T04:24:48",
        xf: "2025-06-04T04:54:48",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:30",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "43-15",
        color: "red",
      },
    ],
    id: "43",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2806",
    otherName: "I28",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T05:47:33",
        xf: "2025-06-04T05:55:15",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-0",
        color: "red",
      },
      {
        xi: "2025-06-04T05:55:15",
        xf: "2025-06-04T05:56:06",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-1",
        color: "red",
      },
      {
        xi: "2025-06-04T05:56:06",
        xf: "2025-06-04T06:02:45",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-2",
        color: "red",
      },
      {
        xi: "2025-06-04T06:02:45",
        xf: "2025-06-04T06:07:06",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-3",
        color: "red",
      },
      {
        xi: "2025-06-04T06:07:06",
        xf: "2025-06-04T06:12:50",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-4",
        color: "red",
      },
      {
        xi: "2025-06-04T06:12:50",
        xf: "2025-06-04T06:14:52",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-5",
        color: "red",
      },
      {
        xi: "2025-06-04T06:14:52",
        xf: "2025-06-04T06:17:56",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-6",
        color: "red",
      },
      {
        xi: "2025-06-04T06:17:56",
        xf: "2025-06-04T06:18:23",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-7",
        color: "red",
      },
      {
        xi: "2025-06-04T06:18:23",
        xf: "2025-06-04T06:21:56",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-8",
        color: "red",
      },
      {
        xi: "2025-06-04T06:21:56",
        xf: "2025-06-04T06:24:14",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-9",
        color: "red",
      },
      {
        xi: "2025-06-04T06:24:14",
        xf: "2025-06-04T06:37:21",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-10",
        color: "red",
      },
      {
        xi: "2025-06-04T06:37:21",
        xf: "2025-06-04T06:43:28",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-11",
        color: "red",
      },
      {
        xi: "2025-06-04T06:43:28",
        xf: "2025-06-04T07:35:17",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-12",
        color: "red",
      },
      {
        xi: "2025-06-04T07:35:17",
        xf: "2025-06-04T07:48:06",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-13",
        color: "red",
      },
      {
        xi: "2025-06-04T07:48:06",
        xf: "2025-06-04T07:53:34",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-14",
        color: "red",
      },
      {
        xi: "2025-06-04T07:53:34",
        xf: "2025-06-04T08:23:34",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:40",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:56",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "44-15",
        color: "red",
      },
    ],
    id: "44",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU2906",
    otherName: "X28",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T04:46:00",
        xf: "2025-06-04T04:53:44",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-0",
        color: "red",
      },
      {
        xi: "2025-06-04T04:53:44",
        xf: "2025-06-04T04:54:36",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-1",
        color: "red",
      },
      {
        xi: "2025-06-04T04:54:36",
        xf: "2025-06-04T05:00:22",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-2",
        color: "red",
      },
      {
        xi: "2025-06-04T05:00:22",
        xf: "2025-06-04T05:04:43",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-3",
        color: "red",
      },
      {
        xi: "2025-06-04T05:04:43",
        xf: "2025-06-04T05:30:29",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-4",
        color: "red",
      },
      {
        xi: "2025-06-04T05:30:29",
        xf: "2025-06-04T05:32:31",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-5",
        color: "red",
      },
      {
        xi: "2025-06-04T05:32:31",
        xf: "2025-06-04T05:35:35",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-6",
        color: "red",
      },
      {
        xi: "2025-06-04T05:35:35",
        xf: "2025-06-04T05:36:02",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-7",
        color: "red",
      },
      {
        xi: "2025-06-04T05:36:02",
        xf: "2025-06-04T05:39:29",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-8",
        color: "red",
      },
      {
        xi: "2025-06-04T05:39:29",
        xf: "2025-06-04T05:40:56",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-9",
        color: "red",
      },
      {
        xi: "2025-06-04T05:40:56",
        xf: "2025-06-04T05:52:37",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-10",
        color: "red",
      },
      {
        xi: "2025-06-04T05:52:37",
        xf: "2025-06-04T05:56:40",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-11",
        color: "red",
      },
      {
        xi: "2025-06-04T05:56:40",
        xf: "2025-06-04T06:06:47",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-12",
        color: "red",
      },
      {
        xi: "2025-06-04T06:06:47",
        xf: "2025-06-04T06:19:36",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-13",
        color: "red",
      },
      {
        xi: "2025-06-04T06:19:36",
        xf: "2025-06-04T06:24:49",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-14",
        color: "red",
      },
      {
        xi: "2025-06-04T06:24:49",
        xf: "2025-06-04T06:54:49",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 04:46",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "45-15",
        color: "red",
      },
    ],
    id: "45",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIU8108",
    otherName: "L84",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T10:20:00",
        xf: "2025-06-04T10:29:33",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-0",
        color: "red",
      },
      {
        xi: "2025-06-04T10:29:33",
        xf: "2025-06-04T10:30:37",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-1",
        color: "red",
      },
      {
        xi: "2025-06-04T10:30:37",
        xf: "2025-06-04T10:35:28",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-2",
        color: "red",
      },
      {
        xi: "2025-06-04T10:35:28",
        xf: "2025-06-04T10:39:55",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-3",
        color: "red",
      },
      {
        xi: "2025-06-04T10:39:55",
        xf: "2025-06-04T10:41:51",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-4",
        color: "red",
      },
      {
        xi: "2025-06-04T10:41:51",
        xf: "2025-06-04T10:43:36",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:43:36",
        xf: "2025-06-04T10:43:45",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:43:45",
        xf: "2025-06-04T10:45:17",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:45:17",
        xf: "2025-06-04T10:46:54",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-8",
        color: "red",
      },
      {
        xi: "2025-06-04T10:46:54",
        xf: "2025-06-04T11:03:56",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-9",
        color: "red",
      },
      {
        xi: "2025-06-04T11:03:56",
        xf: "2025-06-04T11:07:37",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:35",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:35",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "46-10",
        color: "red",
      },
    ],
    id: "46",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5108",
    otherName: "Q104",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:21:01",
        xf: "2025-06-04T09:30:34",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:30:34",
        xf: "2025-06-04T09:31:38",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:31:38",
        xf: "2025-06-04T09:38:29",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:38:29",
        xf: "2025-06-04T09:44:46",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:44:46",
        xf: "2025-06-04T09:58:18",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:58:18",
        xf: "2025-06-04T10:00:18",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:00:18",
        xf: "2025-06-04T10:03:18",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:03:18",
        xf: "2025-06-04T10:03:39",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:03:39",
        xf: "2025-06-04T10:06:24",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-8",
        color: "red",
      },
      {
        xi: "2025-06-04T10:06:24",
        xf: "2025-06-04T10:09:42",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 04:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:21",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "47-9",
        color: "red",
      },
    ],
    id: "47",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5206",
    otherName: "Q102",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T15:30:59",
        xf: "2025-06-04T15:33:01",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "48-0",
        color: "red",
      },
      {
        xi: "2025-06-04T15:33:01",
        xf: "2025-06-04T15:36:05",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "48-1",
        color: "red",
      },
      {
        xi: "2025-06-04T15:36:05",
        xf: "2025-06-04T15:36:32",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "48-2",
        color: "red",
      },
      {
        xi: "2025-06-04T15:36:32",
        xf: "2025-06-04T15:40:05",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "48-3",
        color: "red",
      },
      {
        xi: "2025-06-04T15:40:05",
        xf: "2025-06-04T15:44:04",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 00:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "48-4",
        color: "red",
      },
    ],
    id: "48",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5208",
    otherName: "J122",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T10:00:00",
        xf: "2025-06-04T10:09:33",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-0",
        color: "red",
      },
      {
        xi: "2025-06-04T10:09:33",
        xf: "2025-06-04T10:10:37",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-1",
        color: "red",
      },
      {
        xi: "2025-06-04T10:10:37",
        xf: "2025-06-04T10:17:28",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-2",
        color: "red",
      },
      {
        xi: "2025-06-04T10:17:28",
        xf: "2025-06-04T10:23:45",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-3",
        color: "red",
      },
      {
        xi: "2025-06-04T10:23:45",
        xf: "2025-06-04T10:25:45",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-4",
        color: "red",
      },
      {
        xi: "2025-06-04T10:25:45",
        xf: "2025-06-04T10:28:45",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:28:45",
        xf: "2025-06-04T10:29:06",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:29:06",
        xf: "2025-06-04T10:31:51",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:31:51",
        xf: "2025-06-04T10:35:09",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 12:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 12:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "49-8",
        color: "red",
      },
    ],
    id: "49",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5306",
    otherName: "Q100",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:21:13",
        xf: "2025-06-04T03:28:55",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:28:55",
        xf: "2025-06-04T03:29:46",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:29:46",
        xf: "2025-06-04T03:36:19",
        yi: 16.935,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:36:19",
        xf: "2025-06-04T03:46:08",
        yi: 18.704,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:46:08",
        xf: "2025-06-04T03:50:29",
        yi: 18.704,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:50:29",
        xf: "2025-06-04T03:57:31",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:57:31",
        xf: "2025-06-04T03:59:33",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:59:33",
        xf: "2025-06-04T04:02:37",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-7",
        color: "red",
      },
      {
        xi: "2025-06-04T04:02:37",
        xf: "2025-06-04T04:03:04",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-8",
        color: "red",
      },
      {
        xi: "2025-06-04T04:03:04",
        xf: "2025-06-04T04:06:37",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-9",
        color: "red",
      },
      {
        xi: "2025-06-04T04:06:37",
        xf: "2025-06-04T04:10:34",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:01",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:21",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "50-10",
        color: "red",
      },
    ],
    id: "50",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5406",
    otherName: "J654",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T07:21:33",
        xf: "2025-06-04T07:29:15",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-0",
        color: "red",
      },
      {
        xi: "2025-06-04T07:29:15",
        xf: "2025-06-04T07:30:06",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-1",
        color: "red",
      },
      {
        xi: "2025-06-04T07:30:06",
        xf: "2025-06-04T07:36:40",
        yi: 16.935,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-2",
        color: "red",
      },
      {
        xi: "2025-06-04T07:36:40",
        xf: "2025-06-04T17:59:52",
        yi: 18.704,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-3",
        color: "red",
      },
      {
        xi: "2025-06-04T17:59:52",
        xf: "2025-06-04T18:04:13",
        yi: 18.704,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-4",
        color: "red",
      },
      {
        xi: "2025-06-04T18:04:13",
        xf: "2025-06-04T18:06:15",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-5",
        color: "red",
      },
      {
        xi: "2025-06-04T18:06:15",
        xf: "2025-06-04T18:09:19",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-6",
        color: "red",
      },
      {
        xi: "2025-06-04T18:09:19",
        xf: "2025-06-04T18:09:46",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-7",
        color: "red",
      },
      {
        xi: "2025-06-04T18:09:46",
        xf: "2025-06-04T18:13:19",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-8",
        color: "red",
      },
      {
        xi: "2025-06-04T18:13:19",
        xf: "2025-06-04T18:17:18",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:21",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "51-9",
        color: "red",
      },
    ],
    id: "51",
    patColor: "red",
    type: "line",
  },
  {
    name: "IIY5506",
    otherName: "W400",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:00:15",
        xf: "2025-06-04T03:05:52",
        yi: 20.86,
        yf: 19.36,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IFA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:05:52",
        xf: "2025-06-04T03:06:27",
        yi: 19.36,
        yf: 19.204,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-IFA-2-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:06:27",
        xf: "2025-06-04T03:08:19",
        yi: 19.204,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-IFA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:08:19",
        xf: "2025-06-04T03:40:52",
        yi: 16.935,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-IFA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:40:52",
        xf: "2025-06-04T03:45:45",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-7",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:45:45",
        xf: "2025-06-04T03:50:06",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:50:06",
        xf: "2025-06-04T03:52:08",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:52:08",
        xf: "2025-06-04T03:55:12",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-7",
        color: "red",
      },
      {
        xi: "2025-06-04T03:55:12",
        xf: "2025-06-04T03:55:39",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-8",
        color: "red",
      },
      {
        xi: "2025-06-04T03:55:39",
        xf: "2025-06-04T03:58:31",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-9",
        color: "red",
      },
      {
        xi: "2025-06-04T03:58:31",
        xf: "2025-06-04T04:01:46",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "52-10",
        color: "red",
      },
    ],
    id: "52",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2107",
    otherName: "I05",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:30:25",
        xf: "2025-06-04T01:39:47",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:39:47",
        xf: "2025-06-04T01:45:34",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:45:34",
        xf: "2025-06-04T01:46:10",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:46:10",
        xf: "2025-06-04T01:56:07",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-3",
        color: "red",
      },
      {
        xi: "2025-06-04T01:56:07",
        xf: "2025-06-04T01:58:42",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-4",
        color: "red",
      },
      {
        xi: "2025-06-04T01:58:42",
        xf: "2025-06-04T01:59:26",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-5",
        color: "red",
      },
      {
        xi: "2025-06-04T01:59:26",
        xf: "2025-06-04T02:05:21",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-6",
        color: "red",
      },
      {
        xi: "2025-06-04T02:05:21",
        xf: "2025-06-04T02:12:42",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:30",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "53-7",
        color: "red",
      },
    ],
    id: "53",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2207",
    otherName: "I07",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:00:16",
        xf: "2025-06-04T03:09:38",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:09:38",
        xf: "2025-06-04T03:15:25",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:15:25",
        xf: "2025-06-04T03:16:01",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:16:01",
        xf: "2025-06-04T03:25:58",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:25:58",
        xf: "2025-06-04T03:28:33",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:28:33",
        xf: "2025-06-04T03:29:17",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:29:17",
        xf: "2025-06-04T03:35:12",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:35:12",
        xf: "2025-06-04T03:42:33",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "54-7",
        color: "red",
      },
    ],
    id: "54",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2307",
    otherName: "I09",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:00:01",
        xf: "2025-06-04T09:09:23",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:09:23",
        xf: "2025-06-04T09:15:10",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:15:10",
        xf: "2025-06-04T09:15:46",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:15:46",
        xf: "2025-06-04T09:25:43",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:25:43",
        xf: "2025-06-04T09:28:18",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:28:18",
        xf: "2025-06-04T09:29:02",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-5",
        color: "red",
      },
      {
        xi: "2025-06-04T09:29:02",
        xf: "2025-06-04T09:44:16",
        yi: 12.243,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-6",
        color: "red",
      },
      {
        xi: "2025-06-04T09:44:16",
        xf: "2025-06-04T09:50:11",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-7",
        color: "red",
      },
      {
        xi: "2025-06-04T09:50:11",
        xf: "2025-06-04T09:57:32",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 09:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "55-8",
        color: "red",
      },
    ],
    id: "55",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2407",
    otherName: "L39",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T07:01:52",
        xf: "2025-06-04T07:11:14",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-0",
        color: "red",
      },
      {
        xi: "2025-06-04T07:11:14",
        xf: "2025-06-04T07:17:01",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-1",
        color: "red",
      },
      {
        xi: "2025-06-04T07:17:01",
        xf: "2025-06-04T07:17:37",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-2",
        color: "red",
      },
      {
        xi: "2025-06-04T07:17:37",
        xf: "2025-06-04T07:27:34",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-3",
        color: "red",
      },
      {
        xi: "2025-06-04T07:27:34",
        xf: "2025-06-04T07:30:09",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-4",
        color: "red",
      },
      {
        xi: "2025-06-04T07:30:09",
        xf: "2025-06-04T07:30:53",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-5",
        color: "red",
      },
      {
        xi: "2025-06-04T07:30:53",
        xf: "2025-06-04T07:36:48",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-6",
        color: "red",
      },
      {
        xi: "2025-06-04T07:36:48",
        xf: "2025-06-04T07:44:09",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 07:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:01",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "56-7",
        color: "red",
      },
    ],
    id: "56",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2507",
    otherName: "I11",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T11:00:08",
        xf: "2025-06-04T11:09:30",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-0",
        color: "red",
      },
      {
        xi: "2025-06-04T11:09:30",
        xf: "2025-06-04T11:15:17",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-1",
        color: "red",
      },
      {
        xi: "2025-06-04T11:15:17",
        xf: "2025-06-04T11:15:53",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-2",
        color: "red",
      },
      {
        xi: "2025-06-04T11:15:53",
        xf: "2025-06-04T11:25:50",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-3",
        color: "red",
      },
      {
        xi: "2025-06-04T11:25:50",
        xf: "2025-06-04T11:28:25",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-4",
        color: "red",
      },
      {
        xi: "2025-06-04T11:28:25",
        xf: "2025-06-04T11:29:09",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-5",
        color: "red",
      },
      {
        xi: "2025-06-04T11:29:09",
        xf: "2025-06-04T11:35:04",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-6",
        color: "red",
      },
      {
        xi: "2025-06-04T11:35:04",
        xf: "2025-06-04T11:42:25",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 11:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 11:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "57-7",
        color: "red",
      },
    ],
    id: "57",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2607",
    otherName: "I13",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T14:00:18",
        xf: "2025-06-04T14:09:40",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-0",
        color: "red",
      },
      {
        xi: "2025-06-04T14:09:40",
        xf: "2025-06-04T14:15:27",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-1",
        color: "red",
      },
      {
        xi: "2025-06-04T14:15:27",
        xf: "2025-06-04T14:16:03",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:16:03",
        xf: "2025-06-04T14:26:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:26:00",
        xf: "2025-06-04T14:28:35",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-4",
        color: "red",
      },
      {
        xi: "2025-06-04T14:28:35",
        xf: "2025-06-04T14:29:19",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-5",
        color: "red",
      },
      {
        xi: "2025-06-04T14:29:19",
        xf: "2025-06-04T14:35:14",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-6",
        color: "red",
      },
      {
        xi: "2025-06-04T14:35:14",
        xf: "2025-06-04T14:42:35",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "58-7",
        color: "red",
      },
    ],
    id: "58",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI2707",
    otherName: "I15",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T17:00:00",
        xf: "2025-06-04T17:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-0",
        color: "red",
      },
      {
        xi: "2025-06-04T17:09:22",
        xf: "2025-06-04T17:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-1",
        color: "red",
      },
      {
        xi: "2025-06-04T17:15:09",
        xf: "2025-06-04T17:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-2",
        color: "red",
      },
      {
        xi: "2025-06-04T17:15:45",
        xf: "2025-06-04T17:25:42",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-3",
        color: "red",
      },
      {
        xi: "2025-06-04T17:25:42",
        xf: "2025-06-04T17:28:17",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-4",
        color: "red",
      },
      {
        xi: "2025-06-04T17:28:17",
        xf: "2025-06-04T17:29:01",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-5",
        color: "red",
      },
      {
        xi: "2025-06-04T17:29:01",
        xf: "2025-06-04T17:34:56",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-6",
        color: "red",
      },
      {
        xi: "2025-06-04T17:34:56",
        xf: "2025-06-04T17:42:17",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 17:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 17:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "59-7",
        color: "red",
      },
    ],
    id: "59",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI3305",
    otherName: "I39",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:01:50",
        xf: "2025-06-04T01:07:38",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "60-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:07:38",
        xf: "2025-06-04T01:14:16",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "60-1",
        color: "red",
      },
    ],
    id: "60",
    patColor: "red",
    type: "line",
  },
  {
    name: "INI3405",
    otherName: "I85",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T13:00:12",
        xf: "2025-06-04T13:09:34",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-0",
        color: "red",
      },
      {
        xi: "2025-06-04T13:09:34",
        xf: "2025-06-04T13:15:21",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-1",
        color: "red",
      },
      {
        xi: "2025-06-04T13:15:21",
        xf: "2025-06-04T13:15:57",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-2",
        color: "red",
      },
      {
        xi: "2025-06-04T13:15:57",
        xf: "2025-06-04T13:25:54",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-3",
        color: "red",
      },
      {
        xi: "2025-06-04T13:25:54",
        xf: "2025-06-04T13:28:29",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-4",
        color: "red",
      },
      {
        xi: "2025-06-04T13:28:29",
        xf: "2025-06-04T13:29:13",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-5",
        color: "red",
      },
      {
        xi: "2025-06-04T13:29:13",
        xf: "2025-06-04T13:35:08",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-6",
        color: "red",
      },
      {
        xi: "2025-06-04T13:35:08",
        xf: "2025-06-04T13:42:29",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "61-7",
        color: "red",
      },
    ],
    id: "61",
    patColor: "red",
    type: "line",
  },
  {
    name: "IUI2107",
    otherName: "I57",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:30:21",
        xf: "2025-06-04T03:39:22",
        yi: 45.304,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:39:22",
        xf: "2025-06-04T03:40:22",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:40:22",
        xf: "2025-06-04T04:00:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-2",
        color: "red",
      },
      {
        xi: "2025-06-04T04:00:00",
        xf: "2025-06-04T04:05:30",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-3",
        color: "red",
      },
      {
        xi: "2025-06-04T04:05:30",
        xf: "2025-06-04T04:08:02",
        yi: 35.997,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-4",
        color: "red",
      },
      {
        xi: "2025-06-04T04:08:02",
        xf: "2025-06-04T04:19:00",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-5",
        color: "red",
      },
      {
        xi: "2025-06-04T04:19:00",
        xf: "2025-06-04T04:21:22",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-6",
        color: "red",
      },
      {
        xi: "2025-06-04T04:21:22",
        xf: "2025-06-04T04:24:28",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-7",
        color: "red",
      },
      {
        xi: "2025-06-04T04:24:28",
        xf: "2025-06-04T04:24:53",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-8",
        color: "red",
      },
      {
        xi: "2025-06-04T04:24:53",
        xf: "2025-06-04T04:27:53",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-9",
        color: "red",
      },
      {
        xi: "2025-06-04T04:27:53",
        xf: "2025-06-04T04:29:53",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-10",
        color: "red",
      },
      {
        xi: "2025-06-04T04:29:53",
        xf: "2025-06-04T04:36:53",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-11",
        color: "red",
      },
      {
        xi: "2025-06-04T04:36:53",
        xf: "2025-06-04T04:42:29",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-12",
        color: "red",
      },
      {
        xi: "2025-06-04T04:42:29",
        xf: "2025-06-04T04:42:56",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-13",
        color: "red",
      },
      {
        xi: "2025-06-04T04:42:56",
        xf: "2025-06-04T04:48:01",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:30",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:30",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "62-14",
        color: "red",
      },
    ],
    id: "62",
    patColor: "red",
    type: "line",
  },
  {
    name: "IUI2207",
    otherName: "Y95",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T08:31:59",
        xf: "2025-06-04T08:41:00",
        yi: 45.304,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-0",
        color: "red",
      },
      {
        xi: "2025-06-04T08:41:00",
        xf: "2025-06-04T09:08:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:08:00",
        xf: "2025-06-04T09:27:38",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:27:38",
        xf: "2025-06-04T09:33:15",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-3",
        color: "red",
      },
      {
        xi: "2025-06-04T09:33:15",
        xf: "2025-06-04T09:44:13",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-4",
        color: "red",
      },
      {
        xi: "2025-06-04T09:44:13",
        xf: "2025-06-04T09:46:35",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-5",
        color: "red",
      },
      {
        xi: "2025-06-04T09:46:35",
        xf: "2025-06-04T09:49:41",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-6",
        color: "red",
      },
      {
        xi: "2025-06-04T09:49:41",
        xf: "2025-06-04T09:50:06",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-7",
        color: "red",
      },
      {
        xi: "2025-06-04T09:50:06",
        xf: "2025-06-04T09:53:06",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-8",
        color: "red",
      },
      {
        xi: "2025-06-04T09:53:06",
        xf: "2025-06-04T09:55:06",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-9",
        color: "red",
      },
      {
        xi: "2025-06-04T09:55:06",
        xf: "2025-06-04T10:02:06",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-10",
        color: "red",
      },
      {
        xi: "2025-06-04T10:02:06",
        xf: "2025-06-04T10:07:42",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-11",
        color: "red",
      },
      {
        xi: "2025-06-04T10:07:42",
        xf: "2025-06-04T10:08:09",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-12",
        color: "red",
      },
      {
        xi: "2025-06-04T10:08:09",
        xf: "2025-06-04T10:13:14",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 07:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "63-13",
        color: "red",
      },
    ],
    id: "63",
    patColor: "red",
    type: "line",
  },
  {
    name: "IUI2305",
    otherName: "L33",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:10:29",
        xf: "2025-06-04T01:11:21",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 22:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "64-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:11:21",
        xf: "2025-06-04T01:18:07",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 22:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "64-1",
        color: "red",
      },
    ],
    id: "64",
    patColor: "red",
    type: "line",
  },
  {
    name: "IUI2307",
    otherName: "I59",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T10:00:00",
        xf: "2025-06-04T10:09:01",
        yi: 45.304,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-0",
        color: "red",
      },
      {
        xi: "2025-06-04T10:09:01",
        xf: "2025-06-04T10:10:01",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-1",
        color: "red",
      },
      {
        xi: "2025-06-04T10:10:01",
        xf: "2025-06-04T10:29:39",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-2",
        color: "red",
      },
      {
        xi: "2025-06-04T10:29:39",
        xf: "2025-06-04T10:35:16",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-3",
        color: "red",
      },
      {
        xi: "2025-06-04T10:35:16",
        xf: "2025-06-04T10:46:14",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-4",
        color: "red",
      },
      {
        xi: "2025-06-04T10:46:14",
        xf: "2025-06-04T10:48:36",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-5",
        color: "red",
      },
      {
        xi: "2025-06-04T10:48:36",
        xf: "2025-06-04T10:51:42",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-6",
        color: "red",
      },
      {
        xi: "2025-06-04T10:51:42",
        xf: "2025-06-04T10:52:07",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-7",
        color: "red",
      },
      {
        xi: "2025-06-04T10:52:07",
        xf: "2025-06-04T10:55:07",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-8",
        color: "red",
      },
      {
        xi: "2025-06-04T10:55:07",
        xf: "2025-06-04T10:57:07",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-9",
        color: "red",
      },
      {
        xi: "2025-06-04T10:57:07",
        xf: "2025-06-04T11:04:07",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-10",
        color: "red",
      },
      {
        xi: "2025-06-04T11:04:07",
        xf: "2025-06-04T11:09:43",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-11",
        color: "red",
      },
      {
        xi: "2025-06-04T11:09:43",
        xf: "2025-06-04T11:10:10",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-12",
        color: "red",
      },
      {
        xi: "2025-06-04T11:10:10",
        xf: "2025-06-04T11:15:15",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 10:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 10:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "65-13",
        color: "red",
      },
    ],
    id: "65",
    patColor: "red",
    type: "line",
  },
  {
    name: "IUI2407",
    otherName: "L83",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T19:00:00",
        xf: "2025-06-04T19:01:59",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-0",
        color: "red",
      },
      {
        xi: "2025-06-04T19:01:59",
        xf: "2025-06-04T19:12:57",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-1",
        color: "red",
      },
      {
        xi: "2025-06-04T19:12:57",
        xf: "2025-06-04T19:15:19",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-2",
        color: "red",
      },
      {
        xi: "2025-06-04T19:15:19",
        xf: "2025-06-04T19:18:25",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-3",
        color: "red",
      },
      {
        xi: "2025-06-04T19:18:25",
        xf: "2025-06-04T19:18:50",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-4",
        color: "red",
      },
      {
        xi: "2025-06-04T19:18:50",
        xf: "2025-06-04T19:21:50",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-5",
        color: "red",
      },
      {
        xi: "2025-06-04T19:21:50",
        xf: "2025-06-04T19:23:50",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-6",
        color: "red",
      },
      {
        xi: "2025-06-04T19:23:50",
        xf: "2025-06-04T19:30:50",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-7",
        color: "red",
      },
      {
        xi: "2025-06-04T19:30:50",
        xf: "2025-06-04T19:36:26",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-8",
        color: "red",
      },
      {
        xi: "2025-06-04T19:36:26",
        xf: "2025-06-04T19:38:50",
        yi: 16.935,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-9",
        color: "red",
      },
      {
        xi: "2025-06-04T19:38:50",
        xf: "2025-06-04T19:39:17",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-10",
        color: "red",
      },
      {
        xi: "2025-06-04T19:39:17",
        xf: "2025-06-04T19:44:22",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 19:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 19:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "66-11",
        color: "red",
      },
    ],
    id: "66",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI4105",
    otherName: "G305",
    color: "#FF0000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T05:00:02",
        xf: "2025-06-04T05:03:57",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-0",
        color: "red",
      },
      {
        xi: "2025-06-04T05:03:57",
        xf: "2025-06-04T05:06:13",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-1",
        color: "red",
      },
      {
        xi: "2025-06-04T05:06:13",
        xf: "2025-06-04T05:06:38",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-2",
        color: "red",
      },
      {
        xi: "2025-06-04T05:06:38",
        xf: "2025-06-04T05:09:38",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-3",
        color: "red",
      },
      {
        xi: "2025-06-04T05:09:38",
        xf: "2025-06-04T05:11:40",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-4",
        color: "red",
      },
      {
        xi: "2025-06-04T05:11:40",
        xf: "2025-06-04T05:17:54",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-5",
        color: "red",
      },
      {
        xi: "2025-06-04T05:17:54",
        xf: "2025-06-04T05:23:51",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-6",
        color: "red",
      },
      {
        xi: "2025-06-04T05:23:51",
        xf: "2025-06-04T05:24:43",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-7",
        color: "red",
      },
      {
        xi: "2025-06-04T05:24:43",
        xf: "2025-06-04T05:31:01",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "67-8",
        color: "red",
      },
    ],
    id: "67",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5107",
    otherName: "J421",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T06:00:04",
        xf: "2025-06-04T06:02:43",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-0",
        color: "red",
      },
      {
        xi: "2025-06-04T06:02:43",
        xf: "2025-06-04T06:04:15",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-1",
        color: "red",
      },
      {
        xi: "2025-06-04T06:04:15",
        xf: "2025-06-04T06:04:40",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-2",
        color: "red",
      },
      {
        xi: "2025-06-04T06:04:40",
        xf: "2025-06-04T06:07:40",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-3",
        color: "red",
      },
      {
        xi: "2025-06-04T06:07:40",
        xf: "2025-06-04T06:09:40",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-4",
        color: "red",
      },
      {
        xi: "2025-06-04T06:09:40",
        xf: "2025-06-04T06:16:40",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-5",
        color: "red",
      },
      {
        xi: "2025-06-04T06:16:40",
        xf: "2025-06-04T06:22:16",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-6",
        color: "red",
      },
      {
        xi: "2025-06-04T06:22:16",
        xf: "2025-06-04T06:22:43",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-7",
        color: "red",
      },
      {
        xi: "2025-06-04T06:22:43",
        xf: "2025-06-04T06:27:48",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "68-8",
        color: "red",
      },
    ],
    id: "68",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5207",
    otherName: "Q401",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T08:00:19",
        xf: "2025-06-04T08:02:58",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-0",
        color: "red",
      },
      {
        xi: "2025-06-04T08:02:58",
        xf: "2025-06-04T08:15:36",
        yi: 29.287,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-1",
        color: "red",
      },
      {
        xi: "2025-06-04T08:15:36",
        xf: "2025-06-04T08:17:08",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-2",
        color: "red",
      },
      {
        xi: "2025-06-04T08:17:08",
        xf: "2025-06-04T08:17:33",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-3",
        color: "red",
      },
      {
        xi: "2025-06-04T08:17:33",
        xf: "2025-06-04T08:20:33",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-4",
        color: "red",
      },
      {
        xi: "2025-06-04T08:20:33",
        xf: "2025-06-04T08:22:33",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-5",
        color: "red",
      },
      {
        xi: "2025-06-04T08:22:33",
        xf: "2025-06-04T08:29:33",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-6",
        color: "red",
      },
      {
        xi: "2025-06-04T08:29:33",
        xf: "2025-06-04T08:35:09",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-7",
        color: "red",
      },
      {
        xi: "2025-06-04T08:35:09",
        xf: "2025-06-04T08:35:36",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-8",
        color: "red",
      },
      {
        xi: "2025-06-04T08:35:36",
        xf: "2025-06-04T08:40:41",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "69-9",
        color: "red",
      },
    ],
    id: "69",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5307",
    otherName: "Q403",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T13:31:13",
        xf: "2025-06-04T13:33:52",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-0",
        color: "red",
      },
      {
        xi: "2025-06-04T13:33:52",
        xf: "2025-06-04T13:35:24",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-1",
        color: "red",
      },
      {
        xi: "2025-06-04T13:35:24",
        xf: "2025-06-04T13:35:49",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-2",
        color: "red",
      },
      {
        xi: "2025-06-04T13:35:49",
        xf: "2025-06-04T13:38:49",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-3",
        color: "red",
      },
      {
        xi: "2025-06-04T13:38:49",
        xf: "2025-06-04T13:40:49",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-4",
        color: "red",
      },
      {
        xi: "2025-06-04T13:40:49",
        xf: "2025-06-04T13:47:49",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-5",
        color: "red",
      },
      {
        xi: "2025-06-04T13:47:49",
        xf: "2025-06-04T13:53:25",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-6",
        color: "red",
      },
      {
        xi: "2025-06-04T13:53:25",
        xf: "2025-06-04T13:53:52",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-7",
        color: "red",
      },
      {
        xi: "2025-06-04T13:53:52",
        xf: "2025-06-04T13:58:57",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 13:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 13:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "70-8",
        color: "red",
      },
    ],
    id: "70",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5407",
    otherName: "Q405",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T18:00:00",
        xf: "2025-06-04T18:02:39",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-0",
        color: "red",
      },
      {
        xi: "2025-06-04T18:02:39",
        xf: "2025-06-04T18:04:11",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-1",
        color: "red",
      },
      {
        xi: "2025-06-04T18:04:11",
        xf: "2025-06-04T18:04:36",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-2",
        color: "red",
      },
      {
        xi: "2025-06-04T18:04:36",
        xf: "2025-06-04T18:07:36",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-3",
        color: "red",
      },
      {
        xi: "2025-06-04T18:07:36",
        xf: "2025-06-04T18:09:36",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-4",
        color: "red",
      },
      {
        xi: "2025-06-04T18:09:36",
        xf: "2025-06-04T18:16:36",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-5",
        color: "red",
      },
      {
        xi: "2025-06-04T18:16:36",
        xf: "2025-06-04T18:22:12",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-6",
        color: "red",
      },
      {
        xi: "2025-06-04T18:22:12",
        xf: "2025-06-04T18:22:39",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-7",
        color: "red",
      },
      {
        xi: "2025-06-04T18:22:39",
        xf: "2025-06-04T18:27:44",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "71-8",
        color: "red",
      },
    ],
    id: "71",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5507",
    otherName: "Q407",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T23:00:00",
        xf: "2025-06-04T23:02:39",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-0",
        color: "red",
      },
      {
        xi: "2025-06-04T23:02:39",
        xf: "2025-06-04T23:04:11",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-1",
        color: "red",
      },
      {
        xi: "2025-06-04T23:04:11",
        xf: "2025-06-04T23:04:36",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-2",
        color: "red",
      },
      {
        xi: "2025-06-04T23:04:36",
        xf: "2025-06-04T23:07:36",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-3",
        color: "red",
      },
      {
        xi: "2025-06-04T23:07:36",
        xf: "2025-06-04T23:09:36",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-4",
        color: "red",
      },
      {
        xi: "2025-06-04T23:09:36",
        xf: "2025-06-04T23:16:36",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-5",
        color: "red",
      },
      {
        xi: "2025-06-04T23:16:36",
        xf: "2025-06-04T23:22:12",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-6",
        color: "red",
      },
      {
        xi: "2025-06-04T23:22:12",
        xf: "2025-06-04T23:22:39",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-7",
        color: "red",
      },
      {
        xi: "2025-06-04T23:22:39",
        xf: "2025-06-04T23:27:44",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 23:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "72-8",
        color: "red",
      },
    ],
    id: "72",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5605",
    otherName: "J323",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:03:10",
        xf: "2025-06-04T01:04:02",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "73-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:04:02",
        xf: "2025-06-04T01:10:39",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 02:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 02:00",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "73-1",
        color: "red",
      },
    ],
    id: "73",
    patColor: "red",
    type: "line",
  },
  {
    name: "IYI5705",
    otherName: "Q313",
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:14:15",
        xf: "2025-06-04T03:16:54",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:16:54",
        xf: "2025-06-04T03:18:26",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:18:26",
        xf: "2025-06-04T03:26:13",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:26:13",
        xf: "2025-06-04T03:26:38",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:26:38",
        xf: "2025-06-04T03:29:38",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:29:38",
        xf: "2025-06-04T03:31:40",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:31:40",
        xf: "2025-06-04T03:38:22",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-6",
        color: "red",
      },
      {
        xi: "2025-06-04T03:38:22",
        xf: "2025-06-04T03:44:46",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-7",
        color: "red",
      },
      {
        xi: "2025-06-04T03:44:46",
        xf: "2025-06-04T03:45:38",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-8",
        color: "red",
      },
      {
        xi: "2025-06-04T03:45:38",
        xf: "2025-06-04T03:52:14",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "74-9",
        color: "red",
      },
    ],
    id: "74",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDN9102",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:22:14",
        xf: "2025-06-04T01:29:56",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:29:56",
        xf: "2025-06-04T01:34:32",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:34:32",
        xf: "2025-06-04T01:35:06",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:35:06",
        xf: "2025-06-04T01:41:35",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-3",
        color: "red",
      },
      {
        xi: "2025-06-04T01:41:35",
        xf: "2025-06-04T01:47:48",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-4",
        color: "red",
      },
      {
        xi: "2025-06-04T01:47:48",
        xf: "2025-06-04T02:07:48",
        yi: 7.965,
        yf: 7.965,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-5",
        color: "red",
      },
      {
        xi: "2025-06-04T02:07:48",
        xf: "2025-06-04T02:18:34",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-6",
        color: "red",
      },
      {
        xi: "2025-06-04T02:18:34",
        xf: "2025-06-04T02:22:08",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-7",
        color: "red",
      },
      {
        xi: "2025-06-04T02:22:08",
        xf: "2025-06-04T02:29:43",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-8",
        color: "red",
      },
      {
        xi: "2025-06-04T02:29:43",
        xf: "2025-06-04T02:49:43",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 20:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 19:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "75-9",
        color: "red",
      },
    ],
    id: "75",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDN9108",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T07:13:05",
        xf: "2025-06-05T07:22:38",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-0",
        color: "red",
      },
      {
        xi: "2025-06-05T07:22:38",
        xf: "2025-06-05T07:28:17",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-1",
        color: "red",
      },
      {
        xi: "2025-06-05T07:28:17",
        xf: "2025-06-05T07:28:58",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-2",
        color: "red",
      },
      {
        xi: "2025-06-05T07:28:58",
        xf: "2025-06-05T07:36:18",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-3",
        color: "red",
      },
      {
        xi: "2025-06-05T07:36:18",
        xf: "2025-06-05T07:43:14",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-4",
        color: "red",
      },
      {
        xi: "2025-06-05T07:43:14",
        xf: "2025-06-05T07:55:40",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-5",
        color: "red",
      },
      {
        xi: "2025-06-05T07:55:40",
        xf: "2025-06-05T08:01:07",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-6",
        color: "red",
      },
      {
        xi: "2025-06-05T08:01:07",
        xf: "2025-06-05T08:08:42",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-7",
        color: "red",
      },
      {
        xi: "2025-06-05T08:08:42",
        xf: "2025-06-05T08:28:42",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data trem pronto",
            value: "05/06/2025 07:13",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "76-8",
        color: "red",
      },
    ],
    id: "76",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDN9206",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T23:13:05",
        xf: "2025-06-04T23:22:38",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-0",
        color: "red",
      },
      {
        xi: "2025-06-04T23:22:38",
        xf: "2025-06-04T23:28:17",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-1",
        color: "red",
      },
      {
        xi: "2025-06-04T23:28:17",
        xf: "2025-06-04T23:28:58",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-2",
        color: "red",
      },
      {
        xi: "2025-06-04T23:28:58",
        xf: "2025-06-04T23:36:18",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-3",
        color: "red",
      },
      {
        xi: "2025-06-04T23:36:18",
        xf: "2025-06-04T23:43:14",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-4",
        color: "red",
      },
      {
        xi: "2025-06-04T23:43:14",
        xf: "2025-06-04T23:55:40",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-5",
        color: "red",
      },
      {
        xi: "2025-06-04T23:55:40",
        xf: "2025-06-05T00:01:07",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-6",
        color: "red",
      },
      {
        xi: "2025-06-05T00:01:07",
        xf: "2025-06-05T00:08:42",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-7",
        color: "red",
      },
      {
        xi: "2025-06-05T00:08:42",
        xf: "2025-06-05T00:28:42",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 23:13",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "77-8",
        color: "red",
      },
    ],
    id: "77",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDN9602",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T15:25:42",
        xf: "2025-06-04T15:33:24",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-0",
        color: "red",
      },
      {
        xi: "2025-06-04T15:33:24",
        xf: "2025-06-04T15:38:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-1",
        color: "red",
      },
      {
        xi: "2025-06-04T15:38:00",
        xf: "2025-06-04T15:38:34",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-2",
        color: "red",
      },
      {
        xi: "2025-06-04T15:38:34",
        xf: "2025-06-04T15:45:03",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-3",
        color: "red",
      },
      {
        xi: "2025-06-04T15:45:03",
        xf: "2025-06-04T15:51:16",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-4",
        color: "red",
      },
      {
        xi: "2025-06-04T15:51:16",
        xf: "2025-06-04T16:02:02",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-5",
        color: "red",
      },
      {
        xi: "2025-06-04T16:02:02",
        xf: "2025-06-04T16:05:36",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-6",
        color: "red",
      },
      {
        xi: "2025-06-04T16:05:36",
        xf: "2025-06-04T16:13:11",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-7",
        color: "red",
      },
      {
        xi: "2025-06-04T16:13:11",
        xf: "2025-06-04T16:33:11",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:25",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "78-8",
        color: "red",
      },
    ],
    id: "78",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDN9804",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:04:32",
        xf: "2025-06-04T01:05:06",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:05:06",
        xf: "2025-06-04T01:11:35",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:11:35",
        xf: "2025-06-04T01:17:48",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:17:48",
        xf: "2025-06-04T01:28:34",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-3",
        color: "red",
      },
      {
        xi: "2025-06-04T01:28:34",
        xf: "2025-06-04T01:32:08",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-4",
        color: "red",
      },
      {
        xi: "2025-06-04T01:32:08",
        xf: "2025-06-04T01:39:43",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-5",
        color: "red",
      },
      {
        xi: "2025-06-04T01:39:43",
        xf: "2025-06-04T01:59:43",
        yi: 0,
        yf: 0,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 18:54",
          },
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "79-6",
        color: "red",
      },
    ],
    id: "79",
    patColor: "red",
    type: "line",
  },
  {
    name: "JDU9162",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T02:03:08",
        xf: "2025-06-04T02:03:35",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "02/06/2025 10:25",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "80-0",
        color: "red",
      },
      {
        xi: "2025-06-04T02:03:35",
        xf: "2025-06-04T02:07:03",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "02/06/2025 10:25",
          },
          {
            label: "SB",
            value: "IUF-E-2",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "80-1",
        color: "red",
      },
      {
        xi: "2025-06-04T02:07:03",
        xf: "2025-06-04T02:10:41",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "02/06/2025 10:25",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "80-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:10:41",
        xf: "2025-06-04T02:30:41",
        yi: 29.882,
        yf: 29.882,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data trem pronto",
            value: "02/06/2025 10:25",
          },
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
        id: "80-3",
        color: "red",
      },
    ],
    id: "80",
    patColor: "red",
    type: "line",
  },
  {
    name: "JIU9206",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T04:14:31",
        xf: "2025-06-04T04:15:12",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-0",
        color: "red",
      },
      {
        xi: "2025-06-04T04:15:12",
        xf: "2025-06-04T04:20:51",
        yi: 12.243,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-1",
        color: "red",
      },
      {
        xi: "2025-06-04T04:20:51",
        xf: "2025-06-04T04:23:13",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IAA-ZPG-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-2",
        color: "red",
      },
      {
        xi: "2025-06-04T04:23:13",
        xf: "2025-06-04T04:29:44",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-3",
        color: "red",
      },
      {
        xi: "2025-06-04T04:29:44",
        xf: "2025-06-04T04:36:38",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-4",
        color: "red",
      },
      {
        xi: "2025-06-04T04:36:38",
        xf: "2025-06-04T04:42:22",
        yi: 22.642,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-5",
        color: "red",
      },
      {
        xi: "2025-06-04T04:42:22",
        xf: "2025-06-04T04:44:22",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-6",
        color: "red",
      },
      {
        xi: "2025-06-04T04:44:22",
        xf: "2025-06-04T04:47:22",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-7",
        color: "red",
      },
      {
        xi: "2025-06-04T04:47:22",
        xf: "2025-06-04T04:47:43",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-8",
        color: "red",
      },
      {
        xi: "2025-06-04T04:47:43",
        xf: "2025-06-04T04:48:05",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-9",
        color: "red",
      },
      {
        xi: "2025-06-04T04:48:05",
        xf: "2025-06-04T04:52:35",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-10",
        color: "red",
      },
      {
        xi: "2025-06-04T04:52:35",
        xf: "2025-06-04T05:14:46",
        yi: 29.882,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-11",
        color: "red",
      },
      {
        xi: "2025-06-04T05:14:46",
        xf: "2025-06-04T05:34:04",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-12",
        color: "red",
      },
      {
        xi: "2025-06-04T05:34:04",
        xf: "2025-06-04T05:40:17",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-13",
        color: "red",
      },
      {
        xi: "2025-06-04T05:40:17",
        xf: "2025-06-04T05:59:55",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-14",
        color: "red",
      },
      {
        xi: "2025-06-04T05:59:55",
        xf: "2025-06-04T06:06:59",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-15",
        color: "red",
      },
      {
        xi: "2025-06-04T06:06:59",
        xf: "2025-06-04T06:36:59",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 23:59",
          },
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "81-16",
        color: "red",
      },
    ],
    id: "81",
    patColor: "red",
    type: "line",
  },
  {
    name: "JND9107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T06:00:48",
        xf: "2025-06-04T06:10:10",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-0",
        color: "red",
      },
      {
        xi: "2025-06-04T06:10:10",
        xf: "2025-06-04T06:15:57",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-1",
        color: "red",
      },
      {
        xi: "2025-06-04T06:15:57",
        xf: "2025-06-04T06:16:33",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-2",
        color: "red",
      },
      {
        xi: "2025-06-04T06:16:33",
        xf: "2025-06-04T06:26:30",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-3",
        color: "red",
      },
      {
        xi: "2025-06-04T06:26:30",
        xf: "2025-06-04T06:29:05",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-4",
        color: "red",
      },
      {
        xi: "2025-06-04T06:29:05",
        xf: "2025-06-04T06:29:49",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-5",
        color: "red",
      },
      {
        xi: "2025-06-04T06:29:49",
        xf: "2025-06-04T06:35:44",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-6",
        color: "red",
      },
      {
        xi: "2025-06-04T06:35:44",
        xf: "2025-06-04T06:43:05",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "82-7",
        color: "red",
      },
    ],
    id: "82",
    patColor: "red",
    type: "line",
  },
  {
    name: "JND9207",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T15:00:00",
        xf: "2025-06-04T15:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-0",
        color: "red",
      },
      {
        xi: "2025-06-04T15:09:22",
        xf: "2025-06-04T15:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-1",
        color: "red",
      },
      {
        xi: "2025-06-04T15:15:09",
        xf: "2025-06-04T15:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-2",
        color: "red",
      },
      {
        xi: "2025-06-04T15:15:45",
        xf: "2025-06-04T15:25:42",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-3",
        color: "red",
      },
      {
        xi: "2025-06-04T15:25:42",
        xf: "2025-06-04T15:28:17",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-4",
        color: "red",
      },
      {
        xi: "2025-06-04T15:28:17",
        xf: "2025-06-04T15:29:01",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-5",
        color: "red",
      },
      {
        xi: "2025-06-04T15:29:01",
        xf: "2025-06-04T15:34:56",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-6",
        color: "red",
      },
      {
        xi: "2025-06-04T15:34:56",
        xf: "2025-06-04T15:42:17",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 15:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 15:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "83-7",
        color: "red",
      },
    ],
    id: "83",
    patColor: "red",
    type: "line",
  },
  {
    name: "JND9507",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T18:00:00",
        xf: "2025-06-04T18:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-0",
        color: "red",
      },
      {
        xi: "2025-06-04T18:09:22",
        xf: "2025-06-04T18:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-1",
        color: "red",
      },
      {
        xi: "2025-06-04T18:15:09",
        xf: "2025-06-04T18:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-2",
        color: "red",
      },
      {
        xi: "2025-06-04T18:15:45",
        xf: "2025-06-04T18:25:42",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-3",
        color: "red",
      },
      {
        xi: "2025-06-04T18:25:42",
        xf: "2025-06-04T18:28:17",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-4",
        color: "red",
      },
      {
        xi: "2025-06-04T18:28:17",
        xf: "2025-06-04T18:29:01",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-5",
        color: "red",
      },
      {
        xi: "2025-06-04T18:29:01",
        xf: "2025-06-04T18:34:56",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-6",
        color: "red",
      },
      {
        xi: "2025-06-04T18:34:56",
        xf: "2025-06-04T18:42:17",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 18:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 18:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "84-7",
        color: "red",
      },
    ],
    id: "84",
    patColor: "red",
    type: "line",
  },
  {
    name: "JND9509",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T06:00:00",
        xf: "2025-06-05T06:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-0",
        color: "red",
      },
      {
        xi: "2025-06-05T06:09:22",
        xf: "2025-06-05T06:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-1",
        color: "red",
      },
      {
        xi: "2025-06-05T06:15:09",
        xf: "2025-06-05T06:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-2",
        color: "red",
      },
      {
        xi: "2025-06-05T06:15:45",
        xf: "2025-06-05T06:25:42",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-3",
        color: "red",
      },
      {
        xi: "2025-06-05T06:25:42",
        xf: "2025-06-05T06:28:17",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-4",
        color: "red",
      },
      {
        xi: "2025-06-05T06:28:17",
        xf: "2025-06-05T06:29:01",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-5",
        color: "red",
      },
      {
        xi: "2025-06-05T06:29:01",
        xf: "2025-06-05T06:34:56",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-6",
        color: "red",
      },
      {
        xi: "2025-06-05T06:34:56",
        xf: "2025-06-05T06:42:17",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 06:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "85-7",
        color: "red",
      },
    ],
    id: "85",
    patColor: "red",
    type: "line",
  },
  {
    name: "JND9709",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-05T21:00:00",
        xf: "2025-06-05T21:09:22",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-0",
        color: "red",
      },
      {
        xi: "2025-06-05T21:09:22",
        xf: "2025-06-05T21:15:09",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-1",
        color: "red",
      },
      {
        xi: "2025-06-05T21:15:09",
        xf: "2025-06-05T21:15:45",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-2",
        color: "red",
      },
      {
        xi: "2025-06-05T21:15:45",
        xf: "2025-06-05T21:25:42",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-3",
        color: "red",
      },
      {
        xi: "2025-06-05T21:25:42",
        xf: "2025-06-05T21:28:17",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-4",
        color: "red",
      },
      {
        xi: "2025-06-05T21:28:17",
        xf: "2025-06-05T21:29:01",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-5",
        color: "red",
      },
      {
        xi: "2025-06-05T21:29:01",
        xf: "2025-06-05T21:34:56",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-6",
        color: "red",
      },
      {
        xi: "2025-06-05T21:34:56",
        xf: "2025-06-05T21:42:17",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "05/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "05/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "86-7",
        color: "red",
      },
    ],
    id: "86",
    patColor: "red",
    type: "line",
  },
  {
    name: "JYD9107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T21:00:00",
        xf: "2025-06-04T21:06:13",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-0",
        color: "red",
      },
      {
        xi: "2025-06-04T21:06:13",
        xf: "2025-06-04T21:08:13",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-1",
        color: "red",
      },
      {
        xi: "2025-06-04T21:08:13",
        xf: "2025-06-04T21:15:05",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-2",
        color: "red",
      },
      {
        xi: "2025-06-04T21:15:05",
        xf: "2025-06-04T21:20:41",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-3",
        color: "red",
      },
      {
        xi: "2025-06-04T21:20:41",
        xf: "2025-06-04T21:21:08",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-4",
        color: "red",
      },
      {
        xi: "2025-06-04T21:21:08",
        xf: "2025-06-04T21:26:13",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 21:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 21:00",
          },
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
        id: "87-5",
        color: "red",
      },
    ],
    id: "87",
    patColor: "red",
    type: "line",
  },
  {
    name: "UYI0108",
    otherName: null,
    color: "#006400FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T09:30:00",
        xf: "2025-06-04T09:33:33",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-1",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "88-0",
        color: "red",
      },
      {
        xi: "2025-06-04T09:33:33",
        xf: "2025-06-04T09:34:48",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "88-1",
        color: "red",
      },
      {
        xi: "2025-06-04T09:34:48",
        xf: "2025-06-04T09:38:37",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "88-2",
        color: "red",
      },
      {
        xi: "2025-06-04T09:38:37",
        xf: "2025-06-04T09:42:09",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "88-3",
        color: "red",
      },
    ],
    id: "88",
    patColor: "red",
    type: "line",
  },
  {
    name: "UYI1808",
    otherName: null,
    color: "#006400FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T10:00:00",
        xf: "2025-06-04T10:03:26",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-2",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "89-0",
        color: "red",
      },
      {
        xi: "2025-06-04T10:03:26",
        xf: "2025-06-04T10:04:39",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "89-1",
        color: "red",
      },
      {
        xi: "2025-06-04T10:04:39",
        xf: "2025-06-04T10:08:31",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "89-2",
        color: "red",
      },
      {
        xi: "2025-06-04T10:08:31",
        xf: "2025-06-04T10:12:15",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data trem pronto",
            value: "04/06/2025 09:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
        id: "89-3",
        color: "red",
      },
    ],
    id: "89",
    patColor: "red",
    type: "line",
  },
  {
    name: "WNY5107",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T05:00:14",
        xf: "2025-06-04T05:05:24",
        yi: 0,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-0",
        color: "red",
      },
      {
        xi: "2025-06-04T05:05:24",
        xf: "2025-06-04T05:08:36",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-1",
        color: "red",
      },
      {
        xi: "2025-06-04T05:08:36",
        xf: "2025-06-04T05:08:56",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-2",
        color: "red",
      },
      {
        xi: "2025-06-04T05:08:56",
        xf: "2025-06-04T05:20:57",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-3",
        color: "red",
      },
      {
        xi: "2025-06-04T05:20:57",
        xf: "2025-06-04T05:25:20",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-4",
        color: "red",
      },
      {
        xi: "2025-06-04T05:25:20",
        xf: "2025-06-04T05:25:54",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-5",
        color: "red",
      },
      {
        xi: "2025-06-04T05:25:54",
        xf: "2025-06-04T05:29:01",
        yi: 12.243,
        yf: 16.3,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-6",
        color: "red",
      },
      {
        xi: "2025-06-04T05:29:01",
        xf: "2025-06-04T05:30:55",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-2",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-7",
        color: "red",
      },
      {
        xi: "2025-06-04T05:30:55",
        xf: "2025-06-04T05:34:40",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-8",
        color: "red",
      },
      {
        xi: "2025-06-04T05:34:40",
        xf: "2025-06-04T05:38:32",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-9",
        color: "red",
      },
      {
        xi: "2025-06-04T05:38:32",
        xf: "2025-06-04T05:39:45",
        yi: 22.642,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-10",
        color: "red",
      },
      {
        xi: "2025-06-04T05:39:45",
        xf: "2025-06-04T05:44:44",
        yi: 24.142,
        yf: 26.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-W-1",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-11",
        color: "red",
      },
      {
        xi: "2025-06-04T05:44:44",
        xf: "2025-06-04T11:14:44",
        yi: 26.642,
        yf: 26.642,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 05:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 05:00",
          },
          {
            label: "SB",
            value: "IPG-W-1",
          },
          {
            label: "Destino",
            value: "IPG-W",
          },
        ],
        id: "90-12",
        color: "red",
      },
    ],
    id: "90",
    patColor: "red",
    type: "line",
  },
  {
    name: "WUY5607",
    otherName: null,
    color: "#FF0000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T03:00:00",
        xf: "2025-06-04T03:01:34",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-0",
        color: "red",
      },
      {
        xi: "2025-06-04T03:01:34",
        xf: "2025-06-04T03:08:05",
        yi: 35.997,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-1",
        color: "red",
      },
      {
        xi: "2025-06-04T03:08:05",
        xf: "2025-06-04T03:11:38",
        yi: 29.882,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-2",
        color: "red",
      },
      {
        xi: "2025-06-04T03:11:38",
        xf: "2025-06-04T03:11:53",
        yi: 29.287,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-3",
        color: "red",
      },
      {
        xi: "2025-06-04T03:11:53",
        xf: "2025-06-04T03:14:05",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-4",
        color: "red",
      },
      {
        xi: "2025-06-04T03:14:05",
        xf: "2025-06-04T03:14:30",
        yi: 28.417,
        yf: 24.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-5",
        color: "red",
      },
      {
        xi: "2025-06-04T03:14:30",
        xf: "2025-06-04T03:17:18",
        yi: 24.142,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 03:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 03:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
        id: "91-6",
        color: "red",
      },
    ],
    id: "91",
    patColor: "red",
    type: "line",
  },
  {
    name: "WYN5406",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T01:22:14",
        xf: "2025-06-04T01:32:25",
        yi: 26.642,
        yf: 23.142,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IPG-W-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-0",
        color: "red",
      },
      {
        xi: "2025-06-04T01:32:25",
        xf: "2025-06-04T01:34:27",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-1",
        color: "red",
      },
      {
        xi: "2025-06-04T01:34:27",
        xf: "2025-06-04T01:38:54",
        yi: 22.642,
        yf: 18.704,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-2",
        color: "red",
      },
      {
        xi: "2025-06-04T01:38:54",
        xf: "2025-06-04T01:43:12",
        yi: 18.704,
        yf: 16.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IAA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-3",
        color: "red",
      },
      {
        xi: "2025-06-04T01:43:12",
        xf: "2025-06-04T01:45:08",
        yi: 16.935,
        yf: 13.751,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IAA-ZPG-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-4",
        color: "red",
      },
      {
        xi: "2025-06-04T01:45:08",
        xf: "2025-06-04T01:49:44",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-5",
        color: "red",
      },
      {
        xi: "2025-06-04T01:49:44",
        xf: "2025-06-04T01:50:13",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-6",
        color: "red",
      },
      {
        xi: "2025-06-04T01:50:13",
        xf: "2025-06-04T01:53:37",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-7",
        color: "red",
      },
      {
        xi: "2025-06-04T01:53:37",
        xf: "2025-06-04T02:20:13",
        yi: 9.935,
        yf: 9.935,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-8",
        color: "red",
      },
      {
        xi: "2025-06-04T02:20:13",
        xf: "2025-06-04T02:23:23",
        yi: 9.935,
        yf: 4.12,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-9",
        color: "red",
      },
      {
        xi: "2025-06-04T02:23:23",
        xf: "2025-06-04T02:31:44",
        yi: 4.12,
        yf: 3.957,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-10",
        color: "red",
      },
      {
        xi: "2025-06-04T02:31:44",
        xf: "2025-06-04T02:35:18",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-11",
        color: "red",
      },
      {
        xi: "2025-06-04T02:35:18",
        xf: "2025-06-04T02:40:25",
        yi: 2.5,
        yf: 0,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 01:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 01:00",
          },
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
        id: "92-12",
        color: "red",
      },
    ],
    id: "92",
    patColor: "red",
    type: "line",
  },
  {
    name: "WYU5606",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T02:17:05",
        xf: "2025-06-04T02:20:25",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-0",
        color: "red",
      },
      {
        xi: "2025-06-04T02:20:25",
        xf: "2025-06-04T02:29:48",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-1",
        color: "red",
      },
      {
        xi: "2025-06-04T02:29:48",
        xf: "2025-06-04T02:33:40",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-2",
        color: "red",
      },
      {
        xi: "2025-06-04T02:33:40",
        xf: "2025-06-04T02:39:58",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-3",
        color: "red",
      },
      {
        xi: "2025-06-04T02:39:58",
        xf: "2025-06-04T02:52:47",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-4",
        color: "red",
      },
      {
        xi: "2025-06-04T02:52:47",
        xf: "2025-06-04T02:57:36",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-5",
        color: "red",
      },
      {
        xi: "2025-06-04T02:57:36",
        xf: "2025-06-04T03:27:36",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "03/06/2025 14:43",
          },
          {
            label: "Data trem pronto",
            value: "03/06/2025 14:00",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "93-6",
        color: "red",
      },
    ],
    id: "93",
    patColor: "red",
    type: "line",
  },
  {
    name: "WYU5608",
    otherName: null,
    color: "#800000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T06:00:43",
        xf: "2025-06-04T06:02:15",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-0",
        color: "red",
      },
      {
        xi: "2025-06-04T06:02:15",
        xf: "2025-06-04T06:02:40",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-1",
        color: "red",
      },
      {
        xi: "2025-06-04T06:02:40",
        xf: "2025-06-04T06:02:52",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-2",
        color: "red",
      },
      {
        xi: "2025-06-04T06:02:52",
        xf: "2025-06-04T06:05:41",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-3",
        color: "red",
      },
      {
        xi: "2025-06-04T06:05:41",
        xf: "2025-06-04T06:18:20",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-4",
        color: "red",
      },
      {
        xi: "2025-06-04T06:18:20",
        xf: "2025-06-04T06:21:38",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 06:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 06:00",
          },
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
        id: "94-5",
        color: "red",
      },
    ],
    id: "94",
    patColor: "red",
    type: "line",
  },
  {
    name: "XPU0105",
    otherName: null,
    color: "#FF0000FF",
    wide: false,
    segments: [
      {
        xi: "2025-06-04T14:01:39",
        xf: "2025-06-04T14:03:55",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-0",
        color: "red",
      },
      {
        xi: "2025-06-04T14:03:55",
        xf: "2025-06-04T14:04:22",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-1",
        color: "red",
      },
      {
        xi: "2025-06-04T14:04:22",
        xf: "2025-06-04T14:04:46",
        yi: 28.417,
        yf: 29.287,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-E-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-2",
        color: "red",
      },
      {
        xi: "2025-06-04T14:04:46",
        xf: "2025-06-04T14:08:27",
        yi: 29.287,
        yf: 29.882,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-3",
        color: "red",
      },
      {
        xi: "2025-06-04T14:08:27",
        xf: "2025-06-04T14:21:05",
        yi: 29.882,
        yf: 35.997,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-4",
        color: "red",
      },
      {
        xi: "2025-06-04T14:21:05",
        xf: "2025-06-04T14:25:08",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-5",
        color: "red",
      },
      {
        xi: "2025-06-04T14:25:08",
        xf: "2025-06-04T14:37:57",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-6",
        color: "red",
      },
      {
        xi: "2025-06-04T14:37:57",
        xf: "2025-06-04T14:42:57",
        yi: 42.896,
        yf: 45.304,
        dash: true,
        patColor: null,
        patType: null,
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-7",
        color: "red",
      },
      {
        xi: "2025-06-04T14:42:57",
        xf: "2025-06-04T15:12:57",
        yi: 45.304,
        yf: 45.304,
        dash: true,
        patColor: "#FFA500",
        patType: "atividade padrão",
        info: [
          {
            label: "Data necessidade porto",
            value: "04/06/2025 08:00",
          },
          {
            label: "Data trem pronto",
            value: "04/06/2025 08:00",
          },
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
        id: "95-8",
        color: "red",
      },
    ],
    id: "95",
    patColor: "red",
    type: "line",
  },
];

// const restricts: IRestrictionsGHT[] = [
//   // Restrição 1: Original - cruza oficialização
//   {
//     id: "1",
//     name: "INTERDIÇÃO IPG-1",
//     color: "#008000CC",
//     xi: "2025-05-07T02:32:00-03:00",
//     xf: "2025-05-07T05:32:00-03:00",
//     yi: 26.642,
//     yf: 28.304,
//     info: [
//       { label: "SB", value: "IPG-1" },
//       { label: "Motivo", value: "Manutenção preventiva" },
//     ],
//   },

//   // Restrição 2: Depois da oficialização
//   {
//     id: "2",
//     name: "OBRAS ICB-3",
//     color: "#FF4500CC",
//     xi: "2025-05-07T08:00:00-03:00",
//     xf: "2025-05-07T12:00:00-03:00",
//     yi: 5.0,
//     yf: 8.5,
//     info: [
//       { label: "SB", value: "ICB-3" },
//       { label: "Motivo", value: "Obras de sinalização" },
//       { label: "Responsável", value: "Engenharia" },
//     ],
//   },

//   // Restrição 3: Longa duração cruzando oficialização
//   {
//     id: "3",
//     name: "MANUTENÇÃO ZPG-GERAL",
//     color: "#8B0000CC",
//     xi: "2025-05-07T06:00:00-03:00",
//     xf: "2025-05-07T18:00:00-03:00",
//     yi: 15.0,
//     yf: 20.0,
//     info: [
//       { label: "SB", value: "ZPG-ALL" },
//       { label: "Motivo", value: "Manutenção de subestação" },
//       { label: "Duração", value: "12 horas" },
//       { label: "Status", value: "Crítica" },
//     ],
//   },

//   // Restrição 4: Antes da oficialização
//   {
//     id: "4",
//     name: "BLOQUEIO IQA-2",
//     color: "#FFD700CC",
//     xi: "2025-05-07T04:30:00-03:00",
//     xf: "2025-05-07T06:00:00-03:00",
//     yi: 3.5,
//     yf: 4.2,
//     info: [
//       { label: "SB", value: "IQA-2" },
//       { label: "Motivo", value: "Passagem de trem especial" },
//       { label: "Tipo", value: "Bloqueio temporário" },
//     ],
//   },

//   // Restrição 5: Velocidade reduzida
//   {
//     id: "5",
//     name: "VELOCIDADE REDUZIDA IAA-1",
//     color: "#FFA500CC",
//     xi: "2025-05-07T07:00:00-03:00",
//     xf: "2025-05-07T10:00:00-03:00",
//     yi: 22.5,
//     yf: 25.0,
//     info: [
//       { label: "SB", value: "IAA-1" },
//       { label: "Motivo", value: "Geometria da via" },
//       { label: "Velocidade Máxima", value: "40 km/h" },
//     ],
//   },

//   // Restrição 6: Manutenção noturna
//   {
//     id: "6",
//     name: "MANUTENÇÃO NOTURNA IBA",
//     color: "#2F4F4FCC",
//     xi: "2025-05-07T22:00:00-03:00",
//     xf: "2025-05-08T06:00:00-03:00",
//     yi: 33.0,
//     yf: 37.0,
//     info: [
//       { label: "SB", value: "IBA-YARD" },
//       { label: "Motivo", value: "Renovação de AMVs" },
//       { label: "Período", value: "Janela noturna" },
//       { label: "Equipe", value: "Via Permanente - Turno C" },
//     ],
//   },

//   // Restrição 7: Zona de trabalho D+1
//   {
//     id: "7",
//     name: "RENOVAÇÃO IPG-COMPLEX",
//     color: "#8B4513CC",
//     xi: "2025-05-08T08:00:00-03:00",
//     xf: "2025-05-08T17:00:00-03:00",
//     yi: 30.5,
//     yf: 35.5,
//     info: [
//       { label: "SB", value: "IPG-WORK-ZONE" },
//       { label: "Motivo", value: "Renovação completa de via" },
//       { label: "Equipamentos", value: "RGR, Socadora, Regularizadora" },
//       { label: "Duração", value: "9 horas" },
//     ],
//   },

//   // Restrição 8: Múltiplas restrições sobrepostas
//   {
//     id: "8",
//     name: "BLOQUEIO TOTAL ZPG-NORTE",
//     color: "#800080CC",
//     xi: "2025-05-07T16:00:00-03:00",
//     xf: "2025-05-07T20:00:00-03:00",
//     yi: 16.5,
//     yf: 19.0,
//     info: [
//       { label: "SB", value: "ZPG-NORTH" },
//       { label: "Motivo", value: "Substituição de trilhos" },
//       { label: "Tipo", value: "Bloqueio total" },
//     ],
//   },

//   // Restrição 9: Obra especial D+1/D+2
//   {
//     id: "9",
//     name: "OBRA ESPECIAL ICB-EXTENSÃO",
//     color: "#B22222CC",
//     xi: "2025-05-08T12:00:00-03:00",
//     xf: "2025-05-09T06:00:00-03:00",
//     yi: 7.0,
//     yf: 12.0,
//     info: [
//       { label: "SB", value: "ICB-EXTENSION" },
//       { label: "Motivo", value: "Construção de nova linha" },
//       { label: "Duração", value: "18 horas" },
//       { label: "Complexidade", value: "Alto" },
//       { label: "Equipes", value: "3 turnos" },
//     ],
//   },

//   // Restrição 10: D+2 início
//   {
//     id: "10",
//     name: "PREPARAÇÃO NOVA OPERAÇÃO",
//     color: "#20B2AACC",
//     xi: "2025-05-09T02:00:00-03:00",
//     xf: "2025-05-09T08:00:00-03:00",
//     yi: 1.0,
//     yf: 5.0,
//     info: [
//       { label: "SB", value: "SYSTEM-PREP" },
//       { label: "Motivo", value: "Preparação novo horário operacional" },
//       { label: "Tipo", value: "Sistêmica" },
//       { label: "Prioridade", value: "Estratégica" },
//     ],
//   },
// ];

const restricts: IRestrictionsGHT[] = [
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T02:00:00",
    xf: "2025-06-04T03:30:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-3, IPG-1, IPG-2",
      },
    ],
    id: "0",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T09:00:00",
    xf: "2025-06-04T10:30:00",
    yi: 37.657,
    yf: 42.896,
    info: [
      {
        label: "SB",
        value: "ICZ-IBA-1",
      },
    ],
    id: "1",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T10:30:00",
    xf: "2025-06-04T12:00:00",
    yi: 9.935,
    yf: 7.965,
    info: [
      {
        label: "SB",
        value: "ICB-KM10-2, ICB-KM10-1, ICB-KM8-2, ICB-KM8-1, ICB-KM8-IQA-2, ICB-KM8-IQA-1",
      },
    ],
    id: "2",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T14:00:00",
    xf: "2025-06-04T15:30:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-1, IAA-5, IAA-3, IAA-9, IAA-7",
      },
    ],
    id: "3",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T14:00:00",
    xf: "2025-06-04T15:30:00",
    yi: 37.657,
    yf: 42.896,
    info: [
      {
        label: "SB",
        value: "ICZ-IBA-1",
      },
    ],
    id: "4",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T15:30:00",
    xf: "2025-06-04T17:00:00",
    yi: 9.935,
    yf: 7.965,
    info: [
      {
        label: "SB",
        value: "ICB-KM10-1, ICB-KM10-2, ICB-KM8-1, ICB-KM8-2, ICB-KM8-IQA-1, ICB-KM8-IQA-2",
      },
    ],
    id: "5",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T21:00:00",
    xf: "2025-06-04T22:30:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-3, IPG-2, IPG-1",
      },
    ],
    id: "6",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-05T02:00:00",
    xf: "2025-06-05T03:30:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-2, IPG-3, IPG-1",
      },
    ],
    id: "7",
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2025-06-04T11:00:00",
    xf: "2025-06-04T14:00:00",
    yi: 20.86,
    yf: 22.642,
    info: [
      {
        label: "SB",
        value: "IPG-IAA-1",
      },
    ],
    id: "8",
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2025-06-04T11:00:00",
    xf: "2025-06-04T14:00:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-1",
      },
    ],
    id: "9",
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2025-06-04T11:00:00",
    xf: "2025-06-04T14:00:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-1",
      },
    ],
    id: "10",
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2025-06-04T11:00:00",
    xf: "2025-06-04T14:00:00",
    yi: 29.287,
    yf: 29.882,
    info: [
      {
        label: "SB",
        value: "IUF-1",
      },
    ],
    id: "11",
  },
  {
    name: "CONDICIONAL ",
    color: "#008000CC",
    xi: "2025-06-03T22:40:00",
    xf: "2025-06-04T01:40:00",
    yi: 19.204,
    yf: 19.204,
    info: [
      {
        label: "SB",
        value: "IAA-IFA-2-1, IAA-IFA-2, IAA-IFA-1",
      },
    ],
    id: "12",
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2025-06-04T02:00:02",
    xf: "2025-06-04T03:00:02",
    yi: 19.36,
    yf: 20.86,
    info: [
      {
        label: "SB",
        value: "IFA-1, IFA-2",
      },
    ],
    id: "13",
  },
];

export const GHTChartMock = {
  yLabels,
  database,
  dataOfficialization,
  restricts,
  data,
};
