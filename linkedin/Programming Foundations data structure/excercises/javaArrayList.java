import java.util.ArrayList;
public class MyClass {
    public static void main(String args[]) {
      ArrayList<Integer> MyArrrayList = new ArrayList<>();
      for(int i=0; i< 10; i++){
        MyArrrayList.add(i);
      }
      MyArrrayList.add(2 ,10);
       System.out.println(MyArrrayList);
          System.out.println(MyArrrayList.indexOf(9));
       System.out.println(MyArrrayList.indexOf(2));
              System.out.println(MyArrrayList.indexOf(12));

    }
}