/**
 * Contains the miscellaneous route handlers.
 * @author Fatma Ahmed<https://github.com/FatmaAhmed25>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
