export const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours(); // 24-hour format
  
    // Allow access only during working hours (Monday-Friday, 9 AM - 5 PM)
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send('<h1>Sorry, the website is only accessible during working hours (Mon-Fri, 9 AM - 5 PM).</h1>');
    }
  };
  