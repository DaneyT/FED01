import {Model} from 'backbone';

//Model to save all kind of states

const States = Model.extend({

    defaults: {
        "url":  "ships/",
    },

    url: 'ships/'
});


export default States;

