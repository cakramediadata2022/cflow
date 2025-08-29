import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/hosting.svg').default,
    description: (
      <>
        Connect effortlessly with your existing website, mobile app, or third-party systems
        using our REST APIs and SDKs.
      </>
    ),
  },
  {
    title: 'Analytics & Insights',
    Svg: require('@site/static/img/undraw-lost.svg').default,
    description: (
      <>
        Get real-time insights into booking trends, revenue, and performance metrics 
        with built-in reporting tools.
      </>
    ),
  },
  {
    title: 'Secure & Reliable',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        Built-in authentication, payment gateway support, and enterprise-grade 
        reliability to keep your data and transactions safe.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className={styles.showcase} style={{ padding: '4rem 0' }}>
        <div className="container">
    {/* Row 1 */}
          
          {/* Row 1 */}
<div className="row margin-bottom--xl">
  <div className="col col--6 flex flex-col justify-center">
    <Heading as="h2">Cakrasoft Property Management System</Heading>
    <p className="margin-top--md">
      Streamline daily hotel operations with an all-in-one system to manage 
      reservations, front desk, housekeeping, and billing. Gain valuable insights 
      with built-in reporting and analytics to track performance and make smarter 
      decisions for your property.
    </p>
              <a className={ clsx("button button--secondary button--lg margin-top--lg", styles.ctbButton)} href="/docs/pms/intro">
      Learn How It Works 🏨
    </a>
  </div>
  <div className="col col--6">
    <img src="/img/pms.png" alt="Property Management System Dashboard" style={{ width: '100%', borderRadius: '8px' }} />
  </div>
</div>


{/* Row 2 */}
<div className="row margin-bottom--xl">
  <div className="col col--6">
    <img src="/img/booking-engine.png" alt="Booking Engine" style={{ width: '100%', borderRadius: '8px' }} />
  </div>
  <div className="col col--6 flex flex-col justify-center">
    <Heading as="h2">Cakrahub Booking Engine</Heading>
    <p className="margin-top--md">
      Our booking engine powers <strong>hotels, tours, events</strong>, and more.
      With built-in payments, integrations, and analytics, you can
      manage everything in one place.
    </p>
    <a
      className={clsx("button button--primary button--lg margin-top--lg", styles.ctaButton)}
      href="/docs/booking-engine/intro"
    >
      Explore the Docs 🚀
    </a>
  </div>
</div>


{/* Row 3 */}
<div className="row">
  <div className="col col--6 flex flex-col justify-center">
    <Heading as="h2">Cakrahub Channel Manager</Heading>
    <p className="margin-top--md">
      Simplify your distribution by managing all your booking channels from one
      dashboard. Keep your availability, rates, and inventory in sync across
      OTAs, your website, and direct reservations—without double bookings.
    </p>
    <a className={ clsx("button button--secondary button--lg margin-top--lg", styles.ctbButton)} href="/docs/channel-manager/intro">
      Learn More 📊
    </a>
  </div>
  <div className="col col--6">
    <img src="/img/cm.png" alt="Channel Manager Dashboard" style={{ width: '100%', borderRadius: '8px' }} />
  </div>
</div>



  </div>
</section>

    </>
  );
}

