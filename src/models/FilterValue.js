import {Model} from 'backbone';

//Model to save the 'expensive level', this is being used as a filter value

const FilterValue = Model.extend({

    defaults: {
        "filterValue":  200000
    },
    filterValue: 200000
});


export default FilterValue;

