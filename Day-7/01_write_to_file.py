def write_to_file(filename, data):
    # Step 1: Open file in write mode
    f = open(filename, 'w')
    
    # Step 2: Write data
    f.write(data)
    
    # Step 3: Close file
    f.close()
    print(f"✅ Data written to {filename}")

def main():
    name = input("Enter your name: ")
    write_to_file("file1.txt", name)

# Call main function
main()