/* Auto Generated File */
import type { NextPage } from 'next';
import { PMarque } from '@porsche-design-system/components-react/ssr';

const MarquePage: NextPage = (): JSX.Element => {
  return (
    <>
      <div className="playground" title="should show marque with trademark sign and different sizing">
        <PMarque />
        <PMarque size="small" />
        <PMarque size="medium" />
      </div>

      <div className="playground" title="should show marque without trademark sign and different sizing">
        <PMarque trademark={false} />
        <PMarque trademark={false} size="small" />
        <PMarque trademark={false} size="medium" />
      </div>
    </>
  );
};

export default MarquePage;
