/**
 * Function to create new DOM elements
 * @param properties
 * @returns {Element}
 */
function createDomElement(properties)
{
    //Create the element
    let domElement = document.createElement(properties.tagName);

    //Loop through the attributes to set them on the element
    let attributes = properties.attributes;
    for (let prop in attributes) {
        domElement.setAttribute(prop, attributes[prop]);
    }

    //If any content, set the inner HTML
    if (properties.content) {
        domElement.innerHTML = properties.content;
    }

    //Return to use in other functions
    return domElement;
}

export default createDomElement;
