import mysql.connector

class Employee:
    def __init__(self,data):
        #data is a tuple of one employee data
        self.emp_id,self.name,self.age,self.salary,self.department=data


def fetchEmployee(cursor):
    cursor.execute("SELECT * FROM Employee")
    return list(cursor)

def insertEmployee(cursor, emp):
    q="Insert into employee (emp_id,name,age,salary,department) Values ({},'{}','{}','{}','{}')".format(emp.
    emp_id,emp.name,emp.age,emp.salary,emp.department)
    cursor.execute(q)

def updateEmployee(cursor,emp):
    q = "UPDATE employee SET name='{}', age={}, salary={}, department='{}' WHERE emp_id={}".format(
    emp.name, emp.age, emp.salary, emp.department, emp.emp_id)
    cursor.execute(q)

def deleteEmployee(cursor,emp_id):
    q="DELETE from employee WHERE emp_id={}".format(emp_id)
    cursor.execute(q)


def main():
    try:
        mydb=mysql.connector.connect(host='localhost',
        user='root',password='aman123',database='db1')

        if mydb.is_connected():
            print("Connected to MYSQL Database")
            
            cursor=mydb.cursor()

            # How to fetch records
            """employeeList=fetchEmployee(cursor)
            for record in employeeList:
                print(record)"""

            # How to insert record
            """emp=Employee((11,'Akhil',38,25000,'sales'))
            insertEmployee(cursor,emp)
            mydb.commit()"""

            # How to update record
            """emp=Employee((11,'Manish',35,19000,'sales'))
            updateEmployee(cursor,emp)
            mydb.commit()"""

            # How to delete a record
            deleteEmployee(cursor,11)
            mydb.commit()

        else:
            print("Connection Failed")
    except mysql.connector.Error as e:
        print("Error: ", e)
    finally:
        if mydb.is_connected():
            cursor.close()

if __name__=='__main__':
    main()