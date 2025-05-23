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
    title: 'Create AI Prompts',
    Svg: require('@site/static/img/undraw_verify-data.svg').default,
    description: (
      <>
        Learn how to take advantage of prompts as an Election Official
      </>
    ),
  },
  {
    title: 'Discover New Techniques',
    Svg: require('@site/static/img/undraw_data-reports.svg').default,
    description: (
      <>
        Discover new techniques to improve your use of AI in election processses
      </>
    ),
  },
  {
    title: 'Check Out Demos',
    Svg: require('@site/static/img/undraw_data-points.svg').default,
    description: (
      <>
        Check out some existing demos to see how AI can be used as an Election Official
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
