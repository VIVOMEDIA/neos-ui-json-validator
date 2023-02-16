import React from 'react';
import I18n from '@neos-project/neos-ui-i18n';

const JsonValidator = (value) => {
        try {
            if (value === "") {
                return null;
            }

            JSON.parse(value);
        } catch (error) {
            return <I18n id="VIVOMEDIA.NeosUI.JsonValidator:Main:NotValidJson" fallback="Not a valid JSON string"/>
        }

        return null;

}
export default JsonValidator;
