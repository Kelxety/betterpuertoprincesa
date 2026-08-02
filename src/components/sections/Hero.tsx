import { useTranslation } from 'react-i18next';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 container mx-auto px-4"
        aria-hidden="true"
      >
        <div className="relative h-full">
          <div className="absolute left-3/4 -translate-x-1/2 top-8 bottom-0 hidden lg:block">
            <img src="/eulalia.svg" alt="" className="h-full w-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left section with title and search */}
          <div className="animate-fade-in">
            <Text transform="uppercase">Welcome to</Text>
            <Heading>BetterPuertoPrincesa.org</Heading>
            <Text>{t('hero.subtitle')}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
