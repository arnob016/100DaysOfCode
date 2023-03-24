n = 37



for i in range(2,n):
    if n%i == 0:
        a = False
        break
    else:
        a = True
    
if a == True: print('prime')
else : print ('non prime')