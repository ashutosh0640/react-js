function array() {
    const obj = { a: "ashu", b: "boy", c: "cat" };
    const newArray = Array.from(Object.entries(obj), ([...value], i) =>
    // console.log(key, value, i)
    { return `${value}` }
    );
    console.log("Inside method");
    console.log(newArray);
}
array();
console.log("Outside method");