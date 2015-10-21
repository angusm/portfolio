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
        function ProjectPhoto(configuration) {

            this.image = null;

            ObjectConfigurable.call(this, configuration);

        }

        return ProjectPhoto;

    }
);
