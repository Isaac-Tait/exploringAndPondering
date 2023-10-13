import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Exvangelical',
    Svg: require('@site/static/img/mountainClouds.svg').default,
    description: (
      <>
        I became fed up with the evangelical church in 2020. Words
        like deconstructing did not enter my lexicon though until late
        2022. For several years I thought I was all alone...
      </>
    ),
  },
  {
    title: 'Sticky Fingers?',
    Svg: require('@site/static/img/mountainSun.svg').default,
    description: (
      <>
        Why did I adopt the slogan "Sticky Fingers"? Because over the
        last year I have touched many faith (and non-faith) traditions
        and adopted fragments into my own understandings and
        explanations...
      </>
    ),
  },
  {
    title: 'Moving onward',
    Svg: require('@site/static/img/mountainTrees.svg').default,
    description: (
      <>
        Join me as I explore the wide world of spirituality, religion,
        and even atheism to try and search for better ways forward...
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
