package main

import (
	"fmt"
	"math"
	"math/rand"
);

func add (z float32,x,y int)float32{
	return float32(x+y)+z;
}
func main() {
	
	 m := math.Log2(65535);
	 n := add(1.222,4,3)
	 o := add(2.1,4,5);
	 p := rand.Intn(2);
	 q := rand.Intn(2);
	 r := rand.Intn(2);
	
	fmt.Printf("%v,%v,%v,%v,%v,%v",m,n,o,p,q,r)
}