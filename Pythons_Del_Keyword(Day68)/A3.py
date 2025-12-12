If Python has automatic garbage collection, why do we need the del keyword to manually delete things?
The Key Concept: Two Memory Spaces
When a Python program runs, it gets memory divided into 2 parts:
1. Namespace (Stack Memory)

Stores reference variables (variable names like x, y, func1)
This is what YOU can control with del

2. Private Heap Space

Stores actual objects (the data like 10, "hello", function code, class code)
This is managed AUTOMATICALLY by Python's garbage collector

Simple Example
pythonx = 10
What happens:

Namespace: Creates variable x → stores a reference ID (like 101011)
Heap: Creates an integer object 10 → gets that reference ID
x points to the object 10

Three Types of Objects in Heap

Instance Objects - data like numbers, strings: 10, "hello"
Function Objects - when you define a function
Class Objects - when you define a class

What del Actually Does
pythonx = 10
print(x)  # prints 10
del x
print(x)  # NameError: name 'x' is not defined
Important:

del x → Deletes the variable name from namespace
del x → Does NOT delete the object 10 from heap

What Happens to Objects?
pythonx = 10
x = 20  # Now x points to 20

The object 10 is now unreferenced (no variable points to it)
Its reference count = 0
Garbage collector will automatically clean it up (we don't know when)

The Answer to the Confusion
✅ Automatic Memory Management = Python automatically cleans up objects in the heap that have no references
✅ Manual Memory Management = You can manually delete variable names from the namespace using del
You CANNOT manually delete objects from heap - that's always automatic!