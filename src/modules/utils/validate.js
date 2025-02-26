const exportedMethods = {
    // validate a string
    // Check that s is not null, and is a string type
    // currently, the titles and the content can be put through this.
    validateString(s) {
        if (!s) throw "Must supply a string!";
        if (typeof(s) !== 'string') throw "Must supply a string!";

        return s.trim();
    },

    // validate tags
    validateTags(tags) {
        // iterate over all tags, applying the validateString function.
        for (i in tags) {
            tags[i] = this.validateString(tags[i])  
        }

        return tags
    }
}

export default exportedMethods;