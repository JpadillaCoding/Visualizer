async function bubbleAlgo(arr: Array<number>, timer: number) {
    let len = arr.length;
    let swapped: boolean = false; // check if there have been any swaps

    for (let i = 0; i < len; i++) {
      swapped = false; //outer loop to go through each index

      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          //inner loop used for comparison and moving items to sort
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          swapped = true;

          await new Promise((resolve) => setTimeout(resolve, timer));
          setItems([...arr]);
        }
      }

      if (!swapped) break;
    }
  }