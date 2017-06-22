import _ from 'underscore';
import {Events} from 'backbone';
import States from './models/States';
import FilterValue from './models/FilterValue';
import ClickA from './views/ClickA';
import SWItemBlock from './views/SWItemBlock';

(function ()
{
    let setGlobalVariables = function()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */

    let init = function ()
    {
        setGlobalVariables();
        let statesModel = new States();
        let filterModel = new FilterValue();
        new ClickA({el: "#sw-links", model: statesModel, filterModel});
        new SWItemBlock({el: "#box", model: statesModel, filterModel});
        //Backbone.history.start({pushState: true, root: '/SW shipsales/'}); // uncomment dit om het te laten werken voor de localhost
        Backbone.history.start({pushState: true, root: '0810099/Projecten/FED01/'}); //weblink voor routing: FrontendFED01
    };

    window.addEventListener('load', init);
})();
