/*
  1) Pointers (same as C language)
  
  2) Reference Variable

  3) Smart Pointers

*/

voif f1()
{
    int a=10;
    int &x=a;
    x++;
}

void f2()
{
    //int *p=new int(20);
    unique_ptr <int> p(new int(20));

    if(some condition)
       return value;
    
}