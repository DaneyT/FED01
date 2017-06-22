import {View} from 'backbone';
/**
 * Object representing the DataLoadLink element
 *
 * @constructor
 */
const DataLoadLink = View.extend({
    events: {
        'click': 'clickHandler'
    },
    /**
     * Click handler for the main link $el
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();
        this.loadMatches();
    },
    /**
     * Wrapper function to load the matches through the model
     */
    loadMatches: function ()
    {
        this.model.fetch({
            success: (model, response, options) =>
                this.loadMatchesSuccessHandler(model, response, options),
            error: (model, response, options) =>
                this.loadMatchesErrorHandler(model, response, options),
            data: {
                league: 'PrimeraDivision',
                club: 'Getafe'
            }
        });
    },

    /**
     * @param model
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler: function (model, response, options)
    {
        console.dir(model);
        console.dir(response);
        console.dir(options);

        //Eerst een collectie van maken en dan kan je het pas filteren

        // let homeMatches = collection.filter(function (match)
        // {
        //     return match.get('homeMatch') == true;
        // });
        //
        // console.dir(homeMatches);


        // let shipCost = response.filter(function (response)
        // {
        //     return response.get('cost_in_credits') == true;
        // });

        //console.dir(shipCost);

    },
    /**
     * @param model
     * @param response
     * @param options
     */
    loadMatchesErrorHandler: function (model, response, options)
    {
        console.dir(model);
        console.dir(response);
        console.dir(options);
    }
});
export default DataLoadLink;