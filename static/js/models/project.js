define(
    [
        'models/object-configurable-class',
        'project-constants',
        'models/project-style',
        'models/project-type',
        'models/project-photo',
        'models/project-web'
    ],
    function(
        ObjectConfigurable,
        projectConstants,
        ProjectStyle,
        ProjectType,
        ProjectPhoto,
        ProjectWeb
    ) {

        /**
         * Class for storing information about a project
         * @constructor
         */
        function Project(configuration) {

            this.id = null;
            this.name = null;
            this.blurb = null;
            this.projectStyle = null;
            this.projectType = null;
            this.projectPhoto = null;
            this.projectWeb = null;

            this.belongsTo = {
                projectStyle: ProjectStyle,
                projectType: ProjectType
            };
            this.hasMany = {
                projectPhoto: ProjectPhoto,
                projectWeb: ProjectWeb
            };

            ObjectConfigurable.call(this, configuration);
        }

        Project.prototype.getIntermediateLine = function(lineIndex) {
            return this.getLine(lineIndex,'-');
        };
        Project.prototype.getLastLine = function(lineIndex) {
            return this.getLine(lineIndex,'...');
        };
        Project.prototype.getLine = function(lineIndex, suffix) {

            // Get the basic line
            var offset = 0;
            if (lineIndex > 0) {
                offset = 1;
            }
            var line = this.name.substr(
                (projectConstants.LINE_LENGTH * lineIndex) - offset,
                projectConstants.LINE_LENGTH + 1
            );

            // If the line length is greater than the project constant line length
            if (line.length > projectConstants.LINE_LENGTH) {
                line = line.substr(0, projectConstants.LINE_LENGTH);
                var subSelectionLength = projectConstants.LINE_LENGTH - suffix.length;
                return line.substr(0, subSelectionLength) + suffix;
            } else {
                return line.substr(0, projectConstants.LINE_LENGTH);
            }
        };

        Project.prototype.getLineNumbers = function() {
            return [0, 1, 2, 3];
        };

        return Project;

    }
);
