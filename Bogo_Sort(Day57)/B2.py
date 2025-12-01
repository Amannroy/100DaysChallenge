import random
import time

def is_sorted(data):
    for i in range(len(data) - 1):
        if data[i] > data[i+1]:
            return False
    return True


def bogo_sort(data):

    print("-- Starting Bogo Sort (May take time!) --")
    attempts = 0
    start_time = time.time()

    while not is_sorted(data):
        random.shuffle(data)
        attempts += 1

        if attempts > 1000000:
            print("Reached max attempts (1,000,000).")
            break

    end_time = time.time()
    t=end_time - start_time
    if is_sorted(data):
        print("{} attempts in {:.4f} seconds.".format(attempts, t))

    return data

if __name__ == "__main__":

    list_bogo = [3, 1, 10, 4, 8, 2, 9, 7, 6, 5]
    print("\nOriginal List (Bogo): ", list_bogo)
    sorted_bogo = bogo_sort(list_bogo)
    print("\nSorted List (Bogo): ", sorted_bogo)