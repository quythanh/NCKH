from flask import Blueprint

from src.models.tables import ModelDailyTable
from src.models.tables import ModelInvestmentTable
from src.models.tables import ModelMandatoryTable

tables = Blueprint('tables', __name__)

@tables.route('/<string:table>/<string:id>', methods=['GET'])
def TableData(table, id):
    data = []
    if table == 'daily':
        data = ModelDailyTable.get_sum(id)
    elif table == 'investment':
        data = ModelInvestmentTable.get_sum(id)
    elif table == 'mandatory':
        data = ModelMandatoryTable.get_sum(id)
    
    return {"data": data}