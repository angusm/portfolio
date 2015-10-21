define(
    [
        'models/object-configurable-class'
    ],
    function(
        ObjectConfigurable
    ) {

        /**
         * Class for storing information about a portfolio page
         * @constructor
         */
        function PortfolioPage(configuration) {
            this.domClass = null;
            this.name = null;
            this.template = null;
            this.inMenu = null;

            ObjectConfigurable.call(this, configuration);
        }

        return PortfolioPage;

    }
);
