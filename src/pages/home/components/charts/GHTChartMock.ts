import { IDataGHT, IYLabelsGHT } from "./GHTChart.types";

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
export const dataOfficialization = new Date("2025-05-07T07:50:00-03:00");

const data: IDataGHT[] = [
  {
    name: "HUP0131",
    color: "#800000",
    segments: [
      {
        xi: "2025-05-07T02:16:59-03:00",
        xf: "2025-05-07T07:18:51-03:00",
        yi: 0,
        yf: 10.997,
        dash: false,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2025-05-07T07:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2025-05-07T07:18:51-03:00",
        xf: "2025-05-07T08:27:22-03:00",
        yi: 10.997,
        yf: 15.5,
        dash: false,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2025-05-07T07:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2025-05-07T08:27:22-03:00",
        xf: "2025-05-07T08:30:53-03:00",
        yi: 15.5,
        yf: 30.0,
        dash: false,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2025-05-07T07:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2025-05-07T08:30:53-03:00",
        xf: "2025-05-07T09:30:53-03:00",
        yi: 30,
        yf: 32.304,
        dash: false,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2025-05-07T07:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2025-05-07T09:30:53-03:00",
        xf: "2025-05-07T11:30:53-03:00",
        yi: 32.304,
        yf: 32.304,
        dash: false,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2025-05-07T07:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  // {
  //   name: "HPU1132",
  //   color: "#800000",
  //   segments: [
  //     {
  //       xi: "2025-05-07T07:00:42-03:00",
  //       xf: "2025-05-07T07:02:05-03:00",
  //       yi: 23.142,
  //       yf: 23.142,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IPG-2-16",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IPG-2",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:02:05-03:00",
  //       xf: "2025-05-07T07:01:38-03:00",
  //       yi: 23.142,
  //       yf: 28.304,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-IPG-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF-IPG",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:01:38-03:00",
  //       xf: "2025-05-07T07:07:05-03:00",
  //       yi: 28.304,
  //       yf: 28.417,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-2",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:07:05-03:00",
  //       xf: "2025-05-07T07:23:55-03:00",
  //       yi: 28.417,
  //       yf: 29.982,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IBA-IUF-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IBA-IUF",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:23:55-03:00",
  //       xf: "2025-05-07T07:27:00-03:00",
  //       yi: 29.982,
  //       yf: 35.997,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IBA-SUZ-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IBA",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "HPU0132",
  //   color: "#800000",
  //   segments: [
  //     {
  //       xi: "2025-05-07T07:10:42-03:00",
  //       xf: "2025-05-07T07:12:05-03:00",
  //       yi: 23.142,
  //       yf: 23.142,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IPG-2-16",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IPG-2",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:12:05-03:00",
  //       xf: "2025-05-07T07:11:38-03:00",
  //       yi: 23.142,
  //       yf: 28.304,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-IPG-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF-IPG",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:11:38-03:00",
  //       xf: "2025-05-07T07:17:05-03:00",
  //       yi: 28.304,
  //       yf: 28.417,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-2",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:17:05-03:00",
  //       xf: "2025-05-07T07:33:55-03:00",
  //       yi: 28.417,
  //       yf: 29.982,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IBA-IUF-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IBA-IUF",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:33:55-03:00",
  //       xf: "2025-05-07T07:37:00-03:00",
  //       yi: 29.982,
  //       yf: 35.997,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IBA-SUZ-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IBA",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "HPU0130",
  //   color: "#800000",
  //   segments: [
  //     {
  //       xi: "2025-05-07T07:31:23-03:00",
  //       xf: "2025-05-07T07:36:35-03:00",
  //       yi: 23.142,
  //       yf: 23.142,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IPG-2-16",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IPG-2",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:36:35-03:00",
  //       xf: "2025-05-07T07:36:43-03:00",
  //       yi: 23.142,
  //       yf: 28.304,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-IPG-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF-IPG",
  //         },
  //       ],
  //     },
  //     {
  //       xi: "2025-05-07T07:37:35-03:00",
  //       xf: "2025-05-07T08:10:51-03:00",
  //       yi: 28.304,
  //       yf: 28.304,
  //       dash: false,
  //       info: [
  //         {
  //           label: "SB",
  //           value: "IUF-1",
  //         },
  //         {
  //           label: "Data trem pronto",
  //           value: "2025-05-07T07:00-03:00[America/Sao_Paulo]",
  //         },
  //         {
  //           label: "Destino",
  //           value: "IUF-IPG",
  //         },
  //       ],
  //     },
  //   ],
  // },
] as IDataGHT[];

const restricts = [
  {
    name: "INTERDICAO ",
    color: "#008000CC",
    xi: "2025-05-07T02:32:00-03:00",
    xf: "2025-05-07T05:32:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1",
      },
    ],
  },
  //   {
  //     name: "INTERDICAO ",
  //     color: "#008000CC",
  //     xi: "2024-02-15T08:38:03-03:00",
  //     xf: "2024-02-15T16:00:00-03:00",
  //     yi: 26.642,
  //     yf: 28.304,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IPG-1, IPG-2",
  //       },
  //     ],
  //   },
  //   {
  //     name: "INTERDICAO ",
  //     color: "#008000CC",
  //     xi: "2024-02-15T08:38:03-03:00",
  //     xf: "2024-02-15T14:34:06-03:00",
  //     yi: 9.935,
  //     yf: 7.965,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ICB-KM10-1, ICB-KM8-1, ICB-KM8-IQA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "INTERDICAO ",
  //     color: "#008000CC",
  //     xi: "2024-02-15T14:09:00-03:00",
  //     xf: "2024-02-15T15:00:00-03:00",
  //     yi: 3.957,
  //     yf: 4.12,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IQA-1, IQA-2",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-15T18:30:00-03:00",
  //     xf: "2024-02-15T19:00:00-03:00",
  //     yi: 26.642,
  //     yf: 28.304,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IPG-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "INTERDICAO ",
  //     color: "#FF8000CC",
  //     xi: "2024-02-16T04:00:00-03:00",
  //     xf: "2024-02-16T20:00:00-03:00",
  //     yi: 12.243,
  //     yf: 13.751,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ZPG-ICB-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T05:00:00-03:00",
  //     xf: "2024-02-16T05:30:00-03:00",
  //     yi: 12.243,
  //     yf: 13.751,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ZPG-ICB-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T05:00:00-03:00",
  //     xf: "2024-02-16T06:00:00-03:00",
  //     yi: 20.86,
  //     yf: 22.642,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IPG-IAA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:15:00-03:00",
  //     yi: 35.997,
  //     yf: 37.657,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IBA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 16.935,
  //     yf: 18.704,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IAA-3",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 35.997,
  //     yf: 37.657,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IBA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 16.935,
  //     yf: 18.704,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IAA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 12.057,
  //     yf: 12.243,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ICB-2",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 3.957,
  //     yf: 4.12,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IQA-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T06:30:00-03:00",
  //     yi: 29.287,
  //     yf: 29.882,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IUF-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T06:00:00-03:00",
  //     xf: "2024-02-16T07:00:00-03:00",
  //     yi: 29.882,
  //     yf: 35.997,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IBA-IUF-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T07:00:00-03:00",
  //     xf: "2024-02-16T07:30:00-03:00",
  //     yi: 13.751,
  //     yf: 16.3,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ZPG-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T07:00:00-03:00",
  //     xf: "2024-02-16T07:30:00-03:00",
  //     yi: 42.896,
  //     yf: 45.304,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ICZ-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T07:00:00-03:00",
  //     xf: "2024-02-16T08:00:00-03:00",
  //     yi: 29.882,
  //     yf: 35.997,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IBA-IUF-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T07:00:00-03:00",
  //     xf: "2024-02-16T08:30:00-03:00",
  //     yi: 12.243,
  //     yf: 13.751,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "ZPG-ICB-2",
  //       },
  //     ],
  //   },
  //   {
  //     name: "INTERDICAO ",
  //     color: "#FF8000CC",
  //     xi: "2024-02-16T07:00:00-03:00",
  //     xf: "2024-02-16T10:00:00-03:00",
  //     yi: 35.997,
  //     yf: 37.657,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IBA-3, IBA-SUZ-1",
  //       },
  //     ],
  //   },
  //   {
  //     name: "CONDICIONAL ",
  //     color: "#FFFF00CC",
  //     xi: "2024-02-16T08:00:00-03:00",
  //     xf: "2024-02-16T08:15:00-03:00",
  //     yi: 16.935,
  //     yf: 18.704,
  //     info: [
  //       {
  //         label: "SB",
  //         value: "IAA-1",
  //       },
  //     ],
  //   },
];

export const GHTChartMock = {
  yLabels,
  database,
  restricts,
  data,
};
