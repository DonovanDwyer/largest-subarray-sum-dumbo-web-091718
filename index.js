function largestSubarraySum(arr){
  let max = 0;
  let sum;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum = arr[i];
      let count = i+1;
      while(sum > 0){
        sum += arr[count];
        sum > max ? max = sum : null;
        count++;
      }
    }
  }
  return max;
}
