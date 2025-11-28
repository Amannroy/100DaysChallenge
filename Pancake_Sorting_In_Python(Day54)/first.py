"""Pancake Sort"""

def flip(arr,k):
    start=0
    while start<k:
        arr[start],arr[k]=arr[k],arr[start]
        start+=1
        k-=1

def find_max(arr,n):
    max_index=0
    for i in range(1,n+1):
        if arr[i]>arr[max_index]:
            max_index=i
    return max_index

def pancake_sort(arr):
    size=len(arr)
    while size>1:
        max_index=find_max(arr,size-1)
        if max_index!=size-1:
            flip(arr,max_index)
            flip(arr,size-1)
        size-=1
    return arr

arr=[25,47,11,89,63,55,71,18]
print("Before Sorting: ", arr)
sorted_arr=pancake_sort(arr)
print("After Sorting: ", sorted_arr)
