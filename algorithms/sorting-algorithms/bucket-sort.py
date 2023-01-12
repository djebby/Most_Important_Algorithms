def bucket_sort(nums):
    counts = [0] * (max(nums)+1)

    for num in nums:
        counts[num] += 1
    
    i = 0
    for j in range(len(counts)):
        for k in range(counts[j]):
            nums[i] = j
            i += 1

    return nums