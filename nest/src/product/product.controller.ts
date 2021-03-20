import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Post("/v1/products")
    createProduct():string {
        return  "created";
    }

    @Get("/v1/products/user/:id")
    getProductsByUser():any {
        return {products:[]};
    }

    @Patch("/v1/products/:id")
    updateProduct():string {
        return "updated"
    }

    @Delete("/v1/products/:id")
    deleteProduct(): string {
        return "delete";
    }
}
