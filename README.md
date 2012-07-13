jsassert
========

jsassert is a JavaScript unit tests framework which make uses of fluent assertions.

Test suites
-----------

A test suite is a list of several test cases that check a certain area of code.
To add a test suite to the execution just use the following code:
```
JSAssert.addTestSuite("MyTestSuite", {
    testCase1: function() {},
    testCase2: function() {}
});
```

If you want to setup some variables (executed when test suite is added to the list not when test is executed):
```
JSAssert.addTestSuite("MyTestSuite", (function() {
    // Set-up some variables here
    var object = { name: 'John Doe' };

    // Expose test cases
    return {
        testCase1: function() {
			// Use object here...
		},
        testCase2: function() {
			// ...or here
		}
    };
}()));
```

Test cases
----------

A test case is simply a JavaScript function which is invoked by the framework. If an exception is thrown by the method, the test is marked
as failed, else it is marked as passed. Assertions throw exceptions if they fail.


Assertions
----------

### Introduction

For now, jsassert framework supports assertions for the following types of data: number, boolean, string, array, object.
To use an assertion, simply starts with `assertThat(myObject)`.

At this point you can call several methods:
```
var number = 5;
assertThat(number).isNotZero();
assertThat(number).isGreaterThan(0);
assertThat(number).equals(5);
```

Or in chained version:
```
var number = 5;
assertThat(number).isNotZero().isGreaterThan(0).equals(5);
```

Every assertion methods has an optional `message` parameter which is used when the assertion fails.

### Assertions on number

* **equals** _(expected)_<br>
    Check that the number equals the expected value.<br>
        *expected*: the expected value of the number.

* **isZero** _()_<br>
    Verify that the number equals 0.

* **isNotZero** _()_<br>
    Verify that the number does not equal 0.

* **isGreaterThan** _(value)_<br>
    Verify that the number is greater than the value.<br>
        *value*: the value to compare with the number.

* **isGreaterOrEqualsTo** _(value)_<br>
    Verify that the number is greater or equals to the value.<br>
        *value*: the value to compare with the number.

* **isLowerThan** _(value)_<br>
    Verify that the number is lower than the value.<br>
        *value*: the value to compare with the number.

* **isLowerOrEqualsTo** _(value)_<br>
    Verify that the number is lower or equals to the value.<br>
        *value*: the value to compare with the number.

### Assertions on boolean

TODO

### Assertions on string

TODO

### Assertions on object

TODO

### Assertions on array

TODO


Examples
--------

For a complete example you can have a look at the `demo` directory, you just have to open the `index.html` file.
Refresh the page to execute tests again.


Contributing
------------

-   Fork it.
-   Create a branch (`git checkout -b my_markup`)
-   Commit your changes (`git commit -am "Added Snarkdown"`)
-   Push to the branch (`git push origin my_markup`)
-   Create an [Issue](https://github.com/mkhelif/jsassert/issues) with a link to your branch
-   Enjoy a refreshing Diet Coke and wait