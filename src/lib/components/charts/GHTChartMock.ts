const yLabels = [
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

const database = new Date("2024-02-15T14:49:57-03:00");

const data = [
  {
    name: "HUP0131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T01:16:59-03:00",
        xf: "2024-02-16T01:18:51-03:00",
        yi: 35.997,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T01:18:51-03:00",
        xf: "2024-02-16T01:27:22-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T01:27:22-03:00",
        xf: "2024-02-16T01:30:53-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T01:30:53-03:00",
        xf: "2024-02-16T01:31:34-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T01:31:34-03:00",
        xf: "2024-02-16T01:34:27-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  {
    name: "HPU1132",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T23:00:42-03:00",
        xf: "2024-02-16T23:02:05-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T23:02:05-03:00",
        xf: "2024-02-16T23:01:38-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T23:01:38-03:00",
        xf: "2024-02-16T23:07:05-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T23:07:05-03:00",
        xf: "2024-02-16T23:23:55-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T23:23:55-03:00",
        xf: "2024-02-16T23:27:00-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "HPU0132",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T13:10:42-03:00",
        xf: "2024-02-16T13:12:05-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T13:12:05-03:00",
        xf: "2024-02-16T13:11:38-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T13:11:38-03:00",
        xf: "2024-02-16T13:17:05-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T13:17:05-03:00",
        xf: "2024-02-16T13:33:55-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T13:33:55-03:00",
        xf: "2024-02-16T13:37:00-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "HPU0130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T17:31:23-03:00",
        xf: "2024-02-15T17:36:35-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T17:36:35-03:00",
        xf: "2024-02-15T17:36:43-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:37:35-03:00",
        xf: "2024-02-15T18:10:51-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T18:10:51-03:00",
        xf: "2024-02-15T18:32:27-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T18:32:27-03:00",
        xf: "2024-02-15T18:35:33-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T05:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "HPU1130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T23:00:42-03:00",
        xf: "2024-02-15T23:02:05-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T23:02:05-03:00",
        xf: "2024-02-15T23:01:38-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T23:05:42-03:00",
        xf: "2024-02-15T23:20:24-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T23:20:24-03:00",
        xf: "2024-02-15T23:38:37-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T23:38:37-03:00",
        xf: "2024-02-15T23:41:42-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "HUP1131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T13:36:19-03:00",
        xf: "2024-02-16T13:38:11-03:00",
        yi: 35.997,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T13:38:11-03:00",
        xf: "2024-02-16T13:46:42-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T13:46:42-03:00",
        xf: "2024-02-16T13:50:13-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T13:50:13-03:00",
        xf: "2024-02-16T13:50:54-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T13:50:54-03:00",
        xf: "2024-02-16T13:53:47-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2530",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:57:36-03:00",
        xf: "2024-02-15T15:02:43-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:02:43-03:00",
        xf: "2024-02-15T15:03:52-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:05:16-03:00",
        xf: "2024-02-15T16:10:21-03:00",
        yi: 16.3,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:16:38-03:00",
        xf: "2024-02-15T16:32:20-03:00",
        yi: 16.3,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:32:20-03:00",
        xf: "2024-02-15T16:39:12-03:00",
        yi: 16.3,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T16:39:12-03:00",
        xf: "2024-02-15T16:41:34-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T16:41:34-03:00",
        xf: "2024-02-15T16:41:39-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:42:52-03:00",
        xf: "2024-02-15T16:48:44-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:48:44-03:00",
        xf: "2024-02-15T17:12:55-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:15:02-03:00",
        xf: "2024-02-15T17:36:17-03:00",
        yi: 29.982,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:36:17-03:00",
        xf: "2024-02-15T18:00:47-03:00",
        yi: 29.982,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:00:47-03:00",
        xf: "2024-02-15T18:05:35-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2530",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T16:12:16-03:00",
        xf: "2024-02-15T16:17:08-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:17:08-03:00",
        xf: "2024-02-15T16:23:03-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T16:23:03-03:00",
        xf: "2024-02-15T16:23:48-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T16:23:48-03:00",
        xf: "2024-02-15T16:31:08-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T16:31:08-03:00",
        xf: "2024-02-15T16:38:04-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T16:38:04-03:00",
        xf: "2024-02-15T16:50:10-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:50:10-03:00",
        xf: "2024-02-15T16:55:57-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T16:55:57-03:00",
        xf: "2024-02-15T17:00:56-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "HUP1129",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T15:03:15-03:00",
        xf: "2024-02-15T15:05:07-03:00",
        yi: 35.997,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:05:07-03:00",
        xf: "2024-02-15T15:13:38-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T15:13:38-03:00",
        xf: "2024-02-15T15:17:09-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T15:17:09-03:00",
        xf: "2024-02-15T15:17:50-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:17:50-03:00",
        xf: "2024-02-15T15:20:43-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2630",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T16:04:41-03:00",
        xf: "2024-02-15T16:09:48-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:09:48-03:00",
        xf: "2024-02-15T16:10:57-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:12:36-03:00",
        xf: "2024-02-15T16:39:33-03:00",
        yi: 16.3,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:45:50-03:00",
        xf: "2024-02-15T16:50:35-03:00",
        yi: 16.3,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:50:35-03:00",
        xf: "2024-02-15T16:57:27-03:00",
        yi: 16.3,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T16:57:27-03:00",
        xf: "2024-02-15T16:59:49-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T16:59:49-03:00",
        xf: "2024-02-15T16:59:54-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:01:07-03:00",
        xf: "2024-02-15T17:27:43-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:27:43-03:00",
        xf: "2024-02-15T17:50:48-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:52:55-03:00",
        xf: "2024-02-15T18:02:47-03:00",
        yi: 29.982,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T18:02:47-03:00",
        xf: "2024-02-15T18:27:17-03:00",
        yi: 29.982,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:27:17-03:00",
        xf: "2024-02-15T18:32:05-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T11:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2430",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T18:08:16-03:00",
        xf: "2024-02-15T18:13:08-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T18:13:08-03:00",
        xf: "2024-02-15T18:19:03-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:19:03-03:00",
        xf: "2024-02-15T18:19:48-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:19:48-03:00",
        xf: "2024-02-15T18:27:08-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T18:27:08-03:00",
        xf: "2024-02-15T18:34:04-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T18:34:04-03:00",
        xf: "2024-02-15T18:46:10-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:46:10-03:00",
        xf: "2024-02-15T18:51:57-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T18:51:57-03:00",
        xf: "2024-02-15T18:56:56-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IUI5129",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T15:27:04-03:00",
        xf: "2024-02-15T15:38:09-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T15:38:09-03:00",
        xf: "2024-02-15T16:02:59-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:03:24-03:00",
        xf: "2024-02-15T16:07:05-03:00",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:07:05-03:00",
        xf: "2024-02-15T16:23:08-03:00",
        yi: 37.657,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:23:08-03:00",
        xf: "2024-02-15T16:28:31-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:28:31-03:00",
        xf: "2024-02-15T16:29:13-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:29:13-03:00",
        xf: "2024-02-15T16:32:12-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T16:32:12-03:00",
        xf: "2024-02-15T16:34:13-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T16:34:13-03:00",
        xf: "2024-02-15T16:41:13-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:41:50-03:00",
        xf: "2024-02-15T16:46:41-03:00",
        yi: 20.86,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:46:41-03:00",
        xf: "2024-02-15T16:49:11-03:00",
        yi: 20.86,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:49:11-03:00",
        xf: "2024-02-15T16:54:49-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5329",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T08:03:07-03:00",
        xf: "2024-02-16T08:08:02-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T08:08:02-03:00",
        xf: "2024-02-16T08:08:44-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T08:08:44-03:00",
        xf: "2024-02-16T08:11:43-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T08:11:43-03:00",
        xf: "2024-02-16T08:13:44-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T08:13:44-03:00",
        xf: "2024-02-16T08:20:44-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T08:20:44-03:00",
        xf: "2024-02-16T08:23:24-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T08:23:24-03:00",
        xf: "2024-02-16T08:23:51-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T08:23:51-03:00",
        xf: "2024-02-16T08:29:29-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5229",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T17:02:48-03:00",
        xf: "2024-02-15T17:08:22-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:08:22-03:00",
        xf: "2024-02-15T17:09:03-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:09:03-03:00",
        xf: "2024-02-15T17:12:03-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T17:12:03-03:00",
        xf: "2024-02-15T17:14:03-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T17:14:03-03:00",
        xf: "2024-02-15T17:20:43-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:20:43-03:00",
        xf: "2024-02-15T17:23:30-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:23:30-03:00",
        xf: "2024-02-15T17:23:57-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:23:57-03:00",
        xf: "2024-02-15T17:29:39-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIU5228",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T13:57:11-03:00",
        xf: "2024-02-15T14:42:09-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-14T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T14:42:09-03:00",
        xf: "2024-02-15T15:02:14-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-14T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T15:03:11-03:00",
        xf: "2024-02-15T16:04:59-03:00",
        yi: 29.982,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-14T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:04:59-03:00",
        xf: "2024-02-15T16:29:29-03:00",
        yi: 29.982,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-14T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:29:29-03:00",
        xf: "2024-02-15T16:34:17-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-14T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2630",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T19:38:16-03:00",
        xf: "2024-02-15T19:43:08-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T19:43:08-03:00",
        xf: "2024-02-15T19:49:03-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T19:49:03-03:00",
        xf: "2024-02-15T19:49:48-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T19:49:48-03:00",
        xf: "2024-02-15T19:57:08-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T19:57:08-03:00",
        xf: "2024-02-15T20:04:04-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T20:04:04-03:00",
        xf: "2024-02-15T20:16:10-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:16:10-03:00",
        xf: "2024-02-15T20:21:57-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T20:21:57-03:00",
        xf: "2024-02-15T20:26:56-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2730",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T20:09:33-03:00",
        xf: "2024-02-15T20:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:14:40-03:00",
        xf: "2024-02-15T20:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:15:49-03:00",
        xf: "2024-02-15T20:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:22:03-03:00",
        xf: "2024-02-15T20:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:28:57-03:00",
        xf: "2024-02-15T20:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T20:30:37-03:00",
        xf: "2024-02-15T20:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T20:32:59-03:00",
        xf: "2024-02-15T20:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:34:17-03:00",
        xf: "2024-02-15T20:55:20-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:55:20-03:00",
        xf: "2024-02-15T21:18:25-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T21:18:25-03:00",
        xf: "2024-02-15T21:25:24-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:25:24-03:00",
        xf: "2024-02-15T21:45:02-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:45:02-03:00",
        xf: "2024-02-15T21:49:50-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2730",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T20:39:33-03:00",
        xf: "2024-02-15T20:44:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:44:25-03:00",
        xf: "2024-02-15T20:50:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T20:50:20-03:00",
        xf: "2024-02-15T20:51:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T20:51:05-03:00",
        xf: "2024-02-15T20:58:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T20:58:25-03:00",
        xf: "2024-02-15T21:05:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T21:05:21-03:00",
        xf: "2024-02-15T21:17:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:17:27-03:00",
        xf: "2024-02-15T21:23:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T21:23:14-03:00",
        xf: "2024-02-15T21:28:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "INI2729",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T12:01:57-03:00",
        xf: "2024-02-15T14:39:38-03:00",
        yi: 7.965,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00:17-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T14:39:38-03:00",
        xf: "2024-02-15T14:45:50-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00:17-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T14:45:50-03:00",
        xf: "2024-02-15T14:46:14-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00:17-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T14:46:14-03:00",
        xf: "2024-02-15T14:52:09-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00:17-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T14:52:09-03:00",
        xf: "2024-02-15T14:57:14-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:00:17-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI2829",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:57:25-03:00",
        xf: "2024-02-15T15:02:37-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T15:02:37-03:00",
        xf: "2024-02-15T15:08:04-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T15:08:04-03:00",
        xf: "2024-02-15T15:08:14-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:08:14-03:00",
        xf: "2024-02-15T15:15:20-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T15:15:20-03:00",
        xf: "2024-02-15T15:21:32-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T15:21:32-03:00",
        xf: "2024-02-15T15:21:56-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T15:21:56-03:00",
        xf: "2024-02-15T15:27:51-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T15:27:51-03:00",
        xf: "2024-02-15T15:32:56-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI2929",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T16:09:36-03:00",
        xf: "2024-02-15T16:14:48-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T16:14:48-03:00",
        xf: "2024-02-15T16:20:15-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T16:20:15-03:00",
        xf: "2024-02-15T16:20:25-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:20:25-03:00",
        xf: "2024-02-15T16:27:31-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T16:27:31-03:00",
        xf: "2024-02-15T16:33:43-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T16:33:43-03:00",
        xf: "2024-02-15T16:34:07-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T16:34:07-03:00",
        xf: "2024-02-15T16:40:02-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T16:40:02-03:00",
        xf: "2024-02-15T16:45:07-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T16:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI3029",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T18:09:46-03:00",
        xf: "2024-02-15T18:14:58-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T18:14:58-03:00",
        xf: "2024-02-15T18:20:25-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T18:20:25-03:00",
        xf: "2024-02-15T18:20:35-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:20:35-03:00",
        xf: "2024-02-15T18:27:41-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T18:27:41-03:00",
        xf: "2024-02-15T18:33:53-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T18:33:53-03:00",
        xf: "2024-02-15T18:34:17-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:34:17-03:00",
        xf: "2024-02-15T18:40:12-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:40:12-03:00",
        xf: "2024-02-15T18:45:17-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T18:00:24-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI3129",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T20:09:57-03:00",
        xf: "2024-02-15T20:15:09-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T20:15:09-03:00",
        xf: "2024-02-15T20:20:36-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T20:20:36-03:00",
        xf: "2024-02-15T20:20:46-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:20:46-03:00",
        xf: "2024-02-15T20:27:52-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T20:27:52-03:00",
        xf: "2024-02-15T20:34:04-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T20:34:04-03:00",
        xf: "2024-02-15T20:34:28-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T20:34:28-03:00",
        xf: "2024-02-15T20:40:23-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T20:40:23-03:00",
        xf: "2024-02-15T20:45:28-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:35-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIY5128",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T16:52:51-03:00",
        xf: "2024-02-15T16:58:43-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:58:43-03:00",
        xf: "2024-02-15T16:59:52-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:59:52-03:00",
        xf: "2024-02-15T17:06:06-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:07:08-03:00",
        xf: "2024-02-15T17:12:03-03:00",
        yi: 16.935,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:12:03-03:00",
        xf: "2024-02-15T17:19:38-03:00",
        yi: 16.935,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T17:19:38-03:00",
        xf: "2024-02-15T17:22:03-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T17:22:03-03:00",
        xf: "2024-02-15T17:22:21-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:22:21-03:00",
        xf: "2024-02-15T17:23:50-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
    ],
  },
  {
    name: "HND9131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T22:10:04-03:00",
        xf: "2024-02-15T22:14:51-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T22:14:51-03:00",
        xf: "2024-02-15T22:20:17-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T22:20:17-03:00",
        xf: "2024-02-15T22:20:28-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:20:28-03:00",
        xf: "2024-02-15T22:27:35-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T22:27:35-03:00",
        xf: "2024-02-15T22:33:29-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T22:33:29-03:00",
        xf: "2024-02-15T22:33:55-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T22:33:55-03:00",
        xf: "2024-02-15T22:39:49-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T22:39:49-03:00",
        xf: "2024-02-15T22:44:53-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:42-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "JDN9530",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T17:08:16-03:00",
        xf: "2024-02-15T17:13:08-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:13:08-03:00",
        xf: "2024-02-15T17:19:03-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T17:19:03-03:00",
        xf: "2024-02-15T17:19:48-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T17:19:48-03:00",
        xf: "2024-02-15T17:27:08-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T17:27:08-03:00",
        xf: "2024-02-15T17:34:04-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T17:34:04-03:00",
        xf: "2024-02-15T17:46:10-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:46:10-03:00",
        xf: "2024-02-15T17:51:57-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T17:51:57-03:00",
        xf: "2024-02-15T18:16:56-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "JDN9630",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T21:09:33-03:00",
        xf: "2024-02-15T21:14:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T21:14:25-03:00",
        xf: "2024-02-15T21:20:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T21:20:20-03:00",
        xf: "2024-02-15T21:21:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T21:21:05-03:00",
        xf: "2024-02-15T21:28:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T21:28:25-03:00",
        xf: "2024-02-15T21:35:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T21:35:21-03:00",
        xf: "2024-02-15T21:47:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:47:27-03:00",
        xf: "2024-02-15T21:53:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T21:53:14-03:00",
        xf: "2024-02-15T22:18:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "HDN9130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T18:38:16-03:00",
        xf: "2024-02-15T18:42:45-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T18:42:45-03:00",
        xf: "2024-02-15T18:48:39-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:48:39-03:00",
        xf: "2024-02-15T18:49:23-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T18:49:23-03:00",
        xf: "2024-02-15T18:56:34-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T18:56:34-03:00",
        xf: "2024-02-15T19:03:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T19:03:21-03:00",
        xf: "2024-02-15T19:15:20-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T19:15:20-03:00",
        xf: "2024-02-15T19:21:05-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T19:21:05-03:00",
        xf: "2024-02-15T19:46:04-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T12:40-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5133",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T21:02:45-03:00",
        xf: "2024-02-16T21:07:40-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T21:07:40-03:00",
        xf: "2024-02-16T21:08:22-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T21:08:22-03:00",
        xf: "2024-02-16T21:11:21-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T21:11:21-03:00",
        xf: "2024-02-16T21:13:22-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T21:13:22-03:00",
        xf: "2024-02-16T21:20:02-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T21:20:02-03:00",
        xf: "2024-02-16T21:22:49-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T21:22:49-03:00",
        xf: "2024-02-16T21:23:16-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T21:23:16-03:00",
        xf: "2024-02-16T21:28:54-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T21:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "BUP4130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T16:31:41-03:00",
        xf: "2024-02-15T16:34:41-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T16:34:41-03:00",
        xf: "2024-02-15T16:54:31-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T16:55:25-03:00",
        xf: "2024-02-15T17:13:04-03:00",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:13:04-03:00",
        xf: "2024-02-15T17:25:43-03:00",
        yi: 37.657,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:27:42-03:00",
        xf: "2024-02-15T17:39:35-03:00",
        yi: 29.982,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T17:39:35-03:00",
        xf: "2024-02-15T17:43:12-03:00",
        yi: 29.982,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:43:12-03:00",
        xf: "2024-02-15T17:46:09-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T15:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  {
    name: "XUP0130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:57:04-03:00",
        xf: "2024-02-15T15:14:59-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T15:14:59-03:00",
        xf: "2024-02-15T15:36:09-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:36:09-03:00",
        xf: "2024-02-15T15:42:27-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:42:27-03:00",
        xf: "2024-02-15T16:05:05-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:05:05-03:00",
        xf: "2024-02-15T16:11:00-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:11:00-03:00",
        xf: "2024-02-15T16:11:27-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:11:27-03:00",
        xf: "2024-02-15T16:14:19-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T14:15-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2829",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T17:09:27-03:00",
        xf: "2024-02-15T17:14:19-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T17:14:19-03:00",
        xf: "2024-02-15T17:34:17-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:34:35-03:00",
        xf: "2024-02-15T17:52:48-03:00",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T17:52:48-03:00",
        xf: "2024-02-15T18:08:51-03:00",
        yi: 37.657,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T18:08:51-03:00",
        xf: "2024-02-15T18:14:14-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T18:14:14-03:00",
        xf: "2024-02-15T18:14:56-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T18:14:56-03:00",
        xf: "2024-02-15T18:17:55-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T18:17:55-03:00",
        xf: "2024-02-15T18:19:56-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T18:19:56-03:00",
        xf: "2024-02-15T18:26:36-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:27:20-03:00",
        xf: "2024-02-15T18:46:51-03:00",
        yi: 20.86,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:46:51-03:00",
        xf: "2024-02-15T18:49:21-03:00",
        yi: 20.86,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T18:49:21-03:00",
        xf: "2024-02-15T18:54:59-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T17:00:26-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI3229",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T00:09:44-03:00",
        xf: "2024-02-16T00:14:56-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T00:14:56-03:00",
        xf: "2024-02-16T00:20:23-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T00:20:23-03:00",
        xf: "2024-02-16T00:20:33-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T00:20:33-03:00",
        xf: "2024-02-16T00:27:39-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T00:27:39-03:00",
        xf: "2024-02-16T00:33:51-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T00:33:51-03:00",
        xf: "2024-02-16T00:34:15-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T00:34:15-03:00",
        xf: "2024-02-16T00:40:10-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T00:40:10-03:00",
        xf: "2024-02-16T00:45:15-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T00:00:22-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI2231",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T06:09:58-03:00",
        xf: "2024-02-16T06:15:10-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T06:15:10-03:00",
        xf: "2024-02-16T06:20:37-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T06:20:37-03:00",
        xf: "2024-02-16T06:20:47-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T06:20:47-03:00",
        xf: "2024-02-16T06:27:53-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T06:27:53-03:00",
        xf: "2024-02-16T06:34:05-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T06:34:05-03:00",
        xf: "2024-02-16T06:34:29-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T06:34:29-03:00",
        xf: "2024-02-16T06:40:24-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T06:40:24-03:00",
        xf: "2024-02-16T06:45:29-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00:36-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "INI3329",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T03:09:52-03:00",
        xf: "2024-02-16T03:15:04-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T03:15:04-03:00",
        xf: "2024-02-16T03:20:31-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T03:20:31-03:00",
        xf: "2024-02-16T03:20:41-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T03:20:41-03:00",
        xf: "2024-02-16T03:27:47-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T03:27:47-03:00",
        xf: "2024-02-16T03:33:59-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T03:33:59-03:00",
        xf: "2024-02-16T03:34:23-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T03:34:23-03:00",
        xf: "2024-02-16T03:40:18-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T03:40:18-03:00",
        xf: "2024-02-16T03:45:23-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T03:00:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T09:02:58-03:00",
        xf: "2024-02-16T09:07:53-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T09:07:53-03:00",
        xf: "2024-02-16T09:08:35-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T09:08:35-03:00",
        xf: "2024-02-16T09:11:34-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T09:11:34-03:00",
        xf: "2024-02-16T09:13:35-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T09:13:35-03:00",
        xf: "2024-02-16T09:20:15-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T09:20:15-03:00",
        xf: "2024-02-16T09:23:02-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T09:23:02-03:00",
        xf: "2024-02-16T09:23:29-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T09:23:29-03:00",
        xf: "2024-02-16T09:29:07-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00:13-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5331",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-17T00:03:24-03:00",
        xf: "2024-02-17T00:08:19-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-17T00:08:19-03:00",
        xf: "2024-02-17T00:09:01-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-17T00:09:01-03:00",
        xf: "2024-02-17T00:12:00-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-17T00:12:00-03:00",
        xf: "2024-02-17T00:14:01-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-17T00:14:01-03:00",
        xf: "2024-02-17T00:20:41-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-17T00:20:41-03:00",
        xf: "2024-02-17T00:23:28-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-17T00:23:28-03:00",
        xf: "2024-02-17T00:23:55-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-17T00:23:55-03:00",
        xf: "2024-02-17T00:29:33-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-17T00:00:39-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IYI5231",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T19:03:18-03:00",
        xf: "2024-02-16T19:08:13-03:00",
        yi: 28.417,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T19:08:13-03:00",
        xf: "2024-02-16T19:08:55-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T19:08:55-03:00",
        xf: "2024-02-16T19:11:54-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T19:11:54-03:00",
        xf: "2024-02-16T19:13:55-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T19:13:55-03:00",
        xf: "2024-02-16T19:20:35-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T19:20:35-03:00",
        xf: "2024-02-16T19:23:22-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T19:23:22-03:00",
        xf: "2024-02-16T19:23:49-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T19:23:49-03:00",
        xf: "2024-02-16T19:29:27-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T19:00:33-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2929",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T20:09:19-03:00",
        xf: "2024-02-15T20:14:11-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T20:14:11-03:00",
        xf: "2024-02-15T20:34:09-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:34:09-03:00",
        xf: "2024-02-15T20:39:46-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T20:39:46-03:00",
        xf: "2024-02-15T20:50:37-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T20:50:37-03:00",
        xf: "2024-02-15T20:56:00-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T20:56:00-03:00",
        xf: "2024-02-15T20:56:42-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T20:56:42-03:00",
        xf: "2024-02-15T20:59:41-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T20:59:41-03:00",
        xf: "2024-02-15T21:01:42-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T21:01:42-03:00",
        xf: "2024-02-15T21:08:22-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:08:22-03:00",
        xf: "2024-02-15T21:11:09-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T21:11:09-03:00",
        xf: "2024-02-15T21:11:36-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T21:11:36-03:00",
        xf: "2024-02-15T21:17:14-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:00:18-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2229",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:27:32-03:00",
        xf: "2024-02-15T15:05:52-03:00",
        yi: 16.935,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T07:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:05:52-03:00",
        xf: "2024-02-15T15:08:22-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T07:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:08:22-03:00",
        xf: "2024-02-15T15:14:00-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T07:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2529",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:43:08-03:00",
        xf: "2024-02-15T14:47:30-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T14:47:30-03:00",
        xf: "2024-02-15T15:12:59-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:13:12-03:00",
        xf: "2024-02-15T15:15:38-03:00",
        yi: 37.657,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:15:38-03:00",
        xf: "2024-02-15T15:32:47-03:00",
        yi: 37.657,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T15:32:47-03:00",
        xf: "2024-02-15T15:38:32-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T15:38:32-03:00",
        xf: "2024-02-15T15:39:13-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:39:13-03:00",
        xf: "2024-02-15T15:42:13-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T15:42:13-03:00",
        xf: "2024-02-15T15:44:13-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T15:44:13-03:00",
        xf: "2024-02-15T15:51:15-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:51:15-03:00",
        xf: "2024-02-15T15:54:01-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:54:01-03:00",
        xf: "2024-02-15T15:54:28-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:54:28-03:00",
        xf: "2024-02-15T16:00:10-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2432",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T10:09:33-03:00",
        xf: "2024-02-16T10:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T10:14:40-03:00",
        xf: "2024-02-16T10:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T10:15:49-03:00",
        xf: "2024-02-16T10:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T10:22:03-03:00",
        xf: "2024-02-16T10:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T10:28:57-03:00",
        xf: "2024-02-16T10:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T10:30:37-03:00",
        xf: "2024-02-16T10:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T10:32:59-03:00",
        xf: "2024-02-16T10:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T10:33:04-03:00",
        xf: "2024-02-16T10:39:29-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T10:39:29-03:00",
        xf: "2024-02-16T10:58:28-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T10:58:28-03:00",
        xf: "2024-02-16T11:05:27-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T11:05:27-03:00",
        xf: "2024-02-16T11:25:05-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T11:25:05-03:00",
        xf: "2024-02-16T11:29:53-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T10:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2729",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T02:09:01-03:00",
        xf: "2024-02-16T02:14:17-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-16T02:14:17-03:00",
        xf: "2024-02-16T02:34:16-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:34:16-03:00",
        xf: "2024-02-16T02:40:11-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:40:11-03:00",
        xf: "2024-02-16T02:51:19-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T02:51:19-03:00",
        xf: "2024-02-16T02:56:56-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T02:56:56-03:00",
        xf: "2024-02-16T02:57:37-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:57:37-03:00",
        xf: "2024-02-16T03:00:37-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T03:00:37-03:00",
        xf: "2024-02-16T03:02:37-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T03:02:37-03:00",
        xf: "2024-02-16T03:09:17-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T03:09:17-03:00",
        xf: "2024-02-16T03:12:04-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T03:12:04-03:00",
        xf: "2024-02-16T03:12:31-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T03:12:31-03:00",
        xf: "2024-02-16T03:18:11-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2231",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T01:09:04-03:00",
        xf: "2024-02-16T01:13:56-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-16T01:13:56-03:00",
        xf: "2024-02-16T01:33:54-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T01:33:54-03:00",
        xf: "2024-02-16T01:39:31-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T01:39:31-03:00",
        xf: "2024-02-16T01:50:22-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T01:50:22-03:00",
        xf: "2024-02-16T01:55:45-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T01:55:45-03:00",
        xf: "2024-02-16T01:56:27-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T01:56:27-03:00",
        xf: "2024-02-16T01:59:26-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T01:59:26-03:00",
        xf: "2024-02-16T02:01:27-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T02:01:27-03:00",
        xf: "2024-02-16T02:08:07-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:08:51-03:00",
        xf: "2024-02-16T02:17:49-03:00",
        yi: 20.86,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:17:49-03:00",
        xf: "2024-02-16T02:20:19-03:00",
        yi: 20.86,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:20:19-03:00",
        xf: "2024-02-16T02:25:57-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T01:00:03-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2331",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T04:09:15-03:00",
        xf: "2024-02-16T04:14:07-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-16T04:14:07-03:00",
        xf: "2024-02-16T04:34:05-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T04:34:05-03:00",
        xf: "2024-02-16T04:39:42-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T04:39:42-03:00",
        xf: "2024-02-16T04:50:33-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T04:50:33-03:00",
        xf: "2024-02-16T04:55:56-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T04:55:56-03:00",
        xf: "2024-02-16T04:56:38-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:56:38-03:00",
        xf: "2024-02-16T04:59:37-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T04:59:37-03:00",
        xf: "2024-02-16T05:01:38-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T05:01:38-03:00",
        xf: "2024-02-16T05:08:18-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T05:08:18-03:00",
        xf: "2024-02-16T05:11:05-03:00",
        yi: 20.86,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T05:11:05-03:00",
        xf: "2024-02-16T05:11:32-03:00",
        yi: 16.935,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T05:11:32-03:00",
        xf: "2024-02-16T05:17:10-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00:14-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2232",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T12:09:33-03:00",
        xf: "2024-02-16T12:14:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T12:14:25-03:00",
        xf: "2024-02-16T12:20:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T12:20:20-03:00",
        xf: "2024-02-16T12:21:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T12:21:05-03:00",
        xf: "2024-02-16T12:28:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T12:28:25-03:00",
        xf: "2024-02-16T12:35:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T12:35:21-03:00",
        xf: "2024-02-16T12:47:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T12:47:27-03:00",
        xf: "2024-02-16T12:53:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T12:53:14-03:00",
        xf: "2024-02-16T12:58:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2332",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T14:09:33-03:00",
        xf: "2024-02-16T14:14:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T14:14:25-03:00",
        xf: "2024-02-16T14:20:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T14:20:20-03:00",
        xf: "2024-02-16T14:21:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T14:21:05-03:00",
        xf: "2024-02-16T14:28:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T14:28:25-03:00",
        xf: "2024-02-16T14:35:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T14:35:21-03:00",
        xf: "2024-02-16T14:47:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T14:47:27-03:00",
        xf: "2024-02-16T14:53:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T14:53:14-03:00",
        xf: "2024-02-16T14:58:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T14:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2532",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T12:09:33-03:00",
        xf: "2024-02-16T12:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T12:14:40-03:00",
        xf: "2024-02-16T12:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T12:15:49-03:00",
        xf: "2024-02-16T12:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T12:22:03-03:00",
        xf: "2024-02-16T12:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T12:28:57-03:00",
        xf: "2024-02-16T12:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T12:30:37-03:00",
        xf: "2024-02-16T12:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T12:32:59-03:00",
        xf: "2024-02-16T12:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T12:33:04-03:00",
        xf: "2024-02-16T12:39:29-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T12:39:29-03:00",
        xf: "2024-02-16T12:58:28-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T12:58:28-03:00",
        xf: "2024-02-16T13:05:27-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T13:05:27-03:00",
        xf: "2024-02-16T13:25:05-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T13:25:05-03:00",
        xf: "2024-02-16T13:29:53-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T12:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2132",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T02:09:33-03:00",
        xf: "2024-02-16T02:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:14:40-03:00",
        xf: "2024-02-16T02:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:15:49-03:00",
        xf: "2024-02-16T02:21:48-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:21:48-03:00",
        xf: "2024-02-16T02:28:42-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T02:28:42-03:00",
        xf: "2024-02-16T02:30:22-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T02:30:22-03:00",
        xf: "2024-02-16T02:32:44-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T02:32:44-03:00",
        xf: "2024-02-16T02:32:49-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:34:02-03:00",
        xf: "2024-02-16T02:55:47-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T02:55:47-03:00",
        xf: "2024-02-16T03:18:52-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T03:18:52-03:00",
        xf: "2024-02-16T03:25:51-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T03:25:51-03:00",
        xf: "2024-02-16T03:45:29-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T03:45:29-03:00",
        xf: "2024-02-16T03:50:17-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T02:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2432",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T16:09:33-03:00",
        xf: "2024-02-16T16:14:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T16:14:25-03:00",
        xf: "2024-02-16T16:20:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T16:20:20-03:00",
        xf: "2024-02-16T16:21:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T16:21:05-03:00",
        xf: "2024-02-16T16:28:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T16:28:25-03:00",
        xf: "2024-02-16T16:35:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T16:35:21-03:00",
        xf: "2024-02-16T16:47:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T16:47:27-03:00",
        xf: "2024-02-16T16:53:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T16:53:14-03:00",
        xf: "2024-02-16T16:58:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T16:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2232",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T04:09:33-03:00",
        xf: "2024-02-16T04:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:14:40-03:00",
        xf: "2024-02-16T04:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:15:49-03:00",
        xf: "2024-02-16T04:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T04:22:03-03:00",
        xf: "2024-02-16T04:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T04:28:57-03:00",
        xf: "2024-02-16T04:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T04:30:37-03:00",
        xf: "2024-02-16T04:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T04:32:59-03:00",
        xf: "2024-02-16T04:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:34:17-03:00",
        xf: "2024-02-16T04:55:20-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:55:20-03:00",
        xf: "2024-02-16T05:18:25-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T05:18:25-03:00",
        xf: "2024-02-16T05:25:24-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T05:25:24-03:00",
        xf: "2024-02-16T05:45:02-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T05:45:02-03:00",
        xf: "2024-02-16T05:49:50-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2132",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T04:09:33-03:00",
        xf: "2024-02-16T04:14:25-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T04:14:25-03:00",
        xf: "2024-02-16T04:20:20-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T04:20:20-03:00",
        xf: "2024-02-16T04:21:05-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T04:21:05-03:00",
        xf: "2024-02-16T04:28:25-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T04:28:25-03:00",
        xf: "2024-02-16T04:35:21-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T04:35:21-03:00",
        xf: "2024-02-16T04:47:27-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T04:47:27-03:00",
        xf: "2024-02-16T04:53:14-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T04:53:14-03:00",
        xf: "2024-02-16T04:58:13-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T04:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2632",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T18:09:33-03:00",
        xf: "2024-02-16T18:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T18:14:40-03:00",
        xf: "2024-02-16T18:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T18:15:49-03:00",
        xf: "2024-02-16T18:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T18:22:03-03:00",
        xf: "2024-02-16T18:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T18:28:57-03:00",
        xf: "2024-02-16T18:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T18:30:37-03:00",
        xf: "2024-02-16T18:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T18:32:59-03:00",
        xf: "2024-02-16T18:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T18:33:04-03:00",
        xf: "2024-02-16T18:39:29-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T18:39:29-03:00",
        xf: "2024-02-16T18:58:28-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T18:58:28-03:00",
        xf: "2024-02-16T19:05:27-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T19:05:27-03:00",
        xf: "2024-02-16T19:25:05-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T19:25:05-03:00",
        xf: "2024-02-16T19:29:53-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T18:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIN2330",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T15:00:36-03:00",
        xf: "2024-02-15T15:05:28-03:00",
        yi: 3.957,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:05:28-03:00",
        xf: "2024-02-15T15:11:15-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T15:11:15-03:00",
        xf: "2024-02-15T15:16:14-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T06:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "INI2331",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T09:09:22-03:00",
        xf: "2024-02-16T09:14:34-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T09:14:34-03:00",
        xf: "2024-02-16T09:20:01-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-16T09:20:01-03:00",
        xf: "2024-02-16T09:20:11-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-16T09:20:11-03:00",
        xf: "2024-02-16T09:27:17-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-16T09:27:17-03:00",
        xf: "2024-02-16T09:33:29-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-16T09:33:29-03:00",
        xf: "2024-02-16T09:33:53-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T09:33:53-03:00",
        xf: "2024-02-16T09:39:48-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-16T09:39:48-03:00",
        xf: "2024-02-16T09:44:53-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T09:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2732",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T20:09:33-03:00",
        xf: "2024-02-16T20:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T20:14:40-03:00",
        xf: "2024-02-16T20:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T20:15:49-03:00",
        xf: "2024-02-16T20:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T20:22:03-03:00",
        xf: "2024-02-16T20:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T20:28:57-03:00",
        xf: "2024-02-16T20:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T20:30:37-03:00",
        xf: "2024-02-16T20:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T20:32:59-03:00",
        xf: "2024-02-16T20:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T20:33:04-03:00",
        xf: "2024-02-16T20:39:29-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T20:39:29-03:00",
        xf: "2024-02-16T20:58:28-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T20:58:28-03:00",
        xf: "2024-02-16T21:05:27-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T21:05:27-03:00",
        xf: "2024-02-16T21:25:05-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T21:25:05-03:00",
        xf: "2024-02-16T21:29:53-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T20:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IIU2332",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T08:09:33-03:00",
        xf: "2024-02-16T08:14:40-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T08:14:40-03:00",
        xf: "2024-02-16T08:15:49-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-16T08:15:49-03:00",
        xf: "2024-02-16T08:22:03-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T08:22:03-03:00",
        xf: "2024-02-16T08:28:57-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-16T08:28:57-03:00",
        xf: "2024-02-16T08:30:37-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-16T08:30:37-03:00",
        xf: "2024-02-16T08:32:59-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T08:32:59-03:00",
        xf: "2024-02-16T08:33:04-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T08:33:04-03:00",
        xf: "2024-02-16T08:39:29-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T08:39:29-03:00",
        xf: "2024-02-16T08:58:28-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T08:58:28-03:00",
        xf: "2024-02-16T09:05:27-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T09:05:27-03:00",
        xf: "2024-02-16T09:25:05-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-16T09:25:05-03:00",
        xf: "2024-02-16T09:29:53-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-16T08:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "INI2131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T22:40:08-03:00",
        xf: "2024-02-15T22:45:20-03:00",
        yi: 0,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T22:45:20-03:00",
        xf: "2024-02-15T22:50:47-03:00",
        yi: 0,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T22:50:47-03:00",
        xf: "2024-02-15T22:50:57-03:00",
        yi: 2.5,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:50:57-03:00",
        xf: "2024-02-15T22:58:03-03:00",
        yi: 3.957,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T22:58:03-03:00",
        xf: "2024-02-15T23:04:15-03:00",
        yi: 7.965,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T23:04:15-03:00",
        xf: "2024-02-15T23:04:39-03:00",
        yi: 9.935,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T23:04:39-03:00",
        xf: "2024-02-15T23:10:34-03:00",
        yi: 12.057,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T23:10:34-03:00",
        xf: "2024-02-15T23:15:39-03:00",
        yi: 12.243,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:46-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "IIN5230",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T17:38:16-03:00",
        xf: "2024-02-15T17:43:08-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T17:43:08-03:00",
        xf: "2024-02-15T17:49:03-03:00",
        yi: 13.751,
        yf: 12.243,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG-ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T17:49:03-03:00",
        xf: "2024-02-15T17:49:48-03:00",
        yi: 12.243,
        yf: 12.057,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB",
          },
        ],
      },
      {
        xi: "2024-02-15T17:49:48-03:00",
        xf: "2024-02-15T17:57:08-03:00",
        yi: 12.057,
        yf: 9.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM10-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM10",
          },
        ],
      },
      {
        xi: "2024-02-15T17:57:08-03:00",
        xf: "2024-02-15T18:04:04-03:00",
        yi: 9.935,
        yf: 7.965,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICB-KM8-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICB-KM8",
          },
        ],
      },
      {
        xi: "2024-02-15T18:04:04-03:00",
        xf: "2024-02-15T18:16:10-03:00",
        yi: 7.965,
        yf: 3.957,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA",
          },
        ],
      },
      {
        xi: "2024-02-15T18:16:10-03:00",
        xf: "2024-02-15T18:21:57-03:00",
        yi: 3.957,
        yf: 2.5,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IQA-ISN-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IQA-ISN",
          },
        ],
      },
      {
        xi: "2024-02-15T18:21:57-03:00",
        xf: "2024-02-15T18:26:56-03:00",
        yi: 2.5,
        yf: 0,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ISN-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T08:00:07-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ISN",
          },
        ],
      },
    ],
  },
  {
    name: "BDU3232",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-16T03:15:38-03:00",
        xf: "2024-02-16T03:16:02-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-16T03:16:02-03:00",
        xf: "2024-02-16T03:16:11-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-16T03:16:11-03:00",
        xf: "2024-02-16T03:20:43-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T03:20:43-03:00",
        xf: "2024-02-16T03:37:14-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-16T03:37:14-03:00",
        xf: "2024-02-16T03:40:20-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T21:30-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "IIU8130",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T14:01:15-03:00",
        xf: "2024-02-15T14:41:18-03:00",
        yi: 16.935,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-5",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T14:41:18-03:00",
        xf: "2024-02-15T15:25:55-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:14:30-03:00",
        xf: "2024-02-15T15:22:43-03:00",
        yi: 20.86,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T15:22:43-03:00",
        xf: "2024-02-15T15:28:58-03:00",
        yi: 20.86,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T15:28:58-03:00",
        xf: "2024-02-15T15:28:50-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T15:30:40-03:00",
        xf: "2024-02-15T16:25:08-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T16:25:08-03:00",
        xf: "2024-02-15T16:46:44-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T16:46:44-03:00",
        xf: "2024-02-15T16:49:50-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T13:55-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
  {
    name: "IIY5230",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T19:09:52-03:00",
        xf: "2024-02-15T19:14:59-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T19:14:59-03:00",
        xf: "2024-02-15T19:16:08-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T19:16:08-03:00",
        xf: "2024-02-15T19:22:22-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T19:22:22-03:00",
        xf: "2024-02-15T19:29:16-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T19:29:16-03:00",
        xf: "2024-02-15T19:30:56-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T19:30:56-03:00",
        xf: "2024-02-15T19:33:18-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T19:33:18-03:00",
        xf: "2024-02-15T19:33:23-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T19:33:23-03:00",
        xf: "2024-02-15T19:35:53-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-VLI-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T19:00:19-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
    ],
  },
  {
    name: "IIU5132",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T22:10:20-03:00",
        xf: "2024-02-15T22:15:27-03:00",
        yi: 13.751,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T22:15:27-03:00",
        xf: "2024-02-15T22:16:36-03:00",
        yi: 13.751,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T22:16:36-03:00",
        xf: "2024-02-15T22:22:50-03:00",
        yi: 16.3,
        yf: 16.935,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:22:50-03:00",
        xf: "2024-02-15T22:29:44-03:00",
        yi: 16.935,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:29:44-03:00",
        xf: "2024-02-15T22:31:24-03:00",
        yi: 20.86,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T22:31:24-03:00",
        xf: "2024-02-15T22:33:46-03:00",
        yi: 22.642,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T22:33:46-03:00",
        xf: "2024-02-15T22:33:51-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T22:35:04-03:00",
        xf: "2024-02-15T22:55:19-03:00",
        yi: 28.304,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T22:55:19-03:00",
        xf: "2024-02-15T23:18:24-03:00",
        yi: 28.304,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T23:18:24-03:00",
        xf: "2024-02-15T23:25:23-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T23:25:23-03:00",
        xf: "2024-02-15T23:45:01-03:00",
        yi: 35.997,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T23:45:01-03:00",
        xf: "2024-02-15T23:49:49-03:00",
        yi: 37.657,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00:47-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
    ],
  },
  {
    name: "IUI2131",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T22:09:01-03:00",
        xf: "2024-02-15T22:13:53-03:00",
        yi: 42.896,
        yf: 42.896,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ",
          },
        ],
      },
      {
        xi: "2024-02-15T22:13:53-03:00",
        xf: "2024-02-15T22:33:51-03:00",
        yi: 42.896,
        yf: 37.657,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ICZ-IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ICZ-IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:33:51-03:00",
        xf: "2024-02-15T22:39:28-03:00",
        yi: 37.657,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
      {
        xi: "2024-02-15T22:39:28-03:00",
        xf: "2024-02-15T22:50:19-03:00",
        yi: 35.997,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T22:50:19-03:00",
        xf: "2024-02-15T22:55:42-03:00",
        yi: 29.982,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T22:55:42-03:00",
        xf: "2024-02-15T22:56:24-03:00",
        yi: 28.417,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T22:56:24-03:00",
        xf: "2024-02-15T22:59:23-03:00",
        yi: 28.304,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-6",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T22:59:23-03:00",
        xf: "2024-02-15T23:01:24-03:00",
        yi: 23.142,
        yf: 22.642,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-E-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-E",
          },
        ],
      },
      {
        xi: "2024-02-15T23:01:24-03:00",
        xf: "2024-02-15T23:08:04-03:00",
        yi: 22.642,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-IAA-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T23:08:48-03:00",
        xf: "2024-02-15T23:17:13-03:00",
        yi: 20.86,
        yf: 20.86,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-3",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-IAA",
          },
        ],
      },
      {
        xi: "2024-02-15T23:17:13-03:00",
        xf: "2024-02-15T23:19:43-03:00",
        yi: 20.86,
        yf: 16.3,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IAA-ZPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IAA-ZPG",
          },
        ],
      },
      {
        xi: "2024-02-15T23:19:43-03:00",
        xf: "2024-02-15T23:25:21-03:00",
        yi: 16.3,
        yf: 13.751,
        dash: true,
        info: [
          {
            label: "SB",
            value: "ZPG-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T22:00-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "ZPG",
          },
        ],
      },
    ],
  },
  {
    name: "CYU0129",
    color: "#800000",
    segments: [
      {
        xi: "2024-02-15T21:13:50-03:00",
        xf: "2024-02-15T21:19:02-03:00",
        yi: 23.142,
        yf: 23.142,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IPG-2-16",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IPG-2",
          },
        ],
      },
      {
        xi: "2024-02-15T21:19:02-03:00",
        xf: "2024-02-15T21:19:19-03:00",
        yi: 23.142,
        yf: 28.304,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-IPG-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF-IPG",
          },
        ],
      },
      {
        xi: "2024-02-15T21:19:19-03:00",
        xf: "2024-02-15T21:25:24-03:00",
        yi: 28.304,
        yf: 28.417,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IUF-2",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T21:25:24-03:00",
        xf: "2024-02-15T21:45:29-03:00",
        yi: 28.417,
        yf: 29.982,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-IUF-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA-IUF",
          },
        ],
      },
      {
        xi: "2024-02-15T21:45:29-03:00",
        xf: "2024-02-15T21:48:35-03:00",
        yi: 29.982,
        yf: 35.997,
        dash: true,
        info: [
          {
            label: "SB",
            value: "IBA-SUZ-1",
          },
          {
            label: "Data trem pronto",
            value: "2024-02-15T20:59-03:00[America/Sao_Paulo]",
          },
          {
            label: "Destino",
            value: "IBA",
          },
        ],
      },
    ],
  },
];

