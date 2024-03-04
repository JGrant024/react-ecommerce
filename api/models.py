from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import declarative_base 
from database import engine 
from pydantic import BaseModel 

Base = declarative_base() 

class Products(Base): 
    __tablename__ = "react-ecommerce"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String) 
    description = Column(String) 
    category = Column(String) 


class ProductsAdded(BaseModel): 
    name: str
    slug: str
    description: str 
    category: str


Base.metadata.create_all(engine)