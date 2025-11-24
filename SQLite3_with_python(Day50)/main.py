import sqlite3

DATABASE_NAME='book_record.db'


def connect_to_sqlite():
    try:
        con=sqlite3.connect(DATABASE_NAME)
        print("Database Connection Established")
    except:
        print("Some Error")
    return con
    

def create_table(con):
    q="CREATE TABLE IF NOT EXISTS book (" \
    "bookid INTEGER PRIMARY KEY," \
    "title TEXT NOT NULL," \
    "price REAL NOT NULL," \
    "author TEXT NOT NULL);"
    cursor=con.cursor()
    cursor.execute(q)

def insert_records(con,mybooks):
    cursor=con.cursor()
    q="INSERT INTO book (bookid,title,price,author) VALUES (?,?,?,?)"
    cursor.executemany(q,mybooks)
    print(len(mybooks),'records inserted')
    con.commit()

def view_records(con):
    cursor=con.cursor()
    q="SELECT * FROM book"
    cursor.execute(q)
    rows=cursor.fetchall()

    for row in rows:
        print(row)


def main():
    con=connect_to_sqlite()
    create_table(con)
    mybooks=[
        (1,'Java',345,'SS'),
        (2,'PHP',240,'RS'),
        (3,'JavaScript',495,'SS'),
        (4,'Python',600,'TP'),
        (5,'HTML',800,'ES'),
        (6,'CPP',1200,'KD'),
    ]
    insert_records(con,mybooks)
    view_records(con)

    if con:
        con.close()

if __name__=='__main__':
    main()