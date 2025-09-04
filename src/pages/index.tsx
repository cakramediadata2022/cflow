import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
  <div className="container">
    <h1 className={styles.heroTitle}>
      One <span className={styles.highlight}>Powerful</span> System for{" "}
          <span className={styles.highlight}>Bookings</span>, <br />
          <span className={styles.highlight}>Management</span>, and <span className={styles.highlight}>Growth</span>
    </h1>
    <p className={styles.heroSubtitle}>
      {siteConfig.tagline}
    </p>
    <div className={styles.buttons}>
      <Link
        className={clsx("button button--secondary button--lg", styles.ctaButton)}
        to="/docs/property-management-system/intro"
      >
        Get Started 🚀
      </Link>
    </div>
  </div>
</header>

  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
