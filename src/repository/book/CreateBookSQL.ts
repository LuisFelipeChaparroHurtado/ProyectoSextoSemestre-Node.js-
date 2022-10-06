export const SQL_CREATE_BOOK = {
    CREATE:
        'INSERT INTO book(title_book, date_publication, code_book,isbn_book, fk_publisher) VALUES ($1, $2, $3, $4, $5) RETURNING id_book',
    
    CONFIRM:
        'SELECT COUNT(b.id_book) AS amount \
        FROM book b \
        WHERE lower(b.title_book) = lower($1)'
}