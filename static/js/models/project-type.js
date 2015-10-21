define(
    [
        'models/object-configurable-class'
    ],
    function(
        ObjectConfigurable
    ) {

        /**
         * Class for storing information about a project's type
         * @constructor
         */
        function ProjectType(configuration) {

            this.template = null;
            this.name = null;

            ObjectConfigurable.call(this, configuration);

        }

        return ProjectType;

    }
);
