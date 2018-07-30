import classNames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import FormFile from '../../../common/form/FormFile/FormFile';
import FormLabel from '../../../common/form/FormLabel/FormLabel';
import FormInput from '../../../common/form/FormInput/FormInput';
import FormInputList from '../../../common/form/FormInputList/FormInputList';
import FormRadioGroup from '../../../common/form/FormRadioGroup/FormRadioGroup';
import FormTextArea from '../../../common/form/FormTextArea/FormTextArea';
import RegisterLoadingModal from './RegisterLoadingModal';
import registerHoc from '../../../hoc/registerHoc';
import registerListFileHoc from '../../../hoc/registerListFileHoc';
import registerLogoFilesHoc from '../../../hoc/registerLogoFilesHoc';

import './registerForm.scss';

/**
 * A list of the field names.
 *
 * @type {{}}
 */
const fieldNames = {
  companyName: 'companyName',
  contactFirstName: 'contactFirstName',
  contactLastName: 'contactLastName',
  companyAddress: 'companyAddress',
  companyAddress2: 'companyAddress2',
  companyCity: 'companyCity',
  companyState: 'companyState',
  companyZip: 'companyZip',
  contactPhone: 'contactPhone',
  contactEmail: 'contactEmail',
  additionalEmails: 'additionalEmails',
  commitmentType: 'commitmentType',
  pledgeAmount: 'pledgeAmount',
  annualAmount: 'annualAmount',
  billedBy: 'billedBy',
  billingFirstName: 'billingFirstName',
  billingLastName: 'billingLastName',
  billingAddress: 'billingAddress',
  billingAddress2: 'billingAddress2',
  billingCity: 'billingCity',
  billingState: 'billingState',
  billingZip: 'billingZip',
  billingEmail: 'billingEmail',
  billingInstructions: 'billingInstructions',
  operateComplianceList: 'operateComplianceList',
  operateComplianceFiles: 'operateComplianceFiles',
  operateSupplementalList: 'operateSupplementalList',
  operateSupplementalFiles: 'operateSupplementalFiles',
  listEntities: 'listEntities',
  logoFiles: 'logoFiles',
};

const commitmentTypes = {
  annualAmount: 'annual-amount',
  pledgeAmount: 'pledge-amount',
};

const contributionLevels = [
  {
    key: 'shovel',
    name: 'Shovel Level',
    startAmount: 500,
  }, {
    key: 'skid-steer',
    name: 'Skid Steer Level',
    startAmount: 10000,
  }, {
    key: 'backhoe',
    name: 'Backhoe Level',
    startAmount: 25000,
  }, {
    key: 'trencher',
    name: 'Trencher Level',
    startAmount: 50000,
  }, {
    key: 'bulldozer',
    name: 'Bulldozer Level',
    startAmount: 75000,
  }
];

/**
 * The register form.
 */
export class RegisterForm extends React.Component {
  /**
   * @constructor
   * @param {{}} props
   * @param {{}} componentContext
   */
  constructor(props, componentContext) {
    super(props, componentContext);

    this.state = {
      modalActions: null,
      showFormError: false,
      contributionLevel: null,
      formError: null,
      registrationId: null,
      companyName: '',
      contactFirstName: '',
      contactLastName: '',
      companyAddress: '',
      companyAddress2: '',
      companyCity: '',
      companyState: '',
      companyZip: '',
      contactPhone: '',
      contactEmail: '',
      additionalEmails: [''],
      commitmentType: '',
      pledgeAmount: '',
      annualAmount: '',
      billedBy: '',
      billingFirstName: '',
      billingLastName: '',
      billingAddress: '',
      billingAddress2: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      billingEmail: '',
      billingInstructions: '',
      operateComplianceList: [''],
      operateComplianceFiles: [],
      operateSupplementalList: [''],
      operateSupplementalFiles: [],
      listEntities: [''],
      logoFiles: [],
    };
  }

