export const SQL_UPDATE_LOANS = {
    UPDATE: 'UPDATE loans SET start_date_loan=$2, description=$3, fk_customer=$4 \
    WHERE id_loan=$1',
}
