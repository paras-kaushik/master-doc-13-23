# Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

**For shallow copies, it's important to understand that**
> **selectively changing the value of a shared property of an existing**
> **element in an object is different from assigning a completely new**
>  **value to an existing element**

```js
var arr=[{"list":["butter","flour"]},{"favours":["choco","vanilla"]}]
//const copyarr=arr;// this is not even a shallow copy its just a ref
const copyarr= Array.from(arr);// shallow copy
copyarr[0].list = ["oil","flour"];// affects the original object too as obj is shared
copyarr[1] = {"animals":["butterfly","coackroach"]};// DOES NOT AFFECT ORIGINAL OBJECT
console.log(JSON.stringify(arr));
console.log(JSON.stringify(copyarr));
/*
[{"list":["oil","flour"]},{"favours":["choco","vanilla"]}]
[{"list":["oil","flour"]},{"animals":["butterfly","coackroach"]}]
*/

```
> ## In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), **Object.assign()**, and **Object.create()** ) create shallow copies rather than deep copies.

---
# Deep copy

Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect.

One way to make a deep copy of a JavaScript object, **if it can be serialized**, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

## However, while the object in the code above is simple enough to be serializable, **many JavaScript objects are not serializable at all** — for example, functions (with closures), Symbols, objects that represent HTML elements in the HTML DOM API, recursive data, and many other cases. Calling JSON.stringify() to serialize the objects in those cases will fail.
##
