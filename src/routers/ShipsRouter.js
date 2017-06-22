import {Router} from 'backbone';

/**
 * Router for the ships URL's. When the url is changed a event is fired
 *
 * @constructor
 */
const ShipsRouter = Router.extend({

    routes: {
        'cato': 'shipAction'
    },

    /**
     * Route callback, used to trigger global event
     */
    shipAction: function (cato)
    {
        App.events.trigger('newData', {
            datatype: cato
        });
    }
});

export default ShipsRouter;
