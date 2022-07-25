function bubbleSort(arr1){
    for(let i=0;i<arr1.length;i++){
       for(let j=0;j<arr1.length;j++){
           if(arr1[j]>arr1[j+1])
           {
               let temp=arr1[j];
               arr1[j]=arr1[j+1];
               arr1[j+1]=temp;
   
           }
       }
    }
       return arr1;
        
}
   let x=[8,0,3,-5,2];
   bubbleSort(x);
   console.log(x);
   