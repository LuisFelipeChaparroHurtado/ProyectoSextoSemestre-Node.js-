export const SQL_SEARCH_BOOKS = {
    CARGAR:
        'SELECT b.id_book, b.title_book, b.date_publication, b.code_book, b.isbn_book, p.name_publisher \
        FROM book b\
        INNER JOIN publisher p \
        ON b.fk_publisher = p.id_publisher \
        WHERE b.id_book = $1'
}