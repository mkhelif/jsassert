/**
 * Test suite for the common assertions of jsassert framework.
 */
JSAssert.addTestSuite("Common Assertions", (function() {
	var message = 'expected error message';
	return {
		testAssertIsNull: function() {
			assertThat().isNull();
			assertThat(null).isNull();
			assertThat(undefined).isNull();
			try {
				assertThat({}).isNull(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
			try {
				assertThat(0).isNull(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testAssertIsNotNull: function() {
			assertThat({}).isNotNull();
			assertThat([]).isNotNull();
			assertThat(0).isNotNull();
			assertThat('').isNotNull();
			
			try {
				assertThat().isNull(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
			try {
				assertThat(null).isNull(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
			try {
				assertThat(undefined).isNull(message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		}
	};
}()));