const restricts = [
  {
    name: "INTERDICAO ",
    color: "#008000CC",
    xi: "2024-02-15T08:38:03-03:00",
    xf: "2024-02-16T20:59:59-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1",
      },
    ],
  },
  {
    name: "INTERDICAO ",
    color: "#008000CC",
    xi: "2024-02-15T08:38:03-03:00",
    xf: "2024-02-15T16:00:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1, IPG-2",
      },
    ],
  },
  {
    name: "INTERDICAO ",
    color: "#008000CC",
    xi: "2024-02-15T08:38:03-03:00",
    xf: "2024-02-15T14:34:06-03:00",
    yi: 9.935,
    yf: 7.965,
    info: [
      {
        label: "SB",
        value: "ICB-KM10-1, ICB-KM8-1, ICB-KM8-IQA-1",
      },
    ],
  },
  {
    name: "INTERDICAO ",
    color: "#008000CC",
    xi: "2024-02-15T14:09:00-03:00",
    xf: "2024-02-15T15:00:00-03:00",
    yi: 3.957,
    yf: 4.12,
    info: [
      {
        label: "SB",
        value: "IQA-1, IQA-2",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-15T18:30:00-03:00",
    xf: "2024-02-15T19:00:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1",
      },
    ],
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2024-02-16T04:00:00-03:00",
    xf: "2024-02-16T20:00:00-03:00",
    yi: 12.243,
    yf: 13.751,
    info: [
      {
        label: "SB",
        value: "ZPG-ICB-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T05:00:00-03:00",
    xf: "2024-02-16T05:30:00-03:00",
    yi: 12.243,
    yf: 13.751,
    info: [
      {
        label: "SB",
        value: "ZPG-ICB-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T05:00:00-03:00",
    xf: "2024-02-16T06:00:00-03:00",
    yi: 20.86,
    yf: 22.642,
    info: [
      {
        label: "SB",
        value: "IPG-IAA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:15:00-03:00",
    yi: 35.997,
    yf: 37.657,
    info: [
      {
        label: "SB",
        value: "IBA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-3",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 35.997,
    yf: 37.657,
    info: [
      {
        label: "SB",
        value: "IBA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 12.057,
    yf: 12.243,
    info: [
      {
        label: "SB",
        value: "ICB-2",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 3.957,
    yf: 4.12,
    info: [
      {
        label: "SB",
        value: "IQA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T06:30:00-03:00",
    yi: 29.287,
    yf: 29.882,
    info: [
      {
        label: "SB",
        value: "IUF-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T06:00:00-03:00",
    xf: "2024-02-16T07:00:00-03:00",
    yi: 29.882,
    yf: 35.997,
    info: [
      {
        label: "SB",
        value: "IBA-IUF-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T07:00:00-03:00",
    xf: "2024-02-16T07:30:00-03:00",
    yi: 13.751,
    yf: 16.3,
    info: [
      {
        label: "SB",
        value: "ZPG-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T07:00:00-03:00",
    xf: "2024-02-16T07:30:00-03:00",
    yi: 42.896,
    yf: 45.304,
    info: [
      {
        label: "SB",
        value: "ICZ-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T07:00:00-03:00",
    xf: "2024-02-16T08:00:00-03:00",
    yi: 29.882,
    yf: 35.997,
    info: [
      {
        label: "SB",
        value: "IBA-IUF-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T07:00:00-03:00",
    xf: "2024-02-16T08:30:00-03:00",
    yi: 12.243,
    yf: 13.751,
    info: [
      {
        label: "SB",
        value: "ZPG-ICB-2",
      },
    ],
  },
  {
    name: "INTERDICAO ",
    color: "#FF8000CC",
    xi: "2024-02-16T07:00:00-03:00",
    xf: "2024-02-16T10:00:00-03:00",
    yi: 35.997,
    yf: 37.657,
    info: [
      {
        label: "SB",
        value: "IBA-3, IBA-SUZ-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T08:00:00-03:00",
    xf: "2024-02-16T08:15:00-03:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T08:30:00-03:00",
    xf: "2024-02-16T09:30:00-03:00",
    yi: 16.935,
    yf: 18.704,
    info: [
      {
        label: "SB",
        value: "IAA-5",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T08:30:00-03:00",
    xf: "2024-02-16T09:30:00-03:00",
    yi: 37.657,
    yf: 42.896,
    info: [
      {
        label: "SB",
        value: "ICZ-IBA-1",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T09:30:00-03:00",
    xf: "2024-02-16T10:00:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1, IPG-2",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T10:00:00-03:00",
    xf: "2024-02-16T11:00:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1, IPG-2",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T11:00:00-03:00",
    xf: "2024-02-16T12:30:00-03:00",
    yi: 12.243,
    yf: 13.751,
    info: [
      {
        label: "SB",
        value: "ZPG-ICB-2",
      },
    ],
  },
  {
    name: "CONDICIONAL ",
    color: "#FFFF00CC",
    xi: "2024-02-16T18:30:00-03:00",
    xf: "2024-02-16T19:00:00-03:00",
    yi: 26.642,
    yf: 28.304,
    info: [
      {
        label: "SB",
        value: "IPG-1",
      },
    ],
  },
];

export const GHTChartMock = {
  yLabels,
  database,
  restricts,
  data,
};
