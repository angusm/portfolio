define(
    [
        'models/object-configurable-class',
        'project-constants'
    ],
    function(
        ObjectConfigurable,
        projectConstants
    ) {

        /**
         * Class for storing information about a project's style
         * @constructor
         */
        function ProjectStyle(configuration) {

            this.iconClass = null;
            this.arrowClass = null;
            this.lineClasses = [];

            ObjectConfigurable.call(this, configuration);
            this.lineClasses = this.lineClasses.split(',');

        }

        ProjectStyle.prototype.randomize = function() {

        };

        return ProjectStyle;

    }
);
