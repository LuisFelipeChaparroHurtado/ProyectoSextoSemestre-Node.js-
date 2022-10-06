export const SQL_SEARCH_AUTHOR = {
    CARGAR:
        'SELECT a.id_author, a.name_author, a.surname_author, a.nationality_author, a.description_author\
        FROM author a \
        WHERE a.id_author = $1',
}