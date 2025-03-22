// // package main

// // import "fmt"

// // func main() {
// // 	i, j := 42, 2701

// // 	p := &i         // point to i
// // 	q:=&p
// // 	fmt.Println(*p) // read i through the pointer
// // 	fmt.Println(*q,p) // read i through the pointer
// // 	*p = 21         // set i through the pointer
// // 	fmt.Println(i)  // see the new value of i

// // 	p = &j         // point to j
// // 	*p = *p / 37   // divide j through the pointer
// // 	fmt.Println(j) // see the new value of j
// // }

// package main

// import "fmt"

// type Vertex struct {
// 	X int
// 	Y int
// }

// func main() {
// 	c:=Vertex{1, 2}
// 	c.X=4;
// 	fmt.Println(c)
// }

// package main

// import "fmt"

// type Vertex struct {
// 	X float64
// 	Y float64
// }

// func main() {
// 	v := Vertex{1, 2}
// 	p := &v
// 	p.X = 2.2e-4
// 	fmt.Println(v)
// }

// package main

// import "fmt"

// type Vertex struct {
// 	X, Y int
// }

// var (
// 	v1 = Vertex{1, 2}  // has type Vertex
// 	v2 = Vertex{X: 1}  // Y:0 is implicit
// 	v3 = Vertex{}      // X:0 and Y:0
// 	p  = &Vertex{1, 2} // has type *Vertex

// )

// func main() {
// 	fmt.Println(v1, *p, v2, v3)
// }

// package main

// import "fmt"

// func main() {
// 	var a [2]string
// 	a[0] = "Hello"
// 	a[1] = "World"
// 	fmt.Println(a[0], a[1])
// 	fmt.Println(a)

// 	primes := [6]int{2, 3, 5, 7, 11, 13}
// 	fmt.Println(primes)
// 	fmt.Println(primes[3])
// }

package main

import "fmt"

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:6]
	fmt.Println(s)
}
