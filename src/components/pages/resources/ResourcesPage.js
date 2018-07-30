import React from 'react';
import {PageTitle} from '../../common/pageTitle/PageTitle';

import './resourcesPage.scss';

/**
 * The ResourcesPage component.
 *
 * @constructor
 */
export class ResourcesPage extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);
  }

  /**
   * Renders the component.
   *
   * @returns {{}}
   */
  render() {
    return (
      <div id="resources-page" className="system-page">
        <PageTitle title="Resources"/>
        <div className="container-fluid">
          <div className="row main-row row-odd">
            <div className="col">
              <p><strong>General Resources</strong></p>
<p><ul>
<li><strong>811 </strong>(Also Known As the One Call Notification Center(s) in Your State)<strong> &ndash;</strong> Dial 811 Web: <a href="http://www.call811.com">call811.com</a> or this website, www.safeexcavator.com.</li>
<li><strong>Common Ground Alliance</strong> <strong>&ndash;</strong> <a href="http://www.commongroundalliance.com">commongroundalliance.com</a> Ph: 703-836-1709</li>
<li><strong>Distribution Contractors Association (DCA) &ndash; </strong><a href="http://www.dcaweb.org">dcaweb.org</a> Ph: 972-680-0261 Email: <a href="mailto:info@dcaweb.org">info@dcaweb.org</a></li>
<li><strong>Cross Bore Safety Association (CBSA) </strong><strong>&ndash;</strong> <a href="http://www.crossboresafety.org">crossboresafety.org</a> Email:<br /> <a href="mailto:information@crossboresafety.org">information@crossboresafety.org</a> Ph: 812-719-4800</li>
<li><strong>Energy Equipment and Infrastructure Alliance (EEIA) &ndash;</strong> <a href="http://www.eeia.org">eeia.org</a> Ph: 202-870-7715 Email: <a href="mailto:info@eeia.org?Note%20from%20EEIA%20Website">info@eeia.org</a></li>
<li><strong>Center for Energy Workforce Development (CEWD) &ndash;</strong> <a href="http://www.cewd.org">cewd.org</a> Ph: 202-638-5802 Email:<a href="mailto:staff@cewd.org">staff@cewd.org</a></li>
<li><strong>North American Excavation Shoring Association (NAXSA)</strong> <strong>&ndash;</strong> <a href="http://www.naxsa.org">naxsa.org</a> Ph: 651-379-7307 Email: <a href="mailto:info@naxsa.org">info@naxsa.org</a></li>
<li><strong>National Utility Contractors Association (NUCA)</strong> <strong>&ndash;</strong> <a href="http://www.nuca.com">nuca.com</a> Ph: 703-358-9300 Email: <a href="mailto:nuca@nuca.com">nuca@nuca.com</a></li>
<li><strong>National Utility Locators Association</strong> <strong>&ndash;</strong> <a href="http://www.nulca.org">nulca.org</a> Ph: 1-888-685-2246&nbsp;Email: <a href="mailto:executivedirector@nulca.org">executivedirector@nulca.org</a></li>
</ul>
<p><strong>&nbsp;</strong></p>
<p><strong>Pipelines</strong></p>
<ul>
<li><strong>Pipelines and Hazardous Materials Safety Administration (PHMSA) </strong>a division of the U.S. Department of Transportation. Pipeline Safety Information Center <a href="http://www.phmsa.dot.gov">phmsa.dot.gov</a> Ph: 202-366-4595</li>
<li><a href="http://www.pipeline101.com">pipeline101.com</a></li>
</ul>
<p><strong>&nbsp;</strong></p>
<p><strong>Electric</strong></p>
<ul>
<li><strong>Federal Energy Regulatory Commission (FERC)</strong> <strong>&ndash;</strong> <a href="https://www.ferc.gov/industries/electric/indus-act.asp">ferc.gov</a> Ph: 1-866-208-3372</li>
<li><strong>Edison Electric Institute (EEI) &ndash;</strong> <a href="http://www.eei.org/about/contact/Pages/default.aspx">eei.org</a> Ph: 202-508-5000</li>
<li><strong>Electric Power Research Institute (EPRI) &ndash; </strong><a href="http://www2.epri.com/Help/Pages/Contact-Us.aspx">epri.com</a> Ph: 1-800-313-3774</li>
</ul>
<p><strong>&nbsp;</strong></p>
<p><strong>Water</strong></p>
<ul>
<li><strong>American Public Works Association (APWA)</strong> -- <a href="http://www.apwa.net">apwa.net</a> Ph: (800) 848-APWA</li>
<li><strong>American Water Works Association (AWWA) &ndash; </strong><a href="https://www.awwa.org/">awwa.org</a> Ph: 1-800-926-7337</li>
<li><strong>Water and Sewer Distributors of America (WSDA)</strong> <strong>&ndash;</strong> <a href="http://www.wasda.com">wasda.com</a> &nbsp;</li>
<li><strong>National Association of Clean Water Agencies (NACWA) &ndash;</strong> <a href="http://www.nacwa.org/">nacwa.org</a> <br /> Ph: 1-202-833-2672</li>
<li><strong>Water Environment &amp; Reuse Foundation (WERF)</strong> <strong>&ndash;</strong> <a href="http://www.werf.org/">werf.org</a> Ph: 571-384-2100</li>
<li><strong>Water Environment Federation (WEF)</strong> <strong>&ndash;</strong> <a href="https://www.wef.org/">wef.org</a> Ph: 1-800-666-0206</li>
</ul>
<p>&nbsp;</p>
<p><strong>Sewer</strong></p>
<ul>
<li><strong>American Water Works Association (AWWA) &ndash; </strong><a href="https://www.awwa.org/">awwa.org</a> Ph: 1-800-926-7337</li>
</ul>
<p><strong>&nbsp;</strong></p>
<p><strong>Cable</strong></p>
<ul>
<li><strong>National Cable and Telecommunications Association (NCTA) &ndash;</strong> <a href="https://www.ncta.com/">ncta.com</a> Ph: 202-222-2300, Email: <a href="mailto:webmaster@ncta.com">webmaster@ncta.com</a></li>
<li><strong>American Cable Association (ACA) &ndash;</strong> <a href="http://www.americancable.org/">americancable.org</a> Ph: 412-922-8300</li>
<li><strong>National Cable Television Cooperative (NCTC) &ndash; </strong><a href="https://www.nctconline.org/index.php/about-nctc">nctconline.org</a> Ph: 913 599-5900, Email: <a href="mailto:help@nctconline.org">help@nctconline.org</a></li>
</ul>
<p>&nbsp;</p>
<p><strong>Telecomm</strong></p>
<ul>
<li><strong>Telecommunications Industry Association (TIA) &ndash; Phone: </strong>1-703-907-7700, Web: <a href="http://www.tiaonline.org/about/contact-us">tiaonline.org</a></li>
<li><strong>Federal Communications Commission (FCC) &ndash;</strong> 1-888-225-5322, Web: <a href="https://www.fcc.gov/">fcc.gov</a></li>
</ul>
</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResourcesPage.propTypes = {};

export default ResourcesPage;
