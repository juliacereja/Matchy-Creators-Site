export type Campaign = {
  brand: string;
  title: string;
  spots: number;
  deadline: string;
  match: number;
  fee: string;
  deliverables: string;
};

// Campanhas fictícias usadas só nos mockups
export const demoCampaigns: Campaign[] = [
  {
    brand: "Aurora Beauty",
    title: "Lançamento de blush líquido",
    spots: 6,
    deadline: "até 28 ago",
    match: 94,
    fee: "R$ 450",
    deliverables: "1 Reels + 3 stories",
  },
  {
    brand: "Flor de Sal",
    title: "Rotina de skincare noturna",
    spots: 4,
    deadline: "até 12 set",
    match: 88,
    fee: "R$ 380",
    deliverables: "1 vídeo UGC de 30s",
  },
  {
    brand: "Cacho Livre",
    title: "Finalizador para cachos 3C",
    spots: 8,
    deadline: "até 20 set",
    match: 91,
    fee: "R$ 520",
    deliverables: "2 vídeos UGC + fotos",
  },
];
