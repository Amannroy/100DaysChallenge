def counting_sort(arr, exp):

    n = len(arr)

    output = [0] * n
    count = [0] * 10

    # Count digits
    for i in range(n):
        digit = (arr[i] // exp) % 10
        count[digit] += 1

    # Cumulative count
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Build output
    i = n - 1
    while i >= 0:
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
        i -= 1

    # Copy back
    for i in range(n):
        arr[i] = output[i]


data = [55, 20, 811, 76, 92, 43, 35, 17]
counting_sort(data, 10) 
print(data)
