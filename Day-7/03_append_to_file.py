def append_to_file(filename, data):
    # Open in append mode
    f = open(filename, 'a')
    
    # Add newline before writing (for separate lines)
    f.write('\n' + data)
    
    f.close()
    print(f"✅ Data appended to {filename}")

def main():
    # Append multiple names
    names = ["Rahul Gupta", "Nikita Sharma", "Dilip Soner"]
    
    for name in names:
        append_to_file("file1.txt", name)

main()