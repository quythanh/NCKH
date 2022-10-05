from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime, Boolean

from src import db

class ModelUsers(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(25), nullable=False, unique=True)
    password = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    date_joined = Column(DateTime, default=datetime.now())
    is_superuser = Column(Boolean, default=False)

    @classmethod
    def create(cls, **kw):
        user = cls(**kw)
        try:
            db.session.add(user)
            db.session.commit()
            return True
        except Exception as error:
            print(error)
            return False

    @classmethod
    def get_user(self, username, password):
        data = self.query.with_entities(self.id, self.username).filter(
            self.username == username,
            self.password == password
        ).all()
        return data