  /**
   * Runs right before the component receives new props.
   *
   * @param {{}} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (!this.props.registerHoc.isLoading && nextProps.registerHoc.isLoading) {
      if (this.state.modalActions) {
        this.state.modalActions.show();
      }
    } else if (!this.props.registerHoc.error && nextProps.registerHoc.error) {
      if (nextProps.registerHoc.error.type === 'ValidationError') {
        this.setState({
          formError: nextProps.registerHoc.error,
        }, () => {
          if (this.state.modalActions) {
            this.state.modalActions.hide();
          }
        });
      }
    } else if (!this.props.registerHoc.success && nextProps.registerHoc.success) {
      this.setState({
        registrationId: nextProps.registerHoc.success.id
      }, () => {
        this.submitListFiles();
      });
    } else if (!this.props.registerListFileHoc.success && nextProps.registerListFileHoc.success) {
      this.submitLogoFiles();
    }
  }

  /**
   * Registers the modal actions.
   *
   * @param {{}} modalActions
   */
  registerModalActions = (modalActions) => {
    this.setState({
      modalActions
    });
  };

  /**
   * Copies the top contact information to the billing information.
   */
  copyContactInfo = () => {
    const copyState = {
      billingFirstName: this.state.contactFirstName,
      billingLastName: this.state.contactLastName,
      billingAddress: this.state.companyAddress,
      billingAddress2: this.state.companyAddress2,
      billingCity: this.state.companyCity,
      billingState: this.state.companyState,
      billingZip: this.state.companyZip,
      billingEmail: this.state.contactEmail,
    };

    this.setState(copyState, () => {
      this.updateError([
        'billingFirstName',
        'billingLastName',
        'billingAddress',
        'billingAddress2',
        'billingCity',
        'billingState',
        'billingZip',
        'billingEmail',
      ]);
    });
  };

  /**
   * Updates the form error state to true or false.
   *
   * @param {string|string[]} updateFieldNames
   */
  updateError = (updateFieldNames) => {
    if (!this.state.formError || !this.state.formError.fieldErrors) {
      return;
    }
    let safeFieldNames = [];
    if (Array.isArray(updateFieldNames)) {
      safeFieldNames = updateFieldNames.slice(0);
    } else {
      if (!this.state.formError.fieldErrors[updateFieldNames]) {
        return;
      }

      safeFieldNames.push(updateFieldNames);
    }

    const formError = Object.assign({}, this.state.formError, {
      fieldErrors: Object.assign({}, this.state.formError.fieldErrors)
    });
    safeFieldNames.forEach((fieldName) => {
      delete formError.fieldErrors[fieldName];
    });

    if (!lodash.keys(formError.fieldErrors).length) {
      this.setState({
        formError: null,
      });
    } else {
      this.setState({
        formError,
      });
    }
  };

  /**
   * Updates the state when a field value changes.
   *
   * @param {string} fieldName
   * @returns {function}
   */
  onFieldUpdated = (fieldName) => {
    return (changeEvent) => {
      this.setState({
        [fieldName]: changeEvent.target.value,
      }, () => {
        this.updateError(fieldName);
      });
    };
  };

  /**
   * Updates the state when a commitment type changes.
   * Also clears the values for the non-selected type inputs.
   *
   * @param {{target: {value: string}}} changeEvent
   */
  onCommitmentTypeUpdate = (changeEvent) => {
    const newType = changeEvent.target.value;

    const newState = {
      commitmentType: newType,
    };

    if (newType === commitmentTypes.annualAmount) {
      newState.pledgeAmount = '';
    } else {
      newState.annualAmount = '';
    }

    this.setState(newState);
    this.updateError(fieldNames.commitmentType);
  };

  /**
   * Sets the contribution level when the contribution amount changes.
   *
   * @param {{target: {value: string}}} changeEvent
   */
  onAnnualContributionChange = (changeEvent) => {
    const newAmount = changeEvent.target.value;
    let contributionLevel = this.state.contributionLevel || null;

    const levels = lodash.reverse(contributionLevels.slice(0));
    levels.some((level) => {
      if (newAmount >= level.startAmount) {
        contributionLevel = level.key;
        return true;
      }
      return false;
    });

    this.setState({
      contributionLevel
    });
  };

  /**
   * Fires when the form is submitted.
   *
   * @param {{}} submitEvent
   */
  onSubmitForm = (submitEvent) => {
    submitEvent.preventDefault();

    const registrationData = Object.assign({}, this.state);

    // Remove non-field data.
    delete registrationData.modalActions;
    delete registrationData.showFormError;
    delete registrationData.contributionLevel;
    delete registrationData.formError;

    // Remove file uploads, they will be processed separately.
    delete registrationData.operateComplianceFiles;
    delete registrationData.operateSupplementalFiles;
    delete registrationData.logoFiles;

    this.props.registerHoc.register(registrationData);
  };

