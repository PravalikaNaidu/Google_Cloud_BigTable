'use strict';
const Bigtable = require('@google-cloud/bigtable');
const bigtable = Bigtable();
const instId = 'bigtable-instance';
const instance = bigtable.instance(instanceId);
const table = instance.table('emp_Details');

exports.set = async (req, res) => {
  try {
    const instanceId = 'bigtable-instance';
    const instance = bigtable.instance(instanceId);
    const table = instance.table('emp_Details');
    

    const timestamp = new Date();
    const rowsToInsert = table.map((id, index) => ({
      key: ''    
      data: {
         employee: {
             ['Id']: {
             value: emp_Details[index].Id,
             timestamp: new Date(),
    },
      ['Name']: {
          value: emp_Details[index].name,
           timestamp: new Date(),
          },
        },
      },
    };
    await table.insert(rowToInsert);
    console.log(`Successfully wrote row ${rowToInsert.key} Rows successfully inserted`);
  }
catch (err) {
    console.error(new Error(err.message)); 
    res.status(500).send(err.message);
  }
}
    console.log('Reading a single row ');
    const [singleRow] = await table.row('id[0]').get();
    const rowdata = JSON.stringify(singleRow.data,null,4);
    console.log("Row key :${singlerow.id}\nData "${rowData}');
    //console.log(`\tRead: ${getRow(singleRow)}`);
    
    

    console.log('Delete the table');
    await table.delete();
   
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}