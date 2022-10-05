from sqlalchemy import Column, Integer, String, Date, func

from src import db

class TableMixin:
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    key = Column(String(25))
    value = Column(Integer)

    @classmethod
    def get_sum(self, user_id):
        data = self.query.with_entities(self.key, func.sum(self.value)) \
            .filter(self.id == user_id).group_by(self.key).all()
        return [list(i) for i in data]


class ModelDailyTable(db.Model, TableMixin):
    __tablename__ = 'daily_table'


class ModelInvestmentTable(db.Model, TableMixin):
    __tablename__ = 'investment_table'


class ModelMandatoryTable(db.Model, TableMixin):
    __tablename__ = 'mandatory_table'
