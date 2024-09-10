num =5

for i in range(1,num+1):
    if i == 1:
        print(" " * (num-1) + "*")
    elif i == num :
        print("* " * num)
    else:
        print(" " * (num-i) +  "* " * i)

# name = "Benny"

# for i in range(10):
#     print(name[::-1])