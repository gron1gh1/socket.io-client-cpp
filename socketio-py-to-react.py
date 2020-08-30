import requests
import time
import sys

def main(argv):
    send_data = {
        'title': argv[1],
        'content': argv[2],
        'time': time.strftime('%c', time.localtime(time.time()))
    }
    response = requests.post('http://localhost:3001/message',data=send_data)
    print(response)

if __name__ == "__main__":
    main(sys.argv)