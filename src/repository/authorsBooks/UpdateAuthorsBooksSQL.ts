export const SQL_UPDATE_AUTHORS_BOOKS = {
    UPDATE: 'UPDATE authors_books SET fk_books=$2, fk_author=$3 \
    WHERE id_author_books=$1',
}