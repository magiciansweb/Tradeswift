
# Question Answere Part

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A .

<i>Write your explanation here</i>
The reason for answer is "A". First the global variable is declared with let. Then that variable name is changed and empty object is given in it and changed variable is consoled, so answere will be A "{}".
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C .

<i>Write your explanation here</i>
The reason for answer is "C". Because the number is given as input first and then a string is given. And these two are said to be added. But JavaScript can never add a number to a string. So putting the two inputs side by side gives "12" as string.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A .

<i>Write your explanation here</i>
The reason for the answer being "A" is that here the array is placed in a variable called food. And the object is kept in a variable called info. Later the value of that object is changed which does not change the variable called food. And since food has been consoled, its value will remain the same.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B .

<i>Write your explanation here</i>
The reason the answer is "B" is because a function called sayHi has been declared. In which a props called name is sent. And "Hi there, and that name" is printed as return. No value is given when calling the function. Again, the default value of the props is not given, so the props named "name" did not get any value, so the console did "Hi there, undefined".
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C .

<i>Write your explanation here</i>
First, a variable called count is declared and its initial value is 0. And another variable is declared where the value from 0 to 3 is kept. Then that array is foreEached and checked with if condition that when the truthy value is found in the array then the value of count will be increased by 1. Since there are 3 truthy values ​​in the array, the total is 3 by adding 3 times 1. So the answer is "C".
</p>
</details>

