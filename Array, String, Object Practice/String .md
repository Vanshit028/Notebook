<style>

*{
    margin:0;
    padding:0;
    font-family:system-ui;
}

.markdown-body .highlight pre, .markdown-body pre , .markdown-body code{
    background-color: #f3f3f3;
}
</style>

# 1. charAt()

Syntax ```const char = str_name.charAt(index);```

```javascript 
const str = "Hello, world!";
console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(7)); // Output: "w"
console.log(str.charAt(12)); // Output: "!"
console.log(str.charAt(20)); // Output: "" (index out of range)
```

* The charAt() method is called on the string str to retrieve characters at specific indices.
* The character at index 0 is "H", at index 7 is "w", and at index 12 is "!".
* Calling charAt(20) attempts to access an index beyond the length of the string, resulting in an empty string ("").

### Return Value
* The charAt() method returns a string containing the character at the specified index. If the index is out of range, an empty string ("") is returned.

### Key Points
* The charAt() method is a safe way to access characters within a string, as it gracefully handles out-of-range indices without throwing errors.
* JavaScript strings are zero-indexed, meaning the first character is at index 0, the second character is at index 1, and so on.
* Negative indices are treated as relative to the end of the string. For example, -1 refers to the last character, -2 refers to the second-to-last character, and so forth.
* The charAt() method is widely supported across all browsers and JavaScript environments.

### Use Cases
* Retrieving individual characters from a string based on specific positions.
* Iterating over characters in a string using a loop and accessing them with charAt().

### Additional Notes
* If you need to work with Unicode code points (rather than single characters) or handle surrogate pairs (for representing characters outside the Basic Multilingual Plane), consider using other methods like codePointAt() for more advanced string handling.

### Compatibility
* The charAt() method is part of ECMAScript 1 (ES1) standard and is universally supported in all modern browsers and JavaScript environments.


<hr style="background: red;">

# 2. charCodeAt()

Syntax ```const unicodeValue = str.charCodeAt(index);```

```javascript 
const str = "Hello";
console.log(str.charCodeAt(0)); // Output: 72 (Unicode value of "H")
console.log(str.charCodeAt(1)); // Output: 101 (Unicode value of "e")
console.log(str.charCodeAt(4)); // Output: 111 (Unicode value of "o")
```
* The charCodeAt() method is called on the string str to retrieve the Unicode values of characters at specific indices.
* str.charCodeAt(0) returns 72, which is the Unicode value for the character "H".
* str.charCodeAt(1) returns 101, which is the Unicode value for the character "e".
* str.charCodeAt(4) returns 111, which is the Unicode value for the character "o".

### Return Value
* The charCodeAt() method returns an integer representing the Unicode value (code point) of the character at the specified index within the string.
* If the index is out of range (i.e., less than 0 or greater than or equal to the length of the string), NaN (Not-a-Number) is returned.

