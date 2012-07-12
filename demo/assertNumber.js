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
		testIsGreaterThan: function() {
			assertThat(1).isGreaterThan(0);
			assertThat(1).isGreaterThan(-1);
			assertThat(0.2).isGreaterThan(0.1);
			try {
				assertThat(0).isGreaterThan(1, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsGreaterOrEqualsTo: function() {
			assertThat(1).isGreaterOrEqualsTo(0);
			assertThat(1).isGreaterOrEqualsTo(1);
			assertThat(0.2).isGreaterOrEqualsTo(0.1);
			try {
				assertThat(0).isGreaterOrEqualsTo(1, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsLowerThan: function() {
			assertThat(0).isLowerThan(1);
			assertThat(-1).isLowerThan(1);
			assertThat(0.1).isLowerThan(0.2);
			try {
				assertThat(1).isLowerThan(0, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsLowerOrEqualsTo: function() {
			assertThat(0).isLowerOrEqualsTo(1);
			assertThat(1).isLowerOrEqualsTo(1);
			assertThat(0.1).isLowerOrEqualsTo(0.2);
			try {
				assertThat(1).isLowerOrEqualsTo(0, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));