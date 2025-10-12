Python File Handling 
🔥 3 Steps

Open file
Read/Write data
Close file (auto with with)

📂 File Modes
python'r'   # Read (error if not exists)
'w'   # Write (overwrites, creates new)
'a'   # Append (adds to end, creates new)
'r+'  # Read + Write
'w+'  # Write + Read (overwrites)
'a+'  # Append + Read
✍️ Write
pythonwith open("file.txt", 'w') as f:
    f.write("Hello")
📖 Read
pythonwith open("file.txt", 'r') as f:
    content = f.read()
➕ Append
pythonwith open("file.txt", 'a') as f:
    f.write("\nNew line")
📝 Methods
pythonf.read()           # Read all
f.readline()       # Read one line
f.readlines()      # List of all lines
f.write(text)      # Write string
f.writelines(list) # Write list
🛠️ File Operations
pythonimport os

os.rename("old.txt", "new.txt")  # Rename
os.remove("file.txt")             # Delete
os.path.exists("file.txt")        # Check exists
⚡ One-Liners
python# Write
open("f.txt", 'w').write("data")

# Read
print(open("f.txt").read())

# List comprehension filter
lines = [l for l in open("f.txt") if l.startswith('A')]
🎯 Best Practice
python# Always use 'with' - auto closes file
with open("file.txt", 'r') as f:
    data = f.read()

# Handle errors
try:
    with open("file.txt", 'r') as f:
        data = f.read()
except FileNotFoundError:
    print("File not found!")
💡 Remember

with = auto close ✅
'w' = deletes old content ⚠️
'a' = keeps old content ✅
Always handle FileNotFoundError for read mode