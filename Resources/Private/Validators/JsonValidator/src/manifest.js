import manifest from '@neos-project/neos-ui-extensibility';
import createJsonValidator from './JsonValidator';

manifest('VIVOMEDIA.NeosUI.JsonValidator:JsonValidator', {}, globalRegistry => {

    const i18nRegistry = globalRegistry.get('i18n');
    const validatorRegistry = globalRegistry.get('validators');

    validatorRegistry.set('VIVOMEDIA.NeosUI.JsonValidator/Validation/JsonValidator', createJsonValidator({ i18nRegistry }));
});