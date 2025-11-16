import mysql.connector
try:
    mydb=mysql.connector.connect(
        host='localhost',user='root',
        password='aman123',database='db1')

    if mydb.is_connected():
        print("Connected to MYSQL database")
        cursor=mydb.cursor()
        cursor.execute("Show Databases")
        for x in cursor:
            print(x)
    else:
        print("Not connected to MYSQL database")

except mysql.conncetor.Error as e:
    print("Error connecting MYSQL ", e)
finally:
    if mydb.is_connected():
        cursor.close()
