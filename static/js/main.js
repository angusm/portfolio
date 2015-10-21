// Configure requireJS
requirejs.config({
    baseUrl: 'static/js',
    paths: {
        angular: 'externals/angular',
        bootstrap: 'externals/bootstrap',
        flowType: 'externals/flowtype',
        jQuery: 'externals/jquery-2.1.3.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jQuery']
        },
        flowType: {
            deps: ['jQuery']
        },
        jQuery: {
            exports: 'jQuery'
        }
    }
});

// Get it running
requirejs(
    [
        'angular',
        'bootstrap',
        'jQuery',
        'project-constants',
        'models/project',
        'models/portfolio-page',
        'flowType'
    ],
    function(
        angular,
        bootstrap,
        jQuery,
        projectConstants,
        Project,
        PortfolioPage,
        flowType
    ) {

        /**
         * CONFIGURATION
         */
        var portfolio = angular.module('portfolio', []);

        /**
         * ANGULAR CONTROLLER
         */
        portfolio.controller('PortfolioController', [
            '$scope', '$element', '$timeout', '$sce',
            function($scope, $element, $timeout, $sce) {

                // DEBUG
                window.$scope = $scope;

                // SCOPE
                $scope.getAuthLink = $sce.trustAsResourceUrl.bind($sce);
                $scope.getMenuPages = getMenuPages;
                $scope.loadPage = loadPage;
                $scope.loadProject = loadProject;
                $scope.pages = [];
                $scope.projects = getTestProjects();
                $scope.selectedProject = $scope.projects[0];

                // CONSTANTS
                var VISIBLE_PORTFOLIO_PAGE = 'visible-portfolio-page';
                var PORTFOLIO_PAGE_CLASS = 'portfolio-page';
                var PAGE_TRANSITION_TIME = 250;

                // VARIABLES
                var projectDetailsPage = new PortfolioPage();
                var currentPage = projectDetailsPage;

                initializeController();

                /**
                 * FUNCTIONS
                 */

                /**
                 * Add the given page to the available set
                 * @param page
                 */
                function addPage(page) {
                    $scope.pages.push(page);
                }

                /**
                 * Add a page created using the given page data
                 * @param pageData
                 */
                function addPageFromData(pageData) {
                    addPage(new PortfolioPage(pageData));
                }

                /**
                 * Add pages from a set of given data
                 * @param pagesData
                 */
                function addPagesFromDataSet(pagesData) {
                    pagesData.forEach(function(pageData) {
                        addPageFromData(pageData);
                    });
                }

                /**
                 * Run an animated transition to the given page
                 * @param page
                 */
                function animateToPage(page) {
                    var pageIndex = getPageIndex(page);
                    var currentPageIndex = getPageIndex(currentPage);
                    var pageDifference = Math.abs(pageIndex - currentPageIndex);

                    angular.element('.portfolio-page').addClass(VISIBLE_PORTFOLIO_PAGE);
                    angular.element('.pages').animate({
                        marginLeft: (-100 * pageIndex) + '%'
                    }, {
                        duration: PAGE_TRANSITION_TIME * pageDifference,
                        complete: toggleVisiblePage.bind({}, page)
                    });
                }

                /**
                 * Return the pages that belong in the menu
                 * @returns {Array}
                 */
                function getMenuPages() {
                    var menuPages = [];
                    for (var pageIndex = 0; pageIndex < $scope.pages.length; pageIndex++) {
                        var page = $scope.pages[pageIndex];
                        if (page.inMenu) {
                            menuPages.push($scope.pages[pageIndex]);
                        }
                    }
                    return menuPages;
                }

                /**
                 * Get the index of the page with the given class
                 * @param pageClass
                 * @returns {number}
                 */
                function getPageIndex(desiredPage) {
                    return $scope.pages.indexOf(desiredPage);
                }

                /**
                 * Returns a test project
                 */
                function getTestProject() {
                    return {
                        id: 1,
                        name: 'Project 1 is a sunuvva bitch',
                        projectStyle: {
                            iconClass: 'icon-test',
                            arrowClass: 'arrow-test',
                            lineClasses: 'line-test,line-test,line-test,line-test'
                        },
                        projectType: {
                            template: 'static/angular-templates/project-web.html'
                        },
                        projectPhoto: [{
                            image: 'static/images/project-files/1.jpg'
                        }],
                        projectWeb: [{
                            link: 'http://www.para.com/images/2015/2015TrendAni/Project/index.html'
                        }]
                    };
                }

                /**
                 * Returns a set of test projects
                 * @returns {Array}
                 */
                function getTestProjects() {
                    var testProjects = [];
                    for (var i = 0; i < 16; i++) {
                        testProjects.push(getTestProject());
                    }
                    return testProjects;
                }

                /**
                 * Setup up the controller
                 */
                function initializeController() {
                    // Load the initial page
                    $scope.$watch('$viewContentLoaded', function(){
                        loadDataFromDataDump();
                        console.log(projectDetailsPage, $scope.pages);
                        $scope.loadPage($scope.pages[0]);
                    });
                }

                /**
                 * Load data from the data dump on the page
                 */
                function loadDataFromDataDump() {
                    var dataDump = angular.element($element).data('dump');
                    addPagesFromDataSet(dataDump.pages);
                    projectDetailsPage = $scope.pages[3];
                }

                /**
                 * Load the given page
                 * @param page
                 */
                function loadPage(page) {
                    animateToPage(page);
                    currentPage = page;
                }

                /**
                 * Load and display the given project
                 * @param project
                 */
                function loadProject(project) {
                    setProject(project);
                    loadPage(projectDetailsPage);
                }

                /**
                 * Sets the currently selected project
                 * @param project
                 */
                function setProject(project) {
                    $scope.selectedProject = project;
                }

                /**
                 * Toggle the visibility of the given page
                 */
                function toggleVisiblePage(page) {
                    angular.element('.'+PORTFOLIO_PAGE_CLASS).removeClass(VISIBLE_PORTFOLIO_PAGE);
                    angular.element('.'+page.domClass).addClass(VISIBLE_PORTFOLIO_PAGE);
                }

            }
        ]);

        initialize();

        /**
         * FUNCTIONS GO BELOW HERE
         */

        /**
         * Initialize the page
         */
        function initialize() {
            jQuery('body').flowtype();
            angular.bootstrap(document.getElementsByTagName('body'),['portfolio']);
        }

    }
);
