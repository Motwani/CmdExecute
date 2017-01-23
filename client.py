import httplib, subprocess, urllib

comm = raw_input("Input Command to run: ")

params = urllib.urlencode({'comm': comm})
c = httplib.HTTPConnection('192.168.1.141', 8080)
c.request('GET', '/bash?comm='+comm)
doc = c.getresponse().read()
print doc
