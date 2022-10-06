export const SQL_SEARCH_AUTHORS_BOOKS = {
    CARGAR:
    "SELECT ab.id_authors_books , b.title_book, (a.name_author || ' ' || a.surname_author) AS author_book \
    FROM authors_books ab \
    INNER JOIN book b \
    ON b.id_book=ab.fk_book \
    INNER JOIN author a \
    ON a.id_author=ab.fk_author \
    WHERE ab.id_authors_books = $1"
}