import { Users, MapPin, Ruler, Award, TrendingUp, HardHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  demographics,
  competitiveIndex,
  fiscalTransparency,
  dpwhProjects,
} from '../data/statistics';

const numberFormat = new Intl.NumberFormat('en-US');
const currencyFormat = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
});

const Statistics: React.FC = () => {
  const { t } = useTranslation('common');

  const metrics = [
    {
      icon: Users,
      value: numberFormat.format(demographics.population.total),
      label: t('statistics.populationLabel'),
      source: `${demographics.population.year} ${demographics.population.source}`,
    },
    {
      icon: MapPin,
      value: String(demographics.barangayCount),
      label: t('statistics.barangaysLabel'),
      source: t('statistics.administrativeUnits'),
    },
    {
      icon: Ruler,
      value: numberFormat.format(demographics.landAreaKm2),
      label: t('statistics.landAreaLabel'),
      source: t('statistics.totalCityArea'),
    },
    {
      icon: Award,
      value: '1st',
      label: t('statistics.incomeClassLabel'),
      source: demographics.incomeClass,
    },
  ];

  return (
    <>
      <SEO
        title="City Statistics"
        description="Demographics, competitiveness index, and fiscal transparency data for Puerto Princesa City, Palawan."
        keywords="statistics, demographics, population, barangays, competitiveness index, fiscal transparency, Puerto Princesa"
      />
      <main className="flex-grow">
        <Section className="!py-6 !bg-gray-50">
          <Breadcrumbs />
        </Section>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Heading level={1} className="!text-white !mb-2">
              {t('statistics.title')}
            </Heading>
            <Text className="!text-primary-50 !max-w-2xl">
              {t('statistics.subtitle', {
                city: demographics.city,
                province: demographics.province,
              })}
            </Text>
          </div>
        </div>

        <Section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(m => (
              <div
                key={m.label}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm"
              >
                <m.icon
                  className="h-8 w-8 mx-auto mb-3 text-primary-600"
                  strokeWidth={2.5}
                />
                <div className="text-3xl font-bold text-gray-900">
                  {m.value}
                </div>
                <div className="text-sm font-medium text-gray-700 mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">{m.source}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="!bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp
              className="h-6 w-6 text-primary-600"
              strokeWidth={2.5}
            />
            <Heading level={2} className="!mb-0">
              {t('statistics.competitivenessTitle')}
            </Heading>
          </div>
          <Text className="!max-w-2xl">
            {competitiveIndex.description}. {t('statistics.overallRank')}{' '}
            <strong>#{competitiveIndex.overallRank}</strong> (
            {competitiveIndex.year} {t('statistics.cmciYear')}).
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {competitiveIndex.pillars.map(p => (
              <div
                key={p.name}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="text-xs font-semibold text-gray-500 uppercase">
                  {p.name}
                </div>
                <div className="text-2xl font-bold text-primary-600 mt-1">
                  #{p.rank}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('statistics.score')}: {p.score.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <Text size="sm" className="!text-gray-400 mt-4">
            {t('statistics.source')}: {competitiveIndex.source}
          </Text>
        </Section>

        <Section>
          <Heading level={2}>{t('statistics.fiscalTitle')}</Heading>
          <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-xl">
            <div className="text-sm text-gray-500">
              {fiscalTransparency.year} {t('statistics.annualBudget')}
            </div>
            <div className="text-3xl font-bold text-gray-900 mt-1">
              {currencyFormat.format(fiscalTransparency.totalIncome)}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {t('statistics.balancedBudgetNote')}
            </div>
          </div>
          <Text size="sm" className="!text-gray-400 mt-4">
            {t('statistics.source')}: {fiscalTransparency.source}
          </Text>
        </Section>

        <Section className="!bg-gray-50">
          <Heading level={2}>
            {t('statistics.barangaysHeading', {
              count: demographics.barangayCount,
            })}
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {demographics.barangays.map(b => (
              <div
                key={b}
                className="text-sm text-gray-700 bg-white border border-gray-200 rounded px-3 py-2"
              >
                {b}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="flex items-center gap-2 mb-2">
            <HardHat className="h-6 w-6 text-primary-600" strokeWidth={2.5} />
            <Heading level={2} className="!mb-0">
              {t('statistics.infrastructureTitle')}
            </Heading>
          </div>
          <Text className="!max-w-2xl">
            {t('statistics.infrastructureDescription', {
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
      </main>
    </>
  );
};

export default Statistics;
