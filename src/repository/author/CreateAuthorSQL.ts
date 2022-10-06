export const SQL_CREATE_AUTHOR = {
    CREATE:
        'INSERT INTO author(name_author, surname_author, nationality_author, description_author) VALUES ($1, $2, $3, $4) RETURNING id_author',
    
    CONFIRM:
        'SELECT COUNT(a.id_author) AS amount \
        FROM author a \
        WHERE lower(a.name_author) = lower($1)'
}