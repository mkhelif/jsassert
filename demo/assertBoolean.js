/**
 * Test suite for the boolean assertions of jsassert framework.
 */
JSAssert.addTestSuite("Boolean Assertions", (function() {
	var message = 'expected error message';
	return {
		testIsTrue: function() {
			assertThat(true).isTrue();			
			try {
				assertThat(true).isFalse(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testIsFalse: function() {
			assertThat(false).isFalse();
			try {
				assertThat(false).isTrue(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testEquals: function() {
			assertThat(true).equals(true);
			assertThat(false).equals(false);
			try {
				assertThat(false).equals(true, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
			try {
				assertThat(true).equals(false, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));