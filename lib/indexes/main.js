/**

 Copyright 2015 Covistra Technologies Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
var P = require('bluebird');

module.exports = function(db, log) {

    function _ensureIndex(colName, spec) {
        var coll = db.collection(colName);
        return P.promisify(coll.ensureIndex, coll)(spec);
    }

    return new P(function(resolve) {
        var ops = [];

        return P.all(ops).then(resolve);
    });

};