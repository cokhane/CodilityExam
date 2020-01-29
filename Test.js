import React, {useEffect} from 'react'

function Test() {


    const recurseAlterNateFunc = (n,string) => {
        if(n === 1) {
           return string
        } else {
          if(n%2!=0) {
            string += '+'   
          }else {
            string += '-'   
          }
          return recurseAlterNateFunc(n-1,string)  
        }
    }




    //n 4 = 1,0,3,2,

    const randomize = n => {
        let arrayRand = [], temp = '', numRandomize = '', randomizeNegative = ''
        let arrayCont = []
        let randBool = false

        while( arrayRand.length !== n ){
            numRandomize = Math.floor(Math.random() * n)
            randomizeNegative = Math.random() < 0.5 ? numRandomize * 1 : numRandomize * -1
            
            if(arrayRand.length === 0) {
              
                arrayRand.push(randomizeNegative)
            } else {
                for( let i = 0; i < arrayRand.length; i++) {
                    if (randomizeNegative === arrayRand[i]) {
                        randBool = true;
                        break;
                    } 
                }
                if(!randBool) {
                    arrayRand.push(randomizeNegative)
                } else {
                    randBool = false;
                }
            }
        }
        let total = 0
        for( let i = 0 ; i < arrayRand.length; i++){
            total += parseInt(arrayRand[i])
        }
        return total === 0 ? arrayRand : randomize(n)
    }

    function test(n) {
        if (n === 1) return [0]
        if (n % 2 === 0) {
          return getEqualArrs(n)
        } else {
          return [0].concat(getEqualArrs(n - 1))
        }
      }
      
      function getEqualArrs(length) {
        return  new Array(length).map((e, index) => {
          if (index % 2 === 0) { return index * -1 } return index + 1
        })
      }

      const test3 = n => {
          return Math.pow(10,8) + Math.pow(10,8)
      }

      const alternateFunc = n => {
        let stringOp = '', x = n
        while( n !== 0) {
            if(n%2!==0) {
                stringOp +=  x%2!=0 ? '+' : '-' 
            }else {
                stringOp +=  x%2!=0 ? '-' : '+'   
            }
            n--;
         }
         return stringOp;
    }

    const smalles = n => {
        var ans = 0
        for(let i = 0; i < n.length; i ++) {
            if(ans > n[i]) {
                ans = n[i];
            }
        }
        return ans
    }

    const testS = n => {
        var arrCut = n
        var count = 0
        for(let i = 0; i < n.length; i++ ) {
            if(n[i] === n[i+1] && n[i+1] === n[i+2]) {
                count +=1
                i = i +2
            }
        }
        return count
    }




    useEffect(() => {
        // console.log(recurseAlterNateFunc(5,''))
        // console.log(alternateFunc(7))

        console.log(smalles([-21,-10,-20,-2]))

        console.log(testS('bbaaabaaabbaabbbaaaa'))
        // console.log(randomize(4))
        // console.log(test(4))

        // console.log(test3(1))

        // return () => {
        //     cleanup
        // };
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Test