### Key Points
* JavaScript strings are UTF-16 encoded, meaning each character may consist of one or two 16-bit code units (depending on the character's Unicode value).
* The Unicode value returned by charCodeAt() represents the code point of the character in the Unicode standard.
* Unicode values are useful for comparing and processing characters based on their underlying code points.

### Use Cases
* Determining the Unicode value of characters within a string for various string manipulation tasks.
* Implementing custom string processing based on character code points, such as detecting specific characters or ranges of characters.

### Additional Notes
* For handling characters that are represented by surrogate pairs (i.e., characters outside the Basic Multilingual Plane, such as emojis), consider using codePointAt() for more accurate Unicode code point retrieval.

### Compatibility
* The charCodeAt() method is part of ECMAScript 1 (ES1) standard and is universally supported in all modern browsers and JavaScript environments.

Understanding character code points and Unicode values is fundamental for working with text data in JavaScript, especially when dealing with internationalization and character encoding. If

<hr style="background: red;">

# 3. concat()

Syntax ```const newString = str1.concat(str2, str3, ..., strN);```


### Return Value
* For string concatenation using concat(), a new string is returned that contains the concatenated values of the original strings and any additional arguments provided.
* For array concatenation using concat(), a new array is returned that contains elements from the original arrays combined with elements from any additional arrays provided.

### Key Points
* concat() does not modify the original strings or arrays; it returns a new string or array containing the concatenated values.
* It can be used to concatenate strings together, as well as to combine arrays into a single array.
* The concat() method is useful for creating new strings or arrays based on existing values without mutating the originals.

### Use Cases
* Building dynamic strings by combining different parts or variables together.
* Combining arrays to create a larger array without modifying the original arrays.
* Concatenating strings or arrays conditionally based on certain logic or user input.

### Additional Notes
* If an argument to concat() is null or undefined, it is treated as an empty string or empty array, respectively.
* You can use the spread syntax (...) to concatenate arrays in a more concise way, especially when working with arrays dynamically.

### Compatibility
* The concat() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

The concat() method is versatile and commonly used for string and array manipulation in JavaScript, providing a convenient way to combine values without modifying the original data.

<hr style="background: red;">

# 4. endsWith()

Syntax 
```javascript
str.endsWith(searchString);
str.endsWith(searchString, length);
```
* **searchString:** The substring to search for at the end of str.
* **length (Optional):** The number of characters from str to consider when performing the search. If specified, str is treated as if it were only this long for the purpose of checking the ending.

```javascript 
const str = "Hello, world!";

console.log(str.endsWith("!")); // Output: true
console.log(str.endsWith("world")); // Output: false (case-sensitive)
console.log(str.endsWith("world!", 13)); // Output: true (considering first 13 characters)
```

### Parameters
* searchString: A string representing the characters to search for at the end of str.

### Return Value
* Returns true if str ends with searchString; otherwise, returns false.

### Key Points
The endsWith() method performs a case-sensitive comparison to check if the specified searchString matches the characters at the end of the str.
If length is provided as the second argument, the comparison is based on the specified length of the string.

### Use Cases
Checking if a filename ends with a specific file extension.
Verifying if a URL ends with a known path segment.
Determining if a sentence ends with certain punctuation marks.

### Compatibility
The endsWith() method is part of ECMAScript 6 (ES6) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* Prior to ES6, you could achieve similar functionality using the str.lastIndexOf(searchString) method and comparing the index to str.length - searchString.length.
* endsWith() is a convenient and readable alternative for such tasks, especially when dealing with dynamic string comparisons.

The endsWith() method is straightforward and useful for checking the ending of strings in JavaScript.

<hr style="background: red;">

# 5. includes()

Syntax
```
str.includes(searchString);
str.includes(searchString, startIndex);
```
* **str:** The string to be searched.
* **searchString:** The substring to search for within str.
* **startIndex (Optional):** The position within str to start the search.

```javascript 
const str = "Hello, world!";

console.log(str.includes("world")); // Output: true
console.log(str.includes("World")); // Output: false (case-sensitive)
console.log(str.includes("!")); // Output: true
console.log(str.includes("foo")); // Output: false
console.log(str.includes("Hello", 1)); // Output: false (start search from index 1)
```

### Parameters
searchString: A string representing the substring to search for.

### Return Value
Returns true if str contains searchString; otherwise, returns false.

### Key Points
* The includes() method performs a case-sensitive search by default.
* It can be used to check for the presence of specific substrings within a string, regardless of their position.
* The optional startIndex parameter specifies the position within the string to start the search.

### Use Cases
* Checking if a string contains a particular word or phrase.
* Verifying if a URL contains a specific path segment.
* Testing for the existence of certain characters or symbols within a string.

### Compatibility
* The includes() method is part of ECMAScript 6 (ES6) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* If you need to perform a case-insensitive search, consider converting both the string and the substring to lowercase (or uppercase) using toLowerCase() or toUpperCase() before using includes().
* Prior to ES6, similar functionality was achieved using methods like indexOf() to check for the presence of a substring within a string.

The includes() method is a versatile tool for string manipulation in JavaScript, providing a convenient way to check for the existence of substrings within strings. 

<hr style="background: red;">

# 6. indexOf()

Syntax 
```
str.indexOf(searchValue);
str.indexOf(searchValue, startIndex);
```
* **str:** The string in which to search for searchValue.
* **searchValue:** The substring to search for within str.
* **startIndex (Optional):** The index at which to start the search within str. If omitted, the search starts at index 0.


```javascript 
const str = "Hello, world!";

console.log(str.indexOf("world")); // Output: 7 (index of "world" in str)
console.log(str.indexOf("World")); // Output: -1 (case-sensitive, "World" not found)
console.log(str.indexOf("!")); // Output: 12 (index of "!" in str)
console.log(str.indexOf("foo")); // Output: -1 (substring "foo" not found)
console.log(str.indexOf("o", 5)); // Output: 6 (start search from index 5)
```

### Parameters
* **searchValue:** A string representing the substring to search for within str.

### Return Value
* Returns the index of the first occurrence of searchValue within str, or -1 if searchValue is not found.

### Key Points
* The indexOf() method performs a case-sensitive search by default.
* It returns the index of the first occurrence of the specified searchValue within str, starting from the specified startIndex if provided.
* If searchValue is not found in str, indexOf() returns -1.

### Use Cases
* Checking if a substring exists within a string and determining its position.
* Implementing conditional logic based on the presence or absence of specific substrings.
* Finding the index of certain characters or symbols within a string.

### Compatibility
* The indexOf() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* For case-insensitive search, you can convert both the string and the searchValue to lowercase (or uppercase) using toLowerCase() or toUpperCase() before using indexOf().
* If you need to find the last occurrence of a substring within a string, consider using lastIndexOf().

The indexOf() method is commonly used for string manipulation tasks in JavaScript, providing a straightforward way to search for substrings and determine their positions within strings.

<hr style="background: red;">

# 7. lastIndexOf()

Syntax 
```
str.lastIndexOf(searchValue);
str.lastIndexOf(searchValue, startIndex);
```
* **str:** The string in which to search for searchValue.
* **searchValue:** The substring to search for within str.
* **startIndex (Optional):** The index at which to start the backward search within str. If omitted, the search starts from the end of the string.


```javascript 
const str = "Hello, world!";

console.log(str.lastIndexOf("o")); // Output: 8 (index of last "o" in str)
console.log(str.lastIndexOf("l")); // Output: 3 (index of last "l" in str)
console.log(str.lastIndexOf("z")); // Output: -1 (substring "z" not found)
console.log(str.lastIndexOf("!")); // Output: 12 (index of "!" in str)
console.log(str.lastIndexOf("o", 7)); // Output: 4 (start backward search from index 7)
```


### Parameters
* **searchValue:** A string representing the substring to search for within str.

### Return Value
* Returns the index of the last occurrence of searchValue within str, or -1 if searchValue is not found.

### Key Points
* The lastIndexOf() method performs a case-sensitive search by default.
* It returns the index of the last occurrence of the specified searchValue within str, starting the search from the end of the string.
* If searchValue is not found in str, lastIndexOf() returns -1.

### Use Cases
* Finding the last occurrence of a substring within a string.
* Implementing logic based on the position of the last occurrence of certain substrings.
* Searching for specific characters or symbols from the end of a string.

### Compatibility
* The lastIndexOf() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* For case-insensitive search, you can convert both the string and the searchValue to lowercase (or uppercase) using toLowerCase() or toUpperCase() before using lastIndexOf().
* If you need to find the first occurrence of a substring within a string, use indexOf().

The lastIndexOf() method is useful for scenarios where you need to locate the last occurrence of a substring within a string, providing flexibility in string manipulation tasks in JavaScript. 

<hr style="background: red;">

# 8. length

```javascript 
const str = "Hello, world!";
console.log(str.length); // Output: 13 (length of the string)
```

<hr style="background: red;">

# 9. localeCompare()

Syntax 
```
str1.localeCompare(str2);
str1.localeCompare(str2, locales, options);
```
* **str1:** The first string to compare.
* **str2:** The second string to compare.
* **locales (Optional):** A string with a BCP 47 language tag, or an array of such strings, indicating the desired locale(s) for the comparison. If omitted, the default locale of the execution environment is used.
* **options (Optional):** An object specifying additional comparison options.


```javascript 
const str1 = "apple";
const str2 = "banana";

console.log(str1.localeCompare(str2)); // Output: -1 (str1 comes before str2)

const str3 = "banana";
console.log(str2.localeCompare(str3)); // Output: 0 (str2 is equal to str3)

const str4 = "cherry";
console.log(str4.localeCompare(str3)); // Output: 1 (str4 comes after str3)
```

Additional Examples with Locale Settings
```javascript 
const germanStr1 = "Apfel";
const germanStr2 = "Zebra";

console.log(germanStr1.localeCompare(germanStr2, "de")); // Output: -1 (Apfel comes before Zebra in German)
```


### Parameters
* **str1 and str2:** Strings to be compared.

### Return Value
* Returns a number indicating the result of the comparison:
* If str1 is less than str2, it returns a negative number (typically -1).
* If str1 is greater than str2, it returns a positive number (typically 1).
* If str1 is equal to str2, it returns 0.


### Key Points
* The localeCompare() method considers the locale-specific sort order and language rules when performing string comparison.
* It is useful for sorting strings in internationalized applications where different languages and cultural conventions need to be respected.
* The locales parameter allows you to specify the desired locale(s) for the comparison.
* Additional options can be used to customize the comparison behavior, such as specifying case sensitivity or numeric collation.

### Use Cases
* Sorting arrays of strings based on locale-specific rules.
* Implementing language-sensitive string comparison in multi-language applications.
* Handling string operations that require adherence to cultural sorting conventions.

### Compatibility
* The localeCompare() method is part of ECMAScript Internationalization API (ECMA-402) and is supported in all modern browsers and JavaScript environments.

The localeCompare() method is a powerful tool for comparing strings in a locale-sensitive manner, providing accurate and culturally appropriate string sorting and comparison capabilities. 


<hr style="background: red;">

# 10. match()

Syntax ```const result = str.match(regexp);```
* regexp: A regular expression (or a string representing a regular expression) used to specify the pattern to match.


1. Matching a Single Pattern
```javascript 
const str = "Hello, world!";
const matches = str.match(/world/);

console.log(matches); // Output: ["world"]
```

2. Using Capture Groups
```javascript 
const str = "John Doe (30 years old)";
const matches = str.match(/(\w+) (\w+) \((\d+) years old\)/);

console.log(matches);
// Output: ["John Doe (30 years old)", "John", "Doe", "30"]
```

3. Global Search with g Flag
```javascript 
const str = "JavaScript is fun, JavaScript is powerful!";
const matches = str.match(/JavaScript/g);

console.log(matches); // Output: ["JavaScript", "JavaScript"]
```


### Parameters
* **regexp:** A regular expression object or a string representing a regular expression pattern.

### Return Value
* If regexp matches a part of str, match() returns an array containing the matched substrings and any captured groups defined by the regular expression.
* If no match is found, match() returns null.


### Key Points
* The match() method searches for matches within the string based on the specified regular expression pattern.
* If the regular expression has the global (g) flag enabled, match() will return an array of all matches found.
* Without the global flag, match() returns an array containing the first match and any captured groups.

### Use Cases
* Extracting specific parts of a string based on a defined pattern.
* Validating and parsing input strings to extract meaningful data.
* Performing string operations and transformations using regular expressions.

### Compatibility
* The match() method is part of the ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* If the regular expression regexp does not have the global (g) flag enabled, match() will return only the first match and its captured groups (if any).
* When using match() with capturing groups in regular expressions, the returned array includes the entire match as the first element, followed by each captured group.

The match() method is a powerful tool for pattern matching and string extraction in JavaScript, especially when working with complex string manipulations and data parsing tasks. If

<hr style="background: red;">

# 11. replace()

Syntax 
```
const newString = str.replace(searchValue, newValue);
const newString = str.replace(searchValue, replacerFunction);
```
* **str:** The original string to perform the replacement on.
* **searchValue:** A string or regular expression pattern to search for in str.
* **newValue:** The replacement string that will replace occurrences of searchValue.
* **replacerFunction:** A function that will be called to create the replacement string for each match found.

1. Replace a Substring
```javascript 
const str = "Hello, world!";
const newString = str.replace("world", "universe");

console.log(newString); // Output: "Hello, universe!"
```

2. Replace with Regular Expression
```javascript 
const str = "apple, orange, banana";
const newString = str.replace(/apple|banana/g, "fruit");

console.log(newString); // Output: "fruit, orange, fruit"
```

3. Using Replacer Function
```javascript 
const str = "Today is 2023-05-01";
const newString = str.replace(/\d{4}-\d{2}-\d{2}/g, (match) => {
    const [year, month, day] = match.split('-');
    return `${day}/${month}/${year}`;
});

console.log(newString); // Output: "Today is 01/05/2023"
```


### Parameters
* **searchValue:** A string or regular expression that specifies the pattern to be replaced.
* **newValue:** The string that replaces the pattern specified by searchValue.
* **replacerFunction:** A function that takes multiple arguments and returns the replacement string.

### Return Value
* Returns a new string where matches of searchValue have been replaced with newValue or the value returned by replacerFunction.


### Key Points
* By default, replace() replaces only the first match of searchValue. To replace all occurrences, use a regular expression with the global (g) flag.
* You can use capture groups (() in regular expressions) to reference matched substrings in the replacement string or function.
* If searchValue is a string, only the first occurrence is replaced. To replace all occurrences, use a regular expression with the global (g) flag.

### Use Cases
* Text replacement and transformation based on specific patterns within a string.
* Dynamic string formatting, such as date reformatting or placeholder substitution.
* Cleaning and sanitizing user input by replacing or removing certain characters.

### Compatibility
* The replace() method is part of the ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* If searchValue is a string, only the first occurrence is replaced. To replace all occurrences, use a regular expression with the global (g) flag.
* When using a regular expression with the global (g) flag, replace() will replace all matches found in the string.

The replace() method is a versatile tool for string manipulation in JavaScript, offering powerful capabilities for text replacement and transformation based on specified patterns.


<hr style="background: red;">

# 12. search()

Syntax ```const index = str.search(regexp); ```
* **regexp:** A regular expression (or a string representing a regular expression) used to specify the pattern to search for.


1. Searching for a Substring
```javascript 
const str = "Hello, world!";
const index = str.search("world");

console.log(index); // Output: 7 (index of "world" in str)
```

2. Using Regular Expression
```javascript 
const str = "apple, orange, banana";
const index = str.search(/orange/);

console.log(index); // Output: 7 (index of "orange" in str)
```


### Parameters
* **regexp:** A regular expression object or a string representing a regular expression pattern.

### Return Value
Returns the index of the first occurrence of the pattern within str, or -1 if the pattern is not found.

### Key Points
* The search() method performs a search for the specified pattern within the string.
* If the pattern is found, search() returns the index of the first character of the first occurrence of the pattern.
* If the pattern is not found, search() returns -1.

### Use Cases
* Searching for specific substrings or patterns within a string.
* Checking if a string contains certain characters or sequences.
* Utilizing regular expressions for more complex search patterns.

### Compatibility
* The search() method is part of ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* The search() method is similar to indexOf(), but search() accepts a regular expression as the search pattern instead of just a string.
* If you need to search for a literal string (without special regex characters), using indexOf() or includes() is usually more efficient than search().

The search() method is useful for searching strings using regular expressions and retrieving the index of the first match within the string.

<hr style="background: red;">

# 13. slice()

Syntax 
```
const newString = str.slice(startIndex);
const newString = str.slice(startIndex, endIndex);
```
* **startIndex:** The index at which to begin extraction. If negative, it counts from the end of the string (-1 refers to the last character).
* **endIndex (Optional):** The index before which to end extraction. If omitted, slice() extracts to the end of the string.


```javascript 
const str = "Hello, world!";

console.log(str.slice(7)); // Output: "world!"
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(-6)); // Output: "world!"
console.log(str.slice(7, -1)); // Output: "world"
```


### Return Value
* For strings, slice() returns a new string containing the extracted portion of the original string.


### Key Points
* The slice() method extracts a portion of a string or array based on the specified start and end indices.
* It does not modify the original string or array; instead, it returns a new string or array with the extracted portion.
* Negative indices can be used to count positions from the end of the string or array.

### Use Cases
* Extracting parts of a string based on specific indices.
* Creating subsets of arrays for manipulation or display.
* Implementing efficient data slicing operations without modifying original data.

### Compatibility
* The slice() method is part of ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* If startIndex is greater than or equal to endIndex, slice() returns an empty string (for strings) or an empty array (for arrays).
* Using slice() with negative indices allows for convenient extraction of portions from the end of the string or array.

The slice() method is a versatile tool for extracting substrings and subarrays in JavaScript, providing flexibility and ease of use for various string and array manipulation tasks. 

<hr style="background: red;">

# 14. split()

Syntax ``` ```

```javascript 

```
<hr style="background: red;">

# 15. startsWith()

Syntax 
```
const parts = str.split(separator);
const parts = str.split(separator, limit);
```
* **separator:** A string or regular expression used to specify where to split the string. If omitted or undefined, the entire string is returned as the only element in the array.
* **limit (Optional):** An integer that specifies the maximum number of splits to perform. The resulting array will have at most limit + 1 elements. If omitted or undefined, all possible splits are made.


1. Splitting with a String Separator
```javascript 
const str = "apple,orange,banana";
const parts = str.split(",");

console.log(parts); // Output: ["apple", "orange", "banana"]
```

2. Splitting with a Regular Expression Separator
```javascript 
const str = "Hello  world  !";
const parts = str.split(/\s+/);

console.log(parts); // Output: ["Hello", "world", "!"]
```

3. Splitting with Limit
```javascript 
const str = "apple,orange,banana,mango";
const parts = str.split(",", 2);

console.log(parts); // Output: ["apple", "orange"]
```


### Parameters
separator: A string or regular expression that specifies the separator to use when splitting the string.
limit: An integer that limits the number of splits performed on the string.

### Return Value
Returns an array of substrings split from the original string based on the specified separator.
Examples

### Key Points
* The split() method splits a string into an array of substrings based on a specified separator.
* The separator can be a string or a regular expression. If the separator is omitted or undefined, the entire string is returned as the only element in the array.
* If a limit is specified, the resulting array will contain at most limit + 1 elements, and the last element will contain the remainder of the string.

### Use Cases
* Parsing strings containing structured data (e.g., CSV data, URLs).
* Tokenizing text by splitting sentences or words.
* Converting string representations of arrays or objects into JavaScript data structures.

### Compatibility
* The split() method is part of ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* When using a regular expression as the separator, special care should be taken to handle patterns that may produce unexpected results.
* If the separator is an empty string (""), split() will return an array containing each character of the string as separate elements.

The split() method is a fundamental tool for manipulating strings in JavaScript, allowing for flexible and efficient string parsing and tokenization operations. 


<hr style="background: red;">

# 16. substr()

Syntax 
```
const substring = str.substr(startIndex);
const substring = str.substr(startIndex, length);
```
* **startIndex:** The index at which to begin extraction. If negative, it counts from the end of the string (-1 refers to the last character).
* **length (Optional):** The number of characters to extract from the string. If omitted, substr() extracts characters to the end of the string.

1. Extracting Substring from Start Index
```javascript 
const str = "Hello, world!";
const substring = str.substr(7);

console.log(substring); // Output: "world!"
```

2. Extracting Substring with Start Index and Length
```javascript 
const str = "Hello, world!";
const substring = str.substr(7, 5);

console.log(substring); // Output: "world"
```

3. Using Negative Start Index
```javascript 
const str = "Hello, world!";
const substring = str.substr(-6);

console.log(substring); // Output: "world!"
```


### Parameters
* **startIndex:** The index at which to begin extraction. If negative, it specifies an offset from the end of the string.
* **length:** The number of characters to extract from the string. If omitted, substr() extracts characters from startIndex to the end of the string.

### Return Value
* Returns a new string containing the extracted portion of the original string.

### Key Points
* The substr() method extracts a substring from a string starting at the specified index and continuing for a specified number of characters.
* If startIndex is negative, it counts from the end of the string. For example, -1 refers to the last character.
* If length is omitted, substr() extracts characters from startIndex to the end of the string.

### Use Cases
* Extracting specific portions of strings based on start index and length.
* Implementing string manipulation operations where precise substring extraction is required.

### Compatibility
* The substr() method is part of ECMAScript 3 (ES3) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* The substr() method is often used for its simplicity in extracting substrings based on start index and length parameters.
* When dealing with variable-length substrings or extracting to the end of the string, substr() is a convenient choice.

The substr() method provides a straightforward way to extract substrings from strings in JavaScript, offering flexibility in substring extraction operations. 


<hr style="background: red;">

# 17. substring()

Syntax 
```
const substring = str.substring(startIndex);
const substring = str.substring(startIndex, endIndex);
```


1. Extracting Substring from Start Index
```javascript 
const str = "Hello, world!";
const substring = str.substring(7);

console.log(substring); // Output: "world!"

```

2. Extracting Substring with Start Index and End Index
```javascript 
const str = "Hello, world!";
const substring = str.substring(7, 12);

console.log(substring); // Output: "world"

```

3. Swapping Indices Automatically
```javascript 
const str = "Hello, world!";
const substring = str.substring(12, 7);

console.log(substring); // Output: "world"

```

### Parameters
* **startIndex:** The index at which to begin extraction. If startIndex is greater than endIndex, substring() swaps the two values before extracting.
* **endIndex:** The index before which to end extraction. If omitted, substring() extracts characters from startIndex to the end of the string.

### Return Value
Returns a new string containing the extracted portion of the original string.


### Key Points
* The substring() method extracts a substring from a string between two specified indices (startIndex and endIndex).
* If startIndex is greater than endIndex, substring() automatically swaps the two values before extracting.
* If startIndex is negative, it is treated as 0; if endIndex is negative or omitted, substring() treats it as the end of the string.

### Use Cases
* Extracting specific portions of strings based on start and end indices.
* Manipulating and formatting strings by extracting and replacing substrings.

### Compatibility
* The substring() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* Unlike the substr() method, substring() does not support negative indices for specifying positions from the end of the string.
* When dealing with dynamic substring extraction based on indices, substring() is a reliable choice.

The substring() method provides a simple and effective way to extract substrings from strings in JavaScript, offering precise control over substring extraction based on start and end indices.

<hr style="background: red;">

# 18. toLowerCase()

```javascript 
const str = "Hello, World!";
const lowercaseStr = str.toLowerCase();

console.log(lowercaseStr); // Output: "hello, world!"
```

### Return Value
* Returns a new string with all alphabetic characters converted to lowercase.


### Key Points
* The toLowerCase() method converts all alphabetic characters (A-Z) in the string to their corresponding lowercase counterparts (a-z).
* Non-alphabetic characters, such as numbers, symbols, and non-Latin characters, remain unchanged.
* The original string str is not modified; toLowerCase() returns a new string with the lowercase conversion.

### Use Cases
* Normalizing string input to ensure consistent casing for comparison or display purposes.
* Preparing user input for case-insensitive operations (e.g., searching, sorting).
* Standardizing data formatting within an application to handle variations in letter casing.

### Compatibility
* The toLowerCase() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* The toLowerCase() method is case-sensitive and only affects alphabetic characters.
* For converting a string to uppercase, use the toUpperCase() method, which converts all alphabetic characters to uppercase (A-Z).

The toLowerCase() method is a fundamental tool for string manipulation in JavaScript, providing a convenient way to convert string characters to lowercase for various text processing tasks. 


<hr style="background: red;">

# 19. toUpperCase()


```javascript 
const str = "Hello, World!";
const uppercaseStr = str.toUpperCase();

console.log(uppercaseStr); // Output: "HELLO, WORLD!"
```

### Return Value
* Returns a new string with all alphabetic characters converted to uppercase.


### Key Points
* The toUpperCase() method converts all alphabetic characters (a-z) in the string to their corresponding uppercase counterparts (A-Z).
* Non-alphabetic characters, such as numbers, symbols, and non-Latin characters, remain unchanged.
* The original string str is not modified; toUpperCase() returns a new string with the uppercase conversion.

### Use Cases
* Normalizing string input to ensure consistent casing for comparison or display purposes.
* Preparing user input for case-insensitive operations (e.g., searching, sorting).
* Standardizing data formatting within an application to handle variations in letter casing.

### Compatibility
* The toUpperCase() method is part of ECMAScript 1 (ES1) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* The toUpperCase() method is case-sensitive and only affects alphabetic characters.
* For converting a string to lowercase, use the toLowerCase() method, which converts all alphabetic characters to lowercase (a-z).

The toUpperCase() method is a fundamental tool for string manipulation in JavaScript, providing a convenient way to convert string characters to uppercase for various text processing tasks. 

<hr style="background: red;">

# 20. trim()

```javascript 
const str = "   Hello, World!   ";
const trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"
```

### Return Value
* Returns a new string with leading and trailing whitespace characters removed.

### Key Points
* The trim() method removes whitespace characters (spaces, tabs, newlines) from both ends of the string.
* The original string str is not modified; trim() returns a new string with the leading and trailing whitespace removed.
* Whitespace characters include spaces (' '), tabs ('\t'), and newlines ('\n'), among others.

### Use Cases
* Cleaning up user input to remove unintended leading or trailing spaces.
* Processing strings obtained from external sources (e.g., user input, file content) to ensure consistent formatting.
* Improving data quality by removing unnecessary whitespace characters from strings.

### Compatibility
* The trim() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers and JavaScript environments.

### Notes
* The trim() method only removes leading and trailing whitespace; it does not affect whitespace within the string.
* If you need to remove specific characters from the string (including those within the string), consider using regular expressions or other string manipulation methods.

The trim() method is a convenient tool for handling whitespace and improving the cleanliness of strings in JavaScript applications. 


<hr style="background: red;">

# 21. valueOf()

It is a method that is usually inherited by objects, including primitive wrapper objects such as strings, numbers, and booleans. This method returns the primitive value of the specified object.

#### For Primitive Wrapper Objects
For primitive wrapper objects like strings, numbers, and booleans, valueOf() returns the primitive value represented by the object. This is useful when you want to retrieve the primitive value from an object wrapper.



1. Using valueOf() with String Object
```javascript 
const strObject = new String("Hello");
const primitiveValue = strObject.valueOf();

console.log(primitiveValue); // Output: "Hello"

```

2. Using valueOf() with Number Object
```javascript 
const numObject = new Number(42);
const primitiveValue = numObject.valueOf();

console.log(primitiveValue); // Output: 42

```

3. Using valueOf() with Boolean Object
```javascript 
const boolObject = new Boolean(true);
const primitiveValue = boolObject.valueOf();

console.log(primitiveValue); // Output: true

```

### Return Value
* Returns the primitive value represented by the object.


#### For Other Objects
For objects other than primitive wrappers, valueOf() does not provide a meaningful primitive value by default. However, you can override the valueOf() method for custom objects to define how the object should be converted to a primitive value.


1. Custom valueOf() Implementation
```javascript 
const customObject = {
  value: 100,
  valueOf() {
    return this.value; // Define custom conversion to primitive value
  }
};

const primitiveValue = customObject.valueOf();
console.log(primitiveValue); // Output: 100
```

### Use Cases
* Retrieving the primitive value from a primitive wrapper object.
* Defining custom conversion of an object to a primitive value by overriding valueOf() for custom objects.

### Compatibility
* The valueOf() method is part of JavaScript's standard language specification and is supported in all modern browsers and JavaScript environments.

### Notes
* For primitive values (strings, numbers, booleans), valueOf() is usually implicitly called in certain contexts, such as arithmetic operations or type conversions.
* The primary purpose of valueOf() is to provide a way to retrieve the primitive value represented by an object, especially when working with primitive wrapper objects.

In summary, valueOf() is a method used to retrieve the primitive value represented by an object, particularly useful for primitive wrapper objects like strings, numbers, and booleans. 


