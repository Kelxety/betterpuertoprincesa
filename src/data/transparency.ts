// Figures are sourced directly from the City Government of Puerto Princesa's
// official FY2026 Annual Budget Report (2026-Annual-Budget-Report-ABR-Annual.xlsx,
// puertoprincesa.ph/full-disclosure-government-transparency-new-v2) and the
// General Appropriations Ordinance. Real, cited figures — do not fabricate
// or update without a source. The raw numbers live in ./city-budget.json,
// mirrored after how transparency.bettergov.ph publishes its own budget
// aggregates as flat JSON (metadata + data).
import cityBudgetData from './city-budget.json';

export const cityBudget = {
  year: cityBudgetData.metadata.year,
  totalAppropriations: cityBudgetData.totalAppropriations,
  totalCurrentOperatingExpenditures:
    cityBudgetData.totalCurrentOperatingExpenditures,
  totalCapitalOutlay: cityBudgetData.totalCapitalOutlay,
  sectors: cityBudgetData.sectors,
  nationalTaxAllotment: cityBudgetData.nationalTaxAllotment,
  disasterFund: cityBudgetData.disasterFund,
  source: cityBudgetData.metadata.source,
  sourceUrl: cityBudgetData.metadata.sourceUrl,
};

export const officialDocuments = [
  {
    label: 'FY2026 Annual Budget Report',
    url: 'https://puertoprincesa.ph/wp-content/uploads/2026/01/2026-Annual-Budget-Report-ABR-Annual.xlsx',
  },
  {
    label: 'FY2025 Annual Budget',
    url: 'https://puertoprincesa.ph/wp-content/uploads/2025/09/2025-Annual-Budget.xlsx',
  },
  {
    label: 'General Appropriations Ordinance No. 1-2025',
    url: 'https://puertoprincesa.ph/wp-content/uploads/2025/09/GAO-No.-1-2024-resized.pdf',
  },
  {
    label: 'Q4 2025 Statement of Receipts and Expenditures',
    url: 'https://puertoprincesa.ph/wp-content/uploads/2026/02/4th-Statement-of-Receipts-and-Expenditures-SRE-Quarterly.xlsx',
  },
  {
    label: 'Full Disclosure & Government Transparency Portal',
    url: 'https://puertoprincesa.ph/full-disclosure-government-transparency-new-v2/',
  },
];

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
