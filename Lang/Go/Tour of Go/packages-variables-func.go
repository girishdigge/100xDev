// package main

// import "fmt"
// func swap(x,y string)(string,string){
// 	return y,x
// }
// func main(){
// 	a,b:=swap("Girish","Digge")

// fmt.Print(a,b)
// }

// package main

// import "fmt"

// func split(sum int) (x, y int) {
// 	x = sum * 4 / 9
// 	y = sum - x
// 	return
// }

// func main() {
// 	fmt.Println(split(27))
// }

// package main

// import "fmt"

// var c, python, java bool

// func main() {
// 	var i int
// 	fmt.Println(i, c, python, java)
// }

// package main

// import (
// 	"fmt"
// 	"math"
// )

//  		var i byte=2;
// 		var j rune = 1;

//  		var k =math.Pow(2,768);
// 		var l uint = 1;

// func main() {
// 	 c, python, java := true, false, "no!"
// 	fmt.Println(i, j,k,l, c, python, java)
// }

// package main

// import "fmt"
// func main() {
// 	var i int
// 	var f float64
// 	var b bool
// 	var s string
// 	fmt.Printf("%v %v %v %q\n", i, f, b, s)
// }

// package main

// import (
// 	"fmt"
// 	"math"
// )

// func main() {
// 	var x, y int = 3, 4
// 	var f float64 = math.Sqrt(float64(x*x + y*y))
// 	var z uint = uint(f)

// 	fmt.Println(x, y, z)
// }

// package main

// import "fmt"

// func main() {
// 	v := 42.1 -1i // change me!
// 	fmt.Printf("%v is of type %T\n", v,v)
// }

// package main

// import "fmt"

// const Pi float32= 3.14

// func main() {
// 	const World = "世界"
// 	fmt.Println("Hello", World)
// 	fmt.Println("Happy", Pi, "Day")

// 	const Truth bool= true
// 	fmt.Println("Go rules?", Truth)
// }

// package main

// import "fmt"

// const (
// 	// Create a huge number by shifting a 1 bit left 100 places.
// 	// In other words, the binary number that is 1 followed by 100 zeroes.
// 	Big = 1 << 100
// 	// Shift it right again 99 places, so we end up with 1<<1, or 2.
// 	Small = Big >> 99
// )

// func needInt(x int) int { return x*10 + 1 }
// func needFloat(x float64) float64 {
// 	return x * 0.1
// }

//	func main() {
//		fmt.Println(needInt(Small))
//		fmt.Println(needFloat(Small))
//		fmt.Println(needFloat(Big))
//	}
package main
