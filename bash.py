import os
import sys

def func():
    comm = ' '.join(sys.argv[1:])
    # for i in range(1,argv.length-1):
    #     comm += arg[i]+" ";
    os.system(comm)
    # print(comm)
func()
