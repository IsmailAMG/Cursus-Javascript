class Book {
  constructor(pages, genre, writer) {
    this.pages = pages;
    this.genre = genre;
    this.writer = writer;
    this.haveRead = false;
  }
    
    allPages (Readstatus) {
    this.haveRead = Readstatus;
  }
}

export default Book;
