package main

import (
	"qr-generator/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/qr", handlers.QRGeneratorURL)

	r.Run(":8080")
}
