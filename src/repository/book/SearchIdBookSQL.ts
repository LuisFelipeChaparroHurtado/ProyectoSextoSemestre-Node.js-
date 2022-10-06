export const SQL_SEARCH_ID_BOOK = {
    CARGAR:
        'SELECT  p.name_publisher \
        FROM book b\
        INNER JOIN publisher p\
        ON b.fk_publisher = p.id_publisher\
        WHERE b.id_book = $1'
}