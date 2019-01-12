import { computeDecimalLatLong } from './utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    localityGroupList: {
      localityGroup: {
        [config]: {
          compute: computeDecimalLatLong,
        },
        fieldLocCounty: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'fieldloccounty',
              },
            },
          },
        },
        fieldLocState: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'fieldlocstate',
              },
            },
          },
        },
        fieldLocCountry: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'fieldloccountry',
              },
            },
          },
        },
        decimalLatitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        decimalLongitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        geoRefSource: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'georefsource',
              },
            },
          },
        },
      },
    },
  };
};
