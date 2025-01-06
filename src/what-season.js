const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	try {
		if (date === undefined) {
			return 'Unable to determine the time of year!';
		  }
		
		  if (typeof date === 'function') {
			throw new Error('Invalid date!');
		  }
		
		  if (date === null || typeof date !== 'object') {
			throw new Error('Invalid date!');
		  }
		
		  if (Object.prototype.toString.call(date) !== '[object Date]') {
			throw new Error('Invalid date!');
		  }
		
		  if (isNaN(date.getTime())) {
			throw new Error('Invalid date!');
		  }
	} catch (error) {
		throw new Error('Invalid date!');
	}
  
	const month = date.getMonth();  
  
	switch (true) {
		case (month === 11 || month === 0 || month === 1):
			return 'winter';
		case (month >= 2 && month <= 4):
			return 'spring';
		case (month >= 5 && month <= 7):
			return 'summer';
		case (month >= 8 && month <= 10):
			return 'autumn';
		default:
			throw new Error('Invalid month!');
	}
}

module.exports = {
  getSeason
};
