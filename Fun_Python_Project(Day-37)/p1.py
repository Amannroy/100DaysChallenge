import tkinter as tk
def setTextColor(l1,color):
    l1.config(fg=color)


def main():
    root = tk.Tk()
    root.geometry("400x400")

    l1=tk.Label(root,text="Change my color",font=('Arial',20))

    b1=tk.Button(root,text="RED",command=lambda:setTextColor(l1,'red'))

    b2=tk.Button(root,text="RED",command=lambda:setTextColor(l1,'blue'))
    
    b3=tk.Button(root,text="RED",command=lambda:setTextColor(l1,'green'))

    l1.pack()
    b1.pack()
    b2.pack()
    b3.pack()
    root.mainloop()

if __name__=='__main__':
    main()