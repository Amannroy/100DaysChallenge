from ctypes import *;
c_file_path= "E:\\100DaysChallenge\\call-c-code-from-python\\customlib1.so"
c_fun=CDLL(c_file_path)

a=c_fun.lcm(4,6)
b=c_fun.isPrime(11)
c=c_fun.fact(5)
print(a,b,c)