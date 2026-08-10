package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"rag-golang-course/app"
	"rag-golang-course/config"
	"syscall"
)

func main() {
	//we need to :
	//-set up the app
	//-set up config
	//-set up LLM client
	//-set up Read-Eval-Print-Loop (REPL)

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()
	if err := app.Run(ctx, config.Load()); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

}
