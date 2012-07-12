/**
 * Test suite for the array assertions of jsassert framework.
 */
JSAssert.addTestSuite("Array Assertions", (function() {
	// Objects used by all cases (setUp)
	var message = 'expected error message';
	var array1 = [ 0, 1, 2, 3, 4 ];
	var array2 = [ 5, 6, 7, 8, 9 ];
	
	// Expose test cases
	return {
		testLength: function() {
			assertThat([]).length().isZero();
			assertThat(array1).length().equals(5);
			assertThat(array2).length().equals(5);
			assertThat(array1).length().equals(array2.length);
		},
		testEquals: function() {
			assertThat([]).equals([]);
			assertThat(array1).equals(array1);
			assertThat(array1).equals([ 0, 1, 2, 3, 4 ]);
			try {
				assertThat(array1).equals(array2, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testContains: function() {
			assertThat(array1).contains(0);
			assertThat(array2).contains(5);
			try {
				assertThat(array1).contains(5, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));