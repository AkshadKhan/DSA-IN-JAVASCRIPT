let a = [3.1, 45, 90, 1, 4, 1]
function minMax(i, j, min, max) {
    if (i - j === 0) {
        min = max = a[i];
        return {
                "min" : min,
                "max" : max 
        }
    } else if (j - i === 1) {
        if (arr[i] > arr[j]) {
            min = arr[j]
            max = arr[i]
            return {
                "min" : min,
                "max" : max 
            }
        } else {
            min = arr[i]
            max = arr[j]
        }
        return {
                "min" : min,
                "max" : max 
        }
    } else {
        let mid = Math.floor((i + j) / 2);
        let a = minMax(i,mid,arr[i],arr[mid]);
        let b = minMax(mid+1,j,a[mid+1],a[j]);
        if (arr[i] > arr[j]) {
            min = arr[j]
            max = arr[i]
            return {
                "min" : min,
                "max" : max 
            }
        } else {
            min = arr[i]
            max = arr[j]
        }
        return {
                "min" : min,

                "max" : max 
        };
    }
}