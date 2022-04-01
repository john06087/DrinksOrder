package models

type Drinks_order struct {
	Id          int
	User_name   string
	Drinks_name string
	Sugar       int
	Ice         int
	Price       int
	Note        string
	Order_date  int
}
