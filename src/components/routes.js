/* eslint-disable react/no-multi-comp, react/display-name */

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {MainLayout} from './layouts/mainLayout/MainLayout';
import {SimpleLayout} from './layouts/simpleLayout/SimpleLayout';

import AppPage from './pages/app/AppPage';
import BenefitsPage from './pages/benefits/BenefitsPage';
import ContactPage from './pages/contact/ContactPage';
import EightOneOnePage from './pages/eightOneOne/EightOneOnePage';
import EooDamageReportingPage from './pages/eooDamageReporting/EooDamageReportingPage';
import FactsAndStatsPage from './pages/factsAndStats/FactsAndStatsPage';
import HomePage from './pages/home/HomePage';
import LawPage from './pages/law/LawPage';
import LeakRecognitionPage from './pages/leakRecognition/LeakRecognitionPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import PreventionMeasuresPage from './pages/preventionMeasures/PreventionMeasuresPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import ResponsePage from './pages/response/ResponsePage';
import SponsorshipOptionsPage from './pages/sponsorshipOptions/SponsorshipOptionsPage';
import StateChecklistPage from './pages/stateChecklist/StateChecklistPage';
import StateLawPage from './pages/stateLaw/StateLawPage';
import StateLocateRequestPage from './pages/stateLocateRequest/StateLocateRequestPage';
import StateResourcePage from './pages/stateResource/StateResourcePage';
import StateResourcesPage from './pages/stateResources/StateResourcesPage';
import StatePage from './pages/state/StatePage';
import StatesPage from './pages/states/StatesPage';
import SupportingCompaniesPage from './pages/supportingCompanies/SupportingCompaniesPage';
import UgiCommunicationsPage from './pages/ugiCommunications/UgiCommunicationsPage';
import UgiElectricityPage from './pages/ugiElectricity/UgiElectricityPage';
import UgiPipelinesPage from './pages/ugiPipelines/UgiPipelinesPage';
import UgiWaterSewerPage from './pages/ugiWaterSewer/UgiWaterSewerPage';
import Video811Page from './pages/video811/Video811Page';
import VideoTeaserPage from './pages/videoTeaser/VideoTeaserPage';

import * as routePaths from './routePaths';

/**
 * Builds a page using the main layout.
 *
 * @param {{}} PageComponent
 * @param {string} pageTitle
 * @returns {{}}
 */
function largeHeaderLayout(PageComponent, pageTitle) {
  return (props) => (<MainLayout largeHeader page={<PageComponent {...props} />} pageTitle={pageTitle} {...props} />);
}

/**
 * Builds a page using the main layout.
 *
 * @param {{}} PageComponent
 * @param {string} pageTitle
 * @returns {{}}
 */
function layoutPage(PageComponent, pageTitle) {
  return (props) => (<MainLayout page={<PageComponent {...props} />} pageTitle={pageTitle} {...props} />);
}

/**
 * Builds a page using the simple layout.
 *
 * @param {{}} PageComponent
 * @param {string} pageTitle
 * @returns {{}}
 */
function simplePage(PageComponent, pageTitle) {
  return (props) => (<SimpleLayout page={<PageComponent {...props} />} pageTitle={pageTitle} {...props} />);
}

/**
 * Builds the routes for the app.
 * @returns {*}
 */
export function buildRoutes() {
  return (
    <Switch>
      <Route exact path={routePaths.homeRoute} render={largeHeaderLayout(HomePage, 'Home')} />
      <Route path={routePaths.appRoute} render={layoutPage(AppPage)} />
      <Route path={routePaths.benefitsRoute} render={layoutPage(BenefitsPage)} />
      <Route path={routePaths.contactRoute} render={layoutPage(ContactPage, 'Contact Us')} />
      <Route path={routePaths.eightOneOneRoute} render={layoutPage(EightOneOnePage)} />
      <Route path={routePaths.eooDamageReportingRoute} render={layoutPage(EooDamageReportingPage)} />
      <Route path={routePaths.factsAndStatsRoute} render={layoutPage(FactsAndStatsPage)} />
      <Route path={routePaths.lawRoute} render={layoutPage(LawPage)} />
      <Route path={routePaths.leakRecognitionRoute} render={layoutPage(LeakRecognitionPage)} />
      <Route path={routePaths.preventionMeasuresRoute} render={layoutPage(PreventionMeasuresPage)} />
      <Route path={routePaths.resourcesRoute} render={layoutPage(ResourcesPage)} />
      <Route path={routePaths.responseRoute} render={layoutPage(ResponsePage)} />
      <Route path={routePaths.sponsorshipOptionsRoute} render={layoutPage(SponsorshipOptionsPage)} />
      <Route path={routePaths.stateChecklistRoute} render={layoutPage(StateChecklistPage)} />
      <Route path={routePaths.stateLawRoute} render={layoutPage(StateLawPage)} />
      <Route path={routePaths.stateLocateRequestRoute} render={layoutPage(StateLocateRequestPage)} />
      <Route path={routePaths.stateResourceRoute} render={layoutPage(StateResourcePage)} />
      <Route path={routePaths.stateResourcesRoute} render={layoutPage(StateResourcesPage)} />
      <Route path={routePaths.stateRoute} render={layoutPage(StatePage)} />
      <Route path={routePaths.statesRoute} render={layoutPage(StatesPage)} />
      <Route path={routePaths.supportingCompaniesRoute} render={layoutPage(SupportingCompaniesPage)} />
      <Route path={routePaths.ugiCommunicationsRoute} render={layoutPage(UgiCommunicationsPage)} />
      <Route path={routePaths.ugiElectricityRoute} render={layoutPage(UgiElectricityPage)} />
      <Route path={routePaths.ugiPipelinesRoute} render={layoutPage(UgiPipelinesPage)} />
      <Route path={routePaths.ugiWaterSewerRoute} render={layoutPage(UgiWaterSewerPage)} />
      <Route path={routePaths.video811} render={layoutPage(Video811Page)} />
      <Route path={routePaths.videoTeaser} render={layoutPage(VideoTeaserPage)} />
      <Route path="*" render={layoutPage(NotFoundPage)} />
    </Switch>
  );
}

export default buildRoutes;
