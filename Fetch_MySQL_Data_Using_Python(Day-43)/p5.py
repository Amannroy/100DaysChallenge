import mysql.connector

def fetchEmployee(cursor):
    cursor.execute("SELECT * FROM Employee")
    return list(cursor)

def main():
    try:
        mydb=mysql.connector.connect(host='localhost',
        user='root',password='aman123',database='db1')

        if mydb.is_connected():
            print("Connected to MYSQL Database")
            
            cursor=mydb.cursor()

            employeeList=fetchEmployee(cursor)
            for record in employeeList:
                print(record)
        else:
            print("Connection Failed")
    except mysql.connector.Error as e:
        print("Error: ", e)
    finally:
        if mydb.is_connected():
            cursor.close()

if __name__=='__main__':
    main()