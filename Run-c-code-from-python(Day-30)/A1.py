import subprocess

print("Enter three numbers")
a,b,c=input(),input(),input()

subprocess.run(['./c_code',a,b,c])