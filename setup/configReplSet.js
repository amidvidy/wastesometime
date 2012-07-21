//(C) Copyright 2012, 10gen

//=========================================#
//         Configure Replica Set           #
//=========================================#

config	= {_id: "waste-some-time", members: [{_id : 0, host: "localhost:27117" },
				       {_id : 1, host: "localhost:27118" },
				       {_id : 2, host: "localhost:27119" }]};
rs.initiate(config);
while (!(rs.status().myState)){
    }
