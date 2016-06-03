import sys

from sqlalchemy import Column, ForeignKey, Integer, String, DateTime

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import relationship

from sqlalchemy import create_engine

Base = declarative_base()

#category table to same all categories
class Category(Base):
    
    __tablename__ = 'category'

    name = Column(String(80), nullable = False)
    id = Column(Integer, primary_key = True)

    @property
    def serialize(self):
        return {
            'name': self.name,
            'id': self.id,
        }

#category items table to save items for individual categories
class CategoryItem(Base):

    __tablename__ = 'cat_item'

    name = Column(String(80), nullable = False)
    id = Column(Integer, primary_key = True)
    description = Column(String(250))
    cat_id = Column(Integer, ForeignKey('category.id'))
    #created_date = Column(DateTime, default=datetime.datetime.utcnow)
    category = relationship(Category)

    @property
    def serialize(self):
        return {
            'name': self.name,
            'description': self.description,
            'id': self.id,
            'cat_id': self.cat_id,
            #'created_date': self.created_date,
        }

engine = create_engine('sqlite:///category.db')

Base.metadata.create_all(engine)
