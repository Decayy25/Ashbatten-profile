import string
import random

length = int(input('Enter the lenght of paswword : '))

lower = string.ascii_lowercase
upper = string.ascii_uppercase
num = string.digits
sysbol = string.punctuation

all = lower + upper + num + sysbol

temp = random.sample(all, length)

password = "".join(temp)

print("Password : ",password )