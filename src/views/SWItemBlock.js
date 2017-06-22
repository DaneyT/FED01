import ajaxRequest from '../models/AjaxCall';
import createDomElement from '../domElement';
import _ from 'underscore';
import {View} from 'backbone';

let itemData;
let switemsGallery;
let urlCategory;
let filterSelectValue;

/**
 * When the url is changed this function will be initialized and the url is being retrieved and saved in a global let
 */
const SWItemBlock = View.extend({
    initialize: function ()
    {
        this.model.on("change:url", this.changeUrl, this);
    },

    //Toggle the color class
    changeUrl: function(model)
    {
        urlCategory = this.model.get('url');
        filterSelectValue = this.model.get('filterValue');

        App.events.on('newData', Ships.initialize(), this);
    }
});




/**
 * This function get the URl from the clicked link and makes a AjaxRequest with it
 * And calculates the cost of ships
 * And filters the ships based on the filter value/level
 * @type {{initialize}}
 */
let Ships = (function (data){

    let creditsInEuros =  (1 / 54) * 100;// <-- hoevel credits 1 euro is
    document.getElementById('creditsPerEuro').innerHTML = "1 Euro = " + creditsInEuros + " CREDITS";
    let inputfieldValue = document.getElementById('inputfield');

    let init = function()
    {
        getAllShips(data);
    };

    let getAllShips = () =>
    {
        switemsGallery = document.getElementById('ships');
        ajaxRequest("https://swapi.co/api/" + urlCategory).then(showShips);
    };

    /**
     * Process the AJAX response
     */
    let showShips = (data) =>
    {
        //Store in global for later use
        itemData = data.results;
        let swItemNumber = 0;

        /**
         * Empty's the ships dom element to make room for new data
         * @type {Element}
         */
        let dataDiv = document.getElementById("ships");
        while (dataDiv.firstChild) {
            dataDiv.removeChild(dataDiv.firstChild);
        }

        let filteredArray = _.filter (itemData, function(data) {
            return Number(data.cost_in_credits) < filterSelectValue;
        });

        /**
         * Creates the dom elements, with attributes, values etc.
         */
        filteredArray.map((ship) =>
        {
            let swItem = createDomElement({tagName: 'div', attributes: {class: 'card c' + swItemNumber}});

            //Create all children HTML tags for the card
            let title = createDomElement({tagName: 'h2', attributes: {class: 'name'}, content: "Name: " + ship.name});
            let subTitle = createDomElement({tagName: 'h3', attributes: {class: 'model'}, content: "Ship model: " + ship.model});
            let calculation = createDomElement({tagName: 'p', attributes: {class: 'calculation'}, content:
            "With an earning of " + inputfieldValue.value + " " +
            "in euro's per month. It takes you " + ship.cost_in_credits / (inputfieldValue.value/ creditsInEuros) + "months to buy this item." +
            "That are " + (ship.cost_in_credits / (inputfieldValue.value/ creditsInEuros) / 12) + " years."});

            let intro = createDomElement({tagName: 'p', attributes: {class: 'cost_in_credits'}, content: "Cost: " + ship.cost_in_credits});

            //Append all elements to the element
            swItem.appendChild(title);
            swItem.appendChild(subTitle);
            swItem.appendChild(calculation);
            swItem.appendChild(intro);

            //Append the card to the gallery
            switemsGallery.appendChild(swItem);
            swItemNumber++;
        });
        if(filteredArray.length == 0) {
            let error = createDomElement({tagName: 'p', attributes: {class: 'error'}, content: "Oops! there are no starwars items you can buy from that cost category!"});
            document.getElementById('ships').appendChild(error);
        }
    };

    return {
        initialize: init
    }

})();

export default SWItemBlock
