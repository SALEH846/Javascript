// JS sets internally use hashing to make sure the uniquness of elements within the set
// To check for the presence of an element in JS array in O(n)
// While in the case of sets it is O(1)

// Set constructor can take any iterables
const setOne = new Set(['one', 'two', 'one', 'three']);
const setTwo = new Set('hello');

// Sets will preserve the insertion order
const orderOne = new Set(['Pizza', 'Ice cream']);
const orderTwo = new Set(['Ice cream', 'Pizza']);

// Sets are iterables in JS and hence can be used with spread operator
const orderOneArray = [...orderOne];
const orderTwoArray = [...orderTwo];

// One interesting use case is when we need to remove duplicates from JS Array
// First convert the array to set and then back to Array
// The order will be preserved
const missedCalls = ['Jane', 'Jack', 'Jane', 'Jill'];
const uniqueMissedCalls = [...new Set(missedCalls)];

// JS set methods and properties
const spices = new Set(['nutmeg', 'ginger']);
// add new item to set
spices.add('cumin');
// delete item from set -- Returns `true` if item was present and `false` otherwise
spices.delete('ginger');
// To check presence of an element in set
spices.has('cumin');
// How many items are present in the set?
console.log(spices.size);
// Remove all elements of set
spices.clear();

// Some set applications
const input = ['a', 'b', 'a', 'c'];
// Function for removing duplicates from JS array
const removeDuplicates = (array) => [...new Set(array)];
// Function to check if an array has duplicates
const hasDuplicates = (array) => new Set(array).size !== array.length;
// Function for finding repeated items
const findRepeatedItems = (array) => {
    const seen = new Set();
    const repeated = new Set();
    for (const item of array) {
        if (!seen.has(item)) {
            seen.add(item);
        } else { 
            repeated.add(item);
        }
    }

    return [...repeated];
}