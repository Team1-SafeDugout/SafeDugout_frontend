class Person:
    def __init__(self, name:str, age: int, address: str=None):
        self.name = name
        self.age = age
        self.address = address
        
    def print_info(self):
        print(f"이름: {self.name}\n나이: {self.age}")
        if self.address: print(f"주소: {self.address}")
        

if __name__ == "__main__":
    hong = Person("홍길동", 30)
    hong.print_info()
    hong.address = "일산동구"
    hong.print_info()