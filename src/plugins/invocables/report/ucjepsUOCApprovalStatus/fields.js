import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TermPickerInput,
    DateInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      OutputMIME: {
        [config]: {
          defaultValue: 'application/pdf',
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.OutputMIME.name',
              defaultMessage: 'Output format',
            },
          }),
          required: true,
          view: {
            type: OptionPickerInput,
            props: {
              source: 'uocApprovalStatusMIMETypes',
            },
          },
        },
      },
      AuthBy: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.AuthBy.name',
              defaultMessage: 'Authorized by',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/collective,organization/ulan',
              showQuickAdd: false,
            },
          },
        },
      },
      AuthStatus: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.AuthStatus.name',
              defaultMessage: 'Authorization status',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'uocauthorizationstatuses',
            },
          },
        },
      },
      StartDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.StartDate.name',
              defaultMessage: 'Earliest requested date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      EndDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.EndDate.name',
              defaultMessage: 'Latest requested date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
