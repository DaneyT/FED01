import {View} from 'backbone';
import ShipsRouter from '../routers/ShipsRouter';

//object representing the ClickA element
const ClickA = View.extend({
    router: null,

    events: {
        'click': 'clickHandler'
    },

    //function which will be fired when the dom is ready
    initialize: function ()
    {
        //Initialize the matches router to activate navigation
        this.router = new ShipsRouter();
    },

    //click event handler to check if a url in div (objectfilter) is clicked for the main link $el
    clickHandler: function (e)
    {
        e.preventDefault();

        let elem = document.getElementById("objectfilter");
        let filterValue = elem.value;
        this.model.set({filterValue: filterValue});

        //Get target the retrieve data properties
        let targetFormatted = e.target.innerHTML;
        let url = targetFormatted + '/';
        this.model.set({url: url});

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});

    }
});

export default ClickA;



