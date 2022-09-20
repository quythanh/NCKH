from random import randint
from time import sleep

from backend import app

@app.route('/api/test/<string:page>/<string:table>/', methods=['GET'])
def home_api(page, table):
    pages = {
        "home": {
            "daily": {
                "data": [
                    ['Ăn sáng', '60000'],
                    ['Ăn trưa', '75000'],
                    ['Ăn tối', '15000'],
                ]
            },
            "investment": {
                "data": [['Mua xe', '55000000']]
            },
            "obligatory": {
                "data": []
            }
        },
        "follow": {
            "daily": {
                "data": [
                    ['Ăn sáng', '25000', '', '15000', '', '', '20000', ''],
                    ['Ăn trưa', '', '', '30000', '', '15000', '30000', ''],
                    ['Ăn tối', '', '', '', '', '', '15000', ''],
                ]
            }
        }
    }

    sleep(1/randint(2, 5))
    
    if (page in list(pages)):
        return pages[page][table]
    
    return {
        "data": []
    }

