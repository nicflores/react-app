import type { FunctionComponent } from 'react';
import { Alert, MetaInfo } from '../../components';
import { getRouteMetaInfo } from '../../config/routes.config';

const About: FunctionComponent = () => (
  <div className="container view-wrapper">
    <MetaInfo {...getRouteMetaInfo('About')} />
    <Alert
      title="About Page"
      alertAnimation="rubberBand_animation 1s"
      subTitle="Very interesting information may go here."
    />
  </div>
);

export default About;
