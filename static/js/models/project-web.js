define(
    [
        'models/object-configurable-class'
    ],
    function(
        ObjectConfigurable
    ) {

        /**
         * Class for storing information about a project's photo
         * @constructor
         */
        function ProjectWeb(configuration) {

            this.name = null;
            this.link = null;

            ObjectConfigurable.call(this, configuration);

        }

        return ProjectWeb;

    }
);
