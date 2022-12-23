# Neos CMS - JSON Validator Plugin for NeosUI

[![Latest Stable Version](https://poser.pugx.org/vivomedia/neos-ui-json-validator/v/stable)](https://packagist.org/packages/vivomedia/neos-ui-json-validator)
[![Total Downloads](https://poser.pugx.org/vivomedia/neos-ui-json-validator/downloads)](https://packagist.org/packages/vivomedia/neos-ui-json-validator)
[![License](https://poser.pugx.org/vivomedia/neos-ui-json-validator/license)](https://packagist.org/packages/vivomedia/neos-ui-json-validator)

A validator plugin for NeosUI to check properties for valid JSON strings.

## Install

Install with composer

```
composer require vivomedia/neos-ui-json-validator 
```

## Usage
To use the validator on a property, just add `VIVOMEDIA.NeosUI.JsonValidator/Validation/JsonValidator` to the validation within your NodeType definition.

Example:
```yaml
'Some.Of.Your:NodeTypes':
  properties:
    jsonString:
      type: string
      ui:
        label: 'JSON Data'
      validation:
        'Neos.Neos/Validation/NotEmptyValidator': []
        'VIVOMEDIA.NeosUI.JsonValidator/Validation/JsonValidator': []
```

See also: 
* https://docs.neos.io/cms/manual/content-repository/nodetype-definition
* https://neos.readthedocs.io/en/stable/References/NodeTypeDefinition.html
* https://docs.neos.io/cms/manual/extending-the-user-interface/react-extensibility-api#validators