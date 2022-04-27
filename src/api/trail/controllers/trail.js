"use strict";

/**
 *  homepage controller
 */

const schema = require("../content-types/trail/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::trail.trail", schema);