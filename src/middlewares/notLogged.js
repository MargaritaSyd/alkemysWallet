function notLogged(req, res, next) {
	let user = req.session.user
	if (user) {
		return res.redirect('login');
	}
	next();
}

module.exports = notLogged;