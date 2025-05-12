var removeDuplicates = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=nums[i+1]){
            arr.push(nums[i]);
        }
    }
    nums = arr;
    return nums;
};


console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4]));  