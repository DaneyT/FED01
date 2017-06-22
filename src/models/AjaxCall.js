import reqwest from 'reqwest';

/**
* Ajax call function through a promise
* */

let ajaxRequest = (url, data) =>
{
    return new Promise((resolve, reject) =>
    {
        //Default ajax parameters
        let parameters = {
            type: 'json',
            url: url,
            crossOrigin: true,
            success: (json) => resolve(json),
            error: (err) => reject(err)
        };

        //If data is passed, add it to the AJAX parameters
        if (data) {
            parameters.data = data;
        }

        //Actual AJAX call
        reqwest(parameters);
    });
};

export default ajaxRequest;