/* 
==================================================
🌟 RECURSION – SIMPLE & CLEAN NOTES
==================================================
*/

// ✅ What is Recursion?
// Recursion is when a function calls itself to solve a problem.
/*
function f1() {
    f1(); // Infinite recursion (no stopping condition!)
}
*/

// ⚠️ Why Recursion Feels Hard?
// Because we try to understand HOW recursion works internally. 
// Instead – focus on WHAT it does, not HOW it does it.

// ✅ 3-Step Recursion Formula:
// 1️⃣ Assume the function already works for smaller input.
// 2️⃣ Recursive Case → Solve using function(n-1).
// 3️⃣ Base Case → Stopping point (otherwise infinite loop).

/*
Example Goal:
Print numbers from 1 to n using recursion.
Steps:
1. Assume: printN(n) already prints 1 to n.
2. To print 1 to n:
   - First print 1 to (n-1)
   - Then print n
3. Base Case: When n === 1, stop.
*/

// ✅ Final Recursive Function
function printN(n) {
    // Base case
    if (n === 1) {
        console.log(1);
        return;
    }

    // Recursive case: print 1 to (n-1)
    printN(n - 1);
    console.log(n); // Print current number
}

// ✅ Test
printN(5); 
// Output: 1 2 3 4 5


/* 
==================================================
✅ ROBUST VERSION (Handles invalid inputs)
==================================================
*/
function printN(n) {
    if (n < 1) return;     // Do nothing for 0 or negative numbers

    if (n === 1) {
        console.log(1);
        return;
    }

    printN(n - 1);
    console.log(n);
}

// Test Cases
printN(0);   // No output
printN(-5);  // No output
printN(4);   // Output: 1 2 3 4


/* 
==================================================
🧠 IMPORTANT MINDSET SHIFT
==================================================
❌ Don’t think: "How is printN(n-1) working internally?"
✅ Do think: "What does printN(n-1) do? It prints 1 to n-1."
==================================================
*/
