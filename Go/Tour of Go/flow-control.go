// package main

// import "fmt"

// func main() {
// 	sum := 0
// 	for i := 0; i < 10; i++ {
// 		sum += i
// 	}
// 	fmt.Println(sum)
// }

// package main

// import "fmt"

// func main(){
//     sum :=1
//     for sum>0{
//         sum+=sum;
//     }
//     fmt.Println(sum)
// }

// package main

// import (
// 	"fmt"
// 	"math"
// )

// func sqrt(x float64) string {
// 	if x < 0 {
// 		return sqrt(-x) + "i"
// 	}
// 	return fmt.Sprint(math.Sqrt(x))
// }

// func main() {
// 	fmt.Println(sqrt(4), sqrt(-4))
// }

// package main

// import (
// 	"fmt"
// 	"math"
// )

// func pow(x, n, lim float64) float64 {
// 	if v := math.Pow(x, n); v < lim {
// 		return v
// 	}
// 	return lim
// }

// func main() {
// 	fmt.Println(
// 		pow(3, 2, 10),
// 		pow(3, 3, 20),
// 	)
// }

// package main

// import (
// 	"fmt"
// )

// func Sqrt(x float64) float64 {
//        z :=1.0;
//   for z*z<x{
//     z -= (z*z - x) / (2*z)
//   }
//   return z;
// }

// func main() {
// 	fmt.Println(Sqrt(4))
// }

// package main

// import (
// 	"fmt"
// 	"runtime"
// )

// func main() {
// 	fmt.Print("Go runs on ")

// 	switch os := runtime.GOOS; os {
// 	case "darwin":
// 		fmt.Println("OS X.")
// 	case "linux":
// 		fmt.Println("Linux.")
// 	default:
// 		// freebsd, openbsd,
// 		// plan9, windows...
// 		fmt.Printf("%s.\n", os)
// 	}
// }

// package main

// import (
// 	"fmt"
// 	"time"
// )

// func main() {
// 	fmt.Println("When's Saturday?")
// 	today := time.Now().Weekday()

// 	switch time.Saturday {
// 	case today + 0:
// 		fmt.Println("Today.")
// 	case today + 1:
// 		fmt.Println("Tomorrow.")
// 	case today + 2:
// 		fmt.Println("In two days.")
// 	default:
// 		fmt.Println("Too far away.")
// 	}
// }

// package main

// import (
// 	"fmt"
// 	"time"
// )

// func main() {
// 	t := time.Now()
// 	switch {
// 	case t.Hour() < 12:
// 		fmt.Println("Good morning!")
// 	case t.Hour() < 17:
// 		fmt.Println("Good afternoon.")
// 	default:
// 		fmt.Println("Good evening.")
// 	}
// }

// package main

// import "fmt"

// func main() {
//     a:=1;
// 	defer fmt.Println(a)
//     a=2;
//     fmt.Println("hello")
//     a=3;
// }

package main

// import "fmt"

// func main() {
// 	fmt.Println("counting")

// 	for i := 0; i < 10; i++ {
// 		defer fmt.Println(i)
// 	}
// 	defer fmt.Println("yo")
// 	fmt.Println("done")

// }
