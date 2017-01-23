import subprocess
from bottle import run, post, request, response, get, route

@route('/<path>',method = 'GET')
def process(path):
    # url = request.body.read()
    url = request.GET.get('comm')
    print url
    return subprocess.check_output(["python "+ path+".py "+url],shell=True)
run(host='192.168.1.141', port=8080, debug=True)
