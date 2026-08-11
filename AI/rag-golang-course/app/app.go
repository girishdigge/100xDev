package app

import (
	"context"
	"rag-golang-course/chat"
	"rag-golang-course/config"
	"rag-golang-course/llm"
)

func Run(ctx context.Context, cfg config.Config) error {
	client := llm.New(cfg)
	return chat.RunREPL(ctx, client, chat.Options{
		SystemPromptFile: cfg.SystemPromptFile,
	})
}
