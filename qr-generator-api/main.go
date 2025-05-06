package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/skip2/go-qrcode"
)

func main() {
	r := gin.Default()
	r.GET("/qr", func(c *gin.Context) {
		url := c.Query("url")
		if url == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Missing url"})
			return
		}

		png, err := qrcode.Encode(url, qrcode.Medium, 256)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate qr code"})
			return
		}

		c.Data(http.StatusOK, "image/png", png)
	})

	r.Run(":8080")
}
