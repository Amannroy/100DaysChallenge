def read_from_file(filename):
    try:
        # Step 1: Open file in read mode
        f = open(filename, 'r')

        # Step 2: Read data
        content = f.read()

        # Step 3: Close file
        f.close()

        print("File Content:")
        print(content)

    except FileNotFoundError:
            print(f" Error: {filename} not found!")


def main():
    read_from_file("file1.txt")

main()