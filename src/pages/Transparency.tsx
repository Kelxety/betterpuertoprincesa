import {
  Landmark,
  Wallet,
  PiggyBank,
  ShieldAlert,
  HardHat,
  FileText,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  cityBudget,
  officialDocuments,
  dpwhProjects,
} from '../data/transparency';

const numberFormat = new Intl.NumberFormat('en-US');
const currencyFormat = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
});

const maxSectorAmount = Math.max(...cityBudget.sectors.map(s => s.amount));

const Transparency: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SEO
        title="Budget Transparency"
        description="Puerto Princesa City's official budget, National Tax Allotment, and infrastructure spending — sourced from the City Government's Full Disclosure documents."
        keywords="transparency, budget, national tax allotment, NTA, GAO, Puerto Princesa, DPWH projects, public spending"
      />
      <main className="flex-grow">
        <Section className="!py-6 !bg-gray-50">
          <Breadcrumbs />
        </Section>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Heading level={1} className="!text-white !mb-2">
              {t('transparency.title')}
            </Heading>
            <Text className="!text-primary-50 !max-w-2xl">
              {t('transparency.subtitle')}
            </Text>
          </div>
        </div>

        <Section>
          <div className="flex items-center gap-2 mb-2">
            <Landmark className="h-6 w-6 text-primary-600" strokeWidth={2.5} />
            <Heading level={2} className="!mb-0">
              {t('transparency.budgetTitle', { year: cityBudget.year })}
            </Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500">
                {t('transparency.totalAppropriations')}
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {currencyFormat.format(cityBudget.totalAppropriations)}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500">
                {t('transparency.currentOperating')}
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {currencyFormat.format(
                  cityBudget.totalCurrentOperatingExpenditures
                )}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500">
                {t('transparency.capitalOutlay')}
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {currencyFormat.format(cityBudget.totalCapitalOutlay)}
              </div>
            </div>
          </div>

          <Heading level={3} className="!mt-8 !mb-4">
            {t('transparency.sectorTitle')}
          </Heading>
          <div className="space-y-3">
            {cityBudget.sectors.map(s => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 font-medium">{s.name}</span>
                  <span className="text-gray-600">
                    {currencyFormat.format(s.amount)}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-600 rounded-full"
                    style={{
                      width: `${(s.amount / maxSectorAmount) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Text size="sm" className="!text-gray-400 mt-4">
            {t('statistics.source')}: {cityBudget.source}
          </Text>
        </Section>

        <Section className="!bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Wallet
                  className="h-5 w-5 text-primary-600"
                  strokeWidth={2.5}
                />
                <Heading level={3} className="!mb-0">
                  {t('transparency.ntaTitle')}
                </Heading>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-2">
                {currencyFormat.format(
                  cityBudget.nationalTaxAllotment.estimatedTotal
                )}
              </div>
              <Text size="sm" className="!text-gray-500 mt-2">
                {t('transparency.ntaNote')}
              </Text>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert
                  className="h-5 w-5 text-primary-600"
                  strokeWidth={2.5}
                />
                <Heading level={3} className="!mb-0">
                  {cityBudget.disasterFund.name}
                </Heading>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-2">
                {currencyFormat.format(cityBudget.disasterFund.amount)}
              </div>
              <Text size="sm" className="!text-gray-500 mt-2">
                {t('transparency.ldrrmfNote', {
                  percent: cityBudget.disasterFund.percentOfNTA,
                })}
              </Text>
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex items-center gap-2 mb-2">
            <HardHat className="h-6 w-6 text-primary-600" strokeWidth={2.5} />
            <Heading level={2} className="!mb-0">
              {t('transparency.infrastructureTitle')}
            </Heading>
          </div>
          <Text className="!max-w-2xl">
            {t('transparency.infrastructureDescription', {
              count: dpwhProjects.summary.totalProjects,
              cost: numberFormat.format(dpwhProjects.summary.totalCost),
              agency: dpwhProjects.summary.implementingAgency,
            })}
          </Text>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                  <th className="py-2 pr-4">{t('statistics.tableProject')}</th>
                  <th className="py-2 pr-4">{t('statistics.tableLocation')}</th>
                  <th className="py-2 pr-4">{t('statistics.tableCost')}</th>
                  <th className="py-2">{t('statistics.tableStatus')}</th>
                </tr>
              </thead>
              <tbody>
                {dpwhProjects.projects.map(p => (
                  <tr key={p.name} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-900">
                      {p.name}
                      {p.contractor && (
                        <div className="text-xs text-gray-500 mt-0.5">
                          {t('statistics.contractorLabel')}: {p.contractor}
                        </div>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-gray-600">{p.location}</td>
                    <td className="py-3 pr-4 text-gray-600">
                      {p.cost ? currencyFormat.format(p.cost) : '—'}
                    </td>
                    <td className="py-3 text-gray-600">
                      {p.status ?? t('statistics.ongoingUnspecified')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Text size="sm" className="!text-gray-400 mt-4">
            {t('statistics.source')}: {dpwhProjects.source}
          </Text>
        </Section>

        <Section className="!bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-6 w-6 text-primary-600" strokeWidth={2.5} />
            <Heading level={2} className="!mb-0">
              {t('transparency.documentsTitle')}
            </Heading>
          </div>
          <Text className="!max-w-2xl">
            {t('transparency.documentsSubtitle')}
          </Text>
          <ul className="mt-6 space-y-2 max-w-2xl">
            {officialDocuments.map(doc => (
              <li key={doc.url}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium text-sm"
                >
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="h-6 w-6 text-primary-600" strokeWidth={2.5} />
            <Heading level={2} className="!mb-0">
              {t('transparency.disclaimerTitle')}
            </Heading>
          </div>
          <Text className="!max-w-2xl !text-gray-600">
            {t('transparency.disclaimerBody')}
          </Text>
        </Section>
      </main>
    </>
  );
};

export default Transparency;
