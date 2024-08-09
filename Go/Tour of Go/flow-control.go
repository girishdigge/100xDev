// package main

// import "fmt"

// func main() {
// 	sum := 0
// 	for i := 0; i < 10; i++ {
// 		sum += i
// 	}
// 	fmt.Println(sum)
// }

package main

import "fmt"

func main() {
    day := "Monday"

    switch  day {
    case "Monday":
        fmt.Println("It's the start of the week!") 
    case "Tuesday", "Wednesday", "Thursday":
        fmt.Println("It's a weekday.")
    case "Friday":
        fmt.Println("Almost the weekend!")
    case "Saturday", "Sunday":
        fmt.Println("It's the weekend!")
    default:
        fmt.Println("Invalid day")
    }
}