# 🔹 What is an Iterable?

# An iterable is any object that can be looped over using a for loop.

# It can return an iterator using the built-in iter() function.

# Examples: list, tuple, string, set, dictionary, etc.

# You can go through elements one by one using loops.

# 🔹 What is an Iterator?

# An iterator is an object that fetches elements one at a time from an iterable.

# It is created by calling iter() on an iterable.

# The next() function is used to get the next item from the iterator.

# When all items are processed, it raises a StopIteration exception to signal the end.

# 🔹 Relationship between Iterable and Iterator

# All iterators are iterables, but not all iterables are iterators.

# Iterable → Can produce an iterator.

# Iterator → Knows how to fetch the next item.

# 🔹 Making a Class Iterable

# To make a custom class work in a for loop:

# Define a method __iter__() that returns an iterator object.

# The iterator must have a __next__() method that returns the next value.

# When there are no more values, __next__() must raise StopIteration.

# 🔹 Common Terms
# Iterable	-> Object that can return an iterator (iter())
# Iterator	-> Object that returns elements one by one (next())
# StopIteration -> Signals the end of iteration
# __iter__()	-> Returns the iterator object
# __next__()	-> Returns the next element in the sequence

# 💡 Key Takeaways

# Iteration means accessing elements one by one.

# for loops work because they internally use iter() and next().

# You can create your own iterable classes using __iter__() and __next__().

# Once all elements are exhausted, iteration stops automatically.


# Implementation
# Create a class that behaves like a counter
class Counter:
    def __init__(self, start=1, end=5):
        self.start = start
        self.end = end

    # This make the class iterable
    def __iter__(self):
        # Return an iterator object
        return self.CounterIterator(self)
    
    # Inner cladd that defines how iteration happens
    class CounterIterator:
        def __init__(self, counter):
            self.counter = counter # store main Counter object

        def __next__(self):
            # If start > end, stop the loop
            if self.counter.start > self.counter.end:
                raise StopIteration

            # Save the current value
            current = self.counter.start
            # Increase for the next round
            self.counter.start += 1
            # Return the current number
            return current
        

# Using the Counter class
for num in Counter(1, 5):
    print(num)
 