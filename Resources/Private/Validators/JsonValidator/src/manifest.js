import manifest from '@neos-project/neos-ui-extensibility';
import JsonValidator from './JsonValidator';

manifest('VIVOMEDIA.NeosUI.JsonValidator:JsonValidator', {}, globalRegistry => {

    const validatorRegistry = globalRegistry.get('validators');

    validatorRegistry.set('VIVOMEDIA.NeosUI.JsonValidator/Validation/JsonValidator', JsonValidator);
});