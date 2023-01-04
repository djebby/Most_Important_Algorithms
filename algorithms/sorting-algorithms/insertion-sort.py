
def insertion_sort(unsorted_array): # Time: O(n²)
    sorted_array = unsorted_array[:]
    for i in range(1, len(sorted_array)):
        for j in range(i, 0, -1):
            counter += 1
            if sorted_array[j-1] > sorted_array[j]:
                sorted_array[j-1], sorted_array[j] = sorted_array[j], sorted_array[j-1]
            else: break
    return sorted_array