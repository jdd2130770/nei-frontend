import markdownIt from 'markdown-it';
import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../common/link/Link';
import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import lawGetByIdHoc from '../../hoc/lawGetByIdHoc';
import {lawRoute, stateLawRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './lawPage.scss';

/**
 * The LawPage component.
 *
 * @constructor
 */
export class LawPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    this.state = {
      invalidItem: false,
    };
  }

  /**
   * Triggers before the component is added to the page.
   */
  componentWillMount() {
    const params = parseParamsFromRoute(this.props.location.pathname, lawRoute);

    if (!params.lawId) {
      this.setState({
        invalidItem: true,
      });
      return;
    }

    this.props.lawGetByIdHoc.getLaw(params.lawId);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, lawRoute);

    const isLoading = this.props.lawGetByIdHoc.isLoading || false;
    const error = this.props.lawGetByIdHoc.error || null;
    const stateData = this.props.lawGetByIdHoc.stateInfo || null;
    const lawData = this.props.lawGetByIdHoc.law || null;

    const hasError = (error || this.state.invalidItem) || null;

    let content = '';
    if (lawData && lawData.content) {
      const markdownParser = markdownIt({
        html: false,
        xhtmlOut: true,
        breaks: true,
      });
      content = markdownParser.render(lawData.content);

      // Clean up anchors.
      content = content.replace(/<a[^>]+href="([^"]+)">/ig, (match, p1) => {
        const newUrl = (p1.match(/https?:\/\//)) ? p1 : `http://${p1}`;
        return `<a href="${newUrl}" target="_blank">`;
      });
    }

    return (
      <div id="law-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading} />

          <div id="primary-row" className="main-row row">
            <div className="col-md-4">
              <StateSideNav
                stateAbbreviation={params.state}
                location={this.props.location}
                urlParams={params}
              />
            </div>
            <div className="col">
              <div id="back-row" className="row">
                <div className="col">
                  <Link className="back-link" to={stateLawRoute} params={params}>
                    <i className="fa fa-chevron-left" /> Back to LAW
                  </Link>
                </div>
              </div>

              <div id="title-row" className="row">
                <div className="col">
                  <h1 className="h5 law-title">{lawData ? lawData.title : 'Loading...'}</h1>
                </div>
              </div>

              {(lawData && lawData.statute) && (
                <div id="statute-row" className="row">
                  <div className="col">
                    <div className="statute">
                      <h2 className="h6 section-title statute-title">STATUTE</h2>
                      <div className="statute-value">{lawData.statute}</div>
                    </div>

                    <hr />
                  </div>
                </div>
              )}

              {(lawData && lawData.filters) && (
                <div id="filters-row" className="row">
                  <div className="col">
                    <div className="filters">
                      <h2 className="h6 section-title filters-title">FILTERS</h2>
                      <div className="filters-list">
                        {lawData.filters.map((filter, filterIndex) => {
                          return (
                            <div
                              className="filter badge"
                              key={filterIndex}
                            >{filter.title}</div>
                          );
                        })}
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>
              )}

              {(lawData && lawData.regulatory) && (
                <div id="regulatory-row" className="row">
                  <div className="col">
                    <div className="regulatory">
                      <h2 className="h6 section-title regulatory-title">REGULATORY</h2>
                      <div className="regulatory-value">{lawData.regulatory}</div>
                    </div>

                    <hr />
                  </div>
                </div>
              )}

              <div id="content-row" className="row">
                <div className="col">
                  <div className="law-content">
                    {(!isLoading && hasError) && (
                      <div className="alert alert-warning">
                        The law information could not be loaded.
                      </div>
                    )}

                    {(!isLoading && !hasError && lawData) && (
                      <div className="law-data">
                        <div dangerouslySetInnerHTML={{__html: content}} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LawPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  lawGetByIdHoc: PropTypes.shape({
    getLaw: PropTypes.func,
    isLoading: PropTypes.bool,
    law: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default lawGetByIdHoc(
  LawPage
);
