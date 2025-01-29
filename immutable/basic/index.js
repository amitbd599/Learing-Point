// let immutable = require("immutable");

// let map1 = immutable.Map({ a: 1, b: 2, c: 3 });

// map1.b = 20;

// console.log(map1.toObject());

import { List } from "immutable";

// একটি Immutable List তৈরি করা
const numbers = List([1, 2, 3]);

// নতুন একটি আইটেম যোগ করার চেষ্টা
const newNumbers = numbers.push(4);

console.log(numbers); // Output: List [1, 2, 3]
console.log(newNumbers); // Output: List [1, 2, 3, 4]

/*

        🎯 সংক্ষেপে তুলনামূলক বিশ্লেষণ

        Immutable.js ডেটা টাইপ	ব্যবহারের ধরন	বৈশিষ্ট্য
        List	Immutable অ্যারে	Indexed collection, .push(), .pop()
        Map	Immutable অবজেক্ট	Key-value pair, .set(), .get()
        Set	ইউনিক ভ্যালুর কালেকশন	No duplicates, .add(), .delete()
        Stack	LIFO স্ট্রাকচার	.push(), .pop()
        OrderedMap	অর্ডারড অবজেক্ট	Map-এর মত কিন্তু ইনসারশন অর্ডার মেইনটেইন করে
        Record	ফিক্সড অবজেক্ট স্ট্রাকচার	.set(), .get(), ডিফল্ট ভ্যালু





*/
