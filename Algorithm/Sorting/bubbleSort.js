var arr = [7, 6, 5, 4, 3, 2, 1];
console.log("Array before:", arr);
function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    for (var pass = 0; pass < n - 1; pass++) {
        var swapped = false;
        for (var j = 0; j < n - pass - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break; // No swap → array sorted
    }
}
bubbleSort(arr);
console.log("Array after sorting:", arr);
