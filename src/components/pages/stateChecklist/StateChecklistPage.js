import markdownIt from 'markdown-it';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from '../../common/link/Link';

import StateHeader from '../../common/stateHeader/StateHeader';
import StateSideNav from '../../common/stateSideNav/StateSideNav';
import statesGetChecklistHoc from '../../hoc/statesGetChecklistHoc';
import {stateChecklistRoute} from '../../routePaths';
import {parseParamsFromRoute} from '../../../utils/routeHelper';

import './stateChecklistPage.scss';

/**
 * The StateChecklistPage component.
 *
 * @constructor
 */
export class StateChecklistPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    this.state = {
      invalidState: false,
    };
  }

  /**
   * Triggers before the component is added to the page.
   */
  componentWillMount() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateChecklistRoute);

    if (!params.state) {
      this.setState({
        invalidState: true,
      });
      return;
    }

    this.props.statesGetChecklistHoc.getChecklist(params.state);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    const params = parseParamsFromRoute(this.props.location.pathname, stateChecklistRoute);

    const isLoading = this.props.statesGetChecklistHoc.isLoading || false;
    const error = this.props.statesGetChecklistHoc.error || null;
    const stateData = this.props.statesGetChecklistHoc.stateInfo || null;
    const checklistData = this.props.statesGetChecklistHoc.checklistInfo || null;

    const hasError = (error || this.state.invalidState) || null;

    let content = null;
    if (checklistData && checklistData[0] && checklistData[0].content) {
      const markdownParser = markdownIt({
        html: false,
        xhtmlOut: true,
        breaks: true,
      });
      content = markdownParser.render(checklistData[0].content);

      // Clean up anchors.
      content = content.replace(/<a[^>]+href="([^"]+)">/ig, (match, p1) => {
        const newUrl = (p1.match(/https?:\/\//)) ? p1 : `http://${p1}`;
        return `<a href="${newUrl}" target="_blank">`;
      });

      // Each checkbox needs a unique id in order for the label clicking to work.
      let checkboxCount = 0;

      // Mutate <li>s to include check boxes.
      content = content.replace(
        /<li>/ig,
        () => {
          checkboxCount += 1;
          return '<li class="check-item">'
            + `<input id="checkbox-item-${checkboxCount}" class="checkbox-item" type="checkbox" />`
            + `<label for="checkbox-item-${checkboxCount}" class="checkbox-label row">`
            + '<span class="icon-label col-1"><i class="fa fa-circle-thin"></i></span>'
            + '<span class="text-label col">';
        }
      ).replace(
        /<\/li>/ig,
        '</span></label></li>'
      );
    }

    return (
      <div id="state-checklist-page" className="system-page">
        <div className="container-fluid">
          <StateHeader stateData={stateData} isLoading={isLoading}/>

          <div id="checklist-row" className="main-row row">
            <div className="col-md-4">
              <StateSideNav
                stateAbbreviation={params.state}
                location={this.props.location}
                urlParams={params}
              />
            </div>
            <div className="col top-col">
              {(isLoading) && (
                <div className="loading">
                  Loading...
                </div>
              )}

              {(!isLoading && !hasError && checklistData) && (
                <div id="content-row" className="row">
                  <div className="col">
                    <div className="checklist-content">
                      {(!isLoading && hasError) && (
                        <div className="alert alert-warning">
                          The checklist information could not be loaded.
                        </div>
                      )}

                      {(!isLoading && !hasError && !checklistData) && (
                        <div className="alert alert-warning">
                          No checklist information was found.
                        </div>
                      )}

                      {(!isLoading && !hasError && checklistData) && (
                        <div className="checklist-data">
                          <div dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StateChecklistPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  statesGetChecklistHoc: PropTypes.shape({
    getChecklist: PropTypes.func,
    isLoading: PropTypes.bool,
    checklistInfo: PropTypes.array,
    stateInfo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    }),
    error: PropTypes.object,
  }),
};

export default statesGetChecklistHoc(
  StateChecklistPage
);
