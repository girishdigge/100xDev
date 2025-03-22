// package main

// import (
// 	"fmt"
// 	"io"
// 	"os"
// )
// func main(){
// 	fmt.Print(CopyFile("flow-control1.go","flow-control.go",))

// }
// func CopyFile(dstName, srcName string) (written int64, err error) {
// 	src, err := os.Open(srcName)
// 	if err != nil {
// 		return
// 	}

// 	dst, err := os.Create(dstName)
// 	if err != nil {
// 		return
// 	}

// 	written, err = io.Copy(dst, src)
// 	dst.Close()
// 	src.Close()
// 	return
// }

// func CopyFile(dstName, srcName string) (written int64, err error) {
//     src, err := os.Open(srcName)
//     if err != nil {
//         return
//     }
//     defer src.Close()

//     dst, err := os.Create(dstName)
//     if err != nil {
//         return
//     }
//     defer dst.Close()

//     return io.Copy(dst, src)
// }

// package main

// import "fmt"

// func main() {
//     f()
//     fmt.Println("Returned normally from f.")
// }

// func f() {
//     defer func() {
//         if r := recover(); r != nil {
//             fmt.Println("Recovered in f", r)
//         }
//     }()
//     fmt.Println("Calling g.")
//     g(0)
//     fmt.Println("Returned normally from g.")
// }

// func g(i int) {
//     if i > 3 {
//         fmt.Println("Panicking!")
//         panic(fmt.Sprintf("%v", i))
//     }
//     defer fmt.Println("Defer in g", i)
//     fmt.Println("Printing in g", i)
//     g(i + 1)
// }

package main