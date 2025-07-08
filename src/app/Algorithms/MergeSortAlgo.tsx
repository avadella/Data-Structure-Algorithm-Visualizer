import { NodeItem } from '../Structures/NodeItem';

export function mergeSort (array: NodeItem[], left: number, right: number ) {
    if (left >= right){
        return;
    }

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
}

function merge (array: NodeItem[], left: number, mid: number, right: number) {
    const leftArray = array.slice(left, mid+1);
    const rightArray = array.slice(mid + 1, right+1);

    let i = 0, j = 0, k = left

    while (i < leftArray.length && j < rightArray.length){
        if(leftArray[i].value < rightArray[j].value){
            array[k] = leftArray[i]
            i++;
        }
        else{
            array[k] = rightArray[j]
            j++;
        }
        k++
    }

    while(i < leftArray.length){
        array[k] = leftArray[i]
        i++;
        k++
    }

    while (j < rightArray.length){
        array[k] = rightArray[j]
        j++;
        k++
    }
}