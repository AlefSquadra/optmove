import type { YardOccupancyData, YardOccupancyLine } from "./YardOccupancy";
import dayjs from "dayjs";

export const mockYardLines: YardOccupancyLine[] = [
  {
    id: "1",
    nomeVia: "Linha 1",
    ordem: 1,
    patio: "Pátio A",
  },
  {
    id: "2",
    nomeVia: "Linha 2",
    ordem: 2,
    patio: "Pátio A",
  },
  {
    id: "3",
    nomeVia: "Linha 3",
    ordem: 3,
    patio: "Pátio A",
  },
  {
    id: "4",
    nomeVia: "Desvio 1",
    ordem: 4,
    patio: "Pátio B",
  },
  {
    id: "5",
    nomeVia: "Desvio 2",
    ordem: 5,
    patio: "Pátio B",
  },
  {
    id: "6",
    nomeVia: "Linha Principal",
    ordem: 6,
    patio: "Pátio C",
  },
];

export const generateMockYardOccupancies = (baseDate: Date): YardOccupancyData[] => {
  const base = dayjs(baseDate);

  return [
    {
      id: "occ-1",
      trainId: "train-1",
      nomeVia: "Linha 1",
      dataInicio: base.add(2, "hour").toISOString(),
      dataFim: base.add(3.5, "hour").toISOString(),
      trainPrefixo: "XPT-001",
      trainCor: "#FF6B6B",
      status: "realizado",
    },
    {
      id: "occ-2",
      trainId: "train-2",
      nomeVia: "Linha 1",
      dataInicio: base.add(4, "hour").toISOString(),
      dataFim: base.add(5.25, "hour").toISOString(),
      trainPrefixo: "CRG-022",
      trainCor: "#4ECDC4",
      status: "planejado",
    },
    {
      id: "occ-3",
      trainId: "train-3",
      nomeVia: "Linha 2",
      dataInicio: base.add(2.5, "hour").toISOString(),
      dataFim: base.add(4, "hour").toISOString(),
      trainPrefixo: "PSG-101",
      trainCor: "#45B7D1",
      status: "realizado",
    },
    {
      id: "occ-4",
      trainId: "train-4",
      nomeVia: "Linha 2",
      dataInicio: base.add(4.5, "hour").toISOString(),
      dataFim: base.add(6, "hour").toISOString(),
      trainPrefixo: "SVC-205",
      trainCor: "#F7B731",
      status: "em_andamento",
    },
    {
      id: "occ-5",
      trainId: "train-5",
      nomeVia: "Linha 3",
      dataInicio: base.add(3, "hour").toISOString(),
      dataFim: base.add(4.75, "hour").toISOString(),
      trainPrefixo: "EXP-333",
      trainCor: "#A55EEA",
      status: "realizado",
    },
    {
      id: "occ-6",
      trainId: "train-6",
      nomeVia: "Desvio 1",
      dataInicio: base.add(1.75, "hour").toISOString(),
      dataFim: base.add(3.25, "hour").toISOString(),
      trainPrefixo: "MNT-456",
      trainCor: "#26C485",
      status: "realizado",
    },
    {
      id: "occ-7",
      trainId: "train-7",
      nomeVia: "Desvio 1",
      dataInicio: base.add(5, "hour").toISOString(),
      dataFim: base.add(6.5, "hour").toISOString(),
      trainPrefixo: "LOG-789",
      trainCor: "#FF8C42",
      status: "planejado",
    },
    {
      id: "occ-8",
      trainId: "train-8",
      nomeVia: "Desvio 2",
      dataInicio: base.add(2.25, "hour").toISOString(),
      dataFim: base.add(3.75, "hour").toISOString(),
      trainPrefixo: "TRF-012",
      trainCor: "#E74C3C",
      status: "realizado",
    },
    {
      id: "occ-9",
      trainId: "train-9",
      nomeVia: "Linha Principal",
      dataInicio: base.add(1.5, "hour").toISOString(),
      dataFim: base.add(2.5, "hour").toISOString(),
      trainPrefixo: "EXP-555",
      trainCor: "#3498DB",
      status: "realizado",
    },
    {
      id: "occ-10",
      trainId: "train-10",
      nomeVia: "Linha Principal",
      dataInicio: base.add(3.5, "hour").toISOString(),
      dataFim: base.add(5, "hour").toISOString(),
      trainPrefixo: "INT-777",
      trainCor: "#9B59B6",
      status: "em_andamento",
    },
  ];
};

export const mockYardOccupancies: YardOccupancyData[] = generateMockYardOccupancies(new Date());
