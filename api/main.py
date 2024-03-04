from fastapi import FastAPI;
from fastapi.responses import JSONResponse; 
from fastapi.middleware.cors import CORSMiddleware; 
from database import session 
from models import Products, ProductsAdded

app = FastAPI() 

origins = [
    "http://localhost:*", 
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins, 
    allow_credentials = True, 
    allow_methods =["*"], 
    allow_headers = ["*"]
)

@app.get("/")
def home(): 
    return{"message:" "Root Route"}

# Start of CRUD 

# create 
@app.post("/create") 

async def added_product(products_data: ProductsAdded): 
    new_product = ProductsAdded(name=products.data.name, slug=products.data.slug, description=products.data.description, category=products.data.category)
    session.add(new_product)
    session.commit()
    return {"Product added": new_product.name} 

#read
@app.get('/products')
def get_clothes(): 
    products = session.query(Products)
    return Products.all()

@app.get('/products/{slug}')
def get_clothes(slug: str):

    products  = session.query(Products).filter(Products.slug == slug)
    return products.one() 

#update 

@app.put('/products/{id}/update')
async def update_clothes(id: int, name:str = None, slug: str = None, description: str = None, category: str = None): 
    products = session.query(Products).filter(Products.id == id).first()
    if products is not None: 
        if name: 
            products.name = name
        if slug: 
            products.slug = slug
        if description: 
            products.description = description
        if category: 
            products.category = category
        session.add(products)
        session.commit() 
        return {"Updated Products": products.name}
    else: 
        return {"message": "Product ID not found"} 
    

    