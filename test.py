seq = ['soup','dog','salad','cat','great']

filtered_seq = filter(lambda a : a.startswith('s'), seq)

ls = []

for word in filtered_seq:
    ls.append(word)

print(ls)
