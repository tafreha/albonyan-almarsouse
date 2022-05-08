def countdown(x):
    if x == 0:
        print("done !")
        return
    else:
     print(x, "...")    
     countdown(x-1)
     print("foo")

countdown(5)     