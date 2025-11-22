"""
Write a function to check whether a given number is a prime number or not.
"""
import time

def isPrime(n):
    for i in range(2,n):
        if n%i==0:
            return False
    return True

def isPrimeOptimized(n):
    if n<=1:
        return False
    if n<=3:
        return True
    if n%2==0 or n%3==0:
        return False
    i=5
    while i*i<=n:
        if n%i==0 or n%(i+2)==0:
            return False
        i+=6
        
n=int(input("Enter a number"))
start_time=time.time()
result=isPrimeOptimized(n)
end_time=time.time()
print("%.6f"%(end_time-start_time))

if result:
    print("Prime")
else:
    print("Not Prime")