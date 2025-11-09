import tkinter as tk

def greeting(l2,t1):
    name=t1.get()
    msg='hello '+name+', how are you?'
    l2.config(text=msg)


root=tk.Tk()
root.title("My first GUI Application")
root.geometry("600x400")

l1=tk.Label(root,text="Enter your name: ")
l1.grid(row=0,column=0)

t1=tk.Entry(root,width=20)
t1.grid(row=0,column=1)

l2=tk.Label(root,text="")
l2.grid(row=2,column=1)

b1=tk.Button(root,text="Enter",
command=lambda:greeting(l2,t1))
b1.grid(row=1,column=1)



root.mainloop()

