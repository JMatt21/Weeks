const orm = require("./config/orm.js");

// orm.tableContents('parties');
// orm.tableContents('clients');
// orm.tableContentsWhere('parties', 'party_type', 'grown-up');
orm.displayClientsParty(['client_name', 'party_name'], 'clients', 'parties', 'client_id');
