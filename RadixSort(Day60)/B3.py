def counting_sort_for_radix(arr, exp):
    n = len(arr)

    output = [0] * n
    count = [0] * 10

    # Count occurrences of digits
    for i in range(n):
        index = arr[i] // exp
        digit = index % 10
        count[digit] += 1

    # Convert count to prefix sum
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Build output array (iterate backward to maintain stability)
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        digit = index % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
        i -= 1

    # Copy output back to original array
    for i in range(n):
        arr[i] = output[i]


def radix_sort(arr):
    if not arr:
        return arr

    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        print("\nPass for digit position (exp={})".format(exp))

        counting_sort_for_radix(arr, exp)
        print("List after pass:", arr)

        exp *= 10

    return arr


if __name__ == "__main__":
    data = [170, 45, 75, 90, 802, 24, 2, 66]
    print("Original Array:", data)
    sorted_data = radix_sort(data)
    print("\nSorted Array:", sorted_data)
