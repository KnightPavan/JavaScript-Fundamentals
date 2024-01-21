import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String args[]){
        ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        ArrayList<Integer> B = new ArrayList();
        ArrayList<Integer> A = new ArrayList();
        B.add(2);
        B.add(3);
        A.add(1);
        A.add(2);
        A.add(3);
        A.add(4);
        A.add(5);
        for(int i=0;i<B.size();i++){
            ArrayList<Integer> arr = new ArrayList<>();
            int idx;
            System.out.println("here");
            for(int j=0;j<A.size();j++){
                if(j-B.get(i)<0){
                    idx = A.size()+ (j-B.get(i));
                    System.out.println(idx);
                }else{
                    idx = j-B.get(i);
                }
                arr.add(A.get(j));
                // System.out.println(arr);
            }
            res.add(arr);
        }
        System.out.println("Done");
        
    }
}
