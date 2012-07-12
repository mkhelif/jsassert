/**
 * Test suite for the number assertions of jsassert framework.
 */
JSAssert.addTestSuite("Number Assertions", (function() {
	var message = 'expected error message';
	return {
		testEquals: function() {
			assertThat(0).equals(0);
			assertThat(-1).equals(-1);
			assertThat(1).equals(1);
			assertThat(1.5).equals(1.5);
			try {
				assertThat(1).equals(2, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsZero: function() {
			assertThat(0).isZero();
			try {
				assertThat(1).isZero(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsNotZero: function() {
			assertThat(1).isNotZero();
			try {
				assertThat(0).isNotZero(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testGreaterThan: function() {
			assertThat(1).greaterThan(0);
			assertThat(1).greaterThan(-1);
			assertThat(0.2).greaterThan(0.1);
			try {
				assertThat(0).greaterThan(1, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testGreaterOrEqualsTo: function() {
			assertThat(1).greaterOrEqualsTo(0);
			assertThat(1).greaterOrEqualsTo(1);
			assertThat(0.2).greaterOrEqualsTo(0.1);
			try {
				assertThat(0).greaterOrEqualsTo(1, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testLowerThan: function() {
			assertThat(0).lowerThan(1);
			assertThat(-1).lowerThan(1);
			assertThat(0.1).lowerThan(0.2);
			try {
				assertThat(1).lowerThan(0, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testLowerOrEqualsTo: function() {
			assertThat(0).lowerOrEqualsTo(1);
			assertThat(1).lowerOrEqualsTo(1);
			assertThat(0.1).lowerOrEqualsTo(0.2);
			try {
				assertThat(1).lowerOrEqualsTo(0, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));