  /**
   * Starts the list file uploads.
   */
  submitListFiles = () => {
    const listFileData = {
      operateComplianceFiles: this.state.operateComplianceFiles,
      operateSupplementalFiles: this.state.operateSupplementalFiles,
    };

    this.props.registerListFileHoc.saveListFile(
      this.state.registrationId,
      listFileData
    );
  };

  /**
   * Starts the logo file uploads.
   */
  submitLogoFiles = () => {
    const logoFileData = {
      logoFiles: this.state.logoFiles,
    };

    this.props.registerLogoFilesHoc.saveLogoFiles(
      this.state.registrationId,
      logoFileData
    );
  };

  /**
   * Renders the form.
   *
   * @returns {{}}
   */
  render() {
    const formError = this.state.formError || null;

    return (
      <form id="register-form" onSubmit={this.onSubmitForm} className={classNames({'was-validated': formError})}>
        <div className="row row-odd sub-row">
          <div className="col">
            <FormInput
              label="Company Name"
              fieldName={fieldNames.companyName}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.companyName}
              onChange={this.onFieldUpdated(fieldNames.companyName)}
            />

            <FormLabel
              label="Primary Contact Name"
              isRequired={true}
            />
            <div className="form-row">
              <FormInput
                className="col-sm-6"
                label="First"
                subLabel={true}
                fieldName={fieldNames.contactFirstName}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.contactFirstName}
                onChange={this.onFieldUpdated(fieldNames.contactFirstName)}
              />
              <FormInput
                className="col-sm-6"
                label="Last"
                subLabel={true}
                fieldName={fieldNames.contactLastName}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.contactLastName}
                onChange={this.onFieldUpdated(fieldNames.contactLastName)}
              />
            </div>

            <FormLabel
              label="Address"
              isRequired={true}
            />
            <FormInput
              label="Street Address"
              subLabel={true}
              fieldName={fieldNames.companyAddress}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.companyAddress}
              onChange={this.onFieldUpdated(fieldNames.companyAddress)}
            />
            <FormInput
              label="Address Line 2"
              subLabel={true}
              fieldName={fieldNames.companyAddress2}
              formError={formError}
              placeholder={false}
              value={this.state.companyAddress2}
              onChange={this.onFieldUpdated(fieldNames.companyAddress2)}
            />

            <div className="form-row">
              <FormInput
                className="col-sm-6"
                label="City"
                subLabel={true}
                fieldName={fieldNames.companyCity}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.companyCity}
                onChange={this.onFieldUpdated(fieldNames.companyCity)}
              />
              <FormInput
                className="col-sm-6"
                label="State / Province / Region"
                subLabel={true}
                fieldName={fieldNames.companyState}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.companyState}
                onChange={this.onFieldUpdated(fieldNames.companyState)}
              />
            </div>

            <FormInput
              label="ZIP / Postal Code"
              subLabel={true}
              fieldName={fieldNames.companyZip}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.companyZip}
              onChange={this.onFieldUpdated(fieldNames.companyZip)}
            />

            <FormInput
              label="Phone"
              fieldName={fieldNames.contactPhone}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.contactPhone}
              onChange={this.onFieldUpdated(fieldNames.contactPhone)}
            />

            <FormInput
              label="Email"
              type="email"
              fieldName={fieldNames.contactEmail}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.contactEmail}
              onChange={this.onFieldUpdated(fieldNames.contactEmail)}
            />

            <FormInputList
              label="Additional people to include on contactEmail lists:"
              type="email"
              fieldName={fieldNames.additionalEmails}
              formError={formError}
              isRequired={false}
              placeholder={false}
              value={this.state.additionalEmails}
              onChange={this.onFieldUpdated(fieldNames.additionalEmails)}
            />
          </div>
        </div>

        <div className="row row-even sub-row">
          <div className="col">
            <h2 className="h3 nei-h">Commitment Levels</h2>
            <hr />

            <FormRadioGroup
              currentInputValue={this.state.commitmentType}
              fieldName={fieldNames.commitmentType}
              formError={formError}
              items={[
                {
                  label: 'For Compliance',
                  value: commitmentTypes.pledgeAmount,
                }, {
                  label: 'As an Annual Contribution',
                  value: commitmentTypes.annualAmount,
                }
              ]}
              isRequired={true}
              onChange={this.onCommitmentTypeUpdate}
            />

            {(this.state.commitmentType === commitmentTypes.pledgeAmount) && (
              <div className="commitment-level-one">
                <hr />
                <FormInput
                  label="I (We) pledge a total of"
                  type="number"
                  fieldName={fieldNames.pledgeAmount}
                  formError={formError}
                  isRequired={true}
                  placeholder={false}
                  icon="usd"
                  value={this.state.pledgeAmount}
                  onChange={this.onFieldUpdated(fieldNames.pledgeAmount)}
                />
              </div>
            )}

            {(this.state.commitmentType === commitmentTypes.annualAmount) && (
              <div>
                <div className="commitment-level-two">
                  <hr />
                  <FormInput
                    label="Please list exact amount"
                    type="number"
                    fieldName={fieldNames.annualAmount}
                    formError={formError}
                    isRequired={true}
                    placeholder={false}
                    icon="usd"
                    value={this.state.annualAmount}
                    onChange={(changeEvent) => {
                      this.onFieldUpdated(fieldNames.annualAmount)(changeEvent);
                      this.onAnnualContributionChange(changeEvent);
                    }}
                  />
                </div>
                <div className="contribution-level-wrapper">
                  <h3 className="h5 contribution-header">Qualifying contribution level:</h3>
                  <div className="contribution-levels">
                    {contributionLevels.map((level, index) => {
                      const classes = classNames('contribution-level', {
                        'is-matched': level.key === this.state.contributionLevel
                      });

                      return (
                        <div id={`level-${index}`} className={classes} key={index}>
                          <span>{level.name} Level - ${level.startAmount}+</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row row-odd sub-row">
          <div className="col">
            <FormRadioGroup
              label="Do you prefer to be billed by? (check one):"
              currentInputValue={this.state.billedBy}
              fieldName={fieldNames.billedBy}
              formError={formError}
              isRequired={true}
              items={[
                {
                  label: 'Sander Resources, L.L.C.',
                  value: 'sander-resources',
                }, {
                  label: 'National Excavator Initiative, Inc. a 501(c3) entity',
                  value: 'national-excavator-initiative',
                }
              ]}
              onChange={this.onFieldUpdated(fieldNames.billedBy)}
            />

            <FormLabel
              label="Note: Credit card payments are accepted, however a small fee will be applied."
              subLabel={true}
            />
          </div>
        </div>

        <div className="row row-even sub-row">
          <div className="col">
            <h2 className="h3 nei-h">Billing Contact Info</h2>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.copyContactInfo}
            >Copy From Above</button>
            <hr />

            <FormLabel
              label="Billing Contact Name"
              isRequired={true}
            />
            <div className="form-row">
              <FormInput
                className="col-sm-6"
                label="First"
                subLabel={true}
                fieldName={fieldNames.billingFirstName}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.billingFirstName}
                onChange={this.onFieldUpdated(fieldNames.billingFirstName)}
              />
              <FormInput
                className="col-sm-6"
                label="Last"
                subLabel={true}
                fieldName={fieldNames.billingLastName}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.billingLastName}
                onChange={this.onFieldUpdated(fieldNames.billingLastName)}
              />
            </div>

            <FormLabel
              label="Mailing Address"
              isRequired={true}
            />
            <FormInput
              label="Street Address"
              subLabel={true}
              fieldName={fieldNames.billingAddress}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.billingAddress}
              onChange={this.onFieldUpdated(fieldNames.billingAddress)}
            />
            <FormInput
              label="Address Line 2"
              subLabel={true}
              fieldName={fieldNames.billingAddress2}
              formError={formError}
              placeholder={false}
              value={this.state.billingAddress2}
              onChange={this.onFieldUpdated(fieldNames.billingAddress2)}
            />

            <div className="form-row">
              <FormInput
                className="col-sm-6"
                label="City"
                subLabel={true}
                fieldName={fieldNames.billingCity}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.billingCity}
                onChange={this.onFieldUpdated(fieldNames.billingCity)}
              />
              <FormInput
                className="col-sm-6"
                label="State / Province / Region"
                subLabel={true}
                fieldName={fieldNames.billingState}
                formError={formError}
                isRequired={true}
                placeholder={false}
                value={this.state.billingState}
                onChange={this.onFieldUpdated(fieldNames.billingState)}
              />
            </div>

            <FormInput
              label="ZIP / Postal Code"
              subLabel={true}
              fieldName={fieldNames.billingZip}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.billingZip}
              onChange={this.onFieldUpdated(fieldNames.billingZip)}
            />

            <FormInput
              label="Email"
              fieldName={fieldNames.billingEmail}
              formError={formError}
              isRequired={true}
              placeholder={false}
              value={this.state.billingEmail}
              onChange={this.onFieldUpdated(fieldNames.billingEmail)}
            />

            <FormTextArea
              label="Any additional billing instructions:"
              fieldName={fieldNames.billingInstructions}
              formError={formError}
              placeholder={false}
              value={this.state.billingInstructions}
              onChange={this.onFieldUpdated(fieldNames.billingInstructions)}
            />
          </div>
        </div>

        <div className="row row-odd sub-row">
          <div className="col">
            <FormInputList
              label={(
                <span>
                  For those participating in the initiative as a <strong>compliance program</strong>, please
                  list below (or attach a list) of the states and counties in which you operate.
                </span>
              )}
              fieldName={fieldNames.operateComplianceList}
              formError={formError}
              isRequired={false}
              placeholder={false}
              value={this.state.operateComplianceList}
              onChange={this.onFieldUpdated(fieldNames.operateComplianceList)}
            />

            <FormFile
              label="Submit a list:"
              fieldName={fieldNames.operateComplianceFiles}
              formError={formError}
              multiple={false}
              isRequired={true}
              value={this.state.operateComplianceFiles}
              onChange={this.onFieldUpdated(fieldNames.operateComplianceFiles)}
            />

            <hr />

            <FormInputList
              label={(
                <span>
                  For those participating as a public awareness <strong>supplemental effort</strong>, please
                  list below (or attach a list) of the states in which you operate.
                </span>
              )}
              fieldName={fieldNames.operateSupplementalList}
              formError={formError}
              isRequired={false}
              placeholder={false}
              value={this.state.operateSupplementalList}
              onChange={this.onFieldUpdated(fieldNames.operateSupplementalList)}
            />

            <FormFile
              label="Submit a list:"
              fieldName={fieldNames.operateSupplementalFiles}
              formError={formError}
              multiple={false}
              isRequired={true}
              value={this.state.operateSupplementalFiles}
              onChange={this.onFieldUpdated(fieldNames.operateSupplementalFiles)}
            />
          </div>
        </div>

        <div className="row row-even sub-row">
          <div className="col">
            <FormInputList
              label="Please provide a list of the entities that need to be listed on the website:"
              fieldName={fieldNames.listEntities}
              formError={formError}
              isRequired={false}
              placeholder={false}
              value={this.state.listEntities}
              onChange={this.onFieldUpdated(fieldNames.listEntities)}
            />

            <hr />

            <FormFile
              label="Please provide any necessary logos for use on the website and app."
              subLabel="We would prefer both high- and low- resolution versions of .eps as well as .jpg files."
              fieldName={fieldNames.logoFiles}
              formError={formError}
              isRequired={true}
              value={this.state.logoFiles}
              onChange={this.onFieldUpdated(fieldNames.logoFiles)}
            />
          </div>
        </div>

        <div className="row row-odd sub-row">
          <div className="col">
            {formError && (
              <div className="alert alert-danger">
                <span className="help-block">
                  {(formError.message) ? (
                    formError.message
                  ) : (
                    formError
                  )}
                </span>
              </div>
            )}

            {this.state.formSuccess && (
              <div className="column small-12">
                <div className="callout success">
                  <span className="help-block">
                    Your password has been updated.
                  </span>
                </div>
              </div>
            )}

            <div className="column small-12">
              <div className="clearfix">
                <div className="button-group float-left">
                  <button type="submit" className="btn btn-primary btn-lg">Submit Registration Form</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RegisterLoadingModal
          registerModalActions={this.registerModalActions}
          registerHoc={this.props.registerHoc}
          registerListFileHoc={this.props.registerListFileHoc}
          registerLogoFilesHoc={this.props.registerLogoFilesHoc}
        />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  registerHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
    register: PropTypes.func,
  }),

  registerListFileHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
    saveListFile: PropTypes.func,
  }),

  registerLogoFilesHoc: PropTypes.shape({
    isLoading: PropTypes.bool,
    success: PropTypes.shape({id: PropTypes.number}),
    error: PropTypes.object,
    saveLogoFiles: PropTypes.func,
  }),
};

export default registerHoc(
  registerListFileHoc(
    registerLogoFilesHoc(
      RegisterForm
    )
  )
);
