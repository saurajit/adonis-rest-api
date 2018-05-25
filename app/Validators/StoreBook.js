'use strict'

class StoreBook {

  //Validate all fields
  get validateAll() {
    return true;
  }

  //Validation rules
  get rules() {
    return {
      title: 'required|accepted|unique:books,title',
      isbn: 'required|accepted|unique:books,isbn',
      publisher_name: 'required|accepted',
      author_name: 'required|accepted'
    };
  }
  
  //Error message setter for each poroperty
  get messages() {
    return {
      'title.required': 'Book Title is required',
      'title.accepted': 'Book Title is required',
      'title.unique': 'Book Title already exists',
      'isbn.required': 'ISBN is required',
      'isbn.accepted': 'ISBN is required',
      'isbn.unique': 'ISBN already exists',
      'publisher_name.required': 'Publisher name is required',
      'publisher_name.accepted': 'Publisher name is required',
      'author_name.required': 'Author name is required',
      'author_name.accepted': 'Author name is required'
    };
  }
  
  //Validation failure handler
  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      errors: errorMessages,
      request: this.ctx.request.all()
    });
  }

}

module.exports = StoreBook;
