const router = require('express').Router();
const passport = require('passport');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'You are not authorized' });
}

router.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/google', passport.authenticate('google', {
  scope: ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/calendar'],
  accessType: 'offline'
}));

router.get("/google/callback", 
  passport.authenticate("google", { 
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    req.logIn(req.user, (err) => {  // 🔥 Use req.logIn() instead of regenerate
      if (err) {
        console.error("Login error:", err);
        return res.status(500).json({ error: "Login failed" });
      }
      res.redirect("http://localhost:3000"); // Redirect after login
    });
  }
);

router.get('/protected', isLoggedIn, (req, res) => {
  res.status(200).json({ message: 'You are authorized' });
});

router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session = null; // Ensure session is cleared
    res.redirect('http://localhost:3000');
  });
});

router.get('/google/failure', (req, res) => {
  res.status(401).send('Failed to authenticate');
});

module.exports = router;
