define(
    [],
    function() {

        var FORBIDDEN_PROPERTIES = [
            'belongsTo',
            'hasMany'
        ];

        function snakeCaseToCamelCase(snakeCaseString) {
            var find = /(\_\w)/g;
            var convert =  function(matches){
                return matches[1].toUpperCase();
            };
            return snakeCaseString.replace(
                find,
                convert
            );
        }

        function ObjectConfigurable(configuration) {

            var self = this;

            // Establish relations
            self.belongsTo = self.belongsTo || {};
            self.hasMany = self.hasMany || {};

            // Loop through the configuration
            for (var key in configuration) {

                var camelCaseKey = snakeCaseToCamelCase(key);

                if (self.hasOwnProperty(camelCaseKey)) {

                    // Check for forbidden properties
                    if (key in FORBIDDEN_PROPERTIES) {
                        throw new Error('Tried to set forbidden property in constructor.');
                    }
                    // Check for relations
                    else if (self.belongsTo.hasOwnProperty(camelCaseKey)) {
                        var modelClass = self.belongsTo[camelCaseKey];
                        self[camelCaseKey] = new modelClass(configuration[key]);
                    }
                    else if (self.hasMany.hasOwnProperty(camelCaseKey)) {
                        var modelClass = self.hasMany[camelCaseKey];
                        self[camelCaseKey] = [];
                        for (var subObjectIndex = 0; subObjectIndex < configuration[key].length; subObjectIndex++) {
                            var relationClass = configuration[key][subObjectIndex];
                            var relationInstance = new modelClass(relationClass);
                            self[camelCaseKey].push(relationInstance);
                        }
                    }
                    // Do the default
                    else {
                        self[camelCaseKey] = configuration[key];
                    }

                }
            }

        }

        return ObjectConfigurable;

    }
);

