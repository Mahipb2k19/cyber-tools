import sys
import hashlib

input_text = sys.argv[1]
hashed = hashlib.sha256(input_text.encode()).hexdigest()
print(hashed)
