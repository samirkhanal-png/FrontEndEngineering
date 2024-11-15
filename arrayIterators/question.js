            //[1,2,[3,4],5,6,[7,8],9]

        //[1,2,7,5,6,15,9]
        let arr=[1,2,[3,4],5,6,[7,8],9]

        function resolveSubArray(arr){
          let newArr=[]
          for(let i=0;i<arr.length;i++){
            //console
            if(Array.isArray(arr[i])){
              let sum=0
              for(let j=0;j<arr[i].length;j++){
                sum+=arr[i][j]
              }
              newArr[i]=sum
            }
            else newArr[i]=arr[i]
          }
          return newArr;
        }



        console.log(resolveSubArray(arr))


        let arr1=[1,2,[3,4,[5,[6]]],7,8,[9,10,[11]],12]
        function resolveSubarray(){
          
        }