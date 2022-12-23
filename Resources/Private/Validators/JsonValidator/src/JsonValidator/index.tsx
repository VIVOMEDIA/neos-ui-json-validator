const JsonValidatorFactory = ({ i18nRegistry } : {i18nRegistry: any}) => {
    return (value: any) => {
        try {
            if (value === "") {
                return null;
            }

            JSON.parse(value);
        } catch (error) {
            return i18nRegistry.translate('VIVOMEDIA.NeosUI.JsonValidator:Main:NotValidJson', 'Not a valid JSON string');
        }

        return null;
    };

}
export default JsonValidatorFactory;
