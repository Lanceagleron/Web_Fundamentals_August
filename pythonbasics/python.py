#THIS IS A SINGLE LINE COMMENT

"""
this is a multiline comment
"""

print("this is how we print to the console in python")

#VARIABLES
a = 7
b = "hello world"
c = True

print(a,b,c)

#IF STATEMENT
x = 3
y = 3

if x < y:
    print(x,"is less than", y)
elif x > y:
    print(x,"is greater than", y)
else:
    print("There is nothing to compare...")

bunnies = ["one", "two", "three", "four", "five", "six"]
for bunny in bunnies:
    print(bunny) 


def callMessage():
    print("Hello Everyone! python is awesome!")

callMessage()
