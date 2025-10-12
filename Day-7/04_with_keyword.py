def write_with_keyword(filename, data):
    # No need to close explicitly - auto closes
    with open(filename, 'w') as f:
        f.write(data)
    print(f"✅ Data written using 'with' keyword")

def read_with_keyword(filename):
    try:
        with open(filename, 'r') as f:
            content = f.read()
            print("📄 File Content:")
            print(content)
    except FileNotFoundError:
        print(f"❌ File not found!")

def main():
    name = input("Enter your name: ")
    write_with_keyword("file2.txt", name)
    
    print("\nReading back...")
    read_with_keyword("file2.txt")

main()