# 💡 The Problem Iterators Solve

# When you have multiple values stored in a container (like a list, tuple, or set), you need a way to access each element one by one.

# But different containers store data differently:

# Lists → dynamic arrays

# Sets → hash tables

# Some → linked lists or binary trees

# So Python’s solution?
# 👉 Create a unified way to access elements from any container, without caring how they’re stored internally.

# 🔑 Key Concepts
# 1️⃣ Iterable

# An iterable is any object that can return an iterator using iter().
# These are all iterables:

# list

# tuple

# string

# range

# set

# dictionary

# L1 = [10, 20, 30]
# IT = iter(L1)  # returns an iterator object

# 2️⃣ Iterator

# An iterator is an object that:

# Knows how to fetch elements one by one

# Keeps track of its current position

# Moves only forward

# Raises StopIteration when no items remain

# Think of it like a TV remote that goes next → next → next, but never back.

# ⚙️ How It Works — Step by Step
# ✅ The Traditional Way (Implicit)
# L1 = [20, 40, 50, 10, 30, 60, 80, 70]

# for x in L1:
#     print(x)


# Behind the scenes, Python does this:

# Gets an iterator from L1

# Calls next() repeatedly to fetch values

# Stops when all elements are exhausted

# 🧠 The Manual Way (Explicit)
# L1 = [20, 40, 50, 10]

# # Step 1: Create iterator
# IT = iter(L1)

# # Step 2: Access values one by one
# print(next(IT))  # 20
# print(next(IT))  # 40
# print(next(IT))  # 50
# print(next(IT))  # 10

# 🔁 Using a Loop (Explicit)
# L1 = [10, 20, 30]
# IT = iter(L1)

# while True:
#     try:
#         x = next(IT)
#         print(x)
#     except StopIteration:
#         break  # No more elements

# print("Done!")

# 🧩 Important Points
# Concept	Explanation
# Each container	Has its own iterator implementation
# Same pattern	Use iter() and next() for all
# Independent	Each list or set has its own iterator
# One-way only	Iterators move forward, never backward
# StopIteration	Raised when the iterator is exhausted
# 🚀 Why This Matters

# ✅ You don’t need to know how data is stored internally
# ✅ You can use the same pattern for all data types
# ✅ Code becomes clean, consistent, and Pythonic
# ✅ Containers can optimize their internals without breaking your iteration logic

# 🧠 Summary
# Term	Description
# Iterable	Can return an iterator (supports iter())
# Iterator	Fetches one element at a time (supports next())
# StopIteration	Signals the end of iteration


# Iterators are Python’s way of making “looping over anything” simple, powerful, and consistent.




l1=[20,40,50,10,30,60,80,70]
it=iter(l1)

while True:
    try:
       x=next(it)
       print(x)
    except StopIteration:
       break

print("Yeh line print hogi")

