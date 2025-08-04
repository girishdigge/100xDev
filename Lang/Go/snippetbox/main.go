package main

import (
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	w.Write([]byte("Hello form snippet gist"))
}

func snippetView(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("snippet view"))
}
func snippetCreate(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Header()["Date"] = nil
	w.Write([]byte(`{"name":"Girish"}`))
}
func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", home)
	mux.HandleFunc("/snippet/view/", snippetView)
	mux.HandleFunc("/snippet/create", snippetCreate)
	log.Printf("Server is listening on port 8080........")

	err := (http.ListenAndServe(":8080", mux))
	log.Fatal(err)
}
