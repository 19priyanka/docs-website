import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';

const RootNavigation = ({ nav }) => {
  const tdp = nav.pages.find(
    (page) => page.title === 'Telemetry Data Platform'
  );
  const fso = nav.pages.find(
    (page) => page.title === 'Full-Stack Observability'
  );
  const ai = nav.pages.find(
    (page) => page.title === 'Alerts and Applied Intelligence'
  );

  const pages = nav.pages.filter((page) => ![tdp, fso, ai].includes(page));

  return (
    <nav role="navigation" aria-label="Navigation">
      <NavItem page={tdp} />
      <NavItem page={fso} />
      <NavItem page={ai} />
      <hr />
      {pages.map((page) => (
        <NavItem key={page.title} page={page} />
      ))}
      <NavItem page={{ title: 'Release notes', url: '/docs/release-notes' }} />
      <NavItem page={{ title: "What's new", url: '/whats-new' }} />
      <NavItem
        page={{
          title: 'See our 360+ integrations',
          url: 'https://newrelic.com/integrations',
        }}
      />
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RootNavigation;
