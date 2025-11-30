"""Bucket Sort"""
import math

def insertion_sort(bucket):
    for i in range(1,len(bucket)):
        key=bucket[i]
        j=i-1
        while j>=0 and key<bucket[j]:
            bucket[j+1]=bucket[j]
            j-=1
        bucket[j+1]=key
    return bucket


def bucket_sort(data_list):
    n=len(data_list) #n=9
    if n==0:
        return []
    min_value=min(data_list) #min_value=5
    max_value=max(data_list) #max_value=85

    range_size=(max_value-min_value+1)/n
    # range_size=81/9 = 9

    buckets=[[] for _ in range(n)]

    for item in data_list:
        index=math.floor((item-min_value)/range_size)
        index=min(n-1,index)
        buckets[index].append(item)
    
    for i in range(n):
        buckets[i]=insertion_sort(buckets[i])
    k=0
    for i in range(n):
        for j in range(len(buckets[i])):
            data_list[k]=buckets[i][j]
            k+=1
    return data_list


data=[42,100,85,20,60,5,75,50,30]
print(data)
sorted_data=bucket_sort(data)
print(sorted_data)
