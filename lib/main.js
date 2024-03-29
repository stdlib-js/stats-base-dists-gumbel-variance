/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PI_SQUARED = require( '@stdlib/constants-float64-pi-squared' );


// MAIN //

/**
* Returns the variance for a Gumbel distribution with location `mu` and scale `beta`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {PositiveNumber} variance
*
* @example
* var y = variance( 0.0, 1.0 );
* // returns ~1.645
*
* @example
* var y = variance( 5.0, 2.0 );
* // returns ~6.58
*
* @example
* var y = variance( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = variance( 0.0, NaN );
* // returns NaN
*
* @example
* var y = variance( 0.0, 0.0 );
* // returns NaN
*/
function variance( mu, beta ) {
	if (
		isnan( mu ) ||
		isnan( beta ) ||
		beta <= 0.0
	) {
		return NaN;
	}
	return ( PI_SQUARED / 6.0 ) * beta * beta;
}


// EXPORTS //

module.exports = variance;
