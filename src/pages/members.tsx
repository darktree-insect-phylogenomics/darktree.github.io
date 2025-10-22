import React from 'react';
import Layout from '@theme/Layout';
import styles from './members.module.css';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

// List of current core team
const PersonList = [

  {
    title: (<a href="https://ronquistlab.github.io/people.html">Fredrik Ronquist</a>),
    image: '/img/fredrik.jpg',
    description: (<>Professor at the
      Department of Bioinformatics and Genetics, Swedish Museum of Natural History</>),
  },
  {
    title: (<a href="https://people.kth.se/~dbro/">David Broman</a>),
    image: 'img/david2021.jpg',
    description: (<>Professor at
      EECS and Digital Futures, KTH Royal Institute of Technology</>),
  },
];

// List of Contributors
const PersonList_Cont = [
  {
    title: (<a href="https://ronquistlab.github.io/people.html#tim">Thimothée Virgoulay</a>),
    image: 'img/timv.jpg',
    description: (<>Postdoctoral Researcher at Department of Bioinformatics and Genetics,
      Swedish Museum of Natural History</>),
  }
];

// --- Person card ---
function Person({title, image, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.personSvg} alt={String(title)} src={useBaseUrl(image)} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

// --- Section renderer (shows just a heading if empty) ---
function PeopleSection({id, title, people}) {
  return (
    <section id={id} className={styles.persons}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', styles.sectionTitle)}>{title}</h2>
        {people && people.length > 0 && (
          <div className="row">
            {people.map((p, i) => <Person key={`${id}-${i}`} {...p} />)}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ContributorsPage() {
  return (
    <Layout title="Contributors" description="Contributors">
      <div>
        <PeopleSection
          id="current-team"
          title="Main courses"
          people={PersonList}
        />
        <PeopleSection
          id="contributors"
          title="Side dishes"
          people={PersonList_Cont}
    //    />
    //    <PeopleSection
    //      id="how-to-become-a-contributor"
    //      title="How to become a contributor"
     //     people={[]}
        />
      </div>
    </Layout>
  );
}
