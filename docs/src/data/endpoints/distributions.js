module.exports = {"name":"Distributions","basePath":"/linode/distributions","description":"Distribution endpoints provide a means of viewing <a href=\"#object-distribution\">distribution objects</a>.\n","endpoints":[{"type":"list","resource":"distributions","description":"View the collection of distributions.\n","methods":{"GET":{"description":"Returns a list of <a href=\"#object-distribution\">distributions</a>.\n","examples":{"curl":"curl https://$api_root/$version/linode/distributions\n","python":"import distributions\nTODO\n"}}},"path":"linode/distributions"},{"type":"resource","resource":"distributions","description":"Returns information about a specific distribution.\n","methods":{"GET":{"description":"Returns information about this <a href=\"#object-distribution\"> distribution</a>.\n","examples":{"curl":"curl https://$api_root/$version/linode/distributions/$distribution_id\n","python":"import distributions\nTODO\n"}}},"path":"linode/distributions/:id"}]};