package main

import (
	"fmt"
	"runtime"
) 
func main(){
	const name="Girish";
	const age=21;
	fmt.Printf("Hello World🌍, Let's Goooooo!,%s here,I am forever %d  \v %v %b.",name,age,name,age)
	fmt.Print(runtime.GOOS)
	fmt.Printf(`hey yoo'o  %d  `,age)
}
