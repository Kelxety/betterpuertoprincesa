// Sourced from the BetterPuertoPrincesa.org civic project
// (github.com/BetterPuertoPrincesa/BetterPuertoPrincesa), data/*.json —
// real, cited figures. Do not fabricate or update without a source.

export const demographics = {
  city: 'Puerto Princesa',
  province: 'Palawan',
  region: 'MIMAROPA (Region IV-B)',
  population: {
    total: 307079,
    year: 2020,
    source: 'PSA Census',
  },
  landAreaKm2: 2381.02,
  barangayCount: 66,
  incomeClass: '1st Class Highly Urbanized City',
  barangays: [
    'Babuyan',
    'Bacungan',
    'Bagong Bayan',
    'Bagong Pag-asa',
    'Bagong Sikat',
    'Bagong Silang',
    'Bahile',
    'Bancao-bancao',
    'Barangay ng mga Mangingisda',
    'Binduyan',
    'Buenavista',
    'Cabayugan',
    'Concepcion',
    'Inagawan',
    'Inagawan Sub-Colony',
    'Irawan',
    'Iwahig',
    'Kalipay',
    'Kamuning',
    'Langogan',
    'Liwanag',
    'Lucbuan',
    'Luzviminda',
    'Mabuhay',
    'Macarascas',
    'Magkakaibigan',
    'Maligaya',
    'Manalo',
    'Mandaragat',
    'Manggahan',
    'Maningning',
    'Maoyon',
    'Marufinas',
    'Maruyogon',
    'Masigla',
    'Masikap',
    'Masipag',
    'Matahimik',
    'Matiyaga',
    'Maunlad',
    'Milagrosa',
    'Model',
    'Montible',
    'Napsan',
    'New Panggangan',
    'Pagkakaisa',
    'Princesa',
    'Salvacion',
    'San Jose',
    'San Manuel',
    'San Miguel',
    'San Pedro',
    'San Rafael',
    'Santa Cruz',
    'Santa Lourdes',
    'Santa Lucia',
    'Santa Monica',
    'Seaside',
    'Sicsican',
    'Simpocan',
    'Tagabinit',
    'Tagburos',
    'Tagumpay',
    'Tanabag',
    'Tanglaw',
    'Tiniguiban',
  ],
};

export const competitiveIndex = {
  title: 'Puerto Princesa Competitive Index',
  description:
    'Annual competitiveness indicators measuring local economic performance',
  source:
    'Cities and Municipalities Competitiveness Index (CMCI), cmci.dti.gov.ph',
  overallRank: 16,
  year: 2024,
  pillars: [
    { name: 'Economic Dynamism', rank: 30, score: 2.7949 },
    { name: 'Government Efficiency', rank: 21, score: 10.3604 },
    { name: 'Infrastructure', rank: 8, score: 7.7017 },
    { name: 'Resiliency', rank: 13, score: 12.0957 },
    { name: 'Innovation', rank: 25, score: 7.2774 },
  ],
};

export const fiscalTransparency = {
  year: 2025,
  totalIncome: 4_125_800_000,
  totalExpenditure: 4_125_800_000,
  source:
    'General Appropriations Ordinance No. 1-2025, City Government of Puerto Princesa',
};

// 6 of 19 total flood-control/drainage projects are individually itemized
// with sourced costs; the remaining 14 are not yet itemized in available
// reporting. totalCost/totalProjects reflect the reported aggregate for
// all 19, not just the ones listed here.
interface DpwhProject {
  name: string;
  location: string;
  category: string;
  cost: number | null;
  status?: string;
  contractor?: string;
}

export const dpwhProjects: {
  summary: {
    totalProjects: number;
    totalCost: number;
    implementingAgency: string;
  };
  source: string;
  projects: DpwhProject[];
} = {
  summary: {
    totalProjects: 19,
    totalCost: 885_300_000,
    implementingAgency: 'DPWH Palawan 3rd District Engineering Office',
  },
  source:
    'sumbongsapangulo.ph public flood-control tracker, via Palawan Daily News',
  projects: [
    {
      name: 'Construction of Riverbank Protection Structure, Irawan River (Downstream)',
      location: 'Barangay Irawan',
      category: 'Flood Control and Drainage',
      cost: 212_200_000,
    },
    {
      name: 'Construction of Riverbank Protection Structure, Irawan River (Upstream)',
      location: 'Barangay Irawan',
      category: 'Flood Control and Drainage',
      cost: 194_900_000,
    },
    {
      name: 'River Waterway Enhancement Structure, Irawan River (Downstream, Left Side)',
      location: 'Barangay Irawan',
      category: 'Flood Control and Drainage',
      cost: 17_300_000,
    },
    {
      name: 'River Waterway Enhancement Structure, Irawan River (Downstream, Right Side)',
      location: 'Barangay Irawan',
      category: 'Flood Control and Drainage',
      cost: 17_300_000,
    },
    {
      name: 'River Waterway Enhancement Structure, Irawan River (Upstream)',
      location: 'Barangay Irawan',
      category: 'Flood Control and Drainage',
      cost: 17_300_000,
    },
    {
      name: 'Construction of DPWH Palawan 3rd DEO Annex Building',
      location: 'Puerto Princesa City',
      category: 'Building Construction / Civil Works',
      cost: null,
      status: '100% complete',
      contractor: 'T.N. Ramos Construction & Development Corp.',
    },
  ],
};
