# 1-ES6-practice

## Feature Tasks

Follow these instructions carefully and in order.

1. Open the HTML file in the browser to ensure that it works.
2. Turn all `var` variable declarations into `let`.
3. After you do, there will be one error. Find that line in the code, delete that line and respond to the adjacent TODO item.
4. Return to the browser to ensure that the code works again.
5. **Save the code, and do a Git "add" and "commit".**
6. Now, in the code, convert all `let` variable declarations into `const`.
7. Bugs will erupt everywhere. Debug by using the error messages in the browser console, turning `const` declarations back into `let` where necessary. Expect there to be some back-and-forth between your code editor and your browser.
8. When you think you have things working, clear local storage and reload the page to ensure that the code still works when starting from a totally clean state.
9. **Save the code, and do a Git "add" and "commit".**
10. Now find all concatenations in the code and convert them into template literal notation.
11. Reload the browser to ensure that the code works as expected.
12. **Save the code, and do a Git "add" and "commit".**
13. Answer the following questions:

---

##### Investigate how `let` and `const` are now used in the code. Where did you need to convert `const` into `let` to make the code work? Can you identify any patterns/similarities?

Let is now used for all variables that need to be reassigned at any time - in this particular application, this usually takes place within for loops, where the index is being incremented, or for incrementing totalClicks - whereas const can be used for declaring variables that aren't being reassigned.

Arrays are a good target for being declared using const, as although data can be pushed into the array, the array object itself isn't being reassigned. The exception to this rule within this particular application is the allProducts array, as this is reassigned to reference an existing array from local storage. Const is also very useful for storing DOM elements, as we don't need to reassign these variables with new values when we affect the DOM element - since we can instead use .appendChild, .textContent, etc., when needing to alter the data reflected in that element.

---

##### How did it go with making the adaptation from concatenations to template literal notation? Do you think you'll mostly use template literal notation from now on?

It went very well! I do think I'll be using template literal notation a lot more frequently when dealing with concatenation, as I think it makes the code much more readable. It will also allow me to code more quickly, as I won't need to spend as much time ensuring that all of the spacing is correct within the quotation marks, and won't have to deal with escaping characters as often.
