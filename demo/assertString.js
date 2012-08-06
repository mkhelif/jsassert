/**
 * Test suite for the string assertions of jsassert framework.
 */
JSAssert.addTestSuite("String Assertions", (function() {
	var message = 'expected error message';
	return {
		testLength: function() {
			assertThat("").length().isZero();
			assertThat("azerty").length().equals(6);
			try {
				assertThat("azerty").length().isZero(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testEquals: function() {
			assertThat("").equals("");
			assertThat("azerty").equals("azerty");
			try {
				assertThat("azerty").equals("", message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testContains: function() {
			assertThat("azerty").contains("e");
			assertThat("azerty").contains("azer");
			try {
				assertThat("azerty").contains("b", message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testStartsWith: function() {
			assertThat("azerty").startsWith("a");
			try {
				assertThat("azerty").startsWith("b", message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testEndsWith: function() {
			assertThat("azerty").endsWith("y");
			try {
				assertThat("azerty").endsWith("a", message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testMatches: function() {
			assertThat("hello foo!").matches(/hello (.+)!/);
			assertThat("azerty").matches(/.+y/);
			try {
				assertThat("azerty").matches(/.+z/, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));