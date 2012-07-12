/**
 * Test suite for the object assertions of jsassert framework.
 */
JSAssert.addTestSuite("Object Assertions", (function() {
	// Objects used by all cases (setUp)
	var message = 'expected error message';
	var object1 = {
		name: 'John Doe',
		age: 25,
		gender: 'male'
	};
	var object2 = {
		name: 'Anonymous',
		age: 25,
		gender: 'female'
	};
	
	// Expose test cases
	return {
		testEquals: function() {
			assertThat(object1).equals(object1);
			assertThat(object2).equals(object2);
			try {
				assertThat(object1).equals(object2, message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testHas: function() {
			assertThat(object1).has('name');
			assertThat(object2).has('name');
			assertThat(object1).has('age');
			assertThat(object2).has('age');
			assertThat(object1).has('gender');
			assertThat(object2).has('gender');
			try {
				assertThat(object1).has('property', message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
			try {
				assertThat(object2).has('property', message);
			} catch (error) {
				assertThat(error).property('message').equals(message);
			}
		},
		testProperty: function() {
			assertThat(object1).property('name').equals('John Doe');
			assertThat(object1).property('age').equals(25);
			assertThat(object1).property('age').equals(object2.age);
			assertThat(object1).property('property').isNull();
		}
	};
}()));