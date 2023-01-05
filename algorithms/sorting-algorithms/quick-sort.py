def quick_sort(array):
    if len(array) <= 1: return array
    elif len(array) == 2:
        return array if array[0] <= array[1] else [array[1], array[0]]
    
    lower_subarray, pivot, higher_subarray = [], array[-1], []

    for element in array[:-1]:
        higher_subarray.append(element) if element > pivot else lower_subarray.append(element)

    return [*quick_sort(lower_subarray), pivot, *quick_sort(higher_subarray)]



# another implementation
def mutable_quick_sort(array, start_idx, end_idx):
    if end_idx - start_idx + 1 <= 1: return

    pivot = array[end_idx]
    left_ptr = start_idx

    for i in range(start_idx, end_idx):
        if array[i] < pivot:
            array[left_ptr], array[i] = array[i], array[left_ptr]
            left_ptr += 1

    array[left_ptr], array[end_idx] = array[end_idx], array[left_ptr]

    mutable_quick_sort(array, start_idx, left_ptr - 1)
    mutable_quick_sort(array, left_ptr + 1, end_idx)