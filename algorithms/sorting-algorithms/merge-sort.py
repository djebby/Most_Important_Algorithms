

def merge_sorted_arrs(arr1, arr2):
    i, j, merged_array = 0, 0, []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged_array.append(arr1[i])
            i += 1
        else:
            merged_array.append(arr2[j])
            j += 1
    merged_array.extend(arr1[i:])
    merged_array.extend(arr2[j:])
    return merged_array


def merge_sort(array): # Time: O(nlog(n)), Space: O(n)
    if len(array) <= 1: return array
    if len(array) == 2:
        return array if array[0] < array[1] else [array[1], array[0]]
    
    left_half = array[:len(array)//2]
    right_half = array[len(array)//2:]
    
    return merge_sorted_arrs(merge_sort(left_half), merge_sort(right_half))



result = merge_sort([9, 8, 7, 6, 5, 4, 3, 2, 1])
print(result)
# print(merge_sort([9, 8]))

# print(merge_sorted_arrs([1, 5, 8], [2, 6